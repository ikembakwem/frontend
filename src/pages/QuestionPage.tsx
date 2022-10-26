/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Page } from '../components/Page';
import { useParams } from 'react-router-dom';
import { getQuestion, QuestionData } from '../QuestionsData';
import React, { useEffect, useState } from 'react';
import {
  FieldContainer,
  FieldError,
  FieldLabel,
  Fieldset,
  FieldTextArea,
  FormButtonContainer,
  gray3,
  gray6,
  PrimaryButton,
} from '../Styles';
import { AnswerList } from '../components/AnswerList';
import { useForm } from 'react-hook-form';

type FormData = {
  content: string;
};

export const QuestionPage = () => {
  const [question, setQuestion] = useState<QuestionData | null>(null);

  const { questionId } = useParams();

  useEffect(() => {
    const doGetQuestions = async (questionId: number) => {
      const foundQuestion = await getQuestion(questionId);
      setQuestion(foundQuestion);
    };

    if (questionId) {
      doGetQuestions(Number(questionId));
    }
  }, [questionId]);

  const {
    register,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onBlur' });

  return (
    <Page>
      <div
        css={css`
          background-color: white;
          padding: 15px 20px 20px;
          border-radius: 4px;
          border: 1px solid ${gray6};
          box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
        `}
      >
        <div
          css={css`
            font-size: 19px;
            font-weight: bold;
            margin: 10px 0px 5px;
          `}
        >
          {question === null ? '' : question.title}
        </div>
        {question !== null && (
          <React.Fragment>
            <p
              css={css`
                margin-top: 0px;
                background-color: white;
              `}
            >
              {question.content}
            </p>
            <div
              css={css`
                font-size: 12px;
                font-style: italic;
                color: ${gray3};
              `}
            >
              {`Asked by ${
                question.userName
              } on ${question.created.toLocaleDateString()} ${question.created.toLocaleTimeString()}`}
            </div>
            <AnswerList data={question.answers} />
            <form
              css={css`
                margin-top: 20px;
              `}
            >
              <Fieldset>
                <FieldContainer>
                  <FieldLabel htmlFor="content">Your Answer</FieldLabel>
                  <FieldTextArea
                    id="content"
                    {...register('content', { required: true, minLength: 50 })}
                  />
                  {errors.content && errors.content.type === 'minLength' && (
                    <FieldError>
                      Answer must be at least 50 characters
                    </FieldError>
                  )}
                </FieldContainer>
                <FormButtonContainer>
                  <PrimaryButton type="submit">
                    Submit Your Answer
                  </PrimaryButton>
                </FormButtonContainer>
              </Fieldset>
            </form>
          </React.Fragment>
        )}
      </div>
    </Page>
  );
};

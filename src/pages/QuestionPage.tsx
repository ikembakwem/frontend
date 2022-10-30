/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// Dependencies
import React from 'react';
import { useForm } from 'react-hook-form';

// Types
import { FormData } from '../QuestionsData';

// Components and Styles
import { Page } from '../components/Page';
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
  SubmissionSuccess,
} from '../Styles';
import { AnswerList } from '../components/AnswerList';
import useQuestion from '../hooks/use-question';

export const QuestionPage = () => {
  // Destructure useful functions, objects and properties from useForm
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<FormData>({ mode: 'onBlur' });

  const { question, submitAnswer, isAnswerSubmitted } = useQuestion();

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
              onSubmit={handleSubmit(submitAnswer)}
              css={css`
                margin-top: 20px;
              `}
            >
              <Fieldset disabled={isSubmitting || isAnswerSubmitted}>
                <FieldContainer>
                  <FieldLabel htmlFor="content">Your Answer</FieldLabel>
                  <FieldTextArea
                    id="content"
                    defaultValue=""
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
                {isAnswerSubmitted && (
                  <SubmissionSuccess>
                    Your answer has been posted successfully!
                  </SubmissionSuccess>
                )}
              </Fieldset>
            </form>
          </React.Fragment>
        )}
      </div>
    </Page>
  );
};

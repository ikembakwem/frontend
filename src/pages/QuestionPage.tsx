/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// Dependencies
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

// Interfaces and CRUD functions
import { getQuestion, postAnswer, QuestionData } from '../QuestionsData';

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

// Type to hold form data
type FormData = {
  content: string;
};

export const QuestionPage = () => {
  // Manage a question state
  const [question, setQuestion] = useState<QuestionData | null>(null);

  // Manage question submission state
  const [successfullySubmitted, setSuccessFullySubmitted] = useState(false);

  // Destructure question id
  const { questionId } = useParams();

  useEffect(() => {
    const doGetQuestions = async (questionId: number) => {
      // Call CRUD function to find question with id
      const foundQuestion = await getQuestion(questionId);

      // Update question to question with corresponding id
      setQuestion(foundQuestion);
    };

    // Get question id and commence search
    if (questionId) {
      doGetQuestions(Number(questionId));
    }
  }, [questionId]);

  // Destructure useful functions, objects and properties from useForm
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<FormData>({ mode: 'onBlur' });

  // Handle answer submission
  const submitForm = async (data: FormData) => {
    // Call CRUD funnction to post answer
    const result = await postAnswer({
      questionId: question!.questionId,
      content: data.content,
      userName: 'Guru',
      created: new Date(),
    });

    // Update answer submission state
    setSuccessFullySubmitted(result ? true : false);
  };
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
              onSubmit={handleSubmit(submitForm)}
              css={css`
                margin-top: 20px;
              `}
            >
              <Fieldset disabled={isSubmitting || successfullySubmitted}>
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
                {successfullySubmitted && (
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

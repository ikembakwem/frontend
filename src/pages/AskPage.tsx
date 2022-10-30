// Dependencies
import { useForm } from 'react-hook-form';

// Types
import { FormData } from '../QuestionsData';

// Components and Styles
import { Page } from '../components/Page';
import {
  FieldContainer,
  FieldError,
  FieldInput,
  FieldLabel,
  Fieldset,
  FieldTextArea,
  FormButtonContainer,
  PrimaryButton,
  SubmissionSuccess,
} from '../Styles';

// Hooks
import useAskQuestion from '../hooks/use-ask-question';

export const AskPage = () => {
  // Destructure useful functions and properties from useForm
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<FormData>({ mode: 'onBlur' });

  const { isQuestionSubmitted, submitQuestion } = useAskQuestion();

  return (
    <Page title="Ask a question">
      <form onSubmit={handleSubmit(submitQuestion)}>
        <Fieldset disabled={isSubmitting || isQuestionSubmitted}>
          <FieldContainer>
            <FieldLabel htmlFor="title">Title</FieldLabel>
            <FieldInput
              id="title"
              type="text"
              defaultValue=""
              {...register('title', { required: true, minLength: 10 })}
            />
            {errors.title && errors.title.type === 'required' && (
              <FieldError>You must enter the question title</FieldError>
            )}
            {errors.title && errors.title.type === 'minLength' && (
              <FieldError>Title must be at least 10 characters</FieldError>
            )}
          </FieldContainer>
          <FieldContainer>
            <FieldLabel htmlFor="content">Content</FieldLabel>
            <FieldTextArea
              id="content"
              defaultValue=""
              {...register('content', { required: true, minLength: 50 })}
            />
            {errors.content && errors.content.type === 'required' && (
              <FieldError>You must enter a question</FieldError>
            )}
            {errors.content && errors.content.type === 'minLength' && (
              <FieldError>Question must be at least 50 characters</FieldError>
            )}
          </FieldContainer>
          <FormButtonContainer>
            <PrimaryButton type="submit">Submit Your Question</PrimaryButton>
          </FormButtonContainer>
          {isQuestionSubmitted && (
            <SubmissionSuccess>
              Your question was successfully submitted!
            </SubmissionSuccess>
          )}
        </Fieldset>
      </form>
    </Page>
  );
};

export default AskPage;

import { useState } from 'react';
import { FormData, postQuestion } from '../QuestionsData';

export default function useAskQuestion() {
  // Manage form submission state
  const [isQuestionSubmitted, setIsQuestionSubmitted] = useState(false);

  // Form submission handler
  const submitQuestion = async (data: FormData) => {
    // Call CRUD post method and pass in form field values
    const result = await postQuestion({
      title: data.title,
      content: data.content,
      userName: 'Rastaman',
      created: new Date(),
    });

    // Update form submission state
    setIsQuestionSubmitted(result ? true : false);
  };

  return {
    isQuestionSubmitted,
    submitQuestion,
  };
}

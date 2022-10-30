import { useEffect, useState } from 'react';
import { getUnansweredQuestions, QuestionData } from '../QuestionsData';

export default function useQuestions() {
  // Manage questions state
  const [questions, setQuestions] = useState<QuestionData[]>([]);

  // Manage Question loading state
  const [questionsLoading, setQuestionsLoading] = useState(true);

  useEffect(() => {
    const doGetUnansweredQuestions = async () => {
      // Call async CRUD function
      const unansweredQuestions = await getUnansweredQuestions();

      // Update questions data
      setQuestions(unansweredQuestions);

      // Update question loading state
      setQuestionsLoading(false);
    };

    // Call the API
    doGetUnansweredQuestions();
  }, []);
  return {
    questionsLoading,
    questions,
  };
}

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  FormData,
  getQuestion,
  postAnswer,
  QuestionData,
} from '../QuestionsData';

export default function useQuestion() {
  // Manage a question state
  const [question, setQuestion] = useState<QuestionData | null>(null);

  // Manage answer submission state
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);

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

  // Handle answer submission
  const submitAnswer = async (data: FormData) => {
    // Call CRUD funnction to post answer
    const result = await postAnswer({
      questionId: question!.questionId,
      content: data.content,
      userName: 'Guru',
      created: new Date(),
    });

    // Update answer submission state
    setIsAnswerSubmitted(result ? true : false);
  };

  return {
    question,
    isAnswerSubmitted,
    submitAnswer,
  };
}

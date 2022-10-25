import { Page } from '../components/Page';

import { useParams } from 'react-router-dom';

export const QuestionPage = () => {
  const { questionId } = useParams();

  return <Page>Question Page {questionId}</Page>;
};

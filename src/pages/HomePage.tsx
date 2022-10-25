/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// Dependencies
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Data
import { getUnansweredQuestions, QuestionData } from '../QuestionsData';

// Components
import { QuestionList } from '../components/QuestionList';
import { Page } from '../components/Page';
import { PageTitle } from '../components/PageTitle';
import { PrimaryButton } from '../Styles';

export const HomePage = () => {
  const [questions, setQuestions] = useState<QuestionData[]>([]);
  const [questionsLoading, setQuestionsLoading] = useState(true);

  useEffect(() => {
    const doGetUnansweredQuestions = async () => {
      const unansweredQuestions = await getUnansweredQuestions();
      setQuestions(unansweredQuestions);
      setQuestionsLoading(false);
    };
    doGetUnansweredQuestions();
  }, []);

  const navigate = useNavigate();
  const handleAskQuestionClick = () => {
    navigate('ask');
  };

  return (
    <Page>
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <PageTitle>Unanswered Questions</PageTitle>
        <PrimaryButton onClick={handleAskQuestionClick}>
          Ask a question
        </PrimaryButton>
      </div>
      {questionsLoading ? (
        <div>Loading...</div>
      ) : (
        <QuestionList data={questions || []} />
      )}
    </Page>
  );
};

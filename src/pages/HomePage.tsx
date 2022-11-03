/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// Dependencies
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Components and Styles
import { QuestionList } from '../components/QuestionList';
import { Page } from '../components/Page';
import { PageTitle } from '../components/PageTitle';
import { PrimaryButton } from '../Styles';
import useQuestions from '../hooks/use-questions';

export const HomePage = () => {
  const { questions, questionsLoading } = useQuestions();
  // Assign useNavigate function to navigate variable
  const navigate = useNavigate();

  // Navigate to ask page
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

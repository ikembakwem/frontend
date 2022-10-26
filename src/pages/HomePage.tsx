/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// Dependencies
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// CRUD functions and interface
import { getUnansweredQuestions, QuestionData } from '../QuestionsData';

// Components and Styles
import { QuestionList } from '../components/QuestionList';
import { Page } from '../components/Page';
import { PageTitle } from '../components/PageTitle';
import { PrimaryButton } from '../Styles';

export const HomePage = () => {
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

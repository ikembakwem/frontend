/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// Dependencies
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

// Interfaces
import { QuestionData, searchQuestions } from '../QuestionsData';

// Components
import { Page } from '../components/Page';
import { QuestionList } from '../components/QuestionList';

export const SearchPage = () => {
  // Destructure search parameter object
  const [searchParams] = useSearchParams();

  // Manage questions state
  const [questions, setQuestions] = useState<QuestionData[]>([]);

  //Get criteria query
  const search = searchParams.get('criteria') || '';

  useEffect(() => {
    const doSearch = async (criteria: string) => {
      // Call CRUD function
      const foundResults = await searchQuestions(criteria);

      // Update questions data
      setQuestions(foundResults);
    };

    doSearch(search);
  }, [search]);

  return (
    <Page title="Search Results">
      {search && (
        <p
          css={css`
            font-size: 16px;
            font-style: italic;
            margin-top: 0px;
          `}
        >
          for "{search}"
        </p>
      )}
      <QuestionList data={questions} />
    </Page>
  );
};

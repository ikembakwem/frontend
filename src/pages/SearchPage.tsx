/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// Components
import { Page } from '../components/Page';
import { QuestionList } from '../components/QuestionList';
import useSearch from '../hooks/use-search';

export const SearchPage = () => {
  const { search, searchResults } = useSearch();
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
      <QuestionList data={searchResults} />
    </Page>
  );
};

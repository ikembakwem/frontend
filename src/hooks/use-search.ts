import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { QuestionData, searchQuestions } from '../QuestionsData';

export default function useSearch() {
  // Destructure search parameter object
  const [searchParams] = useSearchParams();

  // Manage searchResults state
  const [searchResults, setSearchResults] = useState<QuestionData[]>([]);

  //Get criteria query
  const search = searchParams.get('criteria') || '';

  useEffect(() => {
    const doSearch = async (criteria: string) => {
      // Call CRUD function
      const foundResults = await searchQuestions(criteria);

      // Update searchResults data
      setSearchResults(foundResults);
    };

    doSearch(search);
  }, [search]);

  return {
    search,
    searchResults,
  };
}

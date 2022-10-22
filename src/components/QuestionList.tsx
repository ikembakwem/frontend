// Dependencies
import React from 'react';

// Components
import { Question } from './Question';

// Props
import { QuestionData } from '../QuestionsData';

// Declaring props for our component
interface Props {
  data: QuestionData[];
  renderItem?: (item: QuestionData) => JSX.Element;
}

export const QuestionList = ({ data, renderItem }: Props) => (
  <ul>
    {data.map((question) => (
      <li key={question.questionId}>
        {renderItem ? renderItem(question) : <Question data={question} />}
      </li>
    ))}
  </ul>
);

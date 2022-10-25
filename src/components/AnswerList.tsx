/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { AnswerData } from '../QuestionsData';
import { gray5 } from '../Styles';
import { Answer } from './Answer';

interface Props {
  data: AnswerData[];
}

export const AnswerList = ({ data }: Props) => {
  return (
    <ul
      css={css`
        list-style: none;
        padding: 0;
        margin: 10px 0 0;
      `}
    >
      {data.map((answer) => (
        <li
          key={answer.answerId}
          css={css`
            border: 1px solid ${gray5};
          `}
        >
          <Answer data={answer} />
        </li>
      ))}
    </ul>
  );
};

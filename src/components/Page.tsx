/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

// Components
import { PageTitle } from './PageTitle';

// Props for component
interface Props {
  title?: string;
  children: React.ReactNode;
}

export const Page = ({ title, children }: Props) => (
  <div
    css={css`
      margin: 50px auto 20px;
      padding: 30px 20px;
      max-width: 600px;
    `}
  >
    {title && <PageTitle>{title}</PageTitle>}
    {children}
  </div>
);

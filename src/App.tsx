// Configuration for babel to transform css function into Javascript
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// Styles
import { fontFamily, fontSize, gray2 } from './Styles';

// Dependencies
import React from 'react';

// Components
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';

function App() {
  return (
    <div
      css={css`
        font-family: ${fontFamily};
        font-size: ${fontSize};
        color: ${gray2};
      `}
    >
      <Header />
      <HomePage />
    </div>
  );
}

export default App;

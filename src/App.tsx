// Configuration for babel to transform css function into Javascript
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// Styles
import { fontFamily, fontSize, gray2 } from './Styles';

// Dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import { AskPage } from './pages/AskPage';
import { SignInPage } from './pages/SignInPage';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { SearchPage } from './pages/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <div
        css={css`
          font-family: ${fontFamily};
          font-size: ${fontSize};
          color: ${gray2};
        `}
      >
        <Header />
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="ask" element={<AskPage />} />
          <Route path="signin" element={<SignInPage />} />
          <Route path="search" element={<SearchPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// Configuration for babel to transform css function into Javascript
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// Styles
import { fontFamily, fontSize, gray2 } from './Styles';

// Dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components and Pages
import { AskPage } from './pages/AskPage';
import { SignInPage } from './pages/SignInPage';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { SearchPage } from './pages/SearchPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { QuestionPage } from './pages/QuestionPage';

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
          <Route path="*" element={<NotFoundPage />} />
          <Route path="questions/:questionId" element={<QuestionPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

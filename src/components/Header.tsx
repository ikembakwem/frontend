// Configuring emotion styles
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// Dependencies
import React, { ChangeEvent } from 'react';

// Components
import { FaUserAlt as UserIcon } from 'react-icons/fa';
import { gray5 } from '../Styles';

export const Header = () => {
  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
  };

  return (
    <div
      css={css`
        position: fixed;
        box-sizing: border-box;
        top: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        background-color: #fff;
        border-bottom: 1px solid ${gray5};
        box-shadow: 0 3px 7px 0 rgba(110, 112, 114, 0.21);
      `}
    >
      <a href="./">Q & A</a>
      <input
        type="text"
        placeholder="Enter search..."
        onChange={handleSearchInputChange}
      />
      <a href="./signin">
        <UserIcon />
        <span>Sign In</span>
      </a>
    </div>
  );
};

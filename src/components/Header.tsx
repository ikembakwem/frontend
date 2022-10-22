// Dependencies
import React from 'react';

// Components
import { FaUserAlt as UserIcon } from 'react-icons/fa';

export const Header = () => {
  return (
    <div>
      <a href="./">Q & A</a>
      <input type="text" placeholder="Enter search..." />
      <a href="./signin">
        <UserIcon />
        <span>Sign In</span>
      </a>
    </div>
  );
};

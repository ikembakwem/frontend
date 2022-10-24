// Dependencies
import React, { ChangeEvent } from 'react';
import styles from './Header.module.css';

// Components
import { FaUserAlt as UserIcon } from 'react-icons/fa';

export const Header = () => {
  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
  };

  return (
    <div className={styles.container}>
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

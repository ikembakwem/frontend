// Dependencies
import React from 'react';

// Styles
import styles from './App.module.css';

// Components
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <HomePage />
    </div>
  );
}

export default App;

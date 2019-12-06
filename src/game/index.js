import React from 'react';
import { useGameState } from './state';
import Categories from './categories';
import styles from './styles.module.scss';

const Game = () => {
  const { activeText, activeCategory, categories, isGameFinished, onCategoryChange, onNextText } = useGameState();

  return (
    <main className={styles.game}>
      <Categories
        className={styles.categories}
        active={activeCategory}
        categories={categories}
        onChange={onCategoryChange}
      />

      <div className={styles.textContainer} onClick={onNextText}>
        {!activeCategory && (
          <h2>Select category to start playing</h2>
        )}

        {activeText && (
          <h2>{activeText}</h2>
        )}

        {activeCategory && isGameFinished && (
          <h2 className={styles.gameEnded}>
            <div>You have answered all the questions.</div>
            <div>Select another category to continue.</div>
          </h2>
        )}
      </div>
    </main>
  );
};

export default Game;

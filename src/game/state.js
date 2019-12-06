import { useState, useCallback } from 'react';
import { shuffle } from 'lodash-es';
import categoriesDictionary from '../texts';

const categories = Object.keys(categoriesDictionary);

export const useGameState = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [texts, setTexts] = useState([]);
  const [activeTextIndex, setActiveTextIndex] = useState(0);

  const onCategoryChange = useCallback((category) => {
    setActiveCategory(category);
    setTexts(shuffle(categoriesDictionary[category]));
    setActiveTextIndex(0);
  }, []);

  const onNextText = useCallback(() => {
    setActiveTextIndex(index => index + 1);
  }, []);

  return {
    activeText: texts[activeTextIndex] || null,
    isGameFinished: activeTextIndex >= texts.length,
    categories,
    activeCategory,
    onCategoryChange,
    onNextText
  };
};

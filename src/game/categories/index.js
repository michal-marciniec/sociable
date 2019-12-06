import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import LinkButton from '../../components/link-button';

const Categories = ({ className, active, categories, onChange }) => (
  <nav className={classNames(className, styles.categories)}>
    {categories.map((category) => (
      <LinkButton
        className={classNames(styles.category, {
          [styles.active]: category === active
        })}
        key={category}
        onClick={() => onChange(category)}
      >
        {category}
      </LinkButton>
    ))}
  </nav>
);

export default Categories;

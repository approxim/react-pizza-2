import React from 'react';
import styles from './Control.module.scss';
import Categories from '../Categories/Categories';
import Sort from '../Sort/Sort';

const Control = () => {
  return (
    <div className={styles.section}>
      <Categories />
      <Sort />
    </div>
  );
};

export default Control;

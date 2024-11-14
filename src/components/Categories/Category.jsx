import React from 'react';
import styles from './Categories.module.scss';
import classnames from '../../utils/classnames';

const Category = ({ name, id, activeCategory, setActiveCategory }) => {
  console.log(id);
  return (
    <li className={styles.item}>
      <button
        className={classnames([styles.button, [styles.active, activeCategory === id]])}
        type="button"
        onClick={() => setActiveCategory(id)}>
        {name}
      </button>
    </li>
  );
};

export default Category;

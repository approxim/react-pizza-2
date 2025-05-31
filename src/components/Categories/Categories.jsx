import React, { useState } from 'react';
import styles from './Categories.module.scss';
import classnames from '../../utils/classnames';

const Categories = ({ value, onChangeCategory }) => {
  // console.log(value);
  const pizzaCategories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <ul className={styles.list}>
      {pizzaCategories.map((categoryName, i) => {
        return (
          <li className={styles.item} key={i}>
            <button
              className={classnames([styles.button, [styles.active, activeCategory === i]])}
              type="button"
              onClick={() => {
                setActiveCategory(i);
                onChangeCategory(i);
              }}>
              {categoryName}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;

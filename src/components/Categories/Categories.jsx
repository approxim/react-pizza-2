import React, { useState } from 'react';
import styles from './Categories.module.scss';
// import classnames from '../../utils/classnames';
import Category from './Category';

const Categories = () => {
  const pizzaCategories = [
    { id: 1, name: 'Все' },
    { id: 2, name: 'Мясные' },
    { id: 3, name: 'Вегетарианские' },
    { id: 4, name: 'Гриль' },
    { id: 5, name: 'Острые' },
    { id: 6, name: 'Закрытые' },
  ];

  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <ul className={styles.list}>
      {pizzaCategories.map(({ id, name }) => {
        // console.log(id);
        return (
          <Category
            key={id}
            id={id}
            name={name}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        );
      })}
    </ul>
  );
};

export default Categories;

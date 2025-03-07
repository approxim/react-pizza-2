import React, { useState, useEffect } from 'react';
import styles from './MainPage.module.scss';
import Template from '../../templates/Template';
import Container from '../../templates/Container';
import PizzaBlock from '../../components/PizzaBlock/PizzaBlock';
import Skeleton from '../../components/PizzaBlock/Skeleton';
import Categories from '../../components/Categories/Categories';
import Sort from '../../components/Sort/Sort';

const MainPage = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://67491bca5801f51535930042.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, []);

  return (
    <Template>
      <Container>
        <h1 className="visually-hidden">Лучшая пицца во вселенной</h1>
        <div className={styles.control}>
          <Categories value={categoryId} onClickCategory={(i) => setCategoryId(i)} />
          <Sort sortType={sortType} setSortType={setSortType} />
        </div>

        <section className={styles.section}>
          <h2 className={styles.title}>Все пиццы</h2>

          <ul className={styles.list}>
            {isLoading
              ? [...Array(6)].map((_, index) => (
                  <li key={index}>
                    <Skeleton />
                  </li>
                ))
              : items.map((item) => <PizzaBlock key={item.id} {...item} />)}
          </ul>
        </section>
      </Container>
    </Template>
  );
};

export default MainPage;

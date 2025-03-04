import React, { useState, useEffect } from 'react';
import styles from './MainPage.module.scss';
import Template from '../../templates/Template';
import Container from '../../templates/Container';
import Control from '../../components/Control/Control';
import PizzaBlock from '../../components/PizzaBlock/PizzaBlock';
import Skeleton from '../../components/PizzaBlock/Skeleton';

const MainPage = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://67491bca5801f51535930042.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, []);

  return (
    <Template>
      <Container>
        <h1 className="visually-hidden">Лучшая пицца во вселенной</h1>
        <Control />

        <section className={styles.section}>
          <h2 className={styles.title}>Все пиццы</h2>

          <ul className={styles.list}>
            {isLoading
              ? [...Array(6)].map((_, index) => <Skeleton key={index} />)
              : items.map((item) => <PizzaBlock key={item.id} {...item} />)}
            {/* {items.map((item) => (isLoading ? <Skeleton key={item.id} /> : <PizzaBlock key={item.id} {...item} />))} */}
          </ul>
        </section>
      </Container>
    </Template>
  );
};

export default MainPage;

import React, { useEffect, useState } from 'react';
import styles from './Cart.module.scss';
import Template from '../../templates/Template';
import Container from '../../templates/Container';
import { ReactComponent as Clean } from '../../assets/icons/clean.svg';
import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg';
import CartBlock from './CartBlock';
import { Link } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../assets/icons/Arrow.svg'; //Arrow from '../../assets/icons/Arrow.svg';

const Cart = () => {
  const [items, setItems] = useState([]);
  const typeNames = ['тонкое', 'традиционное'];

  useEffect(() => {
    fetch('https://67491bca5801f51535930042.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
      });
    window.scrollTo(0, 0);
  }, []);

  return (
    <Template>
      <Container>
        <div className={styles.cart_title}>
          <h1 className={styles.title}>
            <CartIcon />
            <span>Корзина</span>
          </h1>
          <button className={styles.clean}>
            <Clean />
            <span>Очистить корзину</span>
          </button>
        </div>

        <section className={styles.pizzas}>
          <h2 className="visually-hidden">Список пицц</h2>

          <ul className={styles.list}>
            {items.map((item) => {
              return (
                <CartBlock
                  key={item.id}
                  imageUrl={item.imageUrl}
                  title={item.title}
                  sizes={item.sizes}
                  types={typeNames[item.types]}
                  price={item.price}
                />
              );
            })}
          </ul>
        </section>

        <section className={styles.result}>
          <h2 className="visually-hidden">Итог</h2>
          <p className={styles.total}>
            Всего пицц: <span>{5} шт.</span>
          </p>
          <p className={styles.summ}>
            Сумма заказа: <span>{6000} ₽</span>
          </p>
          <Link to="/" className={styles.back}>
            <Arrow />
            Вернуться назад
          </Link>
          <button className={styles.order}>Оформить заказ</button>
        </section>
      </Container>
    </Template>
  );
};

export default Cart;

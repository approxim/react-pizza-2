import React from 'react';
// import { Twirl as Hamburger } from 'hamburger-react';
// import Container from '../../templates/Container';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as Cart } from '../../assets/icons/cart_1.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logoWrapper}>
          <Link to="/" className={styles.logo}>
            <Logo />
            <span className={styles.name}>React Pizza</span>
            <span className={styles.slogan}>самая вкусная пицца во вселенной</span>
          </Link>
        </div>
        <nav>
          <Link to="/cart" className={styles.cart}>
            <span className={styles.price}>500 </span>
            <span className={styles.rubles}>₽</span>

            <Cart />

            <span className={styles.number}>3</span>
          </Link>
        </nav>{' '}
      </div>
    </header>
  );
};

export default Header;

import React, { useEffect, useState } from 'react';
import styles from './CartBlock.module.scss';
import { ReactComponent as Cross } from '../../assets/icons/icon_plus.svg';
import classnames from '../../utils/classnames';
import useWindowSize from '../../hooks/useWindowSize';

const CartBlock = ({ imageUrl, title, sizes, types, price }) => {
  const [count, setCount] = useState(1);
  const [width] = useWindowSize();

  return (
    <li className={styles.cartBlock}>
      <div className={styles.image}>
        <img src={imageUrl} alt={title} />
      </div>

      <div className={styles.mainInfo}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.types}>{types}</span>
        <span className={styles.size}>{sizes[0]}</span>
      </div>

      <div className={styles.controls}>
        <button
          className={classnames([styles.control, [styles.disabled, count === 1]])}
          onClick={() => setCount(count - 1)}>
          -
        </button>

        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>

      <div className={styles.price}>{price + ' ₽'}</div>

      <button className={styles.clean}>
        <Cross />
      </button>
    </li>
  );
};

export default CartBlock;

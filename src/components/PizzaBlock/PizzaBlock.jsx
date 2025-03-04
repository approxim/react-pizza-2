import React, { useState } from 'react';
import styles from './PizzaBlock.module.scss';
import { ReactComponent as Icon } from '../../assets/icons/icon_plus.svg';
import classnames from '../../utils/classnames';

const PizzaBlock = ({ imageUrl, title, sizes, types, price, category, rating }) => {
  const [choiseType, setChoiseType] = useState(types[0]);
  const [choiseSize, setChoiseSize] = useState(sizes[0]);

  const typeNames = ['тонкое', 'традиционное'];

  return (
    <li className={styles.pizza}>
      <div className={styles.image}>
        <img src={imageUrl} alt={title} width={260} height={260} />
      </div>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>
        Цыпленок, ветчина, пикантная пепперони, острая чоризо, моцарелла, фирменный томатный соус
      </p>
      <div className={styles.wrapper}>
        <ul className={styles.types}>
          {types.map((type, index) => (
            <li
              className={classnames([styles.typesItem, [styles.active, choiseType === type]])}
              key={index}
              onClick={() => setChoiseType(type)}>
              {typeNames[type]}
            </li>
          ))}
        </ul>
        <ul className={styles.size}>
          {sizes.map((item, index) => {
            return (
              <li
                className={classnames([styles.sizeItem, [styles.active, choiseSize === item]])}
                key={index}
                onClick={() => setChoiseSize(item)}>
                {item} см.
              </li>
            );
          })}
        </ul>
      </div>

      <div className={styles.addToCart}>
        <p className={styles.price}>от {price} ₽</p>
        <button className={styles.cart}>
          <Icon />
          <span>Добавить</span>
          <i>0</i>
        </button>
      </div>
    </li>
  );
};

export default PizzaBlock;

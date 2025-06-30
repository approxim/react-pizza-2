import React, { useState } from 'react';
import styles from './Sort.module.scss';
import { ReactComponent as SortArrow } from '../../assets/icons/Arrow_triangle.svg';
import 'react-dropdown/style.css';
import classnames from '../../utils/classnames';

const Sort = ({ value, onChangeSort }) => {
  // console.log(onChangeSort);
  const list = [
    { name: 'популярности', sortProperety: 'rating' },
    { name: 'цене', sortProperety: 'price' },
    { name: 'алфавиту', sortProperety: 'title' },
  ];
  const [open, setOpen] = useState(false);
  // c
  // const sortType = list[value].name;

  const onClickListItem = (i) => {
    onChangeSort(i);
    setOpen(false);
  };

  return (
    <div className={styles.sort}>
      <div className={classnames([styles.label, [styles.open, open]])} onClick={() => setOpen(!open)}>
        <SortArrow />
        <b>Сортировка по : </b>
        <span>{value.name}</span>
      </div>

      {open && (
        <ul className={styles.list}>
          {list.map((obj, index) => {
            // console.log(obj);
            return (
              <li
                className={classnames([styles.item, [styles.active, value === obj.sortProperety]])}
                key={index}
                onClick={() => {
                  onClickListItem(obj);
                  setOpen(false);
                }}>
                {obj.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Sort;

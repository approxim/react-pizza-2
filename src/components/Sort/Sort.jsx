import React, { useState } from 'react';
import styles from './Sort.module.scss';
import { ReactComponent as SortArrow } from '../../assets/icons/Arrow_triangle.svg';
import 'react-dropdown/style.css';
import classnames from '../../utils/classnames';

const Sort = ({ value, onChangeSort }) => {
  const list = ['популярности', 'цене', 'алфавиту'];
  const [open, setOpen] = useState(false);
  const sortType = list[value];

  const onClickListItem = (i) => {
    onChangeSort(i);
    setOpen(false);
  };

  return (
    <div className={styles.sort}>
      <div className={classnames([styles.label, [styles.open, open]])} onClick={() => setOpen(!open)}>
        <SortArrow />
        <b>Сортировка по : </b>
        <span>{value}</span>
      </div>

      {open && (
        <ul className={styles.list}>
          {list.map((option, index) => (
            <li
              className={classnames([styles.item, [styles.active, value === option]])}
              key={index}
              onClick={() => {
                onClickListItem(index);
                setOpen(false);
              }}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sort;

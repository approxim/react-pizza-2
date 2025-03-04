import React, { useState } from 'react';
import styles from './Sort.module.scss';
import { ReactComponent as SortArrow } from '../../assets/icons/Arrow_triangle.svg';
import 'react-dropdown/style.css';
import classnames from '../../utils/classnames';

const Sort = () => {
  const options = ['популярности', 'цене', 'алфавиту'];
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className={styles.sort}>
      <div className={classnames([styles.label, [styles.open, open]])} onClick={() => setOpen(!open)}>
        <SortArrow />
        <b>Сортировка по: </b>
        <span>{selectedOption}</span>
      </div>

      {open && (
        <ul className={styles.list}>
          {options.map((option, index) => (
            <li
              className={classnames([styles.item, [styles.active, selectedOption === option]])}
              key={index}
              onClick={() => {
                setSelectedOption(option);
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

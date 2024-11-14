import React from 'react'
import styles from './Container.module.scss'
import useWindowSize from '../hooks/useWindowSize'
import classnames from '../utils/classnames'

const Container = ({ children }) => {
  const [ width ] = useWindowSize()

  return (
    <div className={classnames([
      styles.container,
      [styles.container_tablet, width > 768 && width <= 1365],
      [styles.container_desktop, width > 1365]])}>{children}</div>
  )
}

export default Container;

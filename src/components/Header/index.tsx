import React from 'react'
import styles from './styles.module.scss'

function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h1>Farm House</h1>
        <nav>
          <ul>
            <li><a href="#">Our story</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Buy</a></li>
            <li><a href="#">Career</a></li>
          </ul>
        </nav>
        <button><a href="#">Contact</a></button>
      </div>
    </header>
  )
}

export default Header

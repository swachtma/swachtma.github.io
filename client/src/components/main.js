import React from 'react'

import styles from '../styles/main.module.scss'

export default ({ children }) => {
  return (
    <main id={styles.main}>
      <div className="container">{children}</div>
    </main>
  )
}

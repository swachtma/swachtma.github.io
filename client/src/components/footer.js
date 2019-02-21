import React from 'react'
import FooterNavLinks from './footer_nav_links'

import styles from '../styles/footer.module.scss'

export default () => {
  let copy = <div>© 2014 Copyright Text</div>
  return (
    <footer className="page-footer" id={styles.footer}>
      <div className="row">
        <div className="grey-text text-lighten-3 col l6 m6 hide-on-small-only">
          {copy}
        </div>
        <div className="col l4 m4 offset-m2 offset-l2 hide-on-small-only">
          <ul className="right">
            <FooterNavLinks />
          </ul>
        </div>
        <div className="col s12 center hide-on-med-and-up">{copy}</div>
        <div className="col s12 center hide-on-med-and-up">
          <ul>
            <FooterNavLinks />
          </ul>
        </div>
      </div>
    </footer>
  )
}

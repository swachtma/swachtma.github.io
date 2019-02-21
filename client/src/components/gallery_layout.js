import React from 'react'
import PropTypes from 'prop-types'

import PrimaryNavLinks from './primary_nav_links'
import HeaderSocialLinks from './header_social_links'
import Footer from './footer'
import styles from '../styles/gallery_layout.module.scss'
import gatsbyIcon from '../images/gatsby-icon.png'

const GalleryLayout = ({ children }) => (
  <div id={styles.galleryLayout}>
    <header>
      <div className="row">
        <div id={styles.headerTitles}>
          <h1>
            <img src={gatsbyIcon} alt="Gatsby JS Icon" width="36" height="36" />
            asper
          </h1>
          <h2>The BYOD publishing platform</h2>
        </div>
        <div id={styles.headerNav}>
          <ul className="left">
            <PrimaryNavLinks />
          </ul>
          <HeaderSocialLinks className="hide-on-small-only" />
        </div>
      </div>
    </header>
    {children}
    <Footer />
  </div>
)

GalleryLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default GalleryLayout

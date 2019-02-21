import React from 'react'
import { Link, StaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import HeaderSocialLinks from './header_social_links'
import HeaderPopoutMenu from './header_popout_menu'
import styles from '../styles/header.module.scss'
import PrimaryNavLinks from './primary_nav_links'
import { graphql } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query metaData {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { title },
      },
    }) => {
      return [
        <header key="header" id={styles.header}>
          <nav>
            <div className="nav-wrapper">
              <div className="row">
                <div className="col l4 m5 s10">
                  <Link className="flow-text left" to="/">
                    {title}
                  </Link>
                </div>
                <div className="col l5 m7 hide-on-small-only">
                  <ul className="right">
                    <PrimaryNavLinks />
                  </ul>
                </div>
                <div className="col l3 hide-on-med-and-down">
                  <HeaderSocialLinks />
                </div>
                <div className="col s2 hide-on-med-and-up">
                  <Link
                    data-target="sideNavBar"
                    className="sidenav-trigger right"
                    to="/"
                  >
                    <FontAwesomeIcon size="lg" icon={faBars} />
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>,
        <HeaderPopoutMenu key="sidebarNav" />,
      ]
    }}
  />
)

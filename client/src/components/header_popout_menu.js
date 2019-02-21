import React, { Component } from 'react'
import M from '../../materialize-config'

import PrimaryNavLinks from './primary_nav_links'
import styles from '../styles/header_popout_menu.module.scss'

export default class HeaderPopoutMenu extends Component {
  componentDidMount = () => M.AutoInit()

  render() {
    return (
      <ul
        className={`sidenav ${styles.headerPopoutMenu}`}
        key="sideNavBar"
        id="sideNavBar"
      >
        <PrimaryNavLinks />
      </ul>
    )
  }
}

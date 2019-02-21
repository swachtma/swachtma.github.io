import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitterSquare,
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faSnapchatSquare,
} from '@fortawesome/free-brands-svg-icons'

import SocialLinksProvider from '../containers/social_links_provider'

const HeaderSocialLinks = props => {
  const { linked_in, twitter, facebook, snapchat, instagram, className } = props
  const renderIcon = (path, icon, key) => (
    <li key={key}>
      <a href={path}>
        <FontAwesomeIcon size="lg" icon={icon} />
      </a>
    </li>
  )

  return (
    <ul className={`right ${className}`}>
      {[
        linked_in ? renderIcon(linked_in, faLinkedin, 'linked_in') : null,
        twitter ? renderIcon(twitter, faTwitterSquare, 'twitter') : null,
        facebook ? renderIcon(facebook, faFacebookSquare, 'facebook') : null,
        snapchat ? renderIcon(snapchat, faSnapchatSquare, 'snapchat') : null,
        instagram ? renderIcon(instagram, faInstagram, 'instagram') : null,
      ]}
    </ul>
  )
}

export default SocialLinksProvider(HeaderSocialLinks)

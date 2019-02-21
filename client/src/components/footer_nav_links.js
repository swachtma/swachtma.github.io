import React from 'react'
import SocialLinksProvider from '../containers/social_links_provider'

const FooterNavLinks = props => {
  const { linked_in, twitter, facebook, snapchat, instagram } = props

  const renderLink = (text, path, key) => (
    <li key={key}>
      <a className="grey-text text-lighten-3" href={path}>
        {text}
      </a>
    </li>
  )

  return [
    renderLink('Home', '/', 'home'),
    linked_in ? renderLink('Linked In', linked_in, 'linked_in') : null,
    twitter ? renderLink('Twitter', twitter, 'twitter') : null,
    facebook ? renderLink('Facebook', facebook, 'facebook') : null,
    snapchat ? renderLink('Snapchat', snapchat, 'snapchat') : null,
    instagram ? renderLink('Instagram', instagram, 'instagram') : null,
  ]
}

export default SocialLinksProvider(FooterNavLinks)

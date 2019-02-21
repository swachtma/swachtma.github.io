import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const SocialLinksProvider = WrappedComponent => props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            socialLinks {
              linked_in
              twitter
              facebook
              snapchat
              instagram
            }
          }
        }
      }
    `}
    render={data => {
      const socialLinks = data.site.siteMetadata.socialLinks
      return <WrappedComponent {...socialLinks} {...props} />
    }}
  />
)

export default SocialLinksProvider

import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { Location } from '@reach/router'

const PrimaryNavLinks = props => (
  <StaticQuery
    query={graphql`
      query {
        allSitePage(filter: { component: { regex: "/primary_nav/" } }) {
          edges {
            node {
              id
              path
              label
            }
          }
        }
      }
    `}
    render={data => {
      let { edges } = data.allSitePage

      const buildLink = (loc, { id, path, label }) => (
        <li className={loc.pathname === path ? 'active' : null} key={id}>
          <Link to={path}>{label}</Link>
        </li>
      )

      return (
        <Location>
          {({ location }) => (
            <>
              {buildLink(location, { id: 'home', path: '/', label: 'Home' })}
              {edges.map(({ node }) => buildLink(location, node))}
            </>
          )}
        </Location>
      )
    }}
  />
)

export default PrimaryNavLinks

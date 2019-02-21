import React from 'react'
import { Link, graphql } from 'gatsby'

import styles from '../styles/keep_reading_nav.module.scss'

export default ({ previous, next, children }) => (
  <div id={styles.readingNav}>
    <div className="arrowHeading">
      <div className="arrowTitle">{children}</div>
    </div>
    <div className="arrowContainer">
      {previous && <ArrowLink direction="left" {...previous} />}
      {next && <ArrowLink direction="right" {...next} />}
    </div>
  </div>
)

export const ArrowLink = ({
  frontmatter: { title },
  fields: { slug },
  direction,
}) => (
  <Link className={styles.arrowButton + ' ' + direction} to={slug}>
    <span className={`chevron ${direction}-arrow`} />
    <span className={`chevron ${direction}-arrow`} />
    <span className="button-text">{title}</span>
  </Link>
)

export const query = graphql`
  fragment PagingLinkFields on MarkdownRemark {
    frontmatter {
      title
    }
    fields {
      slug
    }
  }
`

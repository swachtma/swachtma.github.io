import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import KeepReadingNav from '../components/keep_reading_nav'
import SEO from '../components/seo'

export default ({
  data: {
    previous,
    node: {
      frontmatter: { title },
      html,
    },
    next,
  },
}) => (
  <Layout>
    <SEO title={title} />
    <h1>{title}</h1>
    <div dangerouslySetInnerHTML={{ __html: html }} />
    <KeepReadingNav previous={previous} next={next}>
      Keep Reading
    </KeepReadingNav>
  </Layout>
)

export const query = graphql`
  query getPage($previous: String, $node: String!, $next: String) {
    previous: markdownRemark(fields: { slug: { eq: $previous } }) {
      ...PagingLinkFields
    }
    node: markdownRemark(fields: { slug: { eq: $node } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      html
    }
    next: markdownRemark(fields: { slug: { eq: $next } }) {
      ...PagingLinkFields
    }
  }
`

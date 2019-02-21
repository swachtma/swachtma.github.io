import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'

import Grid from '../components/grid'
import GalleryLayout from '../components/gallery_layout'

const IndexPage = ({ data }) => (
  <GalleryLayout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Grid cards={data.allMarkdownRemark.edges} />
  </GalleryLayout>
)

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/gallery/" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          ...GalleryCardFields
        }
      }
    }
  }
`

export default IndexPage

import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Header from '../components/header'
import Main from '../components/main'
import Footer from '../components/footer'
import SEO from '../components/seo'
import Grid from '../components/grid'
import KeepReadingNav from '../components/keep_reading_nav'
import styles from '../styles/gallery_post.module.scss'

export default ({
  data: {
    previous,
    node: {
      frontmatter: {
        title,
        date,
        hero: {
          childImageSharp: { fluid },
        },
      },
      html,
    },
    next,
  },
}) => (
  <>
    <SEO title={title} />
    <Header />
    <div className={styles.galleryPost}>
      <div id="galleryHeader">
        <div className="galleryDate">{date}</div>
        <h1>{title}</h1>
      </div>

      <div id="galleryMain">
        <Img className="galleryHero" fluid={fluid} />
        <div className="galleryTextBody">
          <Main>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </Main>
        </div>
      </div>

      <div id="galleryFooter">
        <KeepReadingNav>More Projects</KeepReadingNav>
        <Grid
          gridPattern={[{ l: 6, m: 6, s: 12 }, { l: 6, m: 6, s: 12 }]}
          cards={[{ node: { ...previous } }, { node: { ...next } }]}
        />
      </div>
      <Footer />
    </div>
  </>
)

export const query = graphql`
  query getGalleryPosts($previous: String, $node: String!, $next: String) {
    previous: markdownRemark(fields: { slug: { eq: $previous } }) {
      ...GalleryCardFields
    }
    node: markdownRemark(fields: { slug: { eq: $node } }) {
      frontmatter {
        title
        date(formatString: "MMMM, YYYY")
        hero {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
    next: markdownRemark(fields: { slug: { eq: $next } }) {
      ...GalleryCardFields
    }
  }
`

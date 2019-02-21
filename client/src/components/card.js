import React from 'react'
import { navigate } from 'gatsby'
import Img from 'gatsby-image'

import styles from '../styles/card.module.scss'
import { graphql } from 'gatsby'

export default ({
  className,
  horizontal,
  card: {
    id,
    frontmatter: {
      title,
      date,
      hero: {
        childImageSharp: { fluid },
      },
    },
    fields: { slug },
    excerpt,
  },
}) => (
  <article
    className={`${className} ${styles.adaptiveCard}`}
    onClick={() => navigate(slug)}
  >
    <div
      className={`card hoverable z-depth-2 ${horizontal ? 'horizontal' : ''}`}
    >
      <Img className="card-image" fluid={fluid} />
      <div className="card-content">
        <div className="card-title">{title}</div>
        <div>{excerpt}</div>
      </div>
    </div>
  </article>
)

export const GalleryPostFields = graphql`
  fragment GalleryCardFields on MarkdownRemark {
    id
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
    fields {
      slug
    }
    excerpt(pruneLength: 275)
  }
`

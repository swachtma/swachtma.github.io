import React from 'react'
import { graphql, navigate } from 'gatsby'

import Layout from '../../components/layout'
import styles from '../../styles/blog.module.scss'

const Blog = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  console.log(edges)
  return (
    <Layout>
      <div id={styles.blog}>
        {edges.map(({ node }) => (
          <article
            className="card hoverable z-depth-2"
            key={node.id}
            onClick={() => navigate(node.fields.slug)}
          >
            <div className="card-content">
              <div className="card-title">{node.frontmatter.title}</div>
              <div>{node.excerpt}</div>
              <div className="card-actions">
                <p>Published {node.frontmatter.date}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/blog/" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default Blog

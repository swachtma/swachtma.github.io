const path = require('path')

module.exports = async function createPages(helpers) {
  createPostsFor(
    { slugs: '/blog/', template: './src/templates/blog_post.js' },
    helpers
  )
  createPostsFor(
    { slugs: '/gallery/', template: './src/templates/gallery_post.js' },
    helpers
  )
}

async function createPostsFor({ slugs, template }, { graphql, actions }) {
  const { createPage } = actions
  return graphql(`
    query {
      allMarkdownRemark(
        filter: { fields: { slug: { regex: "/${slugs}/" } } }
        sort: { fields: frontmatter___date, order: ASC }
      ) {
        edges {
          previous {
            fields {
              slug
            }
          }
          node {
            fields {
              slug
            }
          }
          next {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ previous, node, next }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(template),
        context: {
          previous: previous ? previous.fields.slug : null,
          node: node.fields.slug,
          next: next ? next.fields.slug : null,
        },
      })
    })
  })
}

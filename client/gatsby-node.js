const graphql = require('gatsby/graphql')
const primaryNavRegex = /\/primary_nav\//gi

const preparePrimaryNavPage = (page, { deletePage, createPage }) => {
  const nav_page = Object.assign({}, page, {
    path: page.path.replace(primaryNavRegex, '/'),
  })
  deletePage(page)
  createPage(nav_page)
}

const isolateFile = path =>
  path
    .split('/')
    .pop()
    .split('.')
    .shift()

exports.createPages = require('./create-pages.js')

exports.setFieldsOnGraphQLNodeType = ({ type }) => {
  return type.name !== `SitePage`
    ? {}
    : {
        label: {
          type: graphql.GraphQLString,
          resolve: source => {
            return isolateFile(source.component).replace(/[_-]/gi, ' ')
          },
        },
      }
}

exports.onCreatePage = ({ page, actions }) => {
  return new Promise(resolve => {
    page.path.match(/\/primary_nav\//) && preparePrimaryNavPage(page, actions)
    resolve()
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const parentPath = getNode(node.parent).sourceInstanceName
    const base = isolateFile(node.fileAbsolutePath)
    const slug = `/${parentPath}/${base}/`

    createNodeField({ node, name: `slug`, value: slug })
  }
}

const path = require(`path`)
const transliteration = require('transliteration')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `node__article`) {
    const slugFragment = transliteration.slugify(node.title)
    const slug = `/posts/${slugFragment}/`
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
  
    return new Promise((resolve, reject) => {
      const postTemplate = path.resolve(`src/templates/BlogPost.js`)
      resolve(
        graphql(
          `
            {
              allNodeArticle {
                edges {
                  node {
                    title
                    fields {
                      slug
                    }
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            reject(result.errors)
          }
  
          result.data.allNodeArticle.edges.forEach(({ node }) => {
            createPage({
              path: node.fields.slug,
              component: postTemplate,
              context: {
                slug: node.fields.slug,
              },
            })
          })
        })
      )
    })
  }
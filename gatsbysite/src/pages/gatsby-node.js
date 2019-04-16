const { createFilePath } = require('gatsby-source-drupal')


exports.onCreateNode = ({ node, getNode, actions }) => {

  const { createNodeField } = actions
  if (node.insternal.type === 'NodeArticle') {
    const slug = createFilePath({ node, getNode, basepath: 'posts' })
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

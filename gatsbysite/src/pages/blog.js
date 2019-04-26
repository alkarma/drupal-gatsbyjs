import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import BlogTeaser from "../components/blogteaser.js"

const BlogPage = ( { data } ) => (
  <Layout>
    <h1>Blog list</h1>
    {data.allNodeArticle.edges.map((post) =>(
      <BlogTeaser
        slug={post.node.fields.slug}
        key={post.node.id}
        img={post.node.relationships.field_image.localFile.url}
        title={post.node.title}
        summary={post.node.field_teaser.length > 0 ? post.node.field_teaser : post.node.body.processed.substring(0, 300)}
      />
    ) )}
  </Layout>
)
export const getArticles = graphql` 
  {
    allNodeArticle {
      edges {
        node {
          fields {
            slug
          }
          title
          field_teaser
          created
          id
          body {
            processed
            summary
          }
          relationships{
          field_image {
            localFile {
              url
            }
          }
        }
        }
      }
    }
  }
`
export default BlogPage
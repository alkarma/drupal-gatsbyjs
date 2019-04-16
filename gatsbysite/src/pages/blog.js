import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from 'gatsby'

import Layout from "../components/layout"

const getArticles = graphql` 
  {
    allNodeArticle {
      edges {
        node {
          title
          created
          drupal_internal__nid
          status
        }
      }
    }
  }
`

const BlogPage = () => (
  <Layout>
   <h1>List of blog pages</h1>
        <StaticQuery
          query={getArticles}
          render={
            data => (
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Created date</th>
                  </tr>
                </thead>
                <tbody>
                  {data.allNodeArticle.edges.map(({ node }, index) => (
                      <tr key={index}>
                          <td>{node.drupal_internal__nid}</td>
                          <td>{node.title}</td>
                          <td>{node.created}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
              
            )
          }
        />
    <Link to="/">Go home</Link>
  </Layout>
)

export default BlogPage

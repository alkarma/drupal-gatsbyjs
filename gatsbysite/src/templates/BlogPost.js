import { graphql } from "gatsby"
import moment from 'moment'
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const BlogPost = ({ data }) => (
  <Layout>
    <article>
      <Link to='/blog'>Back to blogs</Link>
      <h1>{data.nodeArticle.title}</h1>
      <i><p className="publication-date">{moment.unix(data.nodeArticle.created).format('DD MMMM, YYYY - h:mm A')}</p></i>
      <span dangerouslySetInnerHTML={{__html: data.nodeArticle.body.processed}}></span>
    </article>
  </Layout>
)
export default BlogPost

export const query = graphql`
  query($slug: String!) {
    nodeArticle (fields: { slug: { eq: $slug } }) {
      title
      created
      changed
      body {
        processed
        summary
      }
    }
  }
`

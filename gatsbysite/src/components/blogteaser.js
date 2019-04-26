import React from 'react'
import './blogteaser.css'
import { Link } from "gatsby"

const BlogTeaser = ( {title, summary, slug, img} ) => (
    <div className="blog--teaser">
        <h2><Link to={slug}>{title}</Link></h2>
        <img src={img} alt=''/>
        <p dangerouslySetInnerHTML={{__html: summary}}/>
    </div>
)

export default BlogTeaser
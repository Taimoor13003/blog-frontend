import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import vectorLine from "../../assets/images//more-home/new-products/vector-line.png"

const query = graphql`
{   
    allStrapiBlogs(sort: {fields: strapiId, order: DESC}) {
        nodes {
            id
            image {
                url
                alternativeText
            }
            title
            slug
            shortText
            CreateAtDate(formatString: "MMMM Do, YYYY")
            readingTime
            category {
                id
                name
                slug
            }
        }
    }
}
`

const WhatsNewTodays = () => {

    const data = useStaticQuery(query)
    const {
        allStrapiBlogs: { nodes: blogs }
    } = data

    return (
		<>
			<div className="new-products-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>What's New Today's</h2>
                        <Link to="/blog-3" className="link-btn">VIEW ALL</Link>
                    </div>
                    
                    {blogs && (
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-4 col-md-12">
                                {blogs.slice(9, 10).map(blog => (
                                    <div 
                                        className="new-products-thumbnail-box bg-img" 
                                        style={{ backgroundImage: `url(${blog.image.url})` }}
                                        key={blog.id}
                                    >
                                        <Link to={`/blogs/${blog.slug}`} className="link-btn"></Link>
                    
                                        <div className="content">
                                            <Link to={`/categories/${blog.category.slug}`} className="category">
                                                {blog.category.name}
                                            </Link>

                                            <h3>
                                                <Link to={`/blogs/${blog.slug}`}>
                                                    {blog.title}
                                                </Link>
                                            </h3>

                                            <ul className="meta">
                                                <li><i className='bx bx-calendar'></i> {blog.CreateAtDate}</li>
                                                <li><i className='bx bx-time'></i> {blog.readingTime}</li>
                                            </ul>
                                        </div>
                                        <div className="overlay"></div>
                                    </div>
                                ))}
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="new-products-list">
                                    {blogs.slice(10, 13).map(blog => (
                                        <div className="widget-products-box" key={blog.id}>
                                            <div className="row m-0">
                                                <div className="col-lg-4 col-md-4 col-4 p-0">
                                                    <div 
                                                        className="image bg-1" 
                                                        style={{ backgroundImage: `url(${blog.image.url})` }}
                                                    >
                                                        <Link to={`/blogs/${blog.slug}`} className="link-btn"></Link>
                                                    </div>
                                                </div>

                                                <div className="col-lg-8 col-md-8 col-8 p-0">
                                                    <div className="content">
                                                        <Link to={`/categories/${blog.category.slug}`} className="category">
                                                            {blog.category.name}
                                                        </Link>

                                                        <h3>
                                                            <Link to={`/blogs/${blog.slug}`}>
                                                                {blog.title}
                                                            </Link>
                                                        </h3>

                                                        <ul className="meta">
                                                            <li><i className='bx bx-calendar'></i> {blog.CreateAtDate}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="new-products-item">
                                    {blogs.slice(13, 15).map(blog => (
                                        <div className="item-box" key={blog.id}>
                                            <div 
                                                className="image bg-4" 
                                                style={{ backgroundImage: `url(${blog.image.url})` }}
                                            >
                                                <Link to={`/blogs/${blog.slug}`} className="link-btn"></Link>
                                            </div>
                                            <div className="content">
                                                <h3>
                                                    <Link to={`/blogs/${blog.slug}`}>
                                                    {blog.title}
                                                    </Link>
                                                </h3>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="vector-line-shape">
                    <img src={vectorLine} alt="image" />
                </div>
            </div>
		</>
    );
}

export default WhatsNewTodays;
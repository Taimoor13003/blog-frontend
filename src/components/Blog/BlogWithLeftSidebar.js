import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Sidebar from "./Sidebar"

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

const BlogWithLeftSidebar = () => {

    const data = useStaticQuery(query)
    const {
        allStrapiBlogs: { nodes: blogs }
    } = data

    return (
		<>
            {blogs && (
                <div className="blog-area pt-100 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12">
                                <div className="left-sidebar">
                                    <Sidebar />
                                </div>
                            </div>

                            <div className="col-lg-8 col-md-12">
                                <div className="row">
                                    {blogs.map(blog => (
                                        <div className="col-lg-12 col-md-6" key={blog.id}>
                                            <div className="single-blog-post">
                                                <div className="image">
                                                    <Link to={`/blogs/${blog.slug}`} className="d-block">
                                                        <img
                                                            src={blog.image.url}
                                                            alt={blog.image.alternativeText}
                                                            aria-hidden
                                                        />
                                                    </Link>
                                                    <Link to={`/categories/${blog.category.slug}`} className="category">
                                                        {blog.category.name}
                                                    </Link>
                                                </div>
                                                <div className="content">
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
                                            </div>
                                        </div>
                                    ))}
                                
                                    {/* <div className="col-lg-12 col-md-12">
                                        <div className="pagination-area text-center">
                                            <a href="#" className="prev page-numbers">
                                                <i className='bx bx-chevrons-left'></i>
                                            </a>
                                            <span className="page-numbers current" aria-current="page">1</span>
                                            <a href="#" className="page-numbers">2</a>
                                            <a href="#" className="page-numbers">3</a>
                                            <a href="#" className="page-numbers">4</a>
                                            <a href="#" className="next page-numbers">
                                                <i className='bx bx-chevrons-right'></i>
                                            </a>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
		</>
    );
}

export default BlogWithLeftSidebar;
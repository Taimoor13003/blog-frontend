import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
 
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
            CreateAtDate(formatString: "MMMM Do, YYYY")
            readingTime
        }
    }
}
`

const LatestReviewsSidebar = () => {

    const data = useStaticQuery(query)
    const {
        allStrapiBlogs: { nodes: blogs }
    } = data

    return (
		<>
            <aside className="widget-area">
                <div className="widget widget_latest_review">
                    <h3 className="widget-title">Latest Review</h3>

                    {blogs && blogs.slice(0,1).map(blog => (
                        <article className="thumbnail-item" key={blog.id}>
                            <Link to={`/blogs/${blog.slug}`} className="link-btn"></Link>
                            <img 
                                src={blog.image.url}
                                alt={blog.image.alternativeText}
                                aria-hidden
                            />
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
                            <div className="overlay"></div>
                        </article>
                    ))}

                    {blogs && blogs.slice(1, 4).map(blog => (
                        <article className="item" key={blog.id}>
                            <Link to={`/blogs/${blog.slug}`} className="thumb">
                                <span 
                                    className="fullimage" 
                                    style={{ backgroundImage: `url(${blog.image.url})` }}
                                ></span>
                            </Link>
                            <div className="info">
                                <h4 className="title usmall">
                                    <Link to={`/blogs/${blog.slug}`}>
                                        {blog.title}
                                    </Link>
                                </h4>
                                <ul className="meta">
                                    <li><i className='bx bx-calendar'></i> {blog.CreateAtDate}</li>
                                    <li><i className='bx bx-time'></i> {blog.readingTime}</li>
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </aside>
		</>
    );
}

export default LatestReviewsSidebar;
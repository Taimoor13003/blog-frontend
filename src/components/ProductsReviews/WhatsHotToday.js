import * as React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
 
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

const WhatsHotToday = () => {

    const data = useStaticQuery(query)
    const {
        allStrapiBlogs: { nodes: blogs }
    } = data

    return (
		<>
            {blogs && (
                <div className="products-review-area pt-100 pb-70">
                    <div className="container">
                        <div className="row">
                            {blogs.slice(13, 17).map(blog => (
                                <div className="col-lg-3 col-md-6 col-sm-6" key={blog.id}>
                                    <div className="products-review-box">
                                        <Link to={`/blogs/${blog.slug}`} className="image d-block">
                                            <img 
                                                src={blog.image.url}
                                                alt={blog.image.alternativeText}
                                                aria-hidden
                                            />
                                        </Link>
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
                                                <li>
                                                    <i className='bx bx-calendar'></i> {blog.CreateAtDate}
                                                </li>
                                                <li>
                                                    <i className='bx bx-time'></i> {blog.readingTime}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
		</>
    );
}

export default WhatsHotToday;
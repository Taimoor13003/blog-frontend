import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import PopularSidebar2 from './PopularSidebar2';

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

const PopularReviews = () => {

    const data = useStaticQuery(query)
    const {
        allStrapiBlogs: { nodes: blogs }
    } = data

    return (
		<>
            <div className="popular-products-review-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <PopularSidebar2 />
                        </div>

                        <div className="col-lg-8 col-md-12">
                            <div className="section-title">
                                <h2>Popular Reviews</h2>
                                <Link to="/blog-3" className="link-btn">VIEW ALL</Link>
                            </div>

                            {blogs && blogs.slice(24, 28).map(blog => (
                                <div className="popular-products-reviews-box" key={blog.id}>
                                    <div className="row m-0">
                                        <div className="col-lg-6 col-sm-7 p-0">
                                            <div className="content with-right">
                                                <Link to={`/categories/${blog.category.slug}`} className="category">
                                                    {blog.category.name}
                                                </Link>

                                                <h3>
                                                    <Link to={`/blogs/${blog.slug}`}>
                                                        {blog.title}
                                                    </Link>
                                                </h3>

                                                <p>{blog.shortText}</p>

                                                <ul className="meta">
                                                    <li><i className='bx bx-calendar'></i> {blog.CreateAtDate}</li>
                                                    <li><i className='bx bx-time'></i> {blog.readingTime}</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-sm-5 p-0">
                                            <div 
                                                className="image bg-2" 
                                                style={{ backgroundImage: `url(${blog.image.url})` }}
                                            >
                                                <img
                                                    src={blog.image.url}
                                                    alt={blog.image.alternativeText}
                                                    aria-hidden
                                                />
                                                <Link to={`/blogs/${blog.slug}`} className="link-btn"></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
		</>
    );
}

export default PopularReviews;
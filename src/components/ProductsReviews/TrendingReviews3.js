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

const TrendingReviews3 = () => {

    const data = useStaticQuery(query)
    const {
        allStrapiBlogs: { nodes: blogs }
    } = data

    return (
		<>
			<div className="trending-products-review-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Trending Reviews</h2>
                        <Link to="/blog-2" className="link-btn">ALL TRENDING REVIEWS</Link>
                    </div>
                </div>

                {blogs && (
                    <div className="container">
                        <div className="row">
                            {blogs.slice(6, 9).map(blog => (
                                <div className="col-lg-4" key={blog.id}>
                                    <div className="trending-products-review-item">
                                        <div className="row m-0">
                                            <div className="col-lg-4 col-sm-4 col-4 p-0">
                                                <div 
                                                    className="image" 
                                                    style={{ backgroundImage: `url(${blog.image.url})` }}
                                                >
                                                    <Link to={`/blogs/${blog.slug}`} className="link-btn"></Link>
                                                </div>
                                            </div>

                                            <div className="col-lg-8 col-sm-8 col-8 p-0">
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
                                </div>
                            ))} 
                        </div>
                    </div>
                )}
            </div>
		</>
    );
}

export default TrendingReviews3;
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

const TrendingReviewsStyle2 = () => {

    const data = useStaticQuery(query)
    const {
        allStrapiBlogs: { nodes: blogs }
    } = data

    return (
		<>
			<div className="products-review-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Trending Reviews</h2>
                    </div>

                    {blogs && (
                        <div className="row">
                            {blogs.slice(7, 13).map(blog => (
                                <div className="col-lg-6 col-md-12 col-sm-6" key={blog.id}>
                                    <div className="single-products-review-item bg-f9f9ff">
                                        <div className="row m-0">
                                            <div className="col-lg-4 col-md-4 p-0">
                                                <div 
                                                    className="image" 
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

                                            <div className="col-lg-8 col-md-8 p-0">
                                                <div className="content">
                                                    <Link 
                                                        to={`/categories/${blog.category.slug}`} 
                                                        className="category"
                                                    >
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))} 
                        </div>
                    )}
                </div>
            </div>
		</>
    );
}

export default TrendingReviewsStyle2;
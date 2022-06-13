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

const TopProductsReviews = () => {

    const data = useStaticQuery(query)
    const {
        allStrapiBlogs: { nodes: blogs }
    } = data

    return (
		<>
			<div className="products-review-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Top Products Review</h2>
                    </div>

                    {blogs && (
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-12">
                                {blogs.slice(4, 5).map(blog => (
                                    <div 
                                        className="review-thumbnail-box bg-img" 
                                        key={blog.id} 
                                        style={{ backgroundImage: `url(${blog.image.url})` }}
                                    >
                                        <div className="overlay"></div>
                                        <Link 
                                            to={`/blogs/${blog.slug}`} 
                                            className="link-btn"
                                        ></Link>
                                        <img 
                                            src={blog.image.url}
                                            alt={blog.image.alternativeText}
                                            aria-hidden
                                        />
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
                                    </div>
                                ))}
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <div className="products-review-list">
                                    <div className="row">
                                        {blogs.slice(5,7).map(blog => (
                                            <div className="col-lg-12 col-md-6 col-sm-12" key={blog.id}>
                                                <div className="single-products-review-box">
                                                    <div className="overlay"></div>
                                                    <Link 
                                                        to={`/blogs/${blog.slug}`} 
                                                        className="link-btn"
                                                    ></Link>
                                                    <img 
                                                        src={blog.image.url}
                                                        alt={blog.image.alternativeText}
                                                        aria-hidden
                                                    />
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
                        </div>
                    )}
                </div>
            </div>
		</>
    );
}

export default TopProductsReviews;
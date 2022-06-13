import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const query = graphql`
{   
    allStrapiBlogs(filter: {category: {slug: {eq: "car"}}}) {
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

const CarAccessories = () => {

    const data = useStaticQuery(query)
    const {
        allStrapiBlogs: { nodes: blogs }
    } = data

    return (
        <>
            <div className="products-review-area pt-100 pb-70 bg-f5f5f5">
                <div className="container">
                    <div className="section-title">
                        <h2>Car Accessories</h2>
                        <Link to="/categories/car" className="link-btn">
                            VIEW ALL
                        </Link>
                    </div>

                    <div className="row justify-content-center">
                        {blogs && blogs.slice(0, 3).map(blog => (
                            <div className="col-lg-4 col-md-6 col-sm-6" key={blog.id}>
                                <div className="products-review-item">
                                    <div className="image">
                                        <Link to={`/blogs/${blog.slug}`} className="d-block">
                                            <img 
                                                src={blog.image.url}
                                                alt={blog.image.alternativeText}
                                                aria-hidden
                                            />
                                        </Link>
                                    </div>
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
                            </div>
                        ))}
                    </div>
                </div>
            </div>
		</>
    );
}

export default CarAccessories;
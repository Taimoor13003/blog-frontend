import * as React from "react"

import techproductsImg1 from "../../assets/images/more-home/technology-products/technology-products-1.jpg"
import techproductsImg2 from "../../assets/images/more-home/technology-products/technology-products-2.jpg"
import techproductsImg3 from "../../assets/images/more-home/technology-products/technology-products-3.jpg"
import techproductsImg4 from "../../assets/images/more-home/technology-products/camera-products.jpg"
import techproductsImg5 from "../../assets/images/more-home/technology-products/technology-products-4.jpg"
import techproductsImg6 from "../../assets/images/more-home/technology-products/technology-products-5.jpg"

import { Link, useStaticQuery, graphql } from "gatsby"

const query = graphql`
{   
    allStrapiBlogs {
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

const Tech = () => {

    const data = useStaticQuery(query)
    const {
        allStrapiBlogs: { nodes: blogs }
    } = data

    return (
		<>
			<div className="technology-products-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Tech</h2>
                    </div>

                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="technology-products-list">
                                {blogs && blogs.slice(16, 19).map(blog => (
                                    <div className="widget-products-box" key={blog.id}>
                                        <div className="row m-0">
                                            <div className="col-lg-4 col-md-4 col-4 p-0">
                                                <div 
                                                    className="image bg-1" 
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

                                            <div className="col-lg-8 col-md-8 col-8 p-0">
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
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            {blogs && blogs.slice(19, 20).map(blog => (
                                <div 
                                    className="technology-products-thumbnail-box bg-img" 
                                    style={{ backgroundImage: `url(${blog.image.url})` }}
                                    key={blog.id}
                                >
                                    <Link to={`/blogs/${blog.slug}`} className="link-btn"></Link>
                                    
                                    <img 
                                        src={blog.image.url}
                                        alt={blog.image.alternativeText}
                                        aria-hidden
                                    />

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
                                            <li><Link to="#"><i className='bx bx-time'></i> {blog.readingTime}</Link></li>
                                        </ul>
                                    </div>

                                    <div className="overlay"></div>
                                </div>
                            ))}
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="technology-products-list">
                                {blogs && blogs.slice(20, 23).map(blog => (
                                    <div className="widget-products-box" key={blog.id}>
                                        <div className="row m-0">
                                            <div className="col-lg-4 col-md-4 col-4 p-0">
                                                <div 
                                                    className="image bg-1" 
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

                                            <div className="col-lg-8 col-md-8 col-8 p-0">
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
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		</>
    );
}

export default Tech;
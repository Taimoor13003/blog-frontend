import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import shapeImg1 from "../../assets/images/more-home/banner-post/shape-1.png"
import shapeImg2 from "../../assets/images/more-home/banner-post/shape-2.png"

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

const MainBanner = () => {

    const data = useStaticQuery(query)
    const {
        allStrapiBlogs: { nodes: blogs }
    } = data

    return (
		<>
            {blogs && (
                <div className="main-banner-post-area">
                    <div className="container-fluid">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-3 col-md-12">
                                {blogs.slice(0, 1).map(blog => (
                                    <div className="banner-post-item" key={blog.id}>
                                        <div 
                                            className="post-image h-500" 
                                            style={{ backgroundImage: `url(${blog.image.url})` }}
                                        >
                                            <img
                                                src={blog.image.url}
                                                alt={blog.image.alternativeText}
                                                aria-hidden
                                            />
                                        </div>
                                        <div className="post-content">
                                            <h3>
                                                <Link to={`/blogs/${blog.slug}`}>
                                                    {blog.title}
                                                </Link>
                                            </h3>
                                            <ul className="info-entry">
                                                <li><i className='bx bx-calendar'></i> {blog.CreateAtDate}</li>
                                                <li><i className='bx bx-time'></i> {blog.readingTime}</li>
                                            </ul>
                                        </div>

                                        <Link to={`/blogs/${blog.slug}`} className="link-btn"></Link>
                                    </div>
                                ))} 
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-lg-5 col-md-5">
                                        {blogs.slice(1, 2).map(blog => (
                                            <div className="banner-post-item" key={blog.id}>
                                                <div 
                                                    className="post-image h-300" 
                                                    style={{ backgroundImage: `url(${blog.image.url})` }}
                                                >
                                                    <img
                                                        src={blog.image.url}
                                                        alt={blog.image.alternativeText}
                                                        aria-hidden
                                                    />
                                                </div>
                                                <div className="post-content">
                                                    <h3>
                                                        <Link to={`/blogs/${blog.slug}`}>
                                                            {blog.title}
                                                        </Link>
                                                    </h3>
                                                    <ul className="info-entry">
                                                        <li><i className='bx bx-calendar'></i> {blog.CreateAtDate}</li>
                                                        <li><i className='bx bx-time'></i> {blog.readingTime}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        ))} 
                                    </div>

                                    <div className="col-lg-7 col-md-7">
                                        {blogs.slice(2, 3).map(blog => (
                                            <div className="banner-post-item" key={blog.id}>
                                                <div 
                                                    className="post-image h-300" 
                                                    style={{ backgroundImage: `url(${blog.image.url})` }}
                                                >
                                                    <img
                                                        src={blog.image.url}
                                                        alt={blog.image.alternativeText}
                                                        aria-hidden
                                                    />
                                                </div>
                                                <div className="post-content">
                                                    <h3>
                                                        <Link to={`/blogs/${blog.slug}`}>
                                                            {blog.title}
                                                        </Link>
                                                    </h3>
                                                    <ul className="info-entry">
                                                        <li><i className='bx bx-calendar'></i> {blog.CreateAtDate}</li>
                                                        <li><i className='bx bx-time'></i> {blog.readingTime}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        ))} 
                                    </div>

                                    <div className="col-lg-7 col-md-7">
                                        {blogs.slice(3, 4).map(blog => (
                                            <div className="banner-post-item" key={blog.id}>
                                                <div 
                                                    className="post-image h-300" 
                                                    style={{ backgroundImage: `url(${blog.image.url})` }}
                                                >
                                                    <img
                                                        src={blog.image.url}
                                                        alt={blog.image.alternativeText}
                                                        aria-hidden
                                                    />
                                                </div>
                                                <div className="post-content">
                                                    <h3>
                                                        <Link to={`/blogs/${blog.slug}`}>
                                                            {blog.title}
                                                        </Link>
                                                    </h3>
                                                    <ul className="info-entry">
                                                        <li><i className='bx bx-calendar'></i> {blog.CreateAtDate}</li>
                                                        <li><i className='bx bx-time'></i> {blog.readingTime}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        ))} 
                                    </div>

                                    <div className="col-lg-5 col-md-5">
                                        {blogs.slice(4, 5).map(blog => (
                                            <div className="banner-post-item" key={blog.id}>
                                                <div 
                                                    className="post-image h-300" 
                                                    style={{ backgroundImage: `url(${blog.image.url})` }}
                                                >
                                                    <img
                                                        src={blog.image.url}
                                                        alt={blog.image.alternativeText}
                                                        aria-hidden
                                                    />
                                                </div>
                                                <div className="post-content">
                                                    <h3>
                                                        <Link to={`/blogs/${blog.slug}`}>
                                                            {blog.title}
                                                        </Link>
                                                    </h3>
                                                    <ul className="info-entry">
                                                        <li><i className='bx bx-calendar'></i> {blog.CreateAtDate}</li>
                                                        <li><i className='bx bx-time'></i> {blog.readingTime}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        ))} 
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-12">
                                {blogs.slice(5, 6).map(blog => (
                                    <div className="banner-post-item" key={blog.id}>
                                        <div 
                                            className="post-image h-500" 
                                            style={{ backgroundImage: `url(${blog.image.url})` }}
                                        >
                                            <img
                                                src={blog.image.url}
                                                alt={blog.image.alternativeText}
                                                aria-hidden
                                            />
                                        </div>
                                        <div className="post-content">
                                            <h3>
                                                <Link to={`/blogs/${blog.slug}`}>
                                                    {blog.title}
                                                </Link>
                                            </h3>
                                            <ul className="info-entry">
                                                <li><i className='bx bx-calendar'></i> {blog.CreateAtDate}</li>
                                                <li><i className='bx bx-time'></i> {blog.readingTime}</li>
                                            </ul>
                                        </div>
                                    </div>
                                ))} 
                            </div>
                        </div>
                    </div>

                    <div className="banner-post-shape-1">
                        <img src={shapeImg1} alt="image" />
                    </div>
                    <div className="banner-post-shape-2">
                        <img src={shapeImg2} alt="image" />
                    </div>
                </div>
            )}
		</>
    );
}

export default MainBanner;
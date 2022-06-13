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

    strapiAdsImg {
        adsImg {
            id
            image {
                url
                alternativeText
            }
            link
        }
    }
}
`

const Reviews = () => {

    const data = useStaticQuery(query)
    const {
        allStrapiBlogs: { nodes: blogs },
        strapiAdsImg
    } = data

    return (
		<>
            <div className="latest-review-products-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        {blogs && (
                            <div className="col-lg-4 col-md-12">
                                <div className="latest-reviews-products-box mb-30">
                                    {blogs.slice(16, 17).map(blog => (
                                        <div 
                                            className="thumbnail-item bg-img" 
                                            key={blog.id}
                                            style={{ backgroundImage: `url(${blog.image.url})` }}
                                        >
                                            <Link to={`/blogs/${blog.slug}`} className="link-btn"></Link>

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
                                            <div className="overlay"></div>
                                        </div>
                                    ))}

                                    {blogs.slice(17, 20).map(blog => (
                                        <div className="thumbnail-box" key={blog.id}>
                                            <div className="row m-0">
                                                <div className="col-lg-3 col-md-3 col-3 p-0">
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

                                                <div className="col-lg-9 col-md-9 col-9 p-0">
                                                    <div className="content">
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
                        )}

                        <div className="col-lg-8 col-md-12">
                            <div className="latest-reviews-products-list">
                                {blogs && (
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="latest-reviews-products-item">
                                                {blogs.slice(20, 23).map(blog => (
                                                    <div className="widget-review-box" key={blog.id}>
                                                        <div className="row m-0">
                                                            <div className="col-lg-3 col-md-3 col-3 p-0">
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
                        
                                                            <div className="col-lg-9 col-md-9 col-9 p-0">
                                                                <div className="content">
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

                                        <div className="col-lg-6 col-md-12">
                                            {blogs.slice(23, 24).map(blog => (
                                                <div 
                                                    className="latest-review-products-thumbnail-box bg-img" 
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
                                                    <div className="overlay"></div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {strapiAdsImg && (
                                    <div className="latest-reviews-ads">
                                        <a href={strapiAdsImg.adsImg.link} className="d-block" target="_blank" rel="noreferrer">
                                            <img 
                                                src={strapiAdsImg.adsImg.image.url} 
                                                alt={strapiAdsImg.adsImg.image.alternativeText} 
                                                aria-hidden
                                            />
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		</>
    );
}

export default Reviews;
import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import LatestReviewsSidebar from "./LatestReviewsSidebar"

const query = graphql`
{   
    allStrapiBlogs(filter: {category: {slug: {eq: "smartphones"}}}) {
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

const TechAndGadgets = () => {

    const data = useStaticQuery(query)
    const {
        allStrapiBlogs: { nodes: blogs },
        strapiAdsImg
    } = data

    return (
		<>
			<div className="products-review-area pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="tech-gadgets-reviews-list">
                                <div className="section-title">
                                    <h2>Tech & Smartphones</h2>
                                </div>

                                {blogs && (
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-12">
                                            {blogs.slice(0, 1).map(blog => (
                                                <div 
                                                    className="review-thumbnail-box bg-style2" 
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
                                                </div>
                                            ))}
                                        </div>

                                        <div className="col-lg-6 col-md-12">
                                            <div className="products-reviews-list">
                                                {blogs.slice(1, 4).map(blog => (
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
                                                                        <li><i className='bx bx-time'></i> {blog.readingTime}</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {strapiAdsImg && (
                                    <div className="tech-gadgets-ads">
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

                        <div className="col-lg-4 col-md-12">
                            <LatestReviewsSidebar />
                        </div>
                    </div>
                </div>
            </div>
		</>
    );
}

export default TechAndGadgets;
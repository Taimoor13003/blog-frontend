import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import playStore from "../../assets/images/play-store.png"
import appleStore from "../../assets/images/apple-store.png"

const query = graphql`
    {
        strapiFooter {
            logo {
                url
                alternativeText
            }
            helpfulLinks {
                id
                text
                link
            }
            googlePlayUrl
            appleStoreUrl
            followUs {
                id
                iconName
                link
            }
            privacyTerms {
                id
                text
                link
            }
            copyrightText
        }

        allStrapiBlogs(sort: {fields: strapiId, order: DESC}) {
            nodes {
                id
                image {
                    url
                    alternativeText
                }
                title
                slug
                CreateAtDate(formatString: "MMMM Do, YYYY")
                readingTime
            }
        }
    }
`

const Footer = () => {
    const data = useStaticQuery(query)
    const {
        strapiFooter, 
        allStrapiBlogs: { nodes: blogs },
    } = data

    return (
		<>
            <footer className="footer-area pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Helpful Links</h3>

                                <ul className="helpful-links">
                                    {strapiFooter && strapiFooter.helpfulLinks.slice(0, 12).map(page => (
                                        <li key={page.id}>
                                            <Link to={page.link}>
                                                {page.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                                <div className="download-app">
                                    <h3>Download Our App</h3>

                                    <div className="btn-box">
                                        <a 
                                            href={strapiFooter.googlePlayUrl} 
                                            className="play-store-btn" 
                                            target="_blank" 
                                            rel="noreferrer"
                                        >
                                            <img 
                                                src={playStore} 
                                                alt="image" 
                                                aria-hidden
                                            />
                                            GET IT ON
                                            <span>Google Play</span>
                                        </a>

                                        <a 
                                            href={strapiFooter.googlePlayUrl} 
                                            className="apple-store-btn" 
                                            target="_blank" 
                                            rel="noreferrer"
                                        >
                                            <img 
                                                src={appleStore} 
                                                alt="image" 
                                                aria-hidden
                                            />
                                            DOWNLOAD ON THE
                                            <span>Apple Store</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
 
                        <div className="col-lg-4 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Recent Posts</h3>
                                
                                {blogs && blogs.slice(0, 3).map(blog => (
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
                      
                        <div className="col-lg-4 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Latest Reviews</h3>

                                {blogs && blogs.slice(3, 6).map(blog => (
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
                </div>
                
                {strapiFooter && (
                    <div className="footer-bottom-area">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-4 col-md-4">
                                    <div className="footer-logo">
                                        <Link to="/" className="d-inline-block">
                                            <img 
                                                src={strapiFooter.logo.url} 
                                                alt={strapiFooter.logo.alternativeText}  
                                                aria-hidden
                                            />
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-8 col-md-8">
                                    <ul className="socials-links">
                                        <li><span>Follow Us</span></li>

                                        {strapiFooter.followUs.map(list => (
                                            <li key={list.id}>
                                                <a href={list.link} target="_blank" rel="noreferrer">
                                                    <i className={list.iconName}></i>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </footer>
            
            {strapiFooter && (
                <div className="copyright-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-7">
                                <p>{strapiFooter.copyrightText}</p>
                            </div>

                            <div className="col-lg-6 col-md-5">
                                <ul>
                                    {strapiFooter.privacyTerms.slice(0, 5).map(pageLink => (
                                        <li key={pageLink.id}>
                                            <Link to={pageLink.link}>
                                                {pageLink.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
		</>
    );
}

export default Footer;
import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const query = graphql`
{   
    allStrapiBlogs(filter: {category: {slug: {eq: "videos"}}}) {
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

const VideosReviews = () => {

    const data = useStaticQuery(query)
    const {
        allStrapiBlogs: { nodes: blogs }
    } = data

    return (
		<>
			<div className="video-review-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Videos Reviews</h2>
                        <Link to="/categories/videos" className="link-btn">
                            ALL VIDEOS
                        </Link>
                    </div>

                    {blogs && (
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-12">
                                {blogs.slice(0, 1).map(blog => (
                                    <div className="review-video-box" key={blog.id}>
                                        <Link to={`/blogs/${blog.slug}`} className="link-btn"></Link>
                                        <img 
                                            src={blog.image.url}
                                            alt={blog.image.alternativeText}
                                            aria-hidden
                                        />

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

                                        <div className="overlay"></div>
                                    </div>
                                ))}
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <div className="review-video-list">
                                    {blogs.slice(1, 5).map(blog => (
                                        <div className="single-video-review-box" key={blog.id}>
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
                </div>
            </div>
		</>
    );
}

export default VideosReviews;
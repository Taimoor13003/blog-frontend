import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Loadable from '@loadable/component'
const OwlCarousel = Loadable(() => import('react-owl-carousel3'))

const options = {
    loop: false,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: false,
    margin: 25,
    navText: [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>"
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
}

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

const VideosReviews2 = () => {

    const data = useStaticQuery(query)
    const {
        allStrapiBlogs: { nodes: blogs }
    } = data

    const [display, setDisplay] = React.useState(false);
    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
		<>
			<div className="top-video-area pt-100 pb-100">
                <div className="container">
                    <div className="section-title text-center">
                        <h2>Video Reviews</h2>
                    </div>

                    {display ? <OwlCarousel 
                        className="top-video-slides owl-carousel owl-theme"
                        {...options}
                    > 
                        {blogs.slice(0, 5).map(blog => (
                            <div className="top-video-item" key={blog.id}>
                                <div 
                                    className="video-image" 
                                    style={{ backgroundImage: `url(${blog.image.url})` }}
                                >
                                    <Link to={`/blogs/${blog.slug}`} className="link-btn"></Link>
                                </div>
                                <div className="video-content">
                                    <h3>
                                        <Link to={`/blogs/${blog.slug}`}>
                                            {blog.title}
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </OwlCarousel> : ''}
                </div>
            </div>
		</>
    );
}

export default VideosReviews2;
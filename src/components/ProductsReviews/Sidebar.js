import * as React from "react"
import { Link } from "gatsby"
import categoriesImg1 from "../../assets/images/categories/categories-img1.jpg"
import adsImg2 from "../../assets/images/custom-ads2.jpg"
import blackLogo from "../../assets/images/black-logo.png"
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
            CreateAtDate(formatString: "MMMM Do, YYYY")
            readingTime
        }
    }

    allStrapiCategories(sort: {fields: strapiId, order: DESC}) {
        nodes {
            id
            name
            slug
            strapiId
            blogs {
                id
            }
        }
    }

    strapiBlogSidebar {
        adsImg {
            id
            link
            image {
                url
                alternativeText
            }
        }
        socialLinks {
            id
            name
            iconName
            link
        }
    }
}
`

const Sidebar = () => {

    const data = useStaticQuery(query)
    const {
        allStrapiBlogs: { 
            nodes: blogs 
        },
        allStrapiCategories: { 
            nodes: categories 
        },
        strapiBlogSidebar
    } = data

    return (
		<>
			<aside className="widget-area">
                <div className="widget widget_posts_thumb">
                    <h3 className="widget-title">Latest Posts</h3>

                    {blogs && blogs.slice(0, 3).map(blog => (
                        <article className="item" key={blog.id}>
                            <Link to={`/blogs/${blog.slug}`} className="thumb">
                                <span 
                                    className="fullimage" 
                                    style={{ backgroundImage: `url(${blog.image.url})` }}
                                ></span>
                            </Link>
                            <div className="info">
                                <h4 className="title usmall">
                                    <Link to={`/blogs/${blog.slug}`}>
                                        {blog.title}
                                    </Link>
                                </h4>
                                <ul className="meta">
                                    <li><i className='bx bx-calendar'></i> {blog.CreateAtDate}</li>
                                    <li><i className='bx bx-time'></i> {blog.readingTime}</li>
                                </ul>
                            </div>
                        </article>
                    ))} 
                </div>
               

                {strapiBlogSidebar && (
                    <div className="widget widget_custom_ads">
                        {strapiBlogSidebar.adsImg.map(item => (
                            <div className="item" key={item.id}>
                                <a href={item.link} className="d-block" target="_blank" rel="noreferrer">
                                    <img 
                                        src={item.image.url} 
                                        alt={item.image.alternativeText} 
                                        aria-hidden
                                    />
                                </a>
                            </div>
                        ))}
                    </div>
                )}
 
                <div className="widget widget_socials_link">
                    <h3 className="widget-title">Stay Connected</h3>

                    <ul>
                        {strapiBlogSidebar && strapiBlogSidebar.socialLinks.map(item => (
                            <li key={item.id}>
                                <a href={item.link} target="_blank" rel="noreferrer">
                                    <i className={item.iconName}></i>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="widget widget_categories">
                    <h3 className="widget-title">Categories</h3>

                    <div className="row">
                        {categories && categories.slice(0, 4).map(categorie => (
                            <div className="col-lg-6 col-md-3 col-6" key={categorie.id}>
                                <div className="single-categories-box">
                                    <img 
                                        src={categoriesImg1} 
                                        alt="image" 
                                        aria-hidden
                                    />
                                    <h4>{categorie.name} ({categorie.blogs && categorie.blogs.length})</h4>
                                    <Link 
                                        to={`/categories/${categorie.slug}`} className="link-btn"
                                    ></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            
                <div className="widget widget_buy_now">
                    <img 
                        src={adsImg2} 
                        alt="image" 
                        aria-hidden
                    />
                    <div className="content">
                        <img 
                            src={blackLogo} 
                            alt="Logo" 
                            aria-hidden
                        />
                        <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod.</p>
                        <Link to="#" className="buy-now-btn">
                            Buy Now
                        </Link>
                    </div>
                </div>
            </aside>
		</>
    );
}

export default Sidebar;
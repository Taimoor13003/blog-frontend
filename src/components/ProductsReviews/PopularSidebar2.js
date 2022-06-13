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

const PopularSidebar2 = () => {

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
			<aside className="popular-widget-area">
                <div className="widget popular_widget_categories">
                    <h3 className="widget-title">Hot Categories</h3>
                    {categories && categories.slice(0, 4).map(categorie => (
                        <div className="categories-box" key={categorie.id}>
                            <Link to={`/categories/${categorie.slug}`} className="link-btn">
                                <div className="d-flex justify-content-between align-items-center">
                                    {categorie.name} <span>({categorie.blogs && categorie.blogs.length})</span>
                                </div>
                            </Link> 
                        </div>
                    ))}
                </div>
                
                <div className="widget popular_widget_socials_link">
                    <h3 className="widget-title">Stay Connected</h3>

                    <ul>
                        {strapiBlogSidebar && strapiBlogSidebar.socialLinks.map(item => (
                            <li key={item.id}>
                                <a href={item.link} target="_blank" rel="noreferrer">
                                    <span>Follow us On <b>{item.name}</b></span>
                                    <i className={item.iconName}></i>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
             
                <div className="widget popular_widget_glin_posts_thumb">
                    <h3 className="widget-title">Popular Reviews</h3>
                    
                    {blogs && blogs.slice(5, 8).map(blog => (
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
                    <div className="widget popular_widget_custom_ads">
                        {strapiBlogSidebar.adsImg.map(item => (
                            <a 
                                href={item.link} 
                                className="d-block" 
                                target="_blank" 
                                rel="noreferrer" 
                                key={item.id}
                            >
                                <img 
                                    src={item.image.url} 
                                    alt={item.image.alternativeText} 
                                    aria-hidden
                                />
                            </a>
                        ))}
                    </div>
                )}
            </aside>
		</>
    );
}

export default PopularSidebar2;
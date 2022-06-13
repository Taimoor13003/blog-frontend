import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import Navbar from './../components/Layout/Navbar';
import PageTitle from "../components/Common/PageTitle";
import Footer from "../components/Layout/Footer";
import { Link, useStaticQuery, graphql } from "gatsby"
 
const query = graphql`
{   
    allStrapiTags(sort: {fields: strapiId, order: DESC}) {
        nodes {
            id
            name
            slug
            strapiId
            iconName
            blogs {
                id
            }
        }
    }
}
`

const TagsPage = () => {

    const data = useStaticQuery(query)
    const {
        allStrapiTags: { 
            nodes: tags 
        }
    } = data

    return (
        <Layout>
            <Seo title="Tags" />

            <Navbar />

            <PageTitle
                pageTitle="All Tags" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Tags" 
            />

            {tags && (
                <div className="categories-area pt-100 pb-70">
                    <div className="container">
                        <div className="row justify-content-center">
                            {tags.map(tag => (
                                <div className="col-lg-3 col-md-4 col-sm-6" key={tag.id}>
                                    <div className="single-categories-item bg2">
                                        <div className="icon">
                                            <i className={tag.iconName}></i>
                                        </div>

                                        <h3>{tag.name}</h3>

                                        <span>({tag.blogs && tag.blogs.length}) Items</span>

                                        <Link 
                                            to={`/tags/${tag.slug}`} 
                                            className="learn-more-btn"
                                        >
                                            View More <i className='bx bx-book-reader'></i>
                                        </Link>

                                        <Link 
                                            to={`/tags/${tag.slug}`} 
                                            className="link-btn"
                                        ></Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
 
            <Footer />
        </Layout>
    )
}

export default TagsPage
import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import Navbar from './../components/Layout/Navbar';
import PageTitle from "../components/Common/PageTitle";
import Footer from "../components/Layout/Footer";
import { Link, useStaticQuery, graphql } from "gatsby"
 
const query = graphql`
{   
    allStrapiCategories(sort: {fields: strapiId, order: DESC}) {
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

const CategoriesPage = () => {

    const data = useStaticQuery(query)
    const {
        allStrapiCategories: { 
            nodes: categories 
        }
    } = data

    return (
        <Layout>
            <Seo title="Categories" />

            <Navbar />

            <PageTitle
                pageTitle="All Categories" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Categories" 
            />

            {categories && (
                <div className="categories-area pt-100 pb-70">
                    <div className="container">
                        <div className="row justify-content-center">
                            {categories.map(categorie => (
                                <div className="col-lg-3 col-md-4 col-sm-6" key={categorie.id}>
                                    <div className="single-categories-item bg1">
                                        <div className="icon">
                                            <i className={categorie.iconName}></i>
                                        </div>

                                        <h3>{categorie.name}</h3>

                                        <span>({categorie.blogs && categorie.blogs.length}) Items</span>

                                        <Link 
                                            to={`/categories/${categorie.slug}`} 
                                            className="learn-more-btn"
                                        >
                                            View More <i className='bx bx-book-reader'></i>
                                        </Link>

                                        <Link 
                                            to={`/categories/${categorie.slug}`} 
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

export default CategoriesPage
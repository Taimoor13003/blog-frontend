import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import Navbar from './../components/Layout/Navbar';
import PageTitle from "../components/Common/PageTitle";
import SubscribeForm from "../components/Common/SubscribeForm";
import Footer from "../components/Layout/Footer";
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
    {
        strapiGallery {
            gallery {
                id
                image {
                    url
                    alternativeText
                }
            }
        }
    }
`

const GalleryPage = () => {

    const data = useStaticQuery(query)
    const {
        strapiGallery
    } = data

    return (
        <Layout>
            <Seo title="Gallery" />

            <Navbar />

            <PageTitle
                pageTitle="Gallery" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Gallery" 
            />

            {strapiGallery && (
                <div className="gallery-area pt-100 pb-70">
                    <div className="container">
                        <div className="row justify-content-center">
                            {strapiGallery.gallery.map(item => (
                                <div className="col-lg-4 col-md-6 col-sm-6" key={item.id}>
                                    <div className="single-gallery-item">
                                        <img 
                                            src={item.image.url} 
                                            alt={item.image.alternativeText}  
                                            aria-hidden
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            
            <SubscribeForm />

            <Footer />
        </Layout>
    )
}

export default GalleryPage
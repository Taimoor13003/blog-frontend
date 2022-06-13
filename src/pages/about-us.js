import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import Navbar from './../components/Layout/Navbar';
import PageTitle from "../components/Common/PageTitle";
import AboutUsContent from "../components/AboutUs/AboutUsContent";
import Footer from "../components/Layout/Footer";

const AboutUsPage = () => {
    return (
        <Layout>
            <Seo title="About Us" />

            <Navbar />

            <PageTitle
                pageTitle="About Us" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="About Us" 
            />

            <AboutUsContent />

            <Footer />
        </Layout>
    )
}

export default AboutUsPage
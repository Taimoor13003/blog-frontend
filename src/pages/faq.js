import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import Navbar from './../components/Layout/Navbar';
import PageTitle from "../components/Common/PageTitle";
import FaqContent from "../components/FAQ/FaqContent";
import Footer from "../components/Layout/Footer";

const FAQPage = () => {
    return (
        <Layout>
            <Seo title="FAQ" />

            <Navbar />

            <PageTitle
                pageTitle="Frequently Asked Questions" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="FAQ" 
            />

            <FaqContent />

            <Footer />
        </Layout>
    )
}

export default FAQPage
import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import Navbar from './../components/Layout/Navbar';
import PageTitle from "../components/Common/PageTitle";
import TermsConditionsContent from "../components/TermsConditions/TermsConditionsContent";
import Footer from "../components/Layout/Footer";

const TermsConditionsPage = () => {
    return (
        <Layout>
            <Seo title="Terms & Conditions" />

            <Navbar />

            <PageTitle
                pageTitle="Terms & Conditions" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Terms & Conditions" 
            />

            <TermsConditionsContent />
  
            <Footer />
        </Layout>
    )
}

export default TermsConditionsPage
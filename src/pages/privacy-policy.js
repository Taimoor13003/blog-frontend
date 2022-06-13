import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import Navbar from './../components/Layout/Navbar';
import PageTitle from "../components/Common/PageTitle";
 
import Footer from "../components/Layout/Footer";
import PrivacyPolicyContent from "../components/PrivacyPolicy/PrivacyPolicyContent";

const PrivacyPolicyPage = () => {
    return (
        <Layout>
            <Seo title="Privacy Policy" />

            <Navbar />

            <PageTitle
                pageTitle="Privacy Policy" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Privacy Policy" 
            />

            <PrivacyPolicyContent />

            <Footer />
        </Layout>
    )
}

export default PrivacyPolicyPage
import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import Navbar from './../components/Layout/Navbar';
import PageTitle from "../components/Common/PageTitle";
import GoogleMap from "../components/ContactUs/GoogleMap";
import ContactForm from "../components/ContactUs/ContactForm";
import ContactInfo from "../components/ContactUs/ContactInfo";
import SubscribeForm from "../components/Common/SubscribeForm";
import Footer from "../components/Layout/Footer";

const ContactUsPage = () => {
    return (
        <Layout>
            <Seo title="Contact Us" />

            <Navbar />

            <PageTitle
                pageTitle="Contact Us" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Contact Us" 
            />

            <GoogleMap />

            <ContactForm />

            <ContactInfo />

            <SubscribeForm />
 
            <Footer />
        </Layout>
    )
}

export default ContactUsPage
import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import Navbar from './../components/Layout/Navbar';
import PageTitle from "../components/Common/PageTitle";
import BlogWithLeftSidebar from "../components/Blog/BlogWithLeftSidebar";
import SubscribeForm from "../components/Common/SubscribeForm";
import Footer from "../components/Layout/Footer";

const BlogPage = () => {
    return (
        <Layout>
            <Seo title="Blog" />

            <Navbar />

            <PageTitle
                pageTitle="Blog Left Sidebar" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Blog Left Sidebar" 
            />

            <BlogWithLeftSidebar />

            <SubscribeForm />

            <Footer />
        </Layout>
    )
}

export default BlogPage
import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import Navbar from './../components/Layout/Navbar';
import PageTitle from "../components/Common/PageTitle";
import BlogWithRightSidebar from "../components/Blog/BlogWithRightSidebar";
import SubscribeForm from "../components/Common/SubscribeForm";
import Footer from "../components/Layout/Footer";

const BlogPage = () => {
    return (
        <Layout>
            <Seo title="Blog" />

            <Navbar />

            <PageTitle
                pageTitle="Blog Right Sidebar" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Blog Right Sidebar" 
            />

            <BlogWithRightSidebar />

            <SubscribeForm />

            <Footer />
        </Layout>
    )
}

export default BlogPage
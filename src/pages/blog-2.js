import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import Navbar from './../components/Layout/Navbar';
import PageTitle from "../components/Common/PageTitle";
import BlogPostGrid3 from "../components/Blog/BlogPostGrid3";
import Footer from "../components/Layout/Footer";
import SubscribeForm from "../components/Common/SubscribeForm";

const BlogPage = () => {
    return (
        <Layout>
            <Seo title="Blog" />

            <Navbar />

            <PageTitle
                pageTitle="Blog Grid 3 in Row" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Blog Grid 3 in Row" 
            />

            <BlogPostGrid3 />

            <SubscribeForm />

            <Footer />
        </Layout>
    )
}

export default BlogPage
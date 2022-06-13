import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import Navbar from './../components/Layout/Navbar';
import PageTitle from "../components/Common/PageTitle";
import BlogPostGrid2 from "../components/Blog/BlogPostGrid2";
import Footer from "../components/Layout/Footer";
import SubscribeForm from "../components/Common/SubscribeForm";

const BlogPage = () => {
    return (
        <Layout>
            <Seo title="Blog" />

            <Navbar />

            <PageTitle
                pageTitle="Blog Grid 2 in Row" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Blog Grid 2 in Row" 
            />

            <BlogPostGrid2 />

            <SubscribeForm />

            <Footer />
        </Layout>
    )
}

export default BlogPage
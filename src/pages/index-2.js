import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import Navbar from './../components/Layout/Navbar';
import MainBanner from "../components/Index/MainBanner";
import TopProductsReviews from "../components/ProductsReviews/TopProductsReviews";
import TrendingReviews from "../components/ProductsReviews/TrendingReviews";
import VideosReviews from "../components/ProductsReviews/VideosReviews";
import WhatsHotToday from "../components/ProductsReviews/WhatsHotToday";
import TechAndGadgets from "../components/ProductsReviews/TechAndGadgets";
import CarAccessories from "../components/ProductsReviews/CarAccessories";
import LatestReviews from "../components/ProductsReviews/LatestReviews";
import SubscribeForm from "../components/Common/SubscribeForm";
import Footer from "../components/Layout/Footer";

const IndexPage = () => {
    return (
        <Layout>
            <Seo title="Home 1" />

            <Navbar />

            <MainBanner />

            <TopProductsReviews />

            <TrendingReviews />

            <VideosReviews />

            <WhatsHotToday />

            <TechAndGadgets />

            <CarAccessories />

            <LatestReviews />
            
            <SubscribeForm />

            <Footer />
        </Layout>
    )
}

export default IndexPage
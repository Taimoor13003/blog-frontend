import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import NavbarStyleTwo from './../components/Layout/NavbarStyleTwo';
import TopCategories from "../components/Index2/TopCategories";
import TrendingReviewsStyle2 from "../components/ProductsReviews/TrendingReviewsStyle2";
import VideosReviews from "../components/ProductsReviews/VideosReviews";
import WhatsHotToday from "../components/ProductsReviews/WhatsHotToday";
import TechAndGadgets from "../components/ProductsReviews/TechAndGadgets";
import CarAccessoriesStyle2 from "../components/ProductsReviews/CarAccessoriesStyle2";
import LatestReviews from "../components/ProductsReviews/LatestReviews";
import SubscribeForm from "../components/Common/SubscribeForm";
import Footer from "../components/Layout/Footer";

const IndexPage2 = () => {
    return (
        <Layout>
            <Seo title="Home 2" />

            <NavbarStyleTwo />

            <TopCategories />

            <TrendingReviewsStyle2 />

            <VideosReviews />

            <WhatsHotToday />

            <TechAndGadgets />

            <CarAccessoriesStyle2 />

            <LatestReviews />

            <SubscribeForm />
   
            <Footer />
        </Layout>
    )
}

export default IndexPage2
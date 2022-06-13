import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import NavbarStyleThree from "../components/Layout/NavbarStyleThree";
import NavbarTopArea2 from "../components/Layout/NavbarTopArea2";
import MainBanner from "../components/Index3/MainBanner";
import TrendingReviewsStyle2 from "../components/ProductsReviews/TrendingReviewsStyle2";
import CategoriesReviews from "../components/ProductsReviews/CategoriesReviews";
import VideosReviews from "../components/ProductsReviews/VideosReviews";
import WhatsHotToday from "../components/ProductsReviews/WhatsHotToday";
import TechAndGadgets from "../components/ProductsReviews/TechAndGadgets";
import CarAccessoriesStyle2 from "../components/ProductsReviews/CarAccessoriesStyle2";
import LatestReviews from "../components/ProductsReviews/LatestReviews";
import SubscribeForm from "../components/Common/SubscribeForm";
import Footer from "../components/Layout/Footer";
 
const IndexPage3 = () => {
    return (
        <Layout>
            <Seo title="Home 3" />

            <NavbarTopArea2 />

            <NavbarStyleThree />

            <MainBanner />

            <TrendingReviewsStyle2 />

            <CategoriesReviews />

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

export default IndexPage3
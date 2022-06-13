import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import NavbarStyleFour from "../components/Layout/NavbarStyleFour";
import NavbarTopArea3 from "../components/Layout/NavbarTopArea3";
import MainBanner from './../components/Index4/MainBanner';
import TrendingReviews3 from './../components/ProductsReviews/TrendingReviews3';
import WhatsNewTodays from "../components/ProductsReviews/WhatsNewTodays";
import Tech from "../components/ProductsReviews/Tech";
import VideosReviews2 from './../components/ProductsReviews/VideosReviews2';
import Reviews from './../components/ProductsReviews/Reviews';
import PopularReviews from './../components/ProductsReviews/PopularReviews';
import SubscribeForm2 from "../components/Common/SubscribeForm2";
import Footer2 from "../components/Layout/Footer2";

const IndexPage4 = () => {
    return (
        <Layout>
            <Seo title="Home 4" />

            <NavbarTopArea3 />

            <NavbarStyleFour />

            <MainBanner />

            <TrendingReviews3 />

            <WhatsNewTodays />

            <Tech />

            <VideosReviews2 />

            <Reviews />

            <PopularReviews />
 
            <SubscribeForm2 />
 
            <Footer2 />
        </Layout>
    )
}

export default IndexPage4
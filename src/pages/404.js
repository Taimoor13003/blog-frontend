import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import Navbar from './../components/Layout/Navbar';
import Footer from "../components/Layout/Footer";
import { Link, graphql, useStaticQuery } from "gatsby"

const query = graphql`
    {
        strapi404Error {
			image {
				url
				alternativeText
			}
			title
			shortDec
			btnText
			btnUrl
		}
    }
` 

const NotFoundPage = () => {

	const data = useStaticQuery(query)
    const {
        strapi404Error
    } = data

    return (
        <Layout>
            <Seo title="404" />

            <Navbar />

			{strapi404Error && (
				<div className="error-area ptb-100">
					<div className="container">
						<div className="error-content">
							<img 
								src={strapi404Error.image.url} 
								alt={strapi404Error.image.alternativeText} 
							/>

							<h3>{strapi404Error.title}</h3>

							<p>{strapi404Error.shortDec}</p>

							<Link to={strapi404Error.btnUrl} className="default-btn">
								{strapi404Error.btnText}
							</Link>
						</div>
					</div>
				</div>
			)}

            <Footer />
        </Layout>
    )
}

export default NotFoundPage
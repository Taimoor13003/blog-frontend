import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ReactMarkdown from "react-markdown"
import Sidebar from "../AboutUs/Sidebar";

const query = graphql`
    {
        strapiTermsAndConditions {
            content
        }
    }
`

const TermsConditionsContent = () => {

    const data = useStaticQuery(query)
    const {
        strapiTermsAndConditions
    } = data

    return (
		<>
			<div className="about-area ptb-100">
                <div className="container">
                    <div className="row">
                        {strapiTermsAndConditions && (
                            <div className="col-lg-8 col-md-12">
                                <div className="about-content">
                                    <ReactMarkdown>
                                        {strapiTermsAndConditions.content}
                                    </ReactMarkdown>
                                </div>
                            </div>
                        )}

                        <div className="col-lg-4 col-md-12">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </div>
		</>
    );
}

export default TermsConditionsContent;
import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ReactMarkdown from "react-markdown"
import Sidebar from "../AboutUs/Sidebar";

const query = graphql`
    {
        strapiPrivacyPolicy {
            content
        }
    }
`

const PrivacyPolicyContent = () => {

    const data = useStaticQuery(query)
    const {
        strapiPrivacyPolicy
    } = data

    return (
		<>
            {strapiPrivacyPolicy && (
                <div className="about-area ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div className="about-content">
                                    <ReactMarkdown>
                                        {strapiPrivacyPolicy.content}
                                    </ReactMarkdown>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <Sidebar />
                            </div>
                        </div>
                    </div>
                </div>
            )}
		</>
    );
}

export default PrivacyPolicyContent;
import * as React from "react"
import Sidebar from "./Sidebar";
import { graphql, useStaticQuery } from "gatsby"
import ReactMarkdown from "react-markdown"

const query = graphql`
    {
        strapiAboutUs {
            content
        }
    }
`

const AboutUsContent = () => {

    const data = useStaticQuery(query)
    const {
        strapiAboutUs
    } = data

    return (
		<>
            {strapiAboutUs && (
                <div className="about-area ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div className="about-content">
                                    <ReactMarkdown>
                                        {strapiAboutUs.content}
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

export default AboutUsContent;
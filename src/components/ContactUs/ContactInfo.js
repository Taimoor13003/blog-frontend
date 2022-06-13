import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ReactMarkdown from "react-markdown"

const query = graphql`
    {
        strapiContactInfo {
            info {
                id
                iconName
                title
                text
            }
        }
    }
`

const ContactInfo = () => {

    const data = useStaticQuery(query)
    const {
        strapiContactInfo
    } = data

    return (
		<>
            {strapiContactInfo && (
                <div className="contact-info-area pb-70">
                    <div className="container">
                        <div className="row justify-content-center">
                            {strapiContactInfo.info.map(list => (
                                <div className="col-lg-4 col-md-6" key={list.id}>
                                    <div className="contact-info-box">
                                        <div className="back-icon">
                                            <i className={list.iconName}></i>
                                        </div>
                                        <div className="icon">
                                            <i className={list.iconName}></i>
                                        </div>
                                        <h3>{list.title}</h3>
                            
                                        <ReactMarkdown>
                                            {list.text}
                                        </ReactMarkdown>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
		</>
    );
}

export default ContactInfo;
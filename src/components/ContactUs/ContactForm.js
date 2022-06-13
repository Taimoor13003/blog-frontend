import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
    {
        strapiContactInfo {
            image {
                url
                alternativeText
            }
        }
    }
`

const ContactForm = () => {

    const data = useStaticQuery(query)
    const {
        strapiContactInfo
    } = data

    return (
		<>
			<div className="contact-area ptb-100">
                <div className="container">
                    <div className="row">
                        {strapiContactInfo && (
                            <div className="col-lg-6 col-md-12">
                                <div className="contact-image">
                                    <img 
                                        src={strapiContactInfo.image.url} 
                                        alt={strapiContactInfo.image.alternativeText} 
                                    />
                                </div>
                            </div>
                        )}

                        <div className="col-lg-6 col-md-12">
                            <div className="contact-form">
                                {/* Create your getform API key and update here */}
                                <form id="contactForm" action="https://getform.io/f/37c4cd67-6e27-40e1-b0c9-0e63d8f0448e" method="POST">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-6">
                                            <div className="form-group mb-3">
                                                <input 
                                                    type="text" 
                                                    name="name" 
                                                    placeholder="Your name" 
                                                    className="form-control" 
                                                    required 
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-6">
                                            <div className="form-group mb-3">
                                                <input 
                                                    type="email" 
                                                    name="email" 
                                                    placeholder="Your email address" 
                                                    className="form-control" 
                                                    required 
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group mb-3">
                                                <input 
                                                    type="text" 
                                                    name="number" 
                                                    placeholder="Your phone number" 
                                                    className="form-control" 
                                                    required 
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group mb-3">
                                                <input 
                                                    type="text" 
                                                    name="subject" 
                                                    placeholder="Your Subject" 
                                                    className="form-control" 
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group mb-3">
                                                <textarea 
                                                    name="message" 
                                                    id="message" 
                                                    className="form-control" 
                                                    cols="30" 
                                                    rows="6" 
                                                    required 
                                                    placeholder="Write your message..."
                                                ></textarea>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <button type="submit" className="default-btn">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		</>
    );
}

export default ContactForm;
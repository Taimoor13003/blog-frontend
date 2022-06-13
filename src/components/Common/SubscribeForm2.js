import * as React from "react"

const SubscribeForm2 = () => {
    return (
		<>
			<div className="subscribe-area pb-100">
                <div className="container">
                    <div className="subscribe-inner-area without-border ptb-70">
                        <div className="content">
                            <h2>Subscribe To Our Weekly Newsletter</h2>
                            <form className="newsletter-form">
                                <input 
                                    type="email" 
                                    className="input-newsletter" 
                                    placeholder="Enter your email address" 
                                    name="EMAIL" 
                                    required 
                                />
                                <button type="submit">Subscribe Now</button>
                            </form>
                            <p>No spam, notifications only about new products, updates.</p>
                        </div>
                    </div>
                </div>
            </div>
		</>
    );
}

export default SubscribeForm2;
import * as React from "react"

const RegisterForm = () => {
    return (
		<>
			<div className="register">
                <div className="register-with-account">
                    <span>Register with</span>
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/" className="facebook" target="_blank" rel="noreferrer">
                                <i className='bx bxl-facebook'></i> Facebook
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/" className="twitter" target="_blank" rel="noreferrer">
                                <i className='bx bxl-twitter'></i> Twitter
                            </a>
                        </li>
                    </ul>
                </div>

                <span className="sub-title">
                    <span>Or register with</span>
                </span>

                <form>
                    <div className="form-group">
                        <input 
                            type="text" 
                            placeholder="Username" 
                            className="form-control" 
                        />
                    </div>

                    <div className="form-group">
                        <input 
                            type="email" 
                            placeholder="Email" 
                            className="form-control" 
                        />
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group">
                                <input 
                                    type="password" 
                                    placeholder="Password" 
                                    className="form-control" 
                                />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="form-group">
                                <input 
                                    type="password" 
                                    placeholder="Confirm Password" 
                                    className="form-control" 
                                />
                            </div>
                        </div>
                    </div>
 
                    <button type="submit">Register Now</button>
                </form>

                <span className="already-account">
                    Already have an account? Click to Login
                </span>
            </div>
		</>
    );
}

export default RegisterForm;
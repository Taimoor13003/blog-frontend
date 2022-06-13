import * as React from "react"

const LoginForm = () => {
    return (
		<>
			<div className="login">
                <div className="login-with-account">
                    <span>Login with</span>
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/" className="facebook" target="_blank" rel="noreferrer">
                                <i className='bx bxl-facebook'></i> 
                                Facebook
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
                    <span>Or login with</span>
                </span>

                <form>
                    <div className="form-group">
                        <input 
                            type="text" 
                            placeholder="Username or Email" 
                            className="form-control" 
                        />
                    </div>

                    <div className="form-group">
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className="form-control" 
                        />
                    </div>

                    <button type="submit">Login Now</button>
                </form>

                <span className="dont-account">
                    Don't have an account? Click to Register
                </span>
            </div>
		</>
    );
}

export default LoginForm;
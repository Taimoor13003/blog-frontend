import React, { useState } from "react";
import { Link, graphql, useStaticQuery } from "gatsby"
import LoginRegisterTab from "../LoginRegister/LoginRegisterTab";

const query = graphql`
  	{
		strapiNavbar {
            logo {
                url
                alternativeText
            }
        }
  	}
`

const NavbarTopArea = () => {

    const data = useStaticQuery(query)
    const {strapiNavbar: {
        logo
    }} = data;
 
    const [isActiveLRModal, setActiveLRModal] = useState("false");
    const handleToggleLRModal = () => {
        setActiveLRModal(!isActiveLRModal);
    };

    return (
		<>
			<div className="navbar-top-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-6">
                            <div className="top-logo">
                                <div className="d-flex align-items-center">
                                    <Link 
                                        className="logo d-none d-lg-block" 
                                        to="/"
                                    >
                                        <img
                                            src={logo.url} 
                                            alt={logo.alternativeText} 
                                            aria-hidden
                                        />
                                    </Link>

                                    <form className="navbar-search-box">
                                        <label><i className='bx bx-search-alt'></i></label>
                                        <input 
                                            type="text" 
                                            className="input-search" 
                                            placeholder="What are you looking for?" 
                                        />
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-6">
                            <div className="top-others-option">
                                <div className="others-option">
                                    <div className="option-item">
                                        <span onClick={handleToggleLRModal}>
                                            <i className='bx bx-user-circle'></i> Login / Register
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Start Login & Register Modal */}
            <div className={`modal fade loginRegisterModal ${isActiveLRModal ? "" : "show"}`}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <button type="button" className="close" onClick={handleToggleLRModal}>
                            <i className='bx bx-x'></i>
                        </button>

                        {/* Login/Register Tab */}
                        <LoginRegisterTab />
                    </div>
                </div>
            </div>
            {/* End Login & Register Modal */}
		</>
    );
}

export default NavbarTopArea;
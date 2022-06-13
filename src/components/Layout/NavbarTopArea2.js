import React, { useState } from "react";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby"
import LoginRegisterTab from "../LoginRegister/LoginRegisterTab";

const query = graphql`
    {
        strapiTopHeader {
            pages {
                id
                text
                link
            }
        }
    }
`

const NavbarTopArea2 = () => {

    const data = useStaticQuery(query)
    const {
        strapiTopHeader
    } = data
 
    const [isActiveLRModal, setActiveLRModal] = useState("false");
    const handleToggleLRModal = () => {
        setActiveLRModal(!isActiveLRModal);
    };

    return (
		<>
			<header className="top-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <ul className="top-header-info">
                                {strapiTopHeader.pages.slice(0, 5).map(page => (
                                    <li key={page.id}>
                                        <Link to={page.link}>
                                            {page.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="top-header-right">
                                <span onClick={handleToggleLRModal}>
                                    <i className='bx bx-user-circle'></i> Login / Register
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

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

export default NavbarTopArea2;
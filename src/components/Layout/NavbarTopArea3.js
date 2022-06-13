import React, { useState } from "react";
import { Link, useStaticQuery, graphql } from "gatsby"
import LoginRegisterTab from "../LoginRegister/LoginRegisterTab";

const query = graphql`
{   
    allStrapiBlogs(sort: {fields: strapiId, order: DESC}) {
        nodes {
            id
            title
            slug
        }
    }

    strapiSocialsLinks {
        links {
            id
            name
            iconName
            link
        }
    }
}
`
 

const NavbarTopArea3 = () => {
 
    const [isActiveLRModal, setActiveLRModal] = useState("false");
    const handleToggleLRModal = () => {
        setActiveLRModal(!isActiveLRModal);
    };

    const data = useStaticQuery(query)
    const {
        allStrapiBlogs: { nodes: blogs },
        strapiSocialsLinks
    } = data

    return (
		<>
			<header className="top-header glin-new-top-header">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <ul className="header-info">
                                <li>
                                    <i className='bx bxs-zap'></i> Trending Today: {' '}

                                    {blogs.slice(0,1).map(blog => (
                                        <Link to={`/blogs/${blog.slug}`} key={blog.id}>
                                            {blog.title}
                                        </Link>
                                    ))} 
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <ul className="header-right">
                                <li>
                                    <span onClick={handleToggleLRModal}>
                                        <i className='bx bx-user-circle'></i> Login / Register
                                    </span>
                                </li>
                                <li>Follow Us On: </li>

                                {strapiSocialsLinks.links.map(social => (
                                    <li key={social.id}>
                                        <a href={social.link} target="_blank" rel="noreferrer">
                                            <i className={social.iconName}></i>
                                        </a>
                                    </li>
                                ))} 
                            </ul>
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

export default NavbarTopArea3;
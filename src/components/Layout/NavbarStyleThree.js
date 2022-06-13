import React, { useState } from "react"; 
import { Link, graphql, useStaticQuery } from "gatsby"

const query = graphql`
  	{
		strapiNavbar {
            logo {
                url
                alternativeText
            }
        }
        strapiSidebarModal {
            instagram {
                id
                image {
                    url
                    alternativeText
                }
                link
            }
            phoneNumber
            email
            socialLinks {
                id
                iconName
                link
            }
        }
  	}
`

const NavbarStyleThree = () => {

    const data = useStaticQuery(query)
    const {
        strapiNavbar: {
            logo
        },
        strapiSidebarModal
    } = data;

    const [menu, setMenu] = React.useState(true)
 
    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        }); 
    })

    // Sidebar Modal
    const [isActiveSidebarModal, setActiveSidebarModal] = useState("false");
    const handleToggleSidebarModal = () => {
        setActiveSidebarModal(!isActiveSidebarModal);
    };

    // Search Modal
    const [isActiveSearchModal, setActiveSearchModal] = useState("false");
    const handleToggleSearchModal = () => {
        setActiveSearchModal(!isActiveSearchModal);
    };

    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <>
            <div id="navbar" className="navbar-area navbar-style-three">
                <div className="main-nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Link to="/" onClick={toggleNavbar} className="navbar-brand">
                                <img
                                    src={logo.url} 
                                    alt={logo.alternativeText} 
                                    aria-hidden
                                />
                            </Link>

                            <button 
                                onClick={toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" 
                                aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <Link to="#" 
                                            onClick={e => e.preventDefault()} 
                                            className="nav-link dropdown-toggle"
                                        >
                                            Home
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link 
                                                    to="/" 
                                                    activeClassName="active" 
                                                    onClick={toggleNavbar} 
                                                    className="nav-link"
                                                >
                                                    Home Demo - 1
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/index-2" 
                                                    activeClassName="active" 
                                                    onClick={toggleNavbar} 
                                                    className="nav-link"
                                                >
                                                    Home Demo - 2
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/index-3" 
                                                    activeClassName="active" 
                                                    onClick={toggleNavbar} 
                                                    className="nav-link"
                                                >
                                                    Home Demo - 3
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/index-4" 
                                                    activeClassName="active" 
                                                    onClick={toggleNavbar} 
                                                    className="nav-link"
                                                >
                                                    Home Demo - 4
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link 
                                            to="#" 
                                            onClick={e => e.preventDefault()} 
                                            className="nav-link dropdown-toggle"
                                        >
                                            Pages
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link 
                                                    to="/about-us" 
                                                    activeClassName="active" 
                                                    onClick={toggleNavbar} 
                                                    className="nav-link"
                                                >
                                                    About Us
                                                </Link>
                                            </li>
 
                                            <li className="nav-item">
                                                <Link 
                                                    to="/gallery" 
                                                    activeClassName="active" 
                                                    onClick={toggleNavbar} 
                                                    className="nav-link"
                                                >
                                                    Gallery
                                                </Link>
                                            </li>
     
                                            <li className="nav-item">
                                                <Link 
                                                    to="/faq" 
                                                    activeClassName="active" 
                                                    onClick={toggleNavbar} 
                                                    className="nav-link"
                                                >
                                                    FAQ's
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/404" 
                                                    activeClassName="active" 
                                                    onClick={toggleNavbar} 
                                                    className="nav-link"
                                                >
                                                    404 Error Page
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/coming-soon" 
                                                    activeClassName="active" 
                                                    onClick={toggleNavbar} 
                                                    className="nav-link"
                                                >
                                                    Coming Soon
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/contact-us" 
                                                    activeClassName="active" 
                                                    onClick={toggleNavbar} 
                                                    className="nav-link"
                                                >
                                                    Contact Us
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/privacy-policy" 
                                                    activeClassName="active" 
                                                    onClick={toggleNavbar} 
                                                    className="nav-link"
                                                >
                                                    Privacy Policy
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/terms-conditions" 
                                                    activeClassName="active" 
                                                    onClick={toggleNavbar} 
                                                    className="nav-link"
                                                >
                                                    Terms & Conditions
                                                </Link>
                                            </li> 
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link 
                                            to="#" 
                                            onClick={e => e.preventDefault()} 
                                            className="nav-link dropdown-toggle"
                                        >
                                            Technologies 
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link 
                                                    to="/categories/headphones" 
                                                    activeClassName="active" 
                                                    onClick={toggleNavbar} 
                                                    className="nav-link"
                                                >
                                                    Headphones
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/categories/smartwatch" 
                                                    activeClassName="active" 
                                                    onClick={toggleNavbar} 
                                                    className="nav-link"
                                                >
                                                    Smartwatch
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/categories/smartphones" 
                                                    activeClassName="active" 
                                                    onClick={toggleNavbar} 
                                                    className="nav-link"
                                                >
                                                    Smartphones
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/categories/games" 
                                                    activeClassName="active" 
                                                    onClick={toggleNavbar} 
                                                    className="nav-link"
                                                >
                                                    Games
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/categories/tablets" 
                                                    activeClassName="active" 
                                                    onClick={toggleNavbar} 
                                                    className="nav-link"
                                                >
                                                    Tablets
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/categories/cameras" 
                                                    activeClassName="active" 
                                                    onClick={toggleNavbar} 
                                                    className="nav-link"
                                                >
                                                    Cameras
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/categories/laptops" 
                                                    activeClassName="active" 
                                                    onClick={toggleNavbar} 
                                                    className="nav-link"
                                                >
                                                    Laptops
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link 
                                            to="#" 
                                            onClick={e => e.preventDefault()} 
                                            className="nav-link dropdown-toggle"
                                        >
                                            Accessories 
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link 
                                                    to="/categories/air" 
                                                    activeClassName="active" 
                                                    onClick={toggleNavbar} 
                                                    className="nav-link"
                                                >
                                                    Air
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/categories/specs" 
                                                    activeClassName="active" 
                                                    onClick={toggleNavbar} 
                                                    className="nav-link"
                                                >
                                                    Specs
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/categories/car" 
                                                    activeClassName="active" 
                                                    onClick={toggleNavbar} 
                                                    className="nav-link"
                                                >
                                                    Car
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/categories/videos" 
                                                    activeClassName="active" 
                                                    onClick={toggleNavbar} 
                                                    className="nav-link"
                                                >
                                                    Videos
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/categories/bicycle" 
                                                    activeClassName="active" 
                                                    onClick={toggleNavbar} 
                                                    className="nav-link"
                                                >
                                                    Bicycle
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
  
                                    <li className="nav-item">
                                        <Link 
                                            to="#" 
                                            onClick={e => e.preventDefault()} 
                                            className="nav-link dropdown-toggle"
                                        >
                                            Blog
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link 
                                                    to="/blog" 
                                                    activeClassName="active" 
                                                    onClick={toggleNavbar} 
                                                    className="nav-link"
                                                >
                                                    Grid (2 in Row)
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/blog-2" 
                                                    activeClassName="active" 
                                                    onClick={toggleNavbar} 
                                                    className="nav-link"
                                                >
                                                    Grid (3 in Row)
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/blog-3" 
                                                    activeClassName="active" 
                                                    onClick={toggleNavbar} 
                                                    className="nav-link"
                                                >
                                                    Right Sidebar
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/blog-3" 
                                                    activeClassName="active" 
                                                    onClick={toggleNavbar} 
                                                    className="nav-link"
                                                >
                                                    Left Sidebar
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/blog-4" 
                                                    activeClassName="active" 
                                                    onClick={toggleNavbar} 
                                                    className="nav-link"
                                                >
                                                    Left Sidebar
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/categories" 
                                                    activeClassName="active" 
                                                    onClick={toggleNavbar} 
                                                    className="nav-link"
                                                >
                                                    Blog Categories
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/tags" 
                                                    activeClassName="active" 
                                                    onClick={toggleNavbar} 
                                                    className="nav-link"
                                                >
                                                    Blog Tags
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link 
                                            to="/contact-us" 
                                            activeClassName="active" 
                                            onClick={toggleNavbar} 
                                            className="nav-link"
                                        >
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="others-option d-flex align-items-center">
                                <div className="option-item">
                                    <div className="search-box" onClick={handleToggleSearchModal}>
                                        <i className='bx bx-search-alt'></i>
                                    </div>
                                </div>

                                <div className="option-item">
                                    <div className="side-menu-btn" onClick={handleToggleSidebarModal}>
                                        <i className="bx bx-menu"></i>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            
            {/* Sidebar Modal */}
            <div className={`sidebarModal modal right fade ${isActiveSidebarModal ? "" : "show"}`}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <button type="button" className="close" onClick={handleToggleSidebarModal}>
                            <i className='bx bx-x'></i>
                        </button>

                        <div className="modal-body">
                            <div className="logo">
                                <Link to="/" className="d-inline-block">
                                    <img
                                        src={logo.url}
                                        alt={logo.alternativeText} 
                                        aria-hidden
                                    />
                                </Link>
                            </div>

                            <div className="instagram-list">
                                <div className="row justify-content-center">
                                    {strapiSidebarModal.instagram.slice(0, 10).map(post => (
                                        <div className="col-lg-4 col-md-4 col-sm-4 col-6" key={post.id}>
                                            <div className="box">
                                                <img 
                                                    src={post.image.url} 
                                                    alt={post.image.alternativeText}  
                                                    aria-hidden
                                                />
                                                <i className='bx bxl-instagram'></i>
                                                <a 
                                                    href={post.link} 
                                                    target="_blank" 
                                                    className="link-btn" 
                                                    rel="noreferrer"
                                                ></a>
                                            </div>
                                        </div> 
                                    ))}
                                </div>
                            </div>
                            
                            <div className="sidebar-contact-info">
                                <h2>
                                    <a href={`tel:${strapiSidebarModal.phoneNumber}`}>
                                        {strapiSidebarModal.phoneNumber}
                                    </a>

                                    <span>OR</span>

                                    <a href={`mailto:${strapiSidebarModal.email}`}>
                                        {strapiSidebarModal.email}
                                    </a>
                                </h2>
                            </div>

                            <ul className="social-list">
                                <li><span>Follow Us On:</span></li>

                                {strapiSidebarModal.socialLinks.map(item => (
                                    <li key={item.id}>
                                        <a href={item.link} target="_blank" rel="noreferrer">
                                            <i className={item.iconName}></i>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search Modal */}
            <div className={`search-overlay ${isActiveSearchModal ? "" : "search-overlay-active"}`}>
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="search-overlay-layer"></div>
                        <div className="search-overlay-layer"></div>
                        <div className="search-overlay-layer"></div>

                        <div className="search-overlay-close" onClick={handleToggleSearchModal}>
                            <span className="search-overlay-close-line"></span>
                            <span className="search-overlay-close-line"></span>
                        </div>

                        <div className="search-overlay-form">
                            <form>
                                <input 
                                    type="text" 
                                    className="input-search" 
                                    placeholder="Search here..." 
                                />
                                <button type="submit">
                                    <i className="bx bx-search-alt"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavbarStyleThree;
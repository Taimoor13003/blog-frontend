import * as React from "react"
import { Link } from 'gatsby' 
import NavbarTopArea from "./NavbarTopArea";
import { graphql, useStaticQuery } from "gatsby"

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

const NavbarStyleTwo = () => {

    const data = useStaticQuery(query)
    const {strapiNavbar: {
        logo
    }} = data;

    const [menu, setMenu] = React.useState(true)
 
    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 60) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        }); 
    })
 
    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <>
            <div id="navbar" className="navbar-area navbar-style-two">

                {/* Navbar Top Area */}
                <NavbarTopArea />

                <div className="main-nav">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Link 
                                to="/" 
                                onClick={toggleNavbar} 
                                className="navbar-brand d-lg-none" 
                            >
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
                                <ul className="navbar-nav m-auto">
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
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavbarStyleTwo;
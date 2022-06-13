import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import Navbar from './../components/Layout/Navbar';
import PageTitle from "../components/Common/PageTitle";
import Footer from "../components/Layout/Footer";
import { graphql } from "gatsby"
import { Link } from 'gatsby'

const TagPage = ({ data }) => {

    const { 
        name,
        blogs,
    } = data.tag

    return (
        <Layout>

            <Seo title="Tags" />

            <Navbar />
        
            <PageTitle
                pageTitle={name} 
                homePageText="Tags" 
                homePageUrl="/tags" 
                activePageText={name} 
            />

            <div className="pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        {blogs.length > 0 ? blogs.map((blog) => (
                            <div className="col-lg-4 col-sm-6" key={blog.id}>
                                <div className="products-review-item box-shadow">
                                    <div className="image">
                                        <Link to={`/blogs/${blog.slug}`} className="d-block">
                                            <img
                                                src={blog.image.url}
                                                alt={blog.image.alternativeText}
                                                aria-hidden
                                            />
                                        </Link>
                                    </div>

                                    <div className="content">
                                        <div className="category">
                                            {name}
                                        </div>
                                        <h3>
                                            <Link to={`/blogs/${blog.slug}`}>
                                                {blog.title}
                                            </Link>
                                        </h3>
                                        <ul className="meta">
                                            <li>
                                                <i className='bx bx-calendar'></i> {blog.CreateAtDate}
                                            </li>
                                            <li>
                                                <i className='bx bx-time'></i> {blog.readingTime}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))
                        :<>
                            <p className="fs-5 text-center mb-4">Not Found Post!</p>
                        </>}
                    </div>
                </div>
            </div>
 
            <Footer />
        </Layout>
    )
}

export const query = graphql`
    query GetTags($slug: String) {
        tag: strapiTags(slug: { eq: $slug }) {
            name
            blogs {
                id
                title
                slug
                shortText
                readingTime
                image {
                    url
                    alternativeText
                }
                CreateAtDate(formatString: "MMMM Do, YYYY")
            }
        }
    }
`

export default TagPage;
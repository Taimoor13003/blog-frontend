import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import Navbar from './../components/Layout/Navbar';
import PageTitle from "../components/Common/PageTitle";
import Footer from "../components/Layout/Footer";
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import Sidebar from "../components/Blog/Sidebar";
import { DiscussionEmbed } from 'disqus-react';
import { Link } from 'gatsby'

import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
} from 'react-share';

const BlogDetailsPage = ({ data }) => {
    const { 
        title,
        image,
        slug,
        CreateAtDate,
        longDescription,
        author,
        tags
    } = data.blog

    return (
        <Layout>

            <Seo title="Blog Details" />

            <Navbar />
        
            <PageTitle
                pageTitle={title} 
                homePageText="Blog" 
                homePageUrl="/blog" 
                activePageText="Blog Details" 
            />

            <div className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    <img 
                                        src={image.url} 
                                        alt={image.alternativeText} 
                                    />
                                </div>

                                <div className="article-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>By <b>{author.name}</b></li>
                                            <li>{CreateAtDate}</li>
                                        </ul>
                                    </div>

                                    <ReactMarkdown>
                                        {longDescription}
                                    </ReactMarkdown>
                                </div>

                                <div className="article-footer">
                                    <div className="article-tags">
                                        <span><i className='bx bx-purchase-tag'></i></span>

                                        {tags && tags.map(tag => (
                                            <Link to={`/tags/${tag.slug}`} key={tag.id}>
                                                {tag.name}
                                            </Link> 
                                        ))} 
                                    </div>

                                    <div className="article-share">
                                        <ul className="social">
                                            <li><span>Share:</span></li>
                                            {/* Update your project url here, keep the 'blogs' */}
                                            <li>
                                                <FacebookShareButton
                                                    url={`https://tozi-gatsby.envytheme.com/blogs/${slug}`} 
                                                >
                                                    <FacebookIcon size={32} round={true} />
                                                </FacebookShareButton>
                                            </li>
                                            <li>
                                                <TwitterShareButton
                                                    url={`https://tozi-gatsby.envytheme.com/blogs/${slug}`} 
                                                >
                                                    <TwitterIcon size={32} round={true} />
                                                </TwitterShareButton>
                                            </li>
                                            <li>
                                                <LinkedinShareButton
                                                    url={`https://tozi-gatsby.envytheme.com/blogs/${slug}`} 
                                                >
                                                    <LinkedinIcon size={32} round={true} />
                                                </LinkedinShareButton>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="article-author">
                                    <div className="author-profile-header"></div>
                                    <div className="author-profile">
                                        <div className="author-profile-title">
                                            <img 
                                                src={author.image.url} 
                                                className="shadow-sm" 
                                                alt={author.image.alternativeText} 
                                            />
                                            <h4>
                                                {author.name}
                                            </h4>
                                            <span className="d-block">
                                                {author.designation}
                                            </span>
                                            <p>{author.shortDec}</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="comments-area">
                                    {/* Update your site shortname from https://disqus.com/ */}
                                    <DiscussionEmbed
                                        shortname='tozi'
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="right-sidebar">
                                <Sidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </Layout>
    )
}

export const query = graphql`
    query GetSingleBlogDetails($slug: String) {
        blog: strapiBlogs(slug: { eq: $slug }) {
            title
            slug
            image {
                url
                alternativeText
            }
            CreateAtDate(formatString: "MMMM Do, YYYY")
            longDescription
            author {
                name
                image {
                    url
                    alternativeText
                }
                designation
                shortDec
            }
            tags {
                id
                name
                slug
            }
        }
    }
`

export default BlogDetailsPage;
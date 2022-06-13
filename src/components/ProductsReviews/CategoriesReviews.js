import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
 
const query = graphql`
{   
    allStrapiCategories(sort: {fields: strapiId, order: DESC}) {
        nodes {
            id
            name
            slug
            strapiId
            iconName
            blogs {
                id
            }
        }
    }
}
`

const CategoriesReviews = () => {

    const data = useStaticQuery(query)
    const {
        allStrapiCategories: { 
            nodes: categories 
        }
    } = data

    return (
		<>
            <div className="categories-area bg-f5f5f5 pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Categories</h2>
                        <Link to="/categories" className="link-btn">VIEW ALL</Link>
                    </div>

                    <div className="row">
                        {categories && categories.slice(0, 8).map(categorie => (
                            <div className="col-lg-3 col-md-4 col-sm-6" key={categorie.id}>
                                <div className="single-categories-item bg1">
                                    <div className="icon">
                                        <i className={categorie.iconName}></i>
                                    </div>

                                    <h3>{categorie.name}</h3>

                                    <span>({categorie.blogs && categorie.blogs.length}) Items</span>

                                    <Link 
                                        to={`/categories/${categorie.slug}`} 
                                        className="learn-more-btn"
                                    >
                                        View More <i className='bx bx-book-reader'></i>
                                    </Link>

                                    <Link to={`/categories/${categorie.slug}`} className="link-btn"></Link>
                                </div>
                            </div>
                        ))} 
                    </div>
                </div>
            </div>
		</>
    );
}

export default CategoriesReviews;
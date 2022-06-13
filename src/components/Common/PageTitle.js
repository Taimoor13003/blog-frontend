import React from 'react'
import {Link} from 'gatsby'

const PageTitle = ({pageTitle, homePageUrl, homePageText, activePageText}) => {
    return (
        <div className="page-title-area">
            <div className="container">
                <div className="page-title-content">
                    <div className='row align-items-center'>
                        <div className='col-lg-9 col-md-8'>
                            <h2>{pageTitle}</h2>
                        </div>

                        <div className='col-lg-3 col-md-4'>
                            <ul>
                                <li>
                                    <Link to={homePageUrl}>
                                        {homePageText}
                                    </Link>
                                </li>
                                <li>{activePageText}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageTitle;
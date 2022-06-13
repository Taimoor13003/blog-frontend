import * as React from "react"

import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
    {
        strapiContactInfo {
            googleMap
        }
    }
`

const GoogleMap = () => {

    const data = useStaticQuery(query)
    const {
        strapiContactInfo
    } = data

    return (
		<>
            {strapiContactInfo && (
                <div id="map">
                    <iframe src={strapiContactInfo.googleMap}></iframe>
                </div>
            )}
		</>
    );
}

export default GoogleMap;
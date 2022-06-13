module.exports = {
    siteMetadata: {
        title: `Tozi - React Gatsby Blog Template`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@envytheme`,
        siteUrl: `https://tozi-gatsby.envytheme.com/`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-source-strapi`,
            options: {
                // apiURL: `http://localhost:1337`,
                apiURL: `https://blogbackend001.herokuapp.com`,
                queryLimit: 1000,
                collectionTypes: [
                    "blogs",
                    "tags",
                    "categories",
                ],
                singleTypes: [
                    "blog-sidebar",
                    "about-us",
                    "top-header",
                    "contact-info",
                    "navbar",
                    "faqs",
                    "sidebar-modal",
                    "gallery",
                    "ads-img",
                    "privacy-policy",
                    "terms-and-conditions",
                    "404-error",
                    "socials-links",
                    "footer",
                ]
            }
        },
        `gatsby-plugin-gatsby-cloud`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
        {
            blogs: allStrapiBlogs {
                nodes {
                    slug
                }
            }
            categories: allStrapiCategories {
                nodes {
                    slug
                }
            }
            tags: allStrapiTags {
                nodes {
                    slug
                }
            }
        }
    `)

    result.data.blogs.nodes.forEach(blog => {
        createPage({
            path: `/blogs/${blog.slug}`,
            component: path.resolve(`src/templates/blog-details-template.js`),
            context: {
                slug: blog.slug,
            },
        })
    })

    result.data.categories.nodes.forEach(categorie => {
        createPage({
            path: `/categories/${categorie.slug}`,
            component: path.resolve(`src/templates/category.js`),
            context: {
                slug: categorie.slug,
            },
        })
    })

    result.data.tags.nodes.forEach(tag => {
        createPage({
            path: `/tags/${tag.slug}`,
            component: path.resolve(`src/templates/tag.js`),
            context: {
                slug: tag.slug,
            },
        })
    })
}
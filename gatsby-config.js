/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-s3-image`,
      options: {
        // accessKeyId: process.env.GATSBY_ACCESS_KEY_ID,
        // secretAccessKey: process.env.GATSBY_SECRET_ACCESS_KEY,
        bucketName: `art-images-example`,
        // domain: null,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-art-example`,
        short_name: `alex`,
        start_url: `/`,
        icon: `static/images/logoNoText.png`,
      },
    },
  ],
}

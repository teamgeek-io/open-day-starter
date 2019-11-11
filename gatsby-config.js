module.exports = {
  siteMetadata: {
    title: `Set the blog title`,
    description: `The blog description goes here`,
    author: `Teamgeek`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-svg`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `hjcqf4staf2u`,
        accessToken: `5qtuQ6l9l1FpNe5NB2E0PVIWGSJbihzG6SB13yVnZQ4`,
        downloadLocal: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

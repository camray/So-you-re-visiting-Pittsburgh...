module.exports = {
  siteMetadata: {
    title: `So You're Visiting Pittsburgh...`,
    description: `
    The best places, parks, restaurants, drinks and more in the steel city.
    Real advice from local foodies.`,
    author: `Cameron Ray`,
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
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: "gatsby-source-google-spreadsheet",
      options: {
        spreadsheetId: "1W5cp07OL_W5j6FBt1j7wPnWSIRAoKerFivALp7R_ZCk",
        // spreadsheetName: "So You're Visiting Pittsburgh",
        typePrefix: "GoogleSpreadsheet",
        credentials: {
          private_key: process.env.GOOGLE_PRIVATE_KEY,
          client_email: process.env.GOOGLE_CLIENT_EMAIL,
        },

        // Simple node transformation during node sourcing can be achieved by implementing the following functions
        // - `filterNode`
        // - `mapNode`
        //
        // By implementing a `filterNode(node): boolean` function, you can choose to eliminate some nodes before
        // they're added to Gatsby, the default behaviour is to include all nodes:
        filterNode: () => true,

        // By implementing a `mapNode(node): node` function, you can provide your own node transformations directly
        // during node sourcing, the default implementation is to return the node as is:
        mapNode: node => node,
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "www.soyourevisitingpittsburgh.com",
      },
    },
  ],
}

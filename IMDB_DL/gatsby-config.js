module.exports = {
  siteMetadata: {
    title: `IMDB`,
    description: `Welcome to Internet Music Database website! Discover new music or rediscover old hits with one mouse click!`,
    author: `Lešina Petar i Delonga iz Sinja`,

    menuItems : [
      {
        text: "Home",
        link: "/"
      },
      {
        text: "Artists",
        link: "/artists"
      },
      {
        text: "Albums",
        link: "/albums"
      },
      {
        text: "Blog",
        link: "/blog"
      },
      {
        text: "Login",
        link: "/signin"
      },
      
      
  ],

  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
              `gatsby-remark-relative-images`,
              {
                resolve: `gatsby-remark-images`,
                options: {
                   maxWidth: 600,
                   linkImagesToOriginal: false
                }
              }
            ]
      }
    },
    `gatsby-plugin-sass`,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

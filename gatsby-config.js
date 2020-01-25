module.exports = {
  siteMetadata: {
    title: `Statically`,
    description: `The free, fast & modern CDN for open source projects, WordPress, images, and any static assets.`,
    siteUrl: 'https://statically.io',
    author: `@fransallen`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `statically-web`,
        short_name: `statically`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#e53e3e`,
        display: `minimal-ui`,
        icon: `src/images/statically.png`
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`]
      }
    },
    `gatsby-plugin-sitemap`
  ]
};

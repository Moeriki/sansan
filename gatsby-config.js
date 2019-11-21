module.exports = {
  siteMetadata: {
    author: 'Dieter Luypaert',
    email: 'info@sandycroes.be',
    facebook: 'sandycroesphotography',
    instagram: 'sandycroes',
    description: 'Capture Your World',
    title: 'Sandy Croes Photography',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'sandy-croes-photography',
        short_name: 'SCP',
        start_url: '/',
        background_color: '#FFF',
        theme_color: '#FFF',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
    'gatsby-plugin-postcss',
  ],
};

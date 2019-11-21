module.exports = {
  siteMetadata: {
    author: '@sandycroes',
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
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: 'scp',
        // Periodically refetch the data
        refetchInterval: 60,
        // Arbitrary name for the remote schema Query type
        typeName: 'SCP',
        // Url to query from
        url:
          'https://api-euwest.graphcms.com/v1/ck2asfpx30zlv01fmfgi5b5um/master',
      },
    },
  ],
};

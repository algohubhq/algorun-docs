module.exports = {
  pathPrefix: '/docs',
  plugins: [
    {
      resolve: 'gatsby-theme-apollo-docs',
      options: {
        root: __dirname,
        siteName: 'Algo.Run Docs',
        pageTitle: 'Algo.Run Docs',
        menuTitle: 'Algo.Run AI Automation Platform',
        subtitle: 'Algo.Run AI Automation Platform',
        description: 'A guide to using Algo.Run Automation Platform',
        // gaTrackingId: 'UA-74643563-13',
        // algoliaApiKey: '768e823959d35bbd51e4b2439be13fb7',
        // algoliaIndexName: 'apollodata',
        baseUrl: 'https://www.algohub.com',
        twitterHandle: 'algohubhq',
        logoLink: 'https://www.algohub.com/docs/',
        githubRepo: 'algohubhq/algorun-docs',
        contentDir: 'docs',
        defaultVersion: '1',
        versions: {
          '1': 'version-1',
        },
        sidebarCategories: {
          null: [
            'index',
          ],
        },
      },
    },
  ],
};
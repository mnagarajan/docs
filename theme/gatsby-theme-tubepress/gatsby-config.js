/*
 * The incoming options should contain the following:
 *
 * root        - the abspath of the directory containing the docs
 * title       - the title of this set of documentation (e.g. "Overview" or "TubePress Pro")
 * description -  description for SEO and social (FB, Twitter) tags
 */

module.exports = ({
  root, title, description, sidebarCategories, headerButton,
}) => {

  const pathPrefix = process.env.NODE_ENV === 'production' ? '/docs' : '',

    navConfig = {
      'Introduction': {
        url: `${pathPrefix}/`,
        description: 'What is TubePress and what does it do?',
      },
      'TubePress Pro for WordPress': {
        url: `${pathPrefix}/pro`,
        description: 'TubePress Pro is our powerful, feature-packed WordPress plugin',
      },
      'TubePress Express': {
        url: `${pathPrefix}/express`,
        description: 'Our cloud-hosted TubePress service works with any website',
      },
      'TubePress for Wix': {
        url: `${pathPrefix}/wix`,
        description: 'Learn how to add TubePress to your Wix website',
      },
      'TubePress for Weebly': {
        url: `${pathPrefix}/weebly`,
        description: 'Learn how to add TubePress to your Weebly website',
      },
      'TubePress for Jimdo': {
        url: `${pathPrefix}/jimdo`,
        description: 'Learn how to add TubePress to your Jimdo website',
      },
    },

    footerNavConfig = {
      'Community Forums': {
        href: 'https://tubepress.com/community/',
        target: '_blank',
      },
      'TubePress.com': {
        href: 'https://tubepress.com/',
        target: '_blank',
      },
    },

    finalOpts = {
      resolve: 'gatsby-theme-apollo-docs',
      options: {
        algoliaApiKey: '768e823959d35bbd51e4b2439be13fb7',
        algoliaIndexName: 'apollodata',
        baseUrl: 'https://tubepress.com',
        contentDir: `${root}/source`,
        defaultVersion: 'default',
        description,
        footerNavConfig,
        githubRepo: 'tubepress/docs',
        navConfig,
        root,
        sidebarCategories,
        siteName: 'TubePress Docs',
        subtitle: title,
        trackingId: 'UA-xxxx',
        twitterHandle: 'TubePressApp',
      },
    };

  return {
    siteMetadata: {
      title: 'TubePress Documentation',
      headerButton,
      navConfig,
    },
    plugins: [
      finalOpts,
      'gatsby-plugin-sharp',
      {
        resolve: 'gatsby-transformer-remark',
        options: { plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 940,
              withWebp: true,
            },
          },
        ] },
      },
    ],
  };
};

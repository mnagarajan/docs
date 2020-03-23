const {
    merge,
    concatArrays,
  } = require('merge-anything'),

  introNav = {
    null: [
      'user-guides',
      'get-in-touch',
    ],
    'appendices': [
      'youtube-api-setup',
    ],
  },

  proNav = {
    'null': [
      'pro/index',
    ],
    'getting started': [
      'pro/getting-started/install',
      'pro/getting-started/initial-setup',
      'pro/getting-started/usage',
      'pro/getting-started/upgrade-procedure',
    ],
    'features': [
      'pro/features/autopost',
      'pro/features/themes',
      'pro/features/cache',
      'pro/features/private-videos',
      'pro/features/interactive-search',
      'pro/features/single-videos',
      'pro/features/prepend-a-video',
      'pro/features/add-ons',
    ],
    'appendices': [
      'pro/appendix/shortcode-reference',
      'pro/appendix/internals',
    ],
  },

  options = {

    // the page title that gets rendered above the sidebar navigation
    title: 'TubePress Pro!',

    // the site description for SEO and social (FB, Twitter) tags
    description: 'TubePress Pro documentation',

    // the stuff that shows up in the left-hand navigation
    sidebarCategories: merge({ extensions: [concatArrays] }, introNav, proNav),
  };

/*
 * Stop editing!
 */

module.exports = {
  pathPrefix: process.env.NODE_ENV === 'production' ? '/docs' : '',
  plugins: [
    {
      resolve: 'gatsby-theme-tubepress',
      options: {
        root: __dirname,
        ...options,
      },
    },
  ],
};

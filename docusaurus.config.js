// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Openshift on Nutanix',
  tagline: 'Zero to Hero',
  url: 'https://github.com',
  baseUrl: '/rh-ocp/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nutanix-japan', // Usually your GitHub org/user name.
  projectName: 'rh-ocp', // Usually your repo name.
  deploymentBranch: "gh-pages",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/nutanix-japan/rh-ocp/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'OCP on Nutanix',
        logo: {
          alt: 'OCP on Nutanix',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/nutanix-japan/rh-ocp',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Nutanix, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell'],
      },
    }),
};

module.exports = {
  // ...
  plugins: [
    [
      'docusaurus-plugin-last-update-from-git',
      {
        format: 'MMMM Do YYYY, h:mm:ss a',
        // Other options...
      },
    ],
  ],
  // ...
};

module.exports = {
  // ... other configuration options ...
  themeConfig: {
    // ... other theme configuration options ...
    stylesheets: [
      '/css/custom.css',
    ],
  },
};


module.exports = config;

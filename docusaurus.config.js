// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Things Omair Learned',
  tagline: 'Omair learning in public',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://til.omairinam.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'omair-inam', // Usually your GitHub org/user name.
  projectName: 'things-omair-learned', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/omair-inam/things-omair-learned/edit/main/',
          // exclude tutorial resources
          exclude: [
              'tutorial-basics/**',
              'tutorial-extras/**',
              'intro.md'
          ]
        },
        blog: {
          routeBasePath: '/',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/omair-inam/things-omair-learned/edit/main/',
          exclude: [
              '2021-08-26-welcome/**',
              '2021*',
              '2019*'
          ]
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Today Omair Learned',
        /*
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        */
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Topics',
          },
          {href: 'https://omairinam.com', label: 'Blog', position: 'right'},
          {
            href: 'https://github.com/omair-inam/things-omair-learned',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'TIL',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
                /*
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
                 */
              {
                label: 'Twitter',
                href: 'https://twitter.com/omair_inam',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://omairinam.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/omair-inam/things-omair-learned',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Omair-Inam Abdul-Matin, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

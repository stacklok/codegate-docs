import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Stacklok Docs',
  tagline: 'Privacy-first AI code generation',
  favicon: 'img/favicon.ico',
  plugins: [
    [
      'vercel-analytics',
      {
        debug: false,
      },
    ],
  ],

  // Set the production url of your site here
  url: 'https://docs.stacklok.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'stacklok', // Usually your GitHub org/user name.
  projectName: 'docs-website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/stacklok/docs-website/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-20VGJZ4D38',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      // title: 'Stacklok Docs',
      logo: {
        alt: 'Stacklok logo',
        src: 'img/stacklok-wordmark-black.svg',
        srcDark: 'img/stacklok-wordmark-white.svg',
        href: 'https://docs.stacklok.com',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'codegateSidebar',
          position: 'left',
          label: 'CodeGate',
        },
        {
          type: 'docSidebar',
          sidebarId: 'toolhiveSidebar',
          position: 'left',
          label: 'ToolHive',
        },
        {
          href: 'https://github.com/stacklok',
          className: 'header-github-link',
          position: 'right',
          'aria-label': 'GitHub',
        },
        {
          href: 'https://discord.gg/stacklok',
          className: 'header-discord-link',
          position: 'right',
          'aria-label': 'Discord',
        },
        {
          href: 'https://youtube.com/@stacklok',
          className: 'header-youtube-link',
          position: 'right',
          'aria-label': 'YouTube',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          items: [
            {
              html: `<a href="https://stacklok.com/"><img src="/img/stacklok-wordmark-black.svg" alt="Stacklok Logo" style="margin-top: -16px" /></a>`,
            },
            {
              html: `We build solutions that help developers create more safe and sustainable code.`,
            },
            {
              html: `<div style="display: flex; padding: 20px 0px;">
                       <a href="https://youtube.com/@stacklok" target="_blank" class="footer__icon__custom navbar__link header-youtube-link" style="padding-left: 0px;"></a>
                       <a href="https://github.com/stacklok" target="_blank" class="footer__icon__custom navbar__link header-github-link"></a>
                       <a href="https://discord.gg/stacklok" target="_blank" class="footer__icon__custom navbar__link header-discord-link"></a>
                     </div>`,
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              html: '<a href="https://www.stacklok.com" target="_blank" class="navbar__link header-stacklok-link"">&nbsp;&nbsp;Stacklok</a>',
            },
            {
              html: '<a href="https://youtube.com/@stacklok" target="_blank" class="navbar__link header-youtube-link"">&nbsp;&nbsp;YouTube</a>',
            },
            {
              html: '<a href="https://github.com/stacklok" target="_blank" class="navbar__link header-github-link">&nbsp;&nbsp;GitHub</a>',
            },
            {
              html: '<a href="https://discord.gg/stacklok" target="_blank" class="navbar__link header-discord-link">&nbsp;&nbsp;Discord</a>',
            },
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'Documentation',
              to: '/',
            },
            {
              label: 'Get Started',
              to: '/quickstart',
            },
          ],
        },
      ],
      copyright: `<hr style="margin: 24px 0px 40px;">
                  <div style="display: flex;">
                    <div>Copyright © ${new Date().getFullYear()} Stacklok, All Rights Reserved</div>
                    <div style="margin-left: auto; text-transform: uppercase; font-size: 14px; font-weight: 600;">Powered by <img src="/img/stacklok-wordmark-black.svg" height="20px" style="margin-left: 1rem;" /></div>
                  </div>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'powershell', 'docker', 'lua'],
    },
    mermaid: {
      theme: { light: 'neutral', dark: 'dark' },
      options: {
        themeVariables: {
          fontFamily: 'Figtree, system-ui, sans-serif',
        },
      },
    },
    algolia: {
      appId: '5VBG92C77M',
      apiKey: 'd47061076173b8f8974c70dd94efb676',
      indexName: 'stacklok',
      contextualSearch: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

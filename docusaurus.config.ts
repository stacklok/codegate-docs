import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'CodeGate',
  tagline: 'Privacy-first AI code generation',
  favicon: 'img/favicon.png',
  plugins: [
    [
      'vercel-analytics',
      {
        debug: false,
      },
    ],
  ],

  // Set the production url of your site here
  url: 'https://docs.codegate.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'stacklok', // Usually your GitHub org/user name.
  projectName: 'codegate-docs', // Usually your repo name.

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
          editUrl: 'https://github.com/stacklok/codegate-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-WYFTM4LMCM',
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
      // title: 'CodeGate',
      logo: {
        alt: 'CodeGate logo',
        src: 'img/codegate-logo-dark.svg',
        srcDark: 'img/codegate-logo-white.svg',
        href: 'https://codegate.ai',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Intro',
        },
        {
          type: 'doc',
          position: 'left',
          docId: 'quickstart',
          label: 'Quickstart (Copilot)',
        },
        {
          type: 'doc',
          position: 'left',
          docId: 'quickstart-continue',
          label: 'Quickstart (Continue)',
        },
        {
          href: 'https://youtube.com/@stacklok',
          className: 'header-youtube-link',
          position: 'right',
          'aria-label': 'YouTube channel',
        },
        {
          href: 'https://github.com/stacklok/codegate',
          className: 'header-github-link',
          position: 'right',
          'aria-label': 'GitHub repository',
        },
        {
          href: 'https://discord.gg/stacklok',
          className: 'header-discord-link',
          position: 'right',
          'aria-label': 'Discord community',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          items: [
            {
              html: `<a href="https://codegate.ai/"><img src="/img/codegate-logo-dark.svg" alt="CodeGate Logo" style="margin-top: -16px" /></a>`,
            },
            {
              html: `Privacy-focused local prompt gateway for AI Code Generation`,
            },
            {
              html: `<div style="display: flex; padding: 20px 0px;">
                       <a href="https://youtube.com/@stacklok" target="_blank" class="footer__icon__custom navbar__link header-youtube-link" style="padding-left: 0px;"></a>
                       <a href="https://github.com/stacklok/codegate" target="_blank" class="footer__icon__custom navbar__link header-github-link"></a>
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
              html: '<a href="https://github.com/stacklok/codegate" target="_blank" class="navbar__link header-github-link">&nbsp;&nbsp;GitHub</a>',
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
                    <div>Copyright © ${new Date().getFullYear()} CodeGate, All Rights Reserved</div>
                    <div style="margin-left: auto; text-transform: uppercase; font-size: 14px; font-weight: 600;">Powered by <img src="/img/stacklok-logo-black.svg" height="24px" style="margin-left: 1rem;" /></div>
                  </div>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'powershell', 'docker'],
    },
    mermaid: {
      theme: { light: 'neutral', dark: 'dark' },
      options: {
        themeVariables: {
          fontFamily: 'Figtree, system-ui, sans-serif',
        },
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

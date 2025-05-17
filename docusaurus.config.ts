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
    [
      'redocusaurus',
      {
        specs: [
          {
            id: 'codegate-api',
            spec: 'https://raw.githubusercontent.com/stacklok/codegate/refs/heads/main/api/openapi.json',
          },
        ],
        theme: {
          primaryColor: '#e31c79',
          primaryColorDark: '#e31c79',
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      // title: 'Stacklok Docs',
      logo: {
        alt: 'Stacklok logo',
        src: 'img/stacklok-wordmark-black.svg',
        srcDark: 'img/stacklok-wordmark-white.svg',
        href: '/',
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
          className: 'github-link',
          position: 'right',
          'aria-label': 'GitHub',
        },
        {
          href: 'https://discord.gg/stacklok',
          className: 'discord-link',
          position: 'right',
          'aria-label': 'Discord',
        },
        {
          href: 'https://youtube.com/@stacklok',
          className: 'youtube-link',
          position: 'right',
          'aria-label': 'YouTube',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          items: [
            {
              html: `<div style="display: flex;">
                       <a href="https://stacklok.com/"><img src="/img/stacklok-wordmark-white.svg" alt="Stacklok Logo" width="150px" /></a>
                       <a href="https://github.com/stacklok" target="_blank" class="footer__icon__custom navbar__link github-link" style="padding-left: 30px;"></a>
                       <a href="https://discord.gg/stacklok" target="_blank" class="footer__icon__custom navbar__link discord-link"></a>
                       <a href="https://youtube.com/@stacklok" target="_blank" class="footer__icon__custom navbar__link youtube-link"></a>
                     </div>`,
            },
            {
              html: `We build solutions that help developers create more safe and sustainable code.`,
            },
          ],
        },
        {
          title: 'Projects',
          items: [
            {
              html: '<a href="https://github.com/stacklok" target="_blank" class="footer__link-item github-link">&nbsp;&nbsp;CodeGate</a>',
            },
            {
              html: '<a href="https://github.com/stacklok" target="_blank" class="footer__link-item github-link">&nbsp;&nbsp;ToolHive</a>',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              html: '<a href="https://discord.gg/stacklok" target="_blank" class="footer__link-item discord-link">&nbsp;&nbsp;Discord</a>',
            },
            {
              html: '<a href="https://youtube.com/@stacklok" target="_blank" class="footer__link-item youtube-link"">&nbsp;&nbsp;YouTube</a>',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Stacklok, Inc.`,
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
          primaryColor: '#E31C79',
          primaryBorderColor: '#E31C79',
          lineColor: '#E31C79',
          secondaryColor: '#F3E6EE',
          tertiaryColor: '#FAF0F6',
          mainBkg: '#E31C79',
          noteBkgColor: '#444444',
          noteTextColor: '#FFFFFF',
          // BEGIN sequenceDiagram styles
          actorBorder: '#E31C79',
          actorLineColor: '#E31C79',
          actorTextColor: '#FFFFFF',
          activationBkgColor: '#E31C79',
          activationBorderColor: '#E31C79',
          labelBoxBkgColor: '#444444',
          labelTextColor: '#FFFFFF',
          // END sequenceDiagram styles
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

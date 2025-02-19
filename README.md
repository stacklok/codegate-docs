# CodeGate docs <!-- omit in toc -->

[![GitHub deployments](https://img.shields.io/github/deployments/stacklok/codegate-docs/Production?logo=vercel&style=flat&label=Vercel%20deployment)](https://github.com/stacklok/codegate-docs/deployments/Production)

This repository contains the public-facing docs for CodeGate, hosted at
[https://docs.codegate.ai](https://docs.codegate.ai).

- [Contributing to docs](#contributing-to-docs)
- [Local development](#local-development)
- [Formatting](#formatting)
- [Building the site](#building-the-site)
- [Deployment](#deployment)
- [About](#about)

## Contributing to docs

We welcome contributions to the CodeGate documentation - if you find something
missing, wrong, or unclear, please let us know via an issue or open a PR!

Please review the [style guide](./STYLE-GUIDE.md) for help with voice, tone, and
formatting.

## Local development

You'll need Node.js available (v22 recommended) or VS Code with the
[Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
extension and Docker.

[![Open in Dev Containers](https://img.shields.io/static/v1?label=Dev%20Containers&message=Open&color=blue)](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/stacklok/codegate-docs)

```bash
npm install
npm run start
```

This command starts a local development server on port 3000 and opens a browser
window to <http://localhost:3000>. Most changes are reflected live without
having to restart the server.

## Formatting

We use a combination of Prettier, markdownlint, and ESLint to normalize
formatting and syntax. Before you submit a PR, please check for issues:

```bash
npm run prettier
npm run markdownlint
npm run eslint
```

To automatically fix issues:

```bash
npm run prettier:fix
npm run markdownlint:fix
npm run eslint:fix
```

## Building the site

```bash
npm run build
```

This command generates static content into the `build` directory. It also checks
for broken links, so it's recommended to run this before submitting a PR.

## Deployment

The `docs.codegate.ai` site is published using Vercel. Automatic previews for
branches and pull requests are enabled. The production site is published from
the `main` branch.

## About

This site is built with [Docusaurus](https://docusaurus.io/), a modern static
website generator.

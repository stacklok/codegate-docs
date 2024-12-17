# CodeGate docs

This repository contains the public-facing docs for CodeGate, hosted at
[https://docs.codegate.ai](https://docs.codegate.ai).

## Local Development

```bash
npm install
npm run start
```

This command starts a local development server and opens up a browser window.
Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory.

## Deployment

The `docs.codegate.ai` site is published using Vercel. Automatic previews for
branches and pull requests are enabled. The production site is published from
main.

## About

This site is built with [Docusaurus](https://docusaurus.io/), a modern static
website generator.

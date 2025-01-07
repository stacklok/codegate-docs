---
title: Changelog
description: History of notable updates and changes to CodeGate
sidebar_position: 20
---

:::info

Major features and changes are noted here. To review all updates, see the
[GitHub Releases page](https://github.com/stacklok/codegate/releases).

:::

- **Semantic versioning for container image** - 8 Jan, 2025\
  Starting with v0.1.4, the CodeGate container image is published with semantic
  version tags corresponding to
  [GitHub releases](https://github.com/stacklok/codegate/releases). You can
  optionally pull using the major (`v0`), minor (`v0.1`), or patch version
  (`v0.1.4`) to explicitly control the version you're running. \
  CodeGate is evolving quickly, so we still recommend pulling the `latest` tag
  so you don't miss out on new features and updates to package risk data.

- **UI port change** - 7 Jan, 2025\
  The internal port for the dashboard UI has changed from 80 to 9090 to resolve
  a permissions issue for Linux users.

- **Introducing CodeGate** - 17 Dec, 2024\
  Initial public launch of CodeGate!

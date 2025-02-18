---
title: Changelog
description: History of notable updates and changes to CodeGate
sidebar_position: 20
---

:::info

Major features and changes are noted here. To review all updates, see the
[GitHub Releases page](https://github.com/stacklok/codegate/releases).

:::

Related: [Upgrade CodeGate](../how-to/install.md#upgrade-codegate)

- **Muxing filter rules** - 18 Feb, 2025\
  CodeGate v0.1.23 adds filter rules for model muxing, allowing you to define
  which model should be used for a given file type. See the
  [model muxing docs](../features/muxing.mdx) for more.

- **PII redaction:** - 10 Feb, 2025\
  Starting with v0.1.18, CodeGate now redacts personally identifiable
  information (PII) found in LLM prompts and context. See the
  [feature page](../features/secrets-encryption.md) to learn more.

- **Model muxing** - 7 Feb, 2025\
  With CodeGate v0.1.17 you can use the new `/v1/mux` endpoint to configure
  model selection based on your workspace! Learn more in the
  [model muxing guide](../features/muxing.mdx).

- **OpenRouter endpoint** - 7 Feb, 2025\
  CodeGate v0.1.17 adds a dedicated `/openrouter` provider endpoint for
  OpenRouter users. This endpoint currently works with Continue, Cline, and Kodu
  (Claude Coder).

- **New integration: Open Interpreter** - 4 Feb, 2025\
  CodeGate v0.1.16 added support for
  [Open Interpreter](https://github.com/openinterpreter/open-interpreter) with
  OpenAI-compatible APIs. Review the
  [integration guide](../integrations/open-interpreter.mdx) to get started.

- **New integration: Claude Coder** - 28 Jan, 2025\
  CodeGate v0.1.14 also introduced support for Kodu's
  [Claude Coder](https://www.kodu.ai/extension) extension. See the
  [integration guide](../integrations/kodu.mdx) to learn more.

- **New integration: Cline** - 28 Jan, 2025\
  CodeGate version 0.1.14 adds support for [Cline](https://cline.bot/) with
  Anthropic, OpenAI, Ollama, and LM Studio. See the
  [integration guide](../integrations/cline.mdx) to learn more.

- **Workspaces** - 22 Jan, 2025\
  Now available in CodeGate v0.1.12, workspaces help you organize and customize
  your AI-assisted development. Learn more in
  [Workspaces](../features/workspaces.mdx).

- **New integration: aider** - 13 Jan, 2025\
  CodeGate version 0.1.6 adds support for [aider](https://aider.chat/), an AI
  pair programmer in your terminal. See the
  [integration guide](../integrations/aider.mdx) to learn more.

- **Semantic versioning for container image** - 8 Jan, 2025\
  Starting with v0.1.4, the CodeGate container image is published with semantic
  version tags corresponding to
  [GitHub releases](https://github.com/stacklok/codegate/releases). You can
  optionally pull using the major (`v0`), minor (`v0.1`), or patch version
  (`v0.1.4`) to explicitly control the version you're running. \
  CodeGate is evolving quickly, so we still recommend pulling the `latest` tag
  so you don't miss out on the newest features and updates.

- **UI port change** - 7 Jan, 2025\
  The internal port for the dashboard UI has changed from 80 to 9090 to resolve
  a permissions issue for Linux users.

- **Introducing CodeGate!** - 17 Dec, 2024\
  Initial public launch of CodeGate, with support for Continue and GitHub
  Copilot.

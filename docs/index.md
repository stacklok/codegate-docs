---
title: Introduction
description:
  CodeGate is the local, open source prompt gateway that keeps your secrets safe
  and your code secure.
sidebar_position: 1
---

## What is CodeGate?

CodeGate is a local prompt gateway that sits between your AI coding assistant
and LLM to enhance privacy and security. CodeGate performs code security
reviews, identifies vulnerabilities in package dependencies, and prevents
sensitive data like secrets from being shared with AI models.

```mermaid
sequenceDiagram
    participant Client as AI coding<br>assistant
    participant CodeGate as CodeGate<br>(local)
    participant LLM as AI model<br>(remote)

    Client ->> CodeGate: Prompt
    activate CodeGate
    CodeGate ->> LLM: Enhanced prompt
    deactivate CodeGate
    activate LLM
    LLM -->> CodeGate: Response
    deactivate LLM
    activate CodeGate
    CodeGate -->> Client: Response
    deactivate CodeGate
```

## Key features

CodeGate includes several key features for privacy, security, and coding
efficiency, including:

- [Secrets encryption](./features/secrets-encryption.md) to protect your
  sensitive credentials
- [Dependency risk awareness](./features/dependency-risk.md) to update the LLM's
  knowledge of malicious or deprecated open source packages
- [Model muxing](./features/muxing.md) to quickly select the best LLM
  provider/model for your current task
- [Workspaces](./features/workspaces.mdx) to organize and customize your LLM
  interactions

## Supported environments

CodeGate supports several development environments and AI providers.

AI coding assistants / IDEs:

- **[Aider](./integrations/aider.mdx)** with Ollama and OpenAI-compatible APIs

- **[Cline](./integrations/cline.mdx)** in Visual Studio Code

  CodeGate supports Ollama, Anthropic, OpenAI-compatible APIs, and LM Studio
  with Cline

- **[Continue](./integrations/continue.mdx)** with Visual Studio Code and
  JetBrains IDEs

  CodeGate supports the following AI model providers with Continue:

  - Local / self-managed: Ollama, llama.cpp, vLLM
  - Hosted: Anthropic, OpenAI and OpenAI-compatible APIs like OpenRouter

- **[GitHub Copilot](./integrations/copilot.mdx)** with Visual Studio Code
  (JetBrains coming soon!)

- **[Open Interpreter](./integrations/open-interpreter.mdx)** with
  OpenAI-compatible APIs

We're continuing to add more AI assistants/agents and model providers based on
community feedback.

## How to get involved

CodeGate is an open source project. To view the code, contribute, or report an
issue, please visit the
[CodeGate GitHub repository](https://github.com/stacklok/codegate).

We are eager to gather feedback to help shape the future direction of the
project. Please join us in the `#codegate` channel on the
[Stacklok community Discord server](https://discord.gg/stacklok).

## Next steps

Follow one of the the quickstart guides to get up and running quickly:

- [Quickstart guide - GitHub Copilot](./quickstart-copilot.mdx) to integrate
  CodeGate with GitHub Copilot and VS Code
- [Quickstart guide - Continue](./quickstart-continue.mdx) to integrate CodeGate
  with the open source Continue extension, VS Code, and a local Ollama server

Review the [installation instructions](./how-to/install.md).

Learn more about CodeGate's features:

- [Secrets encryption](./features/secrets-encryption.md)
- [Dependency risk awareness](./features/dependency-risk.md)
- [Security reviews](./features/security-reviews.md)
- [Workspaces](./features/workspaces.mdx)

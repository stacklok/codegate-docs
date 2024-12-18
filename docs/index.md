---
title: Introduction
description:
  CodeGate is the local, open source proxy that keeps your secrets safe and your
  code secure.
sidebar_position: 1
---

## What is CodeGate?

CodeGate is an open source local proxy that works with AI coding assistants in
your IDE to enhance privacy and security. CodeGate performs code security
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

## Supported environments

CodeGate supports several development environments and AI providers.

AI coding assistants / IDEs:

- **[GitHub Copilot](https://github.com/features/copilot)** with Visual Studio
  Code

- **[Continue](https://www.continue.dev/)** with Visual Studio Code and
  JetBrains IDEs

  CodeGate supports the following AI model providers with Continue:

  - [Ollama](https://ollama.com/)
  - [vLLM](https://docs.vllm.ai/en/latest/serving/openai_compatible_server.html)
    (OpenAI-compatible mode, including OpenRouter)
  - [Anthropic API](https://www.anthropic.com/api)
  - [OpenAI API](https://openai.com/api/)
  - [llama.cpp](https://github.com/ggerganov/llama.cpp) (locally-hosted models)

As the project evolves, we plan to add support for more IDE assistants and AI
models.

## How to get involved

CodeGate is an open source project. To view the code, contribute, or report an
issue, please visit the
[CodeGate GitHub repository](https://github.com/stacklok/codegate).

We are eager to gather feedback to help shape the future direction of the
project. Please join us in the `#codegate` channel on the
[Stacklok community Discord server](https://discord.gg/stacklok).

## Next steps

Follow one of the the quickstart guides to get up and running quickly:

- [Quickstart guide - GitHub Copilot](quickstart-copilot.mdx) to integrate
  CodeGate with GitHub Copilot and VS Code
- [Quickstart guide - Continue](./quickstart-continue.mdx) to integrate CodeGate
  with the open source Continue extension, VS Code, and a local Ollama server

Review the [installation instructions](how-to/install.md).

Learn more about CodeGate's features:

- [Secrets encryption](features/secrets-encryption.md)
- [Dependency risk awareness](features/dependency-risk.md)
- [Security reviews](features/security-reviews.md)

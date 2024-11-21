# Introduction

## What is CodeGate?

CodeGate is an open source local prompt gateway that works with AI coding
assistants in your IDE to enhance privacy and security. CodeGate helps by
performing code security reviews, identifying vulnerabilities in package
dependencies, and protecting sensitive data like secrets from being shared with
AI models.

![CodeGate diagram](/images/codegate-diagram.png)

## Supported environments

CodeGate supports several development environments and AI providers.

AI coding assistants / IDEs:

- Continue.dev with Visual Studio Code and all JetBrains IDEs

AI model providers:

- Ollama (locally-hosted models)
- Anthropic
- OpenAI

As the project evolves, we plan to add support for more IDE assistants and AI
providers.

## How to get involved

CodeGate is an open source project. To view the code, contribute, or report an
issue, please visit the
[CodeGate GitHub repository](https://github.com/stacklok/codegate).

We are eager to gather feedback to help shape the future direction of the
project. Please join us in the `#codegate` channel on the
[Stacklok community Discord server](https://discord.gg/stacklok).

## Next steps

Follow the [quick start tutorial](tutorials/quick-start-vscode) to get up and
running quicking using VS Code, the Continue IDE plugin, and a local Ollama
model.

Review the [installation instructions](how-to/install).

Learn more about CodeGate's features:

- [Code security reviews](features/security-review)
- [Package security](features/package-security)
- [Secrets filtering](features/secrets-filtering)

---
title: Quickstart guide - Continue
description: Get up and running with CodeGate and Continue
sidebar_label: Quickstart - Continue
sidebar_position: 10
---

## Objective

This guide will get you up and running with CodeGate in just a few minutes using
Visual Studio Code and a locally hosted LLM. By the end, you'll have learned how
CodeGate helps to protect your privacy and improve the security of your
applications.

## Prerequisites

CodeGate runs on Windows, macOS (Apple or Intel silicon), or Linux systems. We
recommend a system with at least 16GB of RAM, a GPU, and at least 12GB of free
disk space for best results when running Ollama locally.

Required software:

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (or Docker
  Engine on Linux)
- [Ollama](https://ollama.com/)
- [VS Code](https://code.visualstudio.com/) with the
  [Continue](https://www.continue.dev/) extension

Continue is an open source AI code assistant that supports a wide range of LLMs.

:::info

CodeGate works with multiple local and hosted large language models (LLMs) via
Continue. In this tutorial, you'll use Ollama to run a code generation model on
your local machine.

If you have access to a provider like Anthropic or OpenAI, see
[Use CodeGate with Continue](./how-to/use-with-continue.mdx) for complete
configuration details, then skip ahead to
[Explore CodeGate's features](#explore-codegates-features) in this tutorial.

:::

## Start the CodeGate container

Download and run the container using Docker:

```bash
docker pull ghcr.io/stacklok/codegate:latest
docker run --name codegate -d -p 8989:8989 -p 9090:80 ghcr.io/stacklok/codegate:latest
```

This pulls the latest CodeGate image from the GitHub Container Registry and
starts the container in detached mode, mapping the necessary ports and mounting
a volume for persistent data storage.

To verify that CodeGate is running, open your web browser and navigate to
`http://localhost:9090`. You should see the CodeGate dashboard.

## Install a CodeGen model

Download the Code Llama model using Ollama. The following installs the 7 billion
parameter (7B) version of the model, which is suitable for systems with 16GB of
RAM or more:

```bash
ollama pull codellama:7b-instruct
```

:::info

If you have at least 32GB of RAM and an 8-core CPU, you can try the 13B
parameter model. Replace `7b` in these instructions with `13b`.

:::

## Configure the Continue plugin

Next, configure Continue to send model API requests through the local CodeGate
container.

In VS Code, open the Continue plugin from the sidebar.

Click the gear icon in the Continue panel to open the configuration file
(`~/.continue/config.json`).

If this is your first time using Continue, paste the following contents into the
file and save it. If you've previously used Continue and have existing settings,
insert/update the highlighted portions into your current configuration.

```json {3-8,11,13-18} title="~/.continue/config.json"
{
  "models": [
    {
      "title": "CodeGate-Quickstart",
      "provider": "ollama",
      "model": "codellama:7b-instruct",
      "apiBase": "http://localhost:8989/ollama/"
    }
  ],
  "modelRoles": {
    "default": "CodeGate-Quickstart"
  },
  "tabAutocompleteModel": {
    "title": "CodeGate-Quickstart",
    "provider": "ollama",
    "model": "codellama:7b-instruct",
    "apiBase": "http://localhost:8989/ollama/"
  }
}
```

The Continue plugin reloads its configuration immediately when you save the
file.

You should now see the CodeGate-Quickstart model available in your Continue chat
panel.

Enter `codegate-version` in the chat box to confirm that Continue is
communicating with CodeGate. The version of the CodeGate container should be
returned.

## Explore CodeGate's features

To learn more about CodeGate's capabilities, clone the demo repository to a
local folder on your system.

```bash
git clone https://github.com/stacklok/codegate-demonstration
```

:::warning

This repo contains intentionally risky code for demonstration purposes. Do not
run this in a production environment or use any of the included code in real
projects.

:::

Open the project folder in VS Code. You can do this from the UI or in the
terminal:

```bash
cd codegate-demonstration
code ./codegate-demonstration
```

### Protect your secrets

Often while developing, you'll need to work with sensitive information like API
keys or passwords. You've certainly taken steps to avoid checking these into
your source repo, but they are fair game for LLMs to use as context and
training.

Open the `conf.ini` or `app.json` file from the demo repo in the VS Code editor
and examine the contents. In the Continue chat input, type `@Files` and select
the file to include it as context, and ask Continue to explain the file.

For example, using `conf.ini`:

```plain title="Continue chat"
@conf.ini Explain this file
```

CodeGate intercepts the request and transparently encrypts the sensitive data
before it leaves your machine.

Learn more in [Secrets encryption](./features/secrets-encryption.md).

### Assess dependency risk

Open the `packages.py` file from the demo repo in the VS Code editor and examine
the import statements at the top. As with the previous step, type `@Files`, this
time selecting the `packages.py` file to add it to your prompt. Then ask Continue to analyze the file.

```plain title="Continue chat"
@packages.py Please explain this file
```

Using its up-to-date knowledge from
[Stacklok Insight](https://www.insight.stacklok.com/), CodeGate identifies the
malicious and deprecated packages referenced in the code.

Learn more in [Dependency risk awareness](./features/dependency-risk.md).

### View the dashboard

Open your web browser to [http://localhost:9090](http://localhost:9090) and
explore the CodeGate dashboard.

The dashboard displays security alerts and history of interactions between your
AI assistant and the LLM. Several alerts and prompts from the previous steps in
this tutorial should be visible now. Over time, this helps you understand how
CodeGate is actively protecting your privacy and security.

![CodeGate dashboard](/img/quickstart/quickstart-dashboard.webp)

## Next steps

Congratulations, CodeGate is now hard at work protecting your privacy and
enhancing the security of your AI-assisted development!

Check out the rest of the docs to learn more about
[how to use CodeGate](./how-to/index.mdx) and explore all of its
[Features](./features/index.mdx).

If you have access to a supported hosted LLM provider like Anthropic or OpenAI,
see [Configure the Continue IDE plugin](./how-to/use-with-continue.mdx) to learn
how to use those instead of Ollama.

Finally, we want to hear about your experiences using CodeGate. Join the
`#codegate` channel on the
[Stacklok Community Discord](https://discord.gg/stacklok) server to chat about
the project, and let us know about any bugs or feature requests via
[GitHub Issues](https://github.com/stacklok/codegate/issues).

## Clean up your environment

Of course we hope you'll want to continue using CodeGate, but if you want to
stop using it, follow these steps to clean up your environment.

1. Stop and remove the CodeGate container:

   ```bash
   docker stop codegate && docker rm codegate
   ```

2. Remove the `apiBase` configuration entries from your Continue configuration
   file.

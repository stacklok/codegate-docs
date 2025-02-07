---
title: Model muxing
description: Configure a per-workspace LLM
sidebar_position: 35
---

## Overview

_Model muxing_ (or multiplexing), allows you to configure your AI assistant once
and use [CodeGate workspaces](./workspaces.mdx) to switch between LLM providers
and models without reconfiguring your development environment. This feature is
especially useful when you're working on multiple projects or tasks that require
different AI models.

For each CodeGate workspace, you can select the AI provider and model
combination you want to use. Then, configure your AI coding tool to use the
CodeGate muxing endpoint `http://localhost:8989/v1/mux` as an OpenAI-compatible
API provider.

To change the model currently in use, simply switch your active CodeGate
workspace.

```mermaid
flowchart LR
    Client(AI Assistant/Agent)
    CodeGate{CodeGate}
    WS1[Workspace-A]
    WS2[Workspace-B]
    WS3[Workspace-C]
    LLM1(OpenAI/<br>o3-mini)
    LLM2(Ollama/<br>deepseek-r1)
    LLM3(OpenRouter/<br>claude-35-sonnet)

    Client ---|/v1/mux| CodeGate
    CodeGate --> WS1
    CodeGate --> WS2
    CodeGate --> WS3
    WS1 --> |api| LLM1
    WS2 --> |api| LLM2
    WS3 --> |api| LLM3
```

## Use cases

- You have a project that requires a specific model for a particular task, but
  you also need to switch between different models during the course of your
  work.
- You want to experiment with different LLM providers and models without having
  to reconfigure your AI assistant/agent every time you switch.
- Your AI coding assistant doesn't support a particular provider or model that
  you want to use. CodeGate's muxing provides an OpenAI-compatible abstraction
  layer.
- You're working on a sensitive project and want to use a local model, but still
  have the flexibility to switch to hosted models for other work.
- You want to control your LLM provider spend by using lower-cost models for
  some tasks that don't require the power of more advanced (and expensive)
  reasoning models.

## Configure muxing

To use muxing with your AI coding assistant, you need to add one or more AI
providers to CodeGate, then select the model you want to use on a workspace.

CodeGate supports the following LLM providers for muxing:

- Anthropic
- llama.cpp
- LM Studio
- Ollama
- OpenAI (and compatible APIs)
- OpenRouter
- vLLM

### Add a provider

1. In the [CodeGate dashboard](http://localhost:9090), open the **Providers**
   page from the **Settings** menu.
1. Click **Add Provider**.
1. Enter a display name for the provider, then select the type from the
   drop-down list. The default endpoint and authentication type are filled in
   automatically.
1. If you are using a non-default endpoint, update the **Endpoint** value.
1. Optionally, add a **Description** for the provider.
1. If the provider requires authentication, select the **API Key**
   authentication option and enter your key.

When you save the settings, CodeGate connects to the provider to retrieve the
available models.

:::note

For locally-hosted models, you must use `http://host.docker.internal` instead of
`http://localhost`

:::

### Select the model for a workspace

Open the settings of one of your [workspaces](./workspaces.mdx) from the
Workspace selection menu or the
[Manage Workspaces](http://localhost:9090/workspaces) screen.

In the **Preferred Model** section, select the model to use with the workspace.

### Manage existing providers

To edit a provider's settings, click the Manage button next to the provider in
the list. For providers that require authentication, you can leave the API key
field blank to preserve the current value.

To delete a provider, click the trash icon next to it. If this provider was in
use by any workspaces, you will need to update their settings to choose a
different provider/model.

### Refresh available models

To refresh the list of models available from a provider, in the Providers list,
click the Manage button next to the provider to refresh, then save it without
making any changes.

## Configure your client

Configure the OpenAI-compatible API base URL of your AI coding assistant/agent
to `http://localhost:8989/v1/mux`. If your client requires a model name and/or
API key, you can enter any values since CodeGate manages the model selection and
authentication.

For specific instructions, see the
[integration guide](../integrations/index.mdx) for your client.

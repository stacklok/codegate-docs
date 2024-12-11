---
title: Configure CodeGate
description: Customize CodeGate's behavior
sidebar_position: 20
---

The CodeGate container runs with default settings to support Ollama, Anthropic,
and OpenAI APIs with typical settings. To customize the behavior, you can supply
extra configuration parameters to the container as environment variables:

```bash
docker run -d -p 8989:8989 -p 8990:80 [-e KEY=VALUE ...] ghcr.io/stacklok/codegate/codegate
```

## Config parameters

CodeGate supports the following parameters:

| Parameter                | Default value                   | Description                                                                                                     |
| :----------------------- | :------------------------------ | :-------------------------------------------------------------------------------------------------------------- |
| `CODEGATE_OLLAMA_URL`    | `http://localhost:11434/api`    | Specifies the URL of an Ollama instance. Used when the provider in your plugin config is `ollama`.              |
| `CODEGATE_VLLM_URL`      | `https://inference.codegate.ai` | Specifies the URL of a model hosted by a vLLM endpoint. Used when the provider in your plugin config is `vllm`. |
| `CODEGATE_ANTHROPIC_URL` | `https://api.anthropic.com/v1`  | Specifies the Anthropic engine API endpoint URL.                                                                |
| `CODEGATE_OPENAI_URL`    | `https://api.openai.com/v1`     | Specifies the OpenAI engine API endpoint URL.                                                                   |
| `CODEGATE_APP_LOG_LEVEL` | `WARNING`                       | Sets the logging level. Valid values: ERROR, WARNING, INFO, DEBUG                                               |
| `CODEGATE_LOG_FORMAT`    | `TEXT`                          | Type of log formatting. Valid values: TEXT, JSON                                                                |

## Example: Use CodeGate with OpenRouter

[OpenRouter](https://openrouter.ai/) is an interface to many large language
models. CodeGate's vLLM provider works with OpenRouter's OpenAI-compatible API.

To use OpenRouter, set the vLLM URL when you launch CodeGate:

```bash
docker run -d -p 8989:8989 -p 8990:80 -e CODEGATE_VLLM_URL=https://openrouter.ai/api ghcr.io/stacklok/codegate/codegate
```

Then, configure your IDE integration to access the vLLM endpoint
(`http://localhost:8989/vllm/`) and specify the name of the model you'd like to
use and your OpenRouter API key.

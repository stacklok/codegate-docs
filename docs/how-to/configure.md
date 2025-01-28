---
title: Configure CodeGate
description: Customizing CodeGate's application settings
sidebar_position: 20
---

## Customize CodeGate's behavior

The CodeGate container runs with default settings to support Ollama, Anthropic,
and OpenAI APIs with typical settings. To customize the behavior, you can supply
extra configuration parameters to the container as environment variables:

```bash {2}
docker run --name codegate -d -p 8989:8989 -p 9090:9090 \
  [-e KEY=VALUE ...] \
  --restart unless-stopped ghcr.io/stacklok/codegate
```

## Config parameters

CodeGate supports the following parameters:

| Parameter                | Default value                       | Description                                                                                |
| :----------------------- | :---------------------------------- | :----------------------------------------------------------------------------------------- |
| `CODEGATE_APP_LOG_LEVEL` | `WARNING`                           | Sets the logging level. Valid values: `ERROR`, `WARNING`, `INFO`, `DEBUG` (case sensitive) |
| `CODEGATE_LOG_FORMAT`    | `TEXT`                              | Type of log formatting. Valid values: `TEXT`, `JSON` (case sensitive)                      |
| `CODEGATE_ANTHROPIC_URL` | `https://api.anthropic.com/v1`      | Specifies the Anthropic engine API endpoint URL.                                           |
| `CODEGATE_LM_STUDIO_URL` | `http://host.docker.internal:1234`  | Specifies the URL of your LM Studio server.                                                |
| `CODEGATE_OLLAMA_URL`    | `http://host.docker.internal:11434` | Specifies the URL of your Ollama instance.                                                 |
| `CODEGATE_OPENAI_URL`    | `https://api.openai.com/v1`         | Specifies the OpenAI engine API endpoint URL.                                              |
| `CODEGATE_VLLM_URL`      | `http://localhost:8000`             | Specifies the URL of the vLLM server to use.                                               |

## Example: Use CodeGate with OpenRouter

[OpenRouter](https://openrouter.ai/) is an interface to many large language
models. CodeGate's vLLM provider works with OpenRouter's API when used with the
Continue IDE plugin.

To use OpenRouter, set the vLLM URL when you launch CodeGate:

```bash {2}
docker run --name codegate -d -p 8989:8989 -p 9090:9090 \
  -e CODEGATE_VLLM_URL=https://openrouter.ai/api \
  --restart unless-stopped ghcr.io/stacklok/codegate
```

Then, [configure the Continue IDE plugin](./use-with-continue.mdx) to access the
vLLM endpoint (`http://localhost:8989/vllm/`) along with the model you'd like to
use and your OpenRouter API key.

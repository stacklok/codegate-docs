---
title: Advanced configuration
description: Customizing CodeGate's application settings
sidebar_position: 30
---

## Customize CodeGate's behavior

The CodeGate container runs with defaults that work with supported LLM providers
using typical settings. To customize CodeGate's application settings like
provider endpoints and logging level, you can add extra configuration parameters
to the container as environment variables:

```bash {2}
docker run --name codegate -d -p 8989:8989 -p 9090:9090 \
  [-e KEY=VALUE ...] \
  --mount type=volume,src=codegate_volume,dst=/app/codegate_volume \
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

## Example: Use CodeGate with a remote Ollama server

Set the Ollama server's URL when you launch CodeGate:

```bash {2}
docker run --name codegate -d -p 8989:8989 -p 9090:9090 \
  -e CODEGATE_OLLAMA_URL=https://my.ollama-server.example \
  --mount type=volume,src=codegate_volume,dst=/app/codegate_volume \
  --restart unless-stopped ghcr.io/stacklok/codegate
```

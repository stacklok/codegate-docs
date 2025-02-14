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

## Run CodeGate on a remote host

:::warning

Keep security aspects in mind and run CodeGate only on a remote host within a
local or otherwise secured network. CodeGate should not be run on a remote host
that is directly accessible from the Internet!

:::

The CodeGate web dashboard provided in the Docker container expects the CodeGate
API to be available on _localhost_ port 8989. Currently this is statically set
during build time and cannot be changed with a runtime configuration parameter.

Hence to run CodeGate on a remote host you need to build your own appropriately
customized Docker container image from the CodeGate GitHub repository. Use the
following steps as a reference and adjust them for your own setup:

1. Clone the CodeGate GitHub repository:

   ```shell
   git clone https://github.com/stacklok/codegate.git
   cd codegate
   ```

2. Edit `./Dockerfile` to add the `VITE_BASE_API_URL` environment variable
   _before_ the web dashboard build step:

   ```dockerfile {1-3} title="./Dockerfile"
   # Customize the API base URL
   ENV VITE_BASE_API_URL=http://<REMOTE_HOST>:8989
   # End customization

   # Install the webapp dependencies and build it
   RUN npm install
   RUN npm run build
   ```

   Replace `<REMOTE_HOST>` with the IP or DNS name of the remote host where
   CodeGate will run.

3. Build the customized Docker image on the remote host:

   ```shell
   make image-build
   ```

4. Run the customized Docker image (built locally as `codegate:latest`):

   ```shell
   docker run --name codegate -d -p 8989:8989 -p 9090:9090 -p 8990:8990 --mount type=volume,src=codegate_volume,dst=/app/codegate_volume --restart unless-stopped codegate:latest
   ```

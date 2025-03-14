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

| Parameter                | Default value                       | Description                                                                                                                           |
| :----------------------- | :---------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `CODEGATE_APP_LOG_LEVEL` | `WARNING`                           | Sets the logging level. Valid values: `ERROR`, `WARNING`, `INFO`, `DEBUG` (case sensitive)                                            |
| `CODEGATE_LOG_FORMAT`    | `TEXT`                              | Type of log formatting. Valid values: `TEXT`, `JSON` (case sensitive)                                                                 |
| `CODEGATE_ANTHROPIC_URL` | `https://api.anthropic.com/v1`      | Specifies the Anthropic engine API endpoint URL.                                                                                      |
| `CODEGATE_LM_STUDIO_URL` | `http://host.docker.internal:1234`  | Specifies the URL of your LM Studio server.                                                                                           |
| `CODEGATE_OLLAMA_URL`    | `http://host.docker.internal:11434` | Specifies the URL of your Ollama instance.                                                                                            |
| `CODEGATE_OPENAI_URL`    | `https://api.openai.com/v1`         | Specifies the OpenAI engine API endpoint URL.                                                                                         |
| `CODEGATE_VLLM_URL`      | `http://localhost:8000`             | Specifies the URL of the vLLM server to use.                                                                                          |
| `DASHBOARD_BASE_API_URL` | `http://localhost:8989`             | Overrides the base URL of the CodeGate API referenced by the dashboard UI (see [run CodeGate on a remote host](#run-on-remote-host)). |

### Example: Use CodeGate with a remote Ollama server

Set the Ollama server's URL when you launch CodeGate:

```bash {2}
docker run --name codegate -d -p 8989:8989 -p 9090:9090 \
  -e CODEGATE_OLLAMA_URL=https://my.ollama-server.example \
  --mount type=volume,src=codegate_volume,dst=/app/codegate_volume \
  --restart unless-stopped ghcr.io/stacklok/codegate
```

### Example: run CodeGate on a remote host {#run-on-remote-host}

:::warning

For security reason,s only run CodeGate on a remote host within a local or
otherwise secured/trusted network. CodeGate should not be run on a remote host
that is directly accessible from the Internet!

:::

The CodeGate web dashboard provided in the Docker container makes client-side
API calls from your web browser, and expects the CodeGate API to be available on
_localhost_ port 8989 by default. To run CodeGate on a different host from your
client/browser, you can override this using the `DASHBOARD_BASE_API_URL`
environment variable (available since CodeGate v0.1.28):

```bash {2}
docker run --name codegate -d -p 8989:8989 -p 9090:9090 \
  -e DASHBOARD_BASE_API_URL=http://<REMOTE_HOST>:8989 \
  --mount type=volume,src=codegate_volume,dst=/app/codegate_volume \
  --restart unless-stopped ghcr.io/stacklok/codegate
```

Replace `<REMOTE_HOST>` with the IP or DNS name of your remote CodeGate host as
reachable from your client / web browser.

## Back up and restore the database

CodeGate stores workspace configurations and event data in a SQLite database
file located in the `/app/codegate_volume/db` directory inside the container.
This database file is mounted to the persistent Docker volume on your host
system. This means that the database file is not lost when you stop or remove
the container, but it is still a good idea to back up the database file
regularly.

To back up the database, you can use the `docker cp` command to copy the
database file from the container to your host system. For example, if you want
to back up the database to your current working directory, you can run the
following command:

```bash
# Copy the database file from the container to your host system
docker cp codegate:/app/codegate_volume/db/codegate.db ./codegate.db
```

This copies the database file from the container to your current working
directory. You can then copy it to a safe location.

You can also use this command to restore the database from a backup. For
example, if you have a backup of the database file in your current working
directory, you can restore it to the container by running:

```bash
# Copy the backup file to the container
docker cp ./codegate.db codegate:/app/codegate_volume/db/codegate.db

# Reset file ownership
docker exec -u root codegate sh -c "chown codegate:codegate /app/codegate_volume/db/codegate.db"

# Restart CodeGate
docker restart codegate
```

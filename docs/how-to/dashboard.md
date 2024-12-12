---
title: Access the dashboard
description: View alerts and usage history
sidebar_position: 30
---

CodeGate includes a web dashboard that lets you view the security risks that
CodeGate has detected and a history of interactions between your AI coding
assistant and your LLM.

To access the dashboard, ensure port 80 is bound to a port on your local system
when you launch CodeGate, for example:

```bash
docker run --name codegate -d -p 8989:8989 -p 8991:80 ghcr.io/stacklok/codegate/codegate:latest
```

Open [http://localhost:8991](http://localhost:8991) in your web browser to view
the dashboard.

To use a different listening port on your host, replace `8991` with your desired
port: `-p YOUR_PORT:80`. The dashboard will be available at
`http://localhost:YOUR_PORT/`.

## Persisting dashboard data {#persisting-dashboard-data}

To retain your prompt history and other dashboard metrics between restarts,
mount a directory on your host system to the CodeGate container as a
[Docker volume](https://docs.docker.com/engine/storage/volumes/). This example
maps a directory named `codegate_volume` in your current working path to
`/app/codegate_volume` inside the container:

```bash {2} title="Example"
docker run --name codegate -d -p 8989:8989 -p 8991:80 \
  -v ./codegate_volume:/app/codegate_volume \
  ghcr.io/stacklok/codegate/codegate:latest
```

Docker creates the directory if it doesn't exist.

:::note

Ensure the volume is mounted to `/app/codegate_volume` inside the container. Do
not modify the right side of the `-v` parameter in the `docker run` command.

:::

To customize the location of the persistent volume on your system, update the
left side of the `-v` parameter:

```bash {2} title="Use a custom path"
docker run --name codegate -d -p 8989:8989 -p 8991:80 \
  -v <YOUR_PATH>:/app/codegate_volume \
  ghcr.io/stacklok/codegate/codegate:latest
```

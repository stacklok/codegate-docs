---
title: Access the dashboard
description: View alerts and usage history
sidebar_position: 30
---

## Enable dashboard access

CodeGate includes a web dashboard that lets you view the security risks that
CodeGate has detected and a history of interactions between your AI coding
assistant and your LLM.

To access the dashboard, ensure port 80 is bound to a port on your local system
when you launch CodeGate, for example:

```bash {2}
docker run --name codegate -d -p 8989:8989 \
  -p 9090:80 \
  --restart unless-stopped ghcr.io/stacklok/codegate:latest
```

Open [http://localhost:9090](http://localhost:9090) in your web browser to view
the dashboard.

To use a different listening port on your host, replace `9090` with your desired
port, like `-p YOUR_PORT:80`. The dashboard will be available at
`http://localhost:YOUR_PORT/`.

:::note

If you change the web dashboard port, some links returned by CodeGate's
responses won't work without manually changing the port when they open in your
browser.

:::

## Persisting dashboard data {#persisting-dashboard-data}

To retain your prompt history and other dashboard metrics between restarts,
mount a persistent
[Docker volume](https://docs.docker.com/engine/storage/volumes/) to the CodeGate
container. The volume destination must be `/app/codegate_volume` inside the
container. This example creates a volume named `codegate_volume`:

```bash {2}
docker run --name codegate -d -p 8989:8989 -p 9090:80 \
  --mount type=volume,src=codegate_volume,dst=/app/codegate_volume \
  --restart unless-stopped ghcr.io/stacklok/codegate:latest
```

:::note

The volume must be mounted to `/app/codegate_volume` inside the container. Do
not modify the `dst` value of the `--mount` parameter in the `docker run`
command.

:::

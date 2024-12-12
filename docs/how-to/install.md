---
title: Install and upgrade
description: Install and upgrade CodeGate using Docker
sidebar_position: 10
---

## Prerequisites

CodeGate is distributed as a Docker container. You need a container runtime like
Docker Desktop or Docker Engine. Podman and Podman Desktop are also supported.
Windows, macOS, and Linux operating systems are all supported with x86_64 and
arm64 (ARM and Apple Silicon) CPU architectures.

These instructions assume the `docker` CLI is available. If you use Podman,
replace `docker` with `podman` in all commands.

## Run CodeGate

To download and run the container, run the following from a terminal:

```bash
docker run --name codegate -d -p 8989:8989 -p 9090:80 ghcr.io/stacklok/codegate:latest
```

The container runs in the background (`-d`) and binds the CodeGate API endpoint
to port 8989 and the web dashboard to port 9090.

To use different listening ports, modify the `-p` flag(s):

- CodeGate API: `-p YOUR_PORT:8989`
- Dashboard UI: `-p YOUR_PORT:80`

## View logs

Use the `docker logs` command to view recent log messages:

```bash
docker logs codegate
```

Or to follow the log stream live (useful for troubleshooting), add the `-follow`
flag:

```bash
docker logs --follow codegate
```

## Upgrade CodeGate

To upgrade CodeGate to the latest version, start by downloading the latest
image:

```bash
docker pull ghcr.io/stacklok/codegate:latest
```

Stop and remove the current container:

```bash
docker stop codegate
docker rm codegate
```

Finally, launch the new version:

```bash
docker run --name codegate -d -p 8989:8989 -p 9090:80 ghcr.io/stacklok/codegate:latest
```

## Manage the CodeGate container

Use standard `docker` commands to manage and stop the CodeGate container.

## Next steps

Now that CodeGate is running, proceed to configure your IDE integration.

- [Use CodeGate with GitHub Copilot](./use-with-copilot.mdx)
- [Use CodeGate with Continue](./use-with-continue.mdx)

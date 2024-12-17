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

To download and run the CodeGate container, run the following from a terminal:

```bash
docker pull ghcr.io/stacklok/codegate:latest
```

See the example commands to run the container with the right parameters for your
scenario.

### Examples

Run with minimal functionality for use with **Continue**:

```bash
docker run -d -p 8989:8989 -p 9090:80 ghcr.io/stacklok/codegate:latest
```

The container runs in the background (`-d`), binds the CodeGate API endpoint to
port 8989, and the web dashboard to port 9090.

Mount a **persistent volume** to the container (see
[Persisting dashboard data](./dashboard.md#persisting-dashboard-data)):

```bash
docker run --name codegate -d -p 8989:8989 -p 9090:80 --mount type=volume,src=codegate_volume,dst=/app/codegate_volume ghcr.io/stacklok/codegate:latest
```

**Copilot support:** enable the HTTP proxy port and mount a persistent volume (see
[Use CodeGate with GitHub Copilot](./use-with-copilot.mdx)):

```bash
docker run --name codegate -d -p 8989:8989 -p 9090:80 -p 8990:8990 --mount type=volume,src=codegate_volume,dst=/app/codegate_volume ghcr.io/stacklok/codegate:latest
```

:::tip

Record the `docker run` command you use to launch CodeGate. It will be a handy
reference when you [upgrade CodeGate](#upgrade-codegate) in the future or if you
need to [modify your configuration](./configure.md).

:::

### Networking

CodeGate listens on several network ports:

| Default host port | Container port (internal) | Purpose                                              |
| :---------------- | :------------------------ | :--------------------------------------------------- |
| 9090              | 80                        | CodeGate web dashboard                               |
| 8989              | 8989                      | Model providers API proxy                            |
| 8990              | 8990                      | HTTP proxy (required for GitHub Copilot integration) |

All of the commands in these docs assume the default ports. To use different
listening ports, modify the `-p` flag(s):

- Dashboard: `-p YOUR_PORT:80`
- CodeGate API: `-p YOUR_PORT:8989`
- HTTP proxy: `-p YOUR_PORT:8990`

:::note

If you change the web dashboard port, some links returned by CodeGate's
responses won't work without manually changing the port when they open in your
browser.

:::

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

To upgrade CodeGate to the latest version, start by reviewing the
[Changelog](../about/changelog.md) for new features and breaking changes.

Download the latest image:

```bash
docker pull ghcr.io/stacklok/codegate:latest
```

Stop and remove the current container:

```bash
docker stop codegate
docker rm codegate
```

Finally, launch the new version using the same `docker run` command you used
originally.

## Manage the CodeGate container

Use standard `docker`/`podman` commands to manage the CodeGate container and
persistent volume.

## Next steps

Now that CodeGate is running, proceed to configure your IDE integration.

- [Use CodeGate with GitHub Copilot](./use-with-copilot.mdx)
- [Use CodeGate with Continue](./use-with-continue.mdx)

## Remove CodeGate

If you decide to stop using CodeGate, follow the removal steps for your IDE
integration:

- [Remove CodeGate - GitHub Copilot](./use-with-copilot.mdx#remove-codegate)
- [Remove CodeGate - Continue](./use-with-continue.mdx#remove-codegate)

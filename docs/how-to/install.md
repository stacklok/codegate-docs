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

CodeGate is primarily intended as a single-user system. There is no
authentication when using the CodeGate API or the CodeGate web dashboard which
are both operating over unencrypted HTTP. Hence all CodeGate components are
supposed to bind to _localhost_ (`127.0.0.1`) and remain inaccessible from
remote hosts.

If you are an advanced user who wants to run CodeGate on a remote host in a
secured/local network, consider the information given
[here](./configure.md#run-codegate-on-a-remote-host).

### Recommended settings

To download and run CodeGate with the recommended configuration for full
functionality:

```bash
docker run --name codegate -d -p 8989:8989 -p 9090:9090 -p 8990:8990 --mount type=volume,src=codegate_volume,dst=/app/codegate_volume --restart unless-stopped ghcr.io/stacklok/codegate:latest
```

Parameter reference:

- `--name codegate` - give the container a friendly name for easy reference
- `-d` - start in detached (background) mode
- `-p 8989:8989` - bind the CodeGate API to port 8989 on your host (required)
- `-p 9090:9090` - bind the CodeGate web dashboard to port 9090 on your host
  (recommended)
- `-p 8990:8990` - bind the CodeGate secure HTTP proxy to port 8990 on your host
  (required for Copilot)
- `--mount ...` - mount a persistent Docker volume named `codegate_volume` to
  the required path in the container
- `--restart unless-stopped` - restart CodeGate after a Docker or system
  restart, unless you manually stop it

More example run commands to run the container with the right parameters for
your scenario are found below. To learn how to customize the CodeGate
application settings, see [Configure CodeGate](./configure.md)

:::warning

If you omit the persistent volume mount, your
[workspace configurations](../features/workspaces.mdx) and prompt history are
lost when you stop or restart CodeGate.

:::

### Alternative run commands {#examples}

Run with minimal functionality for use with **Continue**, **aider**, or
**Cline** (omits the HTTP proxy port needed by Copilot):

```bash
docker run --name codegate -d -p 8989:8989 -p 9090:9090 --mount type=volume,src=codegate_volume,dst=/app/codegate_volume --restart unless-stopped ghcr.io/stacklok/codegate:latest
```

**Restrict ports:** Docker publishes ports to all interfaces on your host by
default. This example publishes only on your `localhost` interface:

```bash
docker run --name codegate -d -p 127.0.0.1:8989:8989 -p 127.0.0.1:9090:9090 -p 127.0.0.1:8990:8990 --mount type=volume,src=codegate_volume,dst=/app/codegate_volume --restart unless-stopped ghcr.io/stacklok/codegate:latest
```

**Install a specific version:** starting with v0.1.4 you can optionally run a
specific version of CodeGate using sematic version tags:

- Patch version: `ghcr.io/stacklok/codegate:v0.1.15` (exact)
- Minor version: `ghcr.io/stacklok/codegate:v0.1` (latest v0.1.x release)
- Major version: `ghcr.io/stacklok/codegate:v0` (latest v0.x.x release)

See the [GitHub releases](https://github.com/stacklok/codegate/releases) page
for available versions.

:::tip

Record the `docker run` command you use to launch CodeGate. It will be a handy
reference when you [upgrade CodeGate](#upgrade-codegate) in the future or if you
need to [modify your configuration](./configure.md).

:::

### Networking

CodeGate listens on several network ports:

| Default host port | Container port (internal) | Purpose                                        |
| :---------------- | :------------------------ | :--------------------------------------------- |
| 9090              | 9090                      | CodeGate web dashboard                         |
| 8989              | 8989                      | CodeGate API                                   |
| 8990              | 8990                      | Secure HTTP proxy (GitHub Copilot integration) |

Docker publishes ports to all network interfaces on your system by default. This
can unintentionally expose your CodeGate installation to other systems on the
same network. To restrict this, add `127.0.0.1` IP to the publish flags:

- API: `-p 127.0.0.1:8989:8989`
- HTTPS proxy: `-p 127.0.0.1:8990:8990`
- Dashboard: `-p 127.0.0.1:9090:9090`

All of the commands in these docs assume the default ports. To use different
listening ports, modify the `-p` flag(s):

- API: `-p YOUR_PORT:8989`
- HTTPS proxy: `-p YOUR_PORT:8990`
- Dashboard: `-p YOUR_PORT:9090`

:::note

If you change the web dashboard port, some links returned by CodeGate's
responses won't work without manually updating the URL that opens in your
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
docker rm --force codegate
```

Finally, launch the new version using the
[same `docker run` command](#recommended-settings) you used originally.

## Manage the CodeGate container

Use standard `docker`/`podman` commands to manage the CodeGate container and
persistent volume.

## Next steps

Now that CodeGate is running, proceed to
[configure your AI assistant/agent](../integrations/index.mdx).

## Remove CodeGate

If you decide to stop using CodeGate, follow the removal steps for your
[integration](../integrations/index.mdx), then stop and remove the CodeGate
container and volume:

```bash
docker rm -f codegate
docker volume rm codegate_volume
```

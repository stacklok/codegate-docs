---
title: Run the API server
description: How to run the local ToolHive API server
sidebar_position: 60
---

ToolHive includes a built-in API server that provides a RESTful interface for
interacting with MCP servers. This API server is useful for integrating ToolHive
with other applications or for automating tasks.

:::note

The API server is not intended for production use. It is designed for local
automation and UI development, and does not implement any authentication or
authorization mechanisms.

For production use cases, consider using the ToolHive Kubernetes Operator, which
provides a more robust and secure way to manage ToolHive instances in a
multi-user environment.

:::

## Start the API server

To start the API server, use the following command:

```bash
thv serve
```

This command starts the API server on `localhost` (127.0.0.1) using the default
port `8080`.

Test the API server using curl or a web browser:

```bash
curl http://localhost:8080/api/v1beta/status
```

You should see a JSON response with the current version of ToolHive.

## Custom networking

By default, the API server listens on `localhost` (127.0.0.1) and port `8080`.

You can specify a different port using the `--port` option:

```bash
thv serve --port <port-number>
```

If you are running the API server on a remote host, specify the host name or IP
address to bind to using the `--host` option:

```bash
thv serve --host <host-name>
```

## API documentation

Refer to the [ToolHive API documentation](../reference/api.mdx) for details on
the available endpoints, request and response formats.

You can also run a local instance of the API documentation using the `--openapi`
option:

```bash
thv serve --openapi
```

Open a browser to `http://localhost:8080/api/doc` to view the API documentation.
The OpenAPI specification is also available at
`http://localhost:8080/api/openapi.json`.

## Related information

- [ToolHive API documentation](../reference/api.mdx)
- [`thv serve` command reference](../reference/cli/thv_serve.md)

---
title: Client configuration
description:
  How to configure AI assistant clients to work with ToolHive MCP servers.
sidebar_position: 40
---

This guide shows you how to configure AI assistant clients to work with ToolHive
MCP servers.

## Prerequisites

Before you begin, make sure you have:

- ToolHive installed
- At least one supported client installed (VS Code with Copilot, Cursor, or Roo
  Code)

## Understanding client configuration

AI assistants need to know where to find MCP servers to use them. You can
configure clients using ToolHive in three ways:

1. **Auto-discovery**: ToolHive automatically detects and configures supported
   clients.
2. **Manual registration**: Explicitly register supported clients for ToolHive
   to manage.
3. **Custom configuration**: For unsupported clients or custom setups, you can
   configure them to connect to ToolHive-managed MCP servers using the SSE
   protocol.

With the first two methods, ToolHive updates the client configuration
automatically when you start or remove an MCP server. For a complete list of
supported clients and compatibility details, check the
[Client compatibility reference](../reference/client-compatibility.md).

## Using auto-discovery

Auto-discovery is the simplest way to configure supported clients.

### Step 1: Enable auto-discovery

Enable auto-discovery with the following command:

```bash
thv config auto-discovery true
```

### Step 2: Run an MCP server

Run an MCP server:

```bash
thv run fetch
```

ToolHive configures any supported clients it finds on your system automatically.

### Step 3: Restart your client

You may need to restart your client application (VS Code, Cursor, etc.) for the
configuration to take effect.

## Manually registering clients

If auto-discovery doesn't work for your setup or you want more control, you can
manually register clients.

### Step 1: Register a client

Use the following command to register a client:

```bash
thv config register-client <client-name>
```

Replace `<client-name>` with the name of your client. Common client names
include:

- `claude-code` - Claude Code CLI
- `cursor` - Cursor IDE
- `roo-code` - Roo Code extension for VS Code
- `vscode` - Visual Studio Code (GitHub Copilot)
- `vscode-insider` - VS Code Insiders edition

Example:

```bash
thv config register-client vscode
```

Run `thv config register-client --help` for the latest list of supported
clients.

### Step 2: Verify the client is registered

List all registered clients:

```bash
thv config list-registered-clients
```

Your client should appear in the list. Repeat the registration step for any
additional clients you want to configure.

### Step 3: Run an MCP server

Run an MCP server:

```bash
thv run fetch
```

### Step 4: Restart your client

You may need to restart your client application for the configuration to take
effect.

## Removing client configurations

To remove a client configuration:

```bash
thv config remove-client <client-name>
```

To disable auto-discovery if you enabled it:

```bash
thv config auto-discovery false
```

## Other clients or tools

If you have other clients or development libraries that ToolHive doesn't
directly support, you can still configure them to use ToolHive-managed MCP
servers as long as they support the SSE protocol. Check the documentation for
your client or library for configuration details.

List your running MCP servers to get the URL:

```bash
thv list
```

Example output:

```text
CONTAINER ID   NAME     IMAGE                                     STATE     TRANSPORT   PORT    URL
c06b6f6c09d7   fetch    mcp/fetch:latest                          running   stdio       43832   http://localhost:43832/sse#fetch
0489fddf7c10   github   ghcr.io/github/github-mcp-server:latest   running   stdio       19046   http://localhost:19046/sse#github
```

You can also get the list in JSON format, suitable for many clients that use the
typical configuration format:

```bash
thv list --format mcpservers
```

Example output:

```json
{
  "mcpServers": {
    "fetch": {
      "url": "http://localhost:43832/sse#fetch"
    },
    "github": {
      "url": "http://localhost:19046/sse#github"
    }
  }
}
```

Next, configure your client or library to connect to the MCP server using the
URL provided by ToolHive.

## Troubleshooting

### Client is not auto-discovered

If your client isn't automatically configured:

1. Make sure auto-discovery is enabled:

   ```bash
   thv config auto-discovery true
   ```

2. Check if your client is supported for auto-discovery in the
   [Client compatibility reference](../reference/client-compatibility.md).

3. Try manually registering the client:

   ```bash
   thv config register-client <client-name>
   ```

### Client can't connect to MCP server

If your client can't connect to the MCP server:

1. Verify the MCP server is running:

   ```bash
   thv list
   ```

2. Check the client configuration:

   ```bash
   thv config list-registered-clients
   ```

3. Ensure the URL is correct and accessible. Use `curl` to test the connection,
   for example (replace the URL with your actual MCP server URL):

   ```bash
   curl http://localhost:43832/sse\#fetch
   ```

4. Restart your client application

## Related information

- [thv config command reference](../reference/cli/thv_config.md)
- [Client compatibility](../reference/client-compatibility.md)
- [Run and manage MCP servers](run-mcp-servers.mdx)

---
title: Client compatibility
description:
  Overview of supported AI assistant clients and their compatibility with
  ToolHive.
sidebar_position: 5
---

This document details which AI assistant clients are compatible with ToolHive
and how they interact with MCP servers.

## Supported clients

ToolHive has been tested with the following clients:

| Client                   | Supported | Auto-discovery | Notes                                                            |
| ------------------------ | --------- | -------------- | ---------------------------------------------------------------- |
| Copilot (VS Code)        | ✅        | ✅             | v1.99.0+ or Insiders version                                     |
| Cursor                   | ✅        | ✅             | All recent versions                                              |
| Roo Code                 | ✅        | ✅             | All versions                                                     |
| Claude Code              | ✅        | ✅             | v0.2.54 and higher                                               |
| PydanticAI               | ✅        | ❌             | Requires manual configuration                                    |
| Copilot (JetBrains IDEs) | ❌        | ❌             | Copilot plugin for JetBrains IDEs doesn't support Agent mode yet |
| Continue                 | ❌        | ❌             | Continue doesn't yet support SSE                                 |
| Claude Desktop           | ❌        | ❌             | Claude Desktop doesn't yet support SSE                           |

You can also use other clients and development libraries that support the SSE
protocol with ToolHive, but they may require manual configuration.

## Client requirements

For your client to work with ToolHive, it must:

1. Support the Model Context Protocol (MCP)
2. Be able to connect to MCP servers via the server-sent events (SSE) transport
   protocol
3. Be properly configured with the MCP server URL

## Automatic configuration support

ToolHive can manage the configuration of supported clients to connect to MCP
servers. You can register clients manually with ToolHive, or use auto-discovery.
Auto-discovery lets ToolHive automatically find and configure supported clients
on your system.

See the table above for the list of clients that support configuration
management and auto-discovery.

For other clients, you'll need to manually configure the MCP server URL.

## Configuration locations

ToolHive works with client configurations in their default locations.

### VS Code with Copilot

Standard build:

- **macOS**: `~/Library/Application Support/Code/User/settings.json`
- **Linux**: `~/.config/Code/User/settings.json`

Insiders edition:

- **macOS**: `~/Library/Application Support/Code - Insiders/User/settings.json`
- **Linux**: `~/.config/Code - Insiders/User/settings.json`

Example configuration:

```json
{
  // Other VS Code settings...

  "mcp": {
    "servers": {
      "github": { "url": "http://localhost:19046/sse#github", "type": "sse" },
      "fetch": { "url": "http://localhost:43832/sse#fetch", "type": "sse" }
    }
  }
}
```

:::note

You must "start" MCP servers manually from the settings file ("Preferences: Open
User Settings (JSON)" in the command palette).

![Screenshot of the VS Code MCP settings](/img/toolhive/vscode-mcp-start.webp)

:::

### Cursor

- **All platforms**: `~/.cursor/mcp.json`

Example configuration:

```json
{
  "mcpServers": {
    "github": { "url": "http://localhost:19046/sse#github" },
    "fetch": { "url": "http://localhost:43832/sse#fetch" }
  }
}
```

### Claude Code

- **All platforms**: `~/.claude.json`

Example configuration:

```json
{
  // Other Claude Code settings...

  "mcpServers": {
    "fetch": {
      "url": "http://localhost:43832/sse#fetch",
      "type": "sse"
    }
  }
}
```

### Roo Code

- **macOS**:
  `~/Library/Application Support/Code/User/globalStorage/rooveterinaryinc.roo-cline/settings/mcp_settings.json`
- **Linux**:
  `~/.config/Code/User/globalStorage/rooveterinaryinc.roo-cline/settings/mcp_settings.json`

Example configuration:

```json
{
  "mcpServers": {
    "github": { "url": "http://localhost:19046/sse#github" },
    "fetch": { "url": "http://localhost:43832/sse#fetch" }
  }
}
```

## Manual configuration

If auto-configuration isn't supported for your client, manually configure the
MCP server URL.

### Example: PydanticAI

For PydanticAI, set the MCP server URL in your code:

```python
from pydantic_ai.mcp import MCPServerHTTP

server = MCPServerHTTP(url='http://localhost:43832/sse#fetch')
```

## Troubleshooting

### Auto-discovery not working

If auto-discovery doesn't work:

1. Make sure auto-discovery is enabled:

   ```bash
   thv config auto-discovery true
   ```

2. Verify that your client is supported for auto-discovery
3. Check file permissions on the client configuration files
4. Observe the console logging output for any errors when you run an MCP server
5. Try manually registering the client:

   ```bash
   thv config register-client <client-name>
   ```

### Client can connect but tools aren't available

If your client connects to the MCP server but tools aren't available:

1. Make sure the MCP server is running and accessible:

   ```bash
   thv list

   curl <mcp-server-url>
   ```

2. Check the MCP server logs:

   ```bash
   thv logs <server-name>
   ```

3. Make sure the MCP server is properly configured in your client
4. For VS Code, ensure the MCP server is started in the settings
5. If you've implemented authentication for your MCP server, ensure the client
   has the necessary permissions to access the tools

## Related information

- [Client configuration](../how-to/client-configuration.md)
- [Run MCP servers](../how-to/run-mcp-servers.mdx)

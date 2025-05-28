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

| Client                     | Supported | Auto-discovery | Notes                                     |
| -------------------------- | --------- | -------------- | ----------------------------------------- |
| GitHub Copilot (VS Code)   | ✅        | ✅             | v1.99.0+ or Insiders version              |
| Cursor                     | ✅        | ✅             | v0.47.0+                                  |
| Roo Code                   | ✅        | ✅             | v3.9.0+                                   |
| Cline                      | ✅        | ✅             | v3.8.5+                                   |
| Claude Code                | ✅        | ✅             | v0.2.54+                                  |
| PydanticAI                 | ✅        | ❌             |                                           |
| Continue                   | ✅        | ❌             | Pre-release extension v1.39+ ([issue][1]) |
| GitHub Copilot (JetBrains) | ❌        | ❌             | No support for HTTP/SSE MCPs ([issue][2]) |
| Claude Desktop             | ❌        | ❌             | No support for HTTP/SSE MCPs ([issue][3]) |

[1]: https://github.com/continuedev/continue/issues/5359
[2]: https://github.com/microsoft/copilot-intellij-feedback/issues/224
[3]: https://github.com/orgs/modelcontextprotocol/discussions/16

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

GitHub Copilot in Visual Studio Code stores its
[global MCP configuration](https://code.visualstudio.com/docs/copilot/chat/mcp-servers#_add-an-mcp-server-to-your-user-settings)
in your VS Code user settings file.

**Standard version**:

- **macOS**: `~/Library/Application Support/Code/User/settings.json`
- **Linux**: `~/.config/Code/User/settings.json`

**Insiders edition**:

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

When you register VS Code as a client or enable auto-discovery, ToolHive
automatically updates the global MCP configuration file when you run an MCP
server. You can also
[configure project-specific MCP servers](https://code.visualstudio.com/docs/copilot/chat/mcp-servers#_add-an-mcp-server-to-your-workspace)
by creating a `.vscode/mcp.json` file in your project directory.

### Cursor

[Cursor](https://cursor.so/) stores its global MCP configurations in a JSON file
in your home directory.

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

When you register Cursor as a client or enable auto-discovery, ToolHive
automatically updates the global MCP configuration file when you run an MCP
server. You can also
[configure project-specific MCP servers](https://docs.cursor.com/context/model-context-protocol#configuration-locations)
by creating a `.cursor/mcp.json` file in your project directory.

### Claude Code

[Claude Code](https://www.anthropic.com/claude-code) stores its global (`user`
scope) MCP configurations in a JSON file in your home directory.

- **All platforms**: `~/.claude.json`

Example configuration:

```json
{
  // Other Claude Code settings...

  "mcpServers": {
    "github": { "url": "http://localhost:19046/sse#github", "type": "sse" },
    "fetch": { "url": "http://localhost:43832/sse#fetch", "type": "sse" }
  }
}
```

When you register Claude Code as a client or enable auto-discovery, ToolHive
automatically updates the global MCP configuration file when you run an MCP
server. You can also
[configure project-specific MCP servers](https://docs.anthropic.com/en/docs/claude-code/tutorials#understanding-mcp-server-scopes)
by creating a `.cursor/mcp.json` file in your project directory, or add servers
using the `claude` CLI:

```bash
claude mcp add --scope <user|project> --transport sse fetch http://localhost:43832/sse#fetch
```

### Roo Code and Cline

[Roo Code](https://roocode.com/) (previously Roo Cline) and
[Cline](https://cline.bot/) store their global MCP configurations in their VS
Code extension settings directory. Their configuration format is identical.

**Roo Code**:

- **macOS**:
  `~/Library/Application Support/Code/User/globalStorage/rooveterinaryinc.roo-cline/settings/mcp_settings.json`
- **Linux**:
  `~/.config/Code/User/globalStorage/rooveterinaryinc.roo-cline/settings/mcp_settings.json`

**Cline**:

- **macOS**:
  `~/Library/Application Support/Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json`
- **Linux**:
  `~/.config/Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json`

Example configuration:

```json
{
  "mcpServers": {
    "github": { "url": "http://localhost:19046/sse#github" },
    "fetch": { "url": "http://localhost:43832/sse#fetch" }
  }
}
```

When you register Roo Code or Cline as a client or enable auto-discovery,
ToolHive automatically updates the global MCP configuration file when you run an
MCP server. With Roo Code, you can also configure
[project-specific MCP servers](https://docs.roocode.com/features/mcp/using-mcp-in-roo#editing-mcp-settings-files)
by creating a `.roo/mcp.json` file in your project directory.

## Manual configuration

If auto-configuration isn't supported for your client, manually configure the
MCP server URL.

### Example: PydanticAI

For [PydanticAI](https://ai.pydantic.dev/), set the MCP server URL in your code:

```python
from pydantic_ai.mcp import MCPServerHTTP

server = MCPServerHTTP(url='http://localhost:43832/sse#fetch')
```

### Example: Continue

For the [Continue](https://continue.dev) extension in VS Code, edit your
`~/.continue/config.yaml` file or project-specific
`.continue/mcpServers/<name>.yaml` file to include the MCP server URL:

```yaml
mcpServers:
  - name: fetch
    type: sse
    url: http://localhost:43832/sse#fetch
```

## Related information

- [Client configuration](../how-to/client-configuration.md)
- [Run MCP servers](../how-to/run-mcp-servers.mdx)

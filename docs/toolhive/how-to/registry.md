---
title: Explore the registry
description: Using the built-in registry to find MCP servers.
sidebar_position: 15
---

ToolHive includes a built-in registry of MCPs with verified configurations,
allowing you to discover and deploy MCP servers effortlessly. Simply select one
from the list and run it securely with a single command.

## Find MCP servers

To list all MCP servers in the ToolHive registry, run:

```bash
thv registry list
```

This command displays a list of servers with their name, and description,
transport method, and the number of stars and downloads to help you identify the
most popular and useful servers.

Example output:

```text
NAME                      DESCRIPTION                                                    TRANSPORT   STARS   PULLS
atlassian                 Model Context Protocol (MCP) server for Atlassian product...   stdio       1557    3719
aws-kb-retrieval-server   MCP server for retrieving information from the AWS Knowle...   stdio       47366   2251
brave-search              MCP server that integrates the Brave Search API, providin...   stdio       47366   6022
everart                   Image generation server for Claude Desktop using EverArt'...   stdio       47366   3937
everything                This MCP server attempts to exercise all the features of ...   stdio       47366   5150
fetch                     A Model Context Protocol server that provides web content...   stdio       47366   6414
filesystem                Node.js server implementing Model Context Protocol (MCP) ...   stdio       47366   8750
firecrawl                 A powerful web scraping and content extraction MCP server...   stdio       3141    3597
gdrive                    This MCP server integrates with Google Drive to allow lis...   stdio       47366   3650
git                       A Model Context Protocol server for Git repository intera...   stdio       47366   4262
github                    The GitHub MCP Server provides seamless integration with ...   stdio       13894   5000

<... trimmed for brevity ...>
```

You can also search by keyword to find servers related to a specific topic or
capability:

```bash
thv search <term>
```

For example, to locate servers related to GitHub:

```bash
thv search github
```

## View server details

To view detailed information about a specific MCP server, run:

```bash
thv registry info <server-name>
```

For example:

```bash
thv registry info github
```

ToolHive provides the server's description, available tools, configuration
options, and other metadata.

By default, ToolHive displays the server's configuration in a human-readable
format. To view the configuration in JSON format, use the `--format` option:

```bash
thv registry info <server-name> --format json
```

### Example output

```text {1,8,16,21} showLineNumbers
Name: github
Image: ghcr.io/github/github-mcp-server:latest
Description: The GitHub MCP Server provides seamless integration with GitHub APIs, enabling advanced automation and interaction capabilities for developers and tools
Transport: stdio
Repository URL: https://github.com/github/github-mcp-server
Popularity: 13894 stars, 5000 pulls
Last Updated: 2025-05-20T00:21:46Z
Tools:
  - get_me
  - get_issue
  - create_issue
  - add_issue_comment
  - list_issues
<... trimmed for brevity ...>

Environment Variables:
  - GITHUB_PERSONAL_ACCESS_TOKEN (required): GitHub personal access token with appropriate permissions
  - GH_HOST: GitHub Enterprise Server hostname (optional)
Tags:
  api, create, fork, github, list, pull-request, push, repository, search, update, issues
Permissions:
  Network:
    Allow Transport: tcp
    Allow Host: docs.github.com, github.com
    Allow Port: 443
Example Command:
  thv run github
```

This information helps you understand the server's capabilities, requirements,
and security profile before running it.

- **Server name** (line 1): The server name to use with the `thv run` command
- **Metadata** (lines 2-7): Details about the server, including the image name,
  description, transport method, repository URL, popularity, and last updated
  date
- **Tools list** (line 8): The list of tools this MCP server provides
- **Configuration** (line 16): Required and optional environment variables
  needed to run the server
- **Permissions** (line 21): The permissions profile applied to the server,
  including file system and network access (see
  [Custom permissions](./custom-permissions.md))

## Contribute to the registry

If you have an MCP server that you would like to add to the ToolHive registry,
you can [open an issue](https://github.com/stacklok/toolhive/issues) or submit a
pull request to the ToolHive GitHub repository. The ToolHive team will review
your submission and consider adding it to the registry.

Registry entries are defined in the
[`pkg/registry/data/registry.json`](https://github.com/stacklok/toolhive/blob/main/pkg/registry/data/registry.json)
file in the ToolHive repository.

## Next steps

See [Run MCP servers](./run-mcp-servers.mdx) to run an MCP server from the
registry.

## Related information

- [`thv registry` command reference](../reference/cli/thv_registry.md)
- [`thv search` command reference](../reference/cli/thv_search.md)

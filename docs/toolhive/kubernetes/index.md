---
title: ToolHive Kubernetes operator
description: Manage MCP servers in Kubernetes with the ToolHive operator
---

The ToolHive Kubernetes operator manages MCP servers in Kubernetes clusters. It
allows you to define MCP servers as Kubernetes resources and automates their
deployment and management.

## Overview

The operator introduces a new Custom Resource Definition (CRD) called
`MCPServer` that represents an MCP server in Kubernetes. When you create an
`MCPServer` resource, the operator automatically:

1. Creates a Deployment to run the MCP server
2. Sets up a Service to expose the MCP server
3. Configures the appropriate permissions and settings
4. Manages the lifecycle of the MCP server

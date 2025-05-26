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

## Installation

To install the ToolHive operator in your Kubernetes cluster, you can use either
Helm or `kubectl`. The recommended method is to use Helm, as it simplifies the
installation process and allows you to manage the operator using Helm charts.

[Deploy the operator using Helm](./deploy-operator-helm.md)
[Deploy the operator using kubectl](./deploy-operator-kubectl.md)

Once the operator is installed, you can create and manage MCP servers using the
`MCPServer` custom resource.

[Run MCP servers in Kubernetes](./run-mcp-k8s.md)

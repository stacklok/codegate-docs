---
title: Run MCP servers in Kubernetes
description: How to deploy MCP servers in Kubernetes using the ToolHive operator
sidebar_position: 20
---

## Prerequisites

- A Kubernetes cluster (v1.19+)
- Permissions to create resources in the cluster
- `kubectl` configured to communicate with your cluster
- The ToolHive operator installed in your cluster (see
  [Deploy the operator using Helm](./deploy-operator-helm.md))

## Create an MCP Server

To create an MCP server, define an `MCPServer` resource and apply it to your
cluster. This example creates the `fetch` MCP server.

```yaml title="my-mcpserver.yaml"
apiVersion: toolhive.stacklok.dev/v1alpha1
kind: MCPServer
metadata:
  name: fetch
spec:
  image: docker.io/mcp/fetch
  transport: stdio
  port: 8080
  permissionProfile:
    type: builtin
    name: network
  resources:
    limits:
      cpu: '100m'
      memory: '128Mi'
    requests:
      cpu: '50m'
      memory: '64Mi'
```

Apply the resource:

```bash
kubectl apply -f my-mcpserver.yaml
```

## Run a server with secrets

For MCP servers that require authentication tokens or other secrets, add the
`secrets` field to the `MCPServer` resource. This example shows how to use a
Kubernetes secret to pass a GitHub personal access token to the `github` MCP
server.

```yaml title="my-mcpserver-with-secrets.yaml"
apiVersion: toolhive.stacklok.dev/v1alpha1
kind: MCPServer
metadata:
  name: github
spec:
  image: docker.io/mcp/github
  transport: stdio
  port: 8080
  permissionProfile:
    type: builtin
    name: network
  secrets:
    - name: github-token
      key: token
      targetEnvName: GITHUB_PERSONAL_ACCESS_TOKEN
```

First, create the secret. Note that the secret must be created in the same
namespace as the MCP server and the key must match the one specified in the
`MCPServer` resource.

```bash
kubectl create secret generic github-token --from-literal=token=<YOUR_TOKEN>
```

Apply the MCPServer resource:

```bash
kubectl apply -f my-mcpserver-with-secrets.yaml
```

## Mount a volume

:::warning TODO

TODO: Need info!

:::

## Check MCP server status

To check the status of your MCP servers:

```bash
kubectl get mcpservers
```

This will show the status, URL, and age of each MCP server.

For more details about a specific MCP server:

```bash
kubectl describe mcpserver <NAME>
```

## Configuration reference

:::tip QUESTION

TODO: Move to a /reference page?

:::

### MCPServer spec

| Field               | Description                                     | Required | Default |
| ------------------- | ----------------------------------------------- | -------- | ------- |
| `image`             | Container image for the MCP server              | Yes      | -       |
| `transport`         | Transport method (stdio or sse)                 | No       | stdio   |
| `port`              | Port to expose the MCP server on                | No       | 8080    |
| `args`              | Additional arguments to pass to the MCP server  | No       | -       |
| `env`               | Environment variables to set in the container   | No       | -       |
| `volumes`           | Volumes to mount in the container               | No       | -       |
| `resources`         | Resource requirements for the container         | No       | -       |
| `secrets`           | References to secrets to mount in the container | No       | -       |
| `permissionProfile` | Permission profile configuration                | No       | -       |

### Volumes

The `volumes` field has the following parameters:

:::warning TODO

Need info!

:::

### Secrets

The `secrets` field has the following parameters:

- `name`: The name of the Kubernetes secret (required)
- `key`: The key in the secret (required)
- `targetEnvName`: The environment variable to be used when setting up the
  secret in the MCP server (optional). If left unspecified, it defaults to the
  key.

### Permission Profiles

Permission profiles can be configured in two ways:

1. Using a built-in profile:

   ```yaml
   permissionProfile:
     type: builtin
     name: network # or "none"
   ```

2. Using a ConfigMap:

   ```yaml
   permissionProfile:
     type: configmap
     name: my-permission-profile
     key: profile.json
   ```

The ConfigMap should contain a JSON permission profile.

## Examples

See the
[`deploy/operator/samples/` directory](https://github.com/stacklok/toolhive/tree/main/deploy/operator/samples)
in the ToolHive repo for example MCPServer resources.

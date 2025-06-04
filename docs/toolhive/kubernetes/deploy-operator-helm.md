---
title: Deploy the operator
description:
  How to deploy the ToolHive operator in a Kubernetes cluster using Helm
sidebar_position: 10
---

Helm is the officially supported method to install the ToolHive operator in a
Kubernetes cluster.

## Prerequisites

- A Kubernetes cluster (v1.19+)
- Permissions to create resources in the cluster
- [`kubectl`](https://kubernetes.io/docs/tasks/tools/) configured to communicate
  with your cluster
- [Helm](https://helm.sh/docs/intro/install/) (v3.10 minimum, v3.14+
  recommended)

## Install the operator

:::note

You must first be authenticated to ghcr.io following
[these instructions](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry#authenticating-with-a-personal-access-token-classic).

:::

To install the ToolHive operator using Helm and the default settings, follow
these steps:

1. Install the operator CRDs:

   ```bash
   helm upgrade -i toolhive-operator-crds oci://ghcr.io/stacklok/toolhive/toolhive-operator-crds
   ```

2. Install the operator:

   ```bash
   helm upgrade -i toolhive-operator oci://ghcr.io/stacklok/toolhive/toolhive-operator -n toolhive-system --create-namespace
   ```

3. Verify the installation:

   ```bash
   kubectl get pods -n toolhive-system
   ```

   After about 30 seconds, you should see the `toolhive-operator` pod running.

4. Check the logs of the operator pod:

   ```bash
   kubectl logs -f -n toolhive-system <toolhive-operator-pod-name>
   ```

   This shows you the logs of the operator pod, which can help you debug any
   issues.

## Customize the installation

You can customize the operator installation by providing a `values.yaml` file
with your configuration settings. For example, to change the number of replicas
and set a specific ToolHive version, create a `values.yaml` file:

```yaml title="values.yaml"
operator:
  replicaCount: 2
  toolhiveRunnerImage: ghcr.io/stacklok/toolhive:v0.0.38 # or `latest`
```

Install the operator with your custom values:

```bash
helm upgrade -i toolhive-operator oci://ghcr.io/stacklok/toolhive/toolhive-operator -n toolhive-system --create-namespace -f values.yaml
```

To see all available configuration options, run:

```bash
helm show values oci://ghcr.io/stacklok/toolhive/toolhive-operator
```

## Upgrade the operator

To upgrade the ToolHive operator to a new version, use the same command you used
to install it:

```bash
helm upgrade toolhive-operator oci://ghcr.io/stacklok/toolhive/toolhive-operator -n toolhive-system --reuse-values
```

This upgrades the operator to the latest version available in the OCI registry.
If you have a custom `values.yaml` file, include it with the `-f` flag:

```bash
helm upgrade toolhive-operator oci://ghcr.io/stacklok/toolhive/toolhive-operator -n toolhive-system --reuse-values -f values.yaml
```

## Uninstall the operator

To uninstall the operator and CRDs, run the following commands:

```bash
helm uninstall toolhive-operator -n toolhive-system
helm uninstall toolhive-operator-crds
```

This removes all the Kubernetes components associated with the chart and deletes
the release. You'll need to delete the namespace manually if you used Helm to
create it.

## Next steps

See [Run MCP servers in Kubernetes](./run-mcp-k8s.md) to learn how to create and
manage MCP servers using the ToolHive operator in your Kubernetes cluster.

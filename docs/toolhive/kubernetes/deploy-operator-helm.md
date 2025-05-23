---
title: Deploy the operator using Helm
description:
  How to deploy the ToolHive operator in a Kubernetes cluster using Helm
sidebar_position: 15
---

## Prerequisites

- A Kubernetes cluster (v1.19+)
- Permissions to create resources in the cluster
- `kubectl` configured to communicate with your cluster
- Helm (3.10+ minimum, 3.14+ recommended)

## Install the operator

To install the ToolHive operator using Helm, follow these steps:

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

   You should see the `toolhive-operator` pod running.

4. Check the logs of the operator pod:

   ```bash
   kubectl logs -f -n toolhive-system <toolhive-operator-pod-name>
   ```

   This will show you the logs of the operator pod, which can help you debug any
   issues.

## Uninstall the operator

To uninstall/delete the operator and CRDs, run the following commands:

```bash
helm uninstall toolhive-operator -n toolhive-system
helm uninstall toolhive-operator-crd
```

This removes all the Kubernetes components associated with the chart and deletes
the release. You will have to delete the namespace manually if you used Helm to
create it.

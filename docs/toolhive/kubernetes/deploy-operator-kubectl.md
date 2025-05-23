---
title: Deploy the operator using kubectl
description:
  How to deploy the ToolHive operator in a Kubernetes cluster using kubectl
sidebar_position: 10
---

## Prerequisites

- A Kubernetes cluster (v1.19+)
- Permissions to create resources in the cluster
- `kubectl` configured to communicate with your cluster

## Clone the repository

To get the latest version of the ToolHive operator, clone the repository:

```bash
git clone https://github.com/stacklok/toolhive.git
cd toolhive
```

## Install the operator

1. Install the CRD:

   ```bash
   kubectl apply -f deploy/operator/crds/toolhive.stacklok.dev_mcpservers.yaml
   ```

2. Create the operator namespace:

   ```bash
   kubectl apply -f deploy/operator/namespace.yaml
   ```

3. Set up RBAC:

   ```bash
   kubectl apply -f deploy/operator/rbac.yaml
   kubectl apply -f deploy/operator/toolhive_rbac.yaml
   ```

4. Deploy the operator:

   ```bash
   kubectl apply -f deploy/operator/operator.yaml
   ```

5. Verify the installation:

   ```bash
   kubectl get pods -n toolhive-system
   ```

   You should see the `toolhive-operator` pod running.

6. Check the logs of the operator pod:

   ```bash
   kubectl logs -f -n toolhive-system <toolhive-operator-pod-name>
   ```

   This will show you the logs of the operator pod, which can help you debug any
   issues.

## Uninstall the operator

To uninstall/delete the operator and CRDs, delete the resources in the reverse
order of installation:

```bash
kubectl delete -f deploy/operator/operator.yaml
kubectl delete -f deploy/operator/rbac.yaml
kubectl delete -f deploy/operator/toolhive_rbac.yaml
kubectl delete -f deploy/operator/namespace.yaml
kubectl delete -f deploy/operator/crds/toolhive.stacklok.dev_mcpservers.yaml
```

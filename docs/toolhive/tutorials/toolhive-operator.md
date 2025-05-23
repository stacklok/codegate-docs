---
title: Deploy the ToolHive K8s operator with kind
description:
  A step-by-step guide to deploy the ToolHive Kubernetes operator in a local
  kind cluster.
sidebar_position: 20
---

The ToolHive Kubernetes operator manages MCP (Model Context Protocol) servers in
Kubernetes clusters. It allows you to define MCP servers as Kubernetes resources
and automates their deployment and management.

## Prerequisites

- `kubectl` configured to communicate with your cluster
- Kind installed
- Optional: [Task](https://taskfile.dev/installation/) to run automated steps
  with a cloned copy of the ToolHive repository
  (`git clone https://github.com/stacklok/toolhive`)

## TL;DR

To setup a kind cluster and deploy the operator, we have created a Task so that
you can do this with one command. You will need to clone this repository to run
the command.

Run:

```bash
task kind-with-toolhive-operator
```

This will create the kind cluster, install an nginx ingress controller and then
install the latest built ToolHive operator image.

## Installation

## Installing the operator into a new kind cluster

### Automated via Task

To setup a kind cluster and deploy the operator, we have created a Task so that
you can do this with one command.

Run:

```bash
task kind-with-toolhive-operator
```

### Manual installation

[Install kind](https://kind.sigs.k8s.io/docs/user/quick-start/#installation) and
create a cluster:

```bash
kind create cluster --name toolhive
```

Once the cluster is running, follow these steps:

1. Install the CRD:

   ```bash
   kubectl create -f https://raw.githubusercontent.com/stacklok/toolhive/main/deploy/operator/crds/toolhive.stacklok.dev_mcpservers.yaml
   ```

2. Create the operator namespace:

   ```bash
   kubectl apply -f https://raw.githubusercontent.com/stacklok/toolhive/main/deploy/operator/namespace.yaml
   ```

3. Set up RBAC:

   ```bash
   kubectl apply -f https://raw.githubusercontent.com/stacklok/toolhive/main/deploy/operator/toolhive_rbac.yaml
   ```

4. Deploy the operator:

   ```bash
   kubectl apply -f https://raw.githubusercontent.com/stacklok/toolhive/main/deploy/operator/operator.yaml
   ```

## Install the operator into an existing kind cluster

### Automated via Task

We have a dedicated Task that installs the operator into a cluster.

Run:

```bash
# If you want to install the latest built operator image from Github (recommended)
$ task operator-deploy-latest

# If you want to built the operator image locally and deploy it (only recommended if you're doing development around the operator)
$ task operator-deploy-local
```

### Manual installation

1. Install the CRD:

   ```bash
   kubectl apply -f https://raw.githubusercontent.com/stacklok/toolhive/main/deploy/operator/crds/toolhive.stacklok.dev_mcpservers.yaml
   ```

2. Create the operator namespace:

   ```bash
   kubectl apply -f https://raw.githubusercontent.com/stacklok/toolhive/main/deploy/operator/namespace.yaml
   ```

3. Set up RBAC:

   ```bash
   kubectl apply -f https://raw.githubusercontent.com/stacklok/toolhive/main/deploy/operator/rbac.yaml
   kubectl apply -f https://raw.githubusercontent.com/stacklok/toolhive/main/deploy/operator/toolhive_rbac.yaml
   ```

4. Deploy the operator:

   ```bash
   kubectl apply -f https://raw.githubusercontent.com/stacklok/toolhive/main/deploy/operator/operator.yaml
   ```

<!-- markdownlint-disable-file MD024 -->

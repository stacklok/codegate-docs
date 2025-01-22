---
title: Workspaces
description: Organize and customize your project environments
sidebar_position: 40
---

## Overview

_Workspaces_ in CodeGate allow you to organize and customize your interactions
with large language models (LLMs). Each workspace is a distinct environment with
its own configurations and resources, enabling personalized settings and
efficient management of different projects or tasks.

## Key features

- **Custom configurations**: Each workspace can have its own settings and system
  prompts for interacting with LLMs, enabling tailored responses and behaviors.
- **Resource management**: Workspaces act as containers for organizing resources
  within CodeGate, making it easier to manage and switch between different
  projects.
- **Isolation and independence**: Configurations in one workspace do not affect
  others, providing clarity and precision in how settings are applied.

## Working with workspaces

:::info Default workspace

CodeGate ships with a default workspace named `default`. This workspace cannot
be renamed, archived, or deleted.

:::

You can manage workspaces using `codegate workspace` commands sent through your
AI assistant's chat interface. To see all available commands, run:

```plain
codegate workspace -h
```

### Create a workspace {#add}

To create a new workspace:

```plain
codegate workspace add WORKSPACE_NAME
```

Replace `WORKSPACE_NAME` with a name for the new workspace. Names can only
contain alphanumeric characters, hyphens (`-`), and underscores (`_`).

### List workspaces {#list}

Get a list of all non-archived workspaces:

```plain
codegate workspace list
```

The currently active workspace is indicated as **(active)** in the list.

### Activate a workspace {#activate}

Switch between workspaces using the `activate` command. The active workspace is
the current environment for commands and configuration.

```plain
codegate workspace activate WORKSPACE_NAME
```

Replace `WORKSPACE_NAME` with the name of the workspace to activate.

### Customize the system prompt {#system-prompt}

One of the key advantages of workspaces is the ability to customize the system
prompt with extra project-specific instructions.

To add custom instructions to your system prompt:

```plain
codegate custom-instructions [-w WORKSPACE_NAME] set SYSTEM_PROMPT
```

Replace `SYSTEM_PROMPT` with your custom prompt text.

Optionally, specify the workspace to modify with `-w WORKSPACE_NAME`. If you
don't explicitly set a workspace, the currently active workspace is modified.

**Example**: Set a custom system prompt for the workspace named "project-alpha":

```plain
codegate system-prompt -w project-alpha set Start each conversation with "Welcome to Project Alpha Assistant. How can I help today?"
```

To show the current custom instructions on a workspace:

```plain
codegate custom-instructions [-w WORKSPACE_NAME] show
```

To reset (clear) the custom instructions for a workspace:

```plain
codegate custom-instructions [-w WORKSPACE_NAME] reset
```

### Rename a workspace {#rename}

To change the name of an existing workspace:

```plain
codegate workspace rename WORKSPACE_NAME NEW_WORKSPACE_NAME
```

Replace `WORKSPACE_NAME` with the current name of the workspace, and
`NEW_WORKSPACE_NAME` with the new name to set.

### Archive a workspace {#archive}

You can mark a workspace as archived without permanently deleting it. This is
useful in situations when you are not actively working on a project but may want
to come back to it later.

```plain
codegate workspace archive WORKSPACE_NAME
```

Replace `WORKSPACE_NAME` with the name of the workspace to archive. Archived
workspaces can be [restored](#restore) later or [permanently deleted](#delete).

### List archived workspaces {#list-archived}

Get a list of all archived workspaces:

```plain
codegate workspace list-archived
```

Archived workspaces can be [restored](#restore) or
[permanently deleted](#delete), but cannot be activated.

### Restore an archived workspace {#restore}

Use the `restore` command to recover an [archived](#archive) workspace. Once
restored, a workspace will appear in your available [workspace list](#list) and
can be [activated](#activate).

```plain
codegate workspace restore WORKSPACE_NAME
```

Replace `WORKSPACE_NAME` with the name of the workspace to restore.

### Permanently delete a workspace {#delete}

The `delete-archived` command permanently deletes an archived workspace.

```plain
codegate workspace delete-archived WORKSPACE_NAME
```

Replace `WORKSPACE_NAME` with the name of the workspace to delete.

:::warning

Deletion is permanent. Ensure that the workspace is no longer needed and can be
safely removed.

:::

## Recommendations

- Use workspaces to separate different projects or objectives, ensuring each has
  a dedicated configuration.
- Regularly review and update the system prompts to align with the evolving
  needs of your projects.
- Use resource bucketing to keep assets organized and easily accessible within
  their respective workspaces.

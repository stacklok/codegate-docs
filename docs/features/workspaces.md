---
title: Workspaces
description: Codegate workspaces
sidebar_position: 40
---

## Overview

The "Workspaces" feature in CodeGate is designed to help users organize and
customize their interactions with large language models (LLMs). Each workspace
acts as a distinct environment with its own configurations and resources,
allowing for personalized settings and efficient management of different
projects or tasks.

## Key Features

- **Custom Configurations**: Each workspace can have its own settings and system
  prompts for interacting with LLMs, enabling tailored responses and behaviors.
- **Resource Management**: Workspaces act as containers for bucketing resources
  within CodeGate, making it easier to manage and switch between different projects.
- **Isolation and Independence**: Configurations in one workspace do not affect
  others, providing clarity and precision in how settings are applied.

## Working with Workspaces

### Creating a Workspace

To create a new workspace, use the following command from your chat prompt interface:

```bash
codegate workspace add $NAME
```

This initializes a new workspace with the specified name.

Note that workspace names may only contain alphanumeric characters with dashes.

### Switching Workspaces

To switch between workspaces, you can activate a different workspace by using:

```bash
codegate workspace activate $NAME
```

The active workspace is the current environment for commands and configurations.

### Listing Workspaces

For a quickly accessible overview of all workspaces, including which is currently
active, use:

```bash
codegate workspace list
```

### Customizing System Prompts

One of the key advantages of workspaces is the ability to set a custom system
prompt. This can be done using the following command:

```bash
codegate system-prompt -w $WORKSPACE_NAME set $SYSTEM_PROMPT
```

Replace `$WORKSPACE_NAME` with your desired workspace and `$SYSTEM_PROMPT` with
your custom prompt text.

Note that if you don't specify a workspace explicitly, the command will take an
the active workspace into use.

#### Example

Suppose you want to set a custom system prompt for a workspace named "project-alpha":

```bash
codegate system-prompt -w project-alpha set Start each conversation with "Welcome to Project Alpha Assistant. How can I help today?"
```

This will enhance your prompt when you're working in that workspace.

### Archiving a workspace

In order to "archive" a workspace, use the following command in your prompt:

```bash
codegate workspace remove $WORKSPACE_NAME
```

This will not fully delete the workspace, but will set it in "archived mode". You
may still recover an archived workspace.

### Listing Archived Workspaces

To view a list of all archived workspaces, use the following command:

```bash
codegate workspace list-archived
```

This command will display all workspaces that have been archived, allowing you
to review which projects are stored for potential future use.

### Restoring an Archived Workspace

If you need to reactivate an archived workspace, you can restore it using the
following command:

```bash
codegate workspace restore $WORKSPACE_NAME
```

Replace `$WORKSPACE_NAME` with the name of the workspace you wish to restore.
Once restored, it will appear in your active workspace list.

### Deleting an Archived Workspace

In cases where an archived workspace is no longer needed and can be safely removed,
you can permanently delete it with:

```bash
codegate workspace delete-archived $WORKSPACE_NAME
```

Make sure to double-check before executing this command, as it will permanently
remove the specified workspace from your system.

## Best Practices

- Utilize workspaces to separate different projects or objectives, ensuring each
  has a dedicated configuration.
- Regularly review and update the system prompts to align with the evolving needs
  of your projects.
- Use resource bucketing to keep assets organized and easily accessible within
  their respective workspaces.

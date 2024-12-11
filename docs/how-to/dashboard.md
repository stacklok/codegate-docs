---
title: Access the dashboard
description: View alerts and usage history
sidebar_position: 30
---

CodeGate includes a web dashboard that lets you view the security risks that
CodeGate has detected and a history of interactions between your AI coding
assistant and your LLM.

To access the dashboard, ensure port 80 is bound to a port on your local system
when you launch CodeGate, for example:

`docker run --name codegate -d -p 8989:8989 -p 8990:80 ghcr.io/stacklok/codegate/codegate:latest`

Then in your web browser, open [http://localhost:8990/](http://localhost:8990/)

To customize the port, replace `-p 8990:80` with your own port like
`-p YOUR_PORT:80`. The dashboard is located at `http://localhost:YOUR_PORT/`.

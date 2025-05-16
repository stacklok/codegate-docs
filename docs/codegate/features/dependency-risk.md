---
title: Dependency risk awareness
description: Protection from malicious or vulnerable dependencies
---

## What's the risk?

The large language models (LLMs) that drive AI coding assistants are incredibly
costly and time-consuming to train. That's why each one has a "knowledge cutoff
date" which is often months or even years in the past. For example, GPT-4o's
training cutoff was October 2023.

But the open source software ecosystem moves quickly, and so do malicious actors
seeking to exploit the software supply chain. LLMs often suggest outdated,
vulnerable, or nonexistent packages, exposing you and your users to security and
privacy risks.

## How CodeGate helps

CodeGate's dependency risk insight helps protect your codebase from malicious or
vulnerable dependencies. It identifies potentially risky packages and suggests
fixed versions or alternative packages to consider.

These insights are powered by [Stacklok Insight](https://www.trustypkg.dev), a
free-to-use open source dependency intelligence service.

## How it works

CodeGate scans direct, transitive, and development dependencies in your package
definition files, installation scripts, and source code imports that you supply
as context to an LLM. It also recognizes packages you mention in a prompt or the
LLM suggests in its response.

To explicitly invoke this scan, include your dependencies file
(`package-lock.json`, `requirements.txt`, `go.mod`, etc.) as context, or mention
a package in your prompt, and request a dependency security scan using a prompt
similar to these:

```plain
Please scan the @go.mod file for security risks
```

```plain
Is python-oauth2 from pypi ok to use?
```

CodeGate responds with analysis, insights, and recommendations about your
package dependencies.

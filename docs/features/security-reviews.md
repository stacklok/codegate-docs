---
title: Security reviews
description: Enhanced secure coding guidance
sidebar_position: 30
---

## What's the risk?

AI assistants are powerful productivity tools for generating, improving, fixing,
and explaining complex application code. However, AI models rarely incorporate
secure coding practices as a primary consideration in their responses. This can
expose your application to vulnerabilities like SQL injection, cross-site
scripting (XSS), remote command execution (RCE), and more.

## How CodeGate helps

CodeGate performs security-centric code reviews, identifying insecure patterns
or potential vulnerabilities to help you adopt more secure coding practices.

## How it works

When you mention "CodeGate" or "security" in a chat prompt, CodeGate enhances
your prompt with security-centric language to help guide your LLM to provide
more secure recommendations and code suggestions.

### Example prompts

```text
Review the following Python files for potential security vulnerabilities:

@app.py
@main.py
```

```text
Analyze the AuthUser function in @login.py for any security issues
```

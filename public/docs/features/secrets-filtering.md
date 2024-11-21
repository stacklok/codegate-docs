# Secrets filtering

## What's the risk?

As you interact with an AI coding assistant, sensitive data like passwords and
access tokens can be unintentionally exposed to third-party providers via the
code snippets and files you share as context. These secrets may become part of
the training data used to improve the AI model and potentially be exposed to
other users.

## How CodeGate helps

CodeGate's secrets filtering system protects your sensitive information from
being accidentally exposed to AI models and third-party AI provider systems.

## How it works

The secret filtering system automatically scans all prompts for secrets such as:

- API keys and tokens
- Private keys and certificates
- Database credentials
- SSH keys
- Cloud provider credentials

This scan happens transparently without requiring a specific prompt.

When CodeGate detects a secret in a prompt or the related context, it encrypts
the sensitive value before sending the request to the LLM. This way, CodeGate
protects your sensitive data without blocking your development flow. And because
CodeGate runs locally, your secrets never leave your system unprotected.

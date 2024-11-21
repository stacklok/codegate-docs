# Package security

## What's the risk?

The large language models (LLMs) that drive AI coding assistants are trained at
a point in time – often months before you use them. But the open source software
ecosystem moves quickly, and so do malicious actors seeking to exploit the
software supply chain. LLMs often suggest outdated, vulnerable, or nonexistent
packages, exposing you and your users to security and privacy risks.

## How CodeGate helps

CodeGate's package security system helps protect your codebase from malicious or
vulnerable dependencies. It identifies potentially risky packages and suggests
fixed versions or alternative packages to consider.

These insights are powered by [Trusty](https://www.trustypkg.dev), the open
source dependency intelligence service from Stacklok.

## How it works

CodeGate scans direct, transitive, and development dependencies from package
definition files and installation scripts in your project.

To invoke this scan, include your dependencies file (`package-lock.json`,
`requirements.txt`, `go.mod`, etc.) as context, or mention a package in your
prompt, and request a dependency security scan using a prompt similar to this:

```plain
codegate, please scan my dependencies for security risks
```

CodeGate responds with analysis, insights, and recommendations about your
package dependencies.

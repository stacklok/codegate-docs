---
title: Frequently asked questions
description: Frequently asked questions about the CodeGate project
sidebar_label: FAQ
sidebar_position: 10
---

### Does CodeGate replace my AI coding assistant or agent?

No, CodeGate works _with_ your AI coding tool, as a local intermediary between
your client and the LLM it's communicating with.

### Does CodeGate work with any other IDE plugins or coding assistants?

We are actively exploring additional integrations based on user feedback.
[Join the community on Discord](https://discord.gg/stacklok) to let us know
about your favorite AI coding tool!

In theory, any tool that supports one of CodeGate's provider API endpoints
should work, however we have encountered many edge cases depending on how the AI
assistants and agents format their prompts and expect their responses, so your
mileage may vary.

### Don't AI coding tools already redact secrets for me?

It may be surprising to learn that AI coding tools don't redact secrets for you.
Through packet captures and logging, we've seen these tools routinely sending
secrets and PII to remote LLM providers as they collect file contents to use as
context.

### Can I use CodeGate without an internet connection?

Yes, CodeGate can be used without an internet connection as long as you have a
local LLM server running. CodeGate is designed to work with local providers like
Ollama, LM Studio, and vLLM. Once you have downloaded the container image,
CodeGate has no external dependencies and can be run entirely offline.

### How do I know if I'm running the latest version of CodeGate?

The CodeGate dashboard includes a version update check which will alert you if a
new version is available. You can also check the latest version of CodeGate on
our [GitHub Releases page](https://github.com/stacklok/codegate/releases). To
upgrade, see the [upgrade instructions](../how-to/install.mdx#upgrade-codegate)
in the installation guide.

### What kind of support is available for CodeGate?

We offer community support through
[GitHub Issues](https://github.com/stacklok/codegate/issues) and our
[Discord server](https://discord.gg/stacklok).

### How do I troubleshoot issues with CodeGate?

If you encounter issues with CodeGate, please check the following:

- Ensure you are using the latest version of CodeGate.
- Check the container logs for any error messages or warnings. Run
  `docker logs codegate` to view the logs. You can also increase the logging
  verbosity by re-launching CodeGate with `CODEGATE_APP_LOG_LEVEL` set to `INFO`
  or `DEBUG` (see [advanced configuration](../how-to/configure.md)).
- Search the [GitHub Issues](https://github.com/stacklok/codegate/issues) for
  similar issues or report a new issue if you can't find a solution.
- Join our [Discord server](https://discord.gg/stacklok) to ask for help from
  the community or the CodeGate team.

### Can I use CodeGate in a team environment?

Currently, CodeGate is designed to run on a single machine, but we are always
eager to hear feedback about how you would like or expect to use CodeGate in a
team environment. Please share your ideas/feedback in the
[Feature Ideas section](https://github.com/stacklok/codegate/discussions/categories/feature-ideas)
in the project's GitHub Discussions or jump into our
[Discord server](https://discord.gg/stacklok)!

### Can I contribute to CodeGate?

Yes! CodeGate is an open-source project, and we welcome contributions from the
community. You can contribute by reporting issues, submitting pull requests, or
helping with documentation. Please check our
[contributing guidelines](./contributing.md).

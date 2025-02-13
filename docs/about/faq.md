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

### How can I run CodeGate on a remote host?

Currently, CodeGate is intended as a single-user system and to be run on and
accessed from a local (desktop) workstation system. Hence the CodeGate web
dashboard provided in the Docker container requires the CodeGate API to be
available on _localhost_.

To run CodeGate on a remote host you need to build your own appropriately
customized Docker container image from the CodeGate GitHub repository. Use the
following steps as a reference and adjust them for your own setup:

1. Clone the CodeGate GitHub repository:

   ```shell
   git clone https://github.com/stacklok/codegate.git
   cd codegate
   ```

2. Edit `./Dockerfile` by adding (replace `<remote-host>` with the domain name
   or IP address of the remote host which should provide CodeGate):

   ```Dockerfile
   ENV VITE_BASE_API_URL=http://<remote-host>:8989
   ```

   before the CodeGate web dashboard is built:

   ```Dockerfile
   # Install the webapp dependencies and build it
   RUN npm install
   RUN npm run build
   ```

3. Build the customized Docker image on the remote host:

   ```shell
   make image-build
   ```

4. Run the customized locally built Docker image:

   ```shell
   docker run --name codegate -p 8989:8989 -p 9090:9090 codegate:latest
   ```

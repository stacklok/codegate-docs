# Install and run CodeGate

## Prerequisites

CodeGate is distributed as a Docker container. You need Docker Desktop (macOS or
Windows) or Docker Engine (Linux) installed and running.

## Run CodeGate

To download and run the container, run the following from a terminal:

`docker run -d -p 127.0.0.1:8989:8989 --name codegate stacklok/codegate`

The container runs in the background (`-d`) and listens on the localhost
interface using the default port (8989). To use a different listening port,
modify the `-p` flag: `-p 127.0.0.1:YOUR_PORT:8989`.

## View logs

Use the `docker logs` command to view recent log messages:

`docker logs codegate`

Or to follow the log stream live (useful for troubleshooting), add the `-follow`
flag:

`docker logs --follow codegate`

## Manage the CodeGate container

Use standard `docker` commands to manage and stop the CodeGate container.

## Next steps

Now that CodeGate is running, proceed to configure your IDE integration.

- [Configure the Continue IDE plugin](./configure-continue)

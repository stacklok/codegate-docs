---
title: Troubleshooting guide
description: Solutions for common CodeGate issues
sidebar_position: 40
---

This guide provides solutions for common issues you might encounter when using
CodeGate with various AI coding assistants and agents.

## General troubleshooting steps

Before diving into specific issues, try these general troubleshooting steps:

1. **Check logs**: Run `docker logs codegate` to view recent logs or
   `docker logs --follow codegate` to watch logs in real-time.

2. **Increase log verbosity**: Restart CodeGate with increased logging level:

   ```bash
   docker rm -f codegate
   docker run --name codegate -d -p 8989:8989 -p 9090:9090 -p 8990:8990 \
     -e CODEGATE_APP_LOG_LEVEL=DEBUG \
     --mount type=volume,src=codegate_volume,dst=/app/codegate_volume \
     --restart unless-stopped ghcr.io/stacklok/codegate:latest
   ```

3. **Verify connectivity**: Ensure the CodeGate API is accessible:

   ```bash
   curl http://localhost:8989/health
   ```

4. **Check version**: Ensure you're running the latest version of CodeGate:

   ```bash
   docker pull ghcr.io/stacklok/codegate:latest
   ```

## Muxing issues

### "Provider models could not be found" error

This error might occur when adding a new provider or updating an existing one.
It indicates that CodeGate is unable to discover the available models for the
provider.

**Possible causes:**

- The provider API endpoint is incorrect
- The provider is not running or accessible
- Your API key is invalid or missing

**Solutions:**

1. Verify the provider API endpoint is correct in the CodeGate settings
2. Ensure the provider is running and accessible from the CodeGate container
3. For local providers (Ollama, LM Studio), ensure you're using
   `http://host.docker.internal` instead of `localhost`
4. Check your authentication credentials (API key) for the provider
5. Check the logs for specific error messages related to the provider connection

### File pattern matching problems

If your file patterns aren't matching as expected:

1. Use wildcards appropriately: `*.js` matches only `.js` files, while `*.js*`
   matches both `.js` and `.jsx`
2. For nested directories, patterns only match the filename, not the path
3. Test your patterns with simple rules first before creating complex
   configurations
4. If a specific file is causing issues, try a more specific rule for that file
   type

## Dashboard issues

### Dashboard not showing events or alerts

If events or alerts are not appearing in the dashboard:

1. Verify you're looking at the correct workspace
2. Check if the events were recorded by examining the logs
3. Try switching workspaces and then switching back
4. Restart the CodeGate container if the issue persists

### "An error occurred" message

If the dashboard fails to load or shows an error:

1. Refresh the page to see if it resolves the issue
2. Ensure the CodeGate API is accessible:

   ```bash
   curl http://localhost:8989/health
   ```

3. Verify the database is not corrupted by checking the logs
4. If you are running CodeGate remotely, ensure `DASHBOARD_BASE_API_URL` is
   correctly set to point to your CodeGate API (see
   [run CodeGate on a remote host](./configure.md#run-on-remote-host))

If you're still experiencing issues, open an issue on GitHub with details about
the problem, including logs and steps to reproduce. It's also helpful to include
details from the Developer Tools in your browser (usually accessible with F12)
to see if there are any network errors or JavaScript errors in the console.

## CLI and configuration issues

### CLI not responding until model is online

The CodeGate CLI may appear to hang when using local models that need to be
loaded.

**Solutions:**

1. Check if you're using a local model provider like Ollama that may be loading
   a model
2. Verify the model server is running and accessible
3. Consider using a different model that loads faster for CLI operations
4. Increase the log level to DEBUG to see what's happening during the delay

### Workspace management issues

If you're having trouble with workspaces:

1. Ensure you're activating the correct workspace before starting work
2. Use `codegate workspace list` to verify available workspaces

## Network and connectivity issues

### Remote host configuration

If you're running CodeGate on a remote host:

1. Ensure you've set `DASHBOARD_BASE_API_URL` correctly to point to your
   CodeGate API
2. Verify that your firewall allows connections to the required ports
3. For Copilot integration, ensure the HTTPS proxy port is accessible and the
   certificate is trusted

### Docker networking issues

If you're experiencing networking issues with Docker:

1. Verify that the container ports are correctly mapped to your host
2. For local providers like Ollama, ensure `host.docker.internal` resolves
   correctly
3. On Linux, you may need to add `--add-host=host.docker.internal:host-gateway`
   to your `docker run` command

## Still need help?

If you're still experiencing issues:

1. Search the [GitHub Issues](https://github.com/stacklok/codegate/issues) for
   similar problems
2. Join our [Discord server](https://discord.gg/stacklok) to ask for help from
   the community
3. Open a new issue on GitHub with detailed information about your problem,
   including logs and steps to reproduce

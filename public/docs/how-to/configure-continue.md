# Configure the Continue IDE plugin

[Continue](https://www.continue.dev/) is an open source AI coding assistant for
your IDE. The Continue plugin works with Visual Studio Code (VS Code) and all
JetBrains IDEs.

## Install the plugin

### Visual Studio Code

The Continue extension is available in the
[Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Continue.continue).

Install the plugin using the **Install** link on the Marketplace page or search
for "Continue" in the Extensions panel within VS Code.

If you need help, see
[Managing Extensions](https://code.visualstudio.com/docs/editor/extension-marketplace)
in the VS Code documentation.

### JetBrains

The Continue plugin is available in the
[JetBrains Marketplace](https://plugins.jetbrains.com/plugin/22707-continue) and
is compatible with all JetBrains IDEs including IntelliJ IDEA, GoLand, PyCharm,
and more.

Install the plugin from your IDE settings. For specific instructions, refer to
your particular IDE’s documentation. For example:

- [IntelliJ IDEA – Install plugins](https://www.jetbrains.com/help/idea/managing-plugins.html)
- [GoLand – Plugins](https://www.jetbrains.com/help/go/managing-plugins.html)
- [PyCharm – Install plugins](https://www.jetbrains.com/help/pycharm/managing-plugins.html)

## Configure the plugin to use CodeGate

Continue stores its configuration in `~/.continue/config.json`. You can edit
this file directly or access it from the **Configure Continue** (gear) icon in
the plugin’s sidebar. If you haven’t configured the plugin yet, this file may
not exist or may be empty.

CodeGate currently works with local models via [Ollama](https://ollama.com/) or
hosted models via [Anthropic](https://console.anthropic.com/) and
[OpenAI](https://platform.openai.com/docs/overview). To configure Continue to
send requests through CodeGate, add the `apiBase` property to the `models` entry
(for chat functions) and `tabAutocompleteModel` (for autocomplete functions)
sections of the configuration file to reference the CodeGate container running
locally on your system.

```json
"apiBase": "http://127.0.0.1:8989/"
```

If you changed the default port, replace 8989 with your custom port number.

Below are examples of minimum Continue plugin configurations for each provider.
For each, replace the values in ALL_CAPS. The configuration syntax is the same
for VS Code and JetBrains IDEs.

Note: JetBrains users may need to restart your IDE after editing the config
file.

### Ollama

```json
{
  "models": [
    {
      "title": "codegate-ollama",
      "provider": "ollama",
      "model": "MODEL_NAME",
      "apiBase": "http://localhost:8989/"
    }
  ],
  "modelRoles": {
    "default": "codegate-ollama"
  },
  "tabAutocompleteModel": {
    "title": "codegate-ollama",
    "provider": "ollama",
    "model": "MODEL_NAME",
    "apiBase": "http://localhost:8989/"
  }
}
```

Replace `MODEL_NAME` with the name of a model you have installed locally using
`ollama pull`, such as `codellama:7b-instruct`.

### Anthropic

```json
{
  "models": [
    {
      "title": "codegate-anthropic",
      "provider": "anthropic",
      "model": "MODEL_NAME",
      "apiKey": "YOUR_API_KEY",
      "apiBase": "http://localhost:8989/"
    }
  ],
  "modelRoles": {
    "default": "codegate-anthropic"
  },
  "tabAutocompleteModel": {
    "title": "codegate-anthropic",
    "provider": "anthropic",
    "model": "MODEL_NAME",
    "apiKey": "YOUR_API_KEY",
    "apiBase": "http://localhost:8989/"
  }
}
```

Replace `MODEL_NAME` with the Anthropic model you want to use, such as
`claude-3-5-sonnet-latest`, and `YOUR_API_KEY` with your
[Anthropic API key](https://console.anthropic.com/settings/keys).

### OpenAI

```json
{
  "models": [
    {
      "title": "codegate-openai",
      "provider": "openai",
      "model": "MODEL_NAME",
      "apiKey": "YOUR_API_KEY",
      "apiBase": "http://localhost:8989/"
    }
  ],
  "modelRoles": {
    "default": "codegate-openai"
  },
  "tabAutocompleteModel": {
    "title": "codegate-openai",
    "provider": "openai",
    "model": "MODEL_NAME",
    "apiKey": "YOUR_API_KEY",
    "apiBase": "http://localhost:8989/"
  }
}
```

Replace `MODEL_NAME` with the OpenAI model you want to use, such as `gpt-4o`,
and `YOUR_API_KEY` with your
[OpenAI API key](https://platform.openai.com/api-keys).

## Verify configuration

To verify that you've successfully connected Continue to CodeGate, open the
Continue chat and type `codegate-version`. You should receive a response like
this:

```plan
Version: dev
Commit: <commit sha>
```

Try asking CodeGate about a known malicious Python package:

```plain
Hey codegate, tell me about the invokehttp package from PyPI
```

CodeGate responds with a warning and a link to Stacklok's Trusty report about
this package:

```plain
Warning: CodeGate detected a potentially malicious package.

Pkg 1: trustypkg.dev/pypi/invokehttp
```

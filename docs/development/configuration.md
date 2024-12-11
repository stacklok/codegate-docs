---
title: Configuration system
sidebar_position: 20
---

The configuration system in CodeGate is managed through the `Config` class in
`config.py`. It supports multiple configuration sources with a clear priority
order.

## Configuration priority

Configuration sources are evaluated in the following order, from highest to
lowest priority:

1. CLI arguments
2. Environment variables
3. Config file (YAML)
4. Default values (including default prompts from
   [prompts/default.yaml](https://github.com/stacklok/codegate/blob/main/prompts/default.yaml))

Values from higher-priority sources take precedence over lower-priority values.

## Default configuration values

- Port: `8989`
- Host: `"localhost"`
- Log level: `"INFO"`
- Log format: `"JSON"`
- Prompts: default prompts from `prompts/default.yaml`
- Provider URLs:
  - vLLM: `"http://localhost:8000"`
  - OpenAI: `"https://api.openai.com/v1"`
  - Anthropic: `"https://api.anthropic.com/v1"`
  - Ollama: `"http://localhost:11434"`

## Configuration methods

### Config file

Load configuration from a YAML file:

```python
config = Config.from_file("config.yaml")
```

Example config.yaml:

```yaml
port: 8989
host: localhost
log_level: INFO
log_format: JSON
provider_urls:
  vllm: 'https://vllm.example.com'
  openai: 'https://api.openai.com/v1'
  anthropic: 'https://api.anthropic.com/v1'
  ollama: 'http://localhost:11434'
```

### Environment variables

Environment variables are automatically loaded with these mappings:

- `CODEGATE_APP_PORT`: server port
- `CODEGATE_APP_HOST`: server host
- `CODEGATE_APP_LOG_LEVEL`: logging level
- `CODEGATE_LOG_FORMAT`: log format
- `CODEGATE_PROMPTS_FILE`: path to prompts YAML file
- `CODEGATE_PROVIDER_VLLM_URL`: vLLM provider URL
- `CODEGATE_PROVIDER_OPENAI_URL`: OpenAI provider URL
- `CODEGATE_PROVIDER_ANTHROPIC_URL`: Anthropic provider URL
- `CODEGATE_PROVIDER_OLLAMA_URL`: Ollama provider URL

```python
config = Config.from_env()
```

## Configuration options

### Provider URLs

Provider URLs can be configured in several ways:

1. Config file:

   ```yaml
   provider_urls:
     vllm: 'https://vllm.example.com' # /v1 path is added automatically
     openai: 'https://api.openai.com/v1'
     anthropic: 'https://api.anthropic.com/v1'
     ollama: 'http://localhost:11434' # /api path is added automatically
   ```

2. Environment variables:

   ```bash
   export CODEGATE_PROVIDER_VLLM_URL=https://vllm.example.com
   export CODEGATE_PROVIDER_OPENAI_URL=https://api.openai.com/v1
   export CODEGATE_PROVIDER_ANTHROPIC_URL=https://api.anthropic.com/v1
   export CODEGATE_PROVIDER_OLLAMA_URL=http://localhost:11434
   ```

3. CLI flags:

   ```bash
   codegate serve --vllm-url https://vllm.example.com --ollama-url http://localhost:11434
   ```

:::info[URL paths]

- For the vLLM provider, the `/v1` path is automatically appended to the base
  URL if not present.
- For the Ollama provider, the `/api` path is automatically appended to the base
  URL if not present.

:::

### Log levels

Available log levels (case-insensitive):

- `ERROR`
- `WARNING`
- `INFO`
- `DEBUG`

### Log formats

Available log formats (case-insensitive):

- `JSON`
- `TEXT`

### Prompts configuration

Prompts can be configured in several ways:

1. Default prompts:

   - Located in
     [prompts/default.yaml](https://github.com/stacklok/codegate/blob/main/prompts/default.yaml)
   - Loaded automatically if no other prompts are specified

2. Config file:

   ```yaml
   # Option 1: Direct prompts definition
   prompts:
     my_prompt: "Custom prompt text"
     another_prompt: "Another prompt text"

   # Option 2: Reference to prompts file
   prompts: "path/to/prompts.yaml"
   ```

3. Environment variable:

   ```bash
   export CODEGATE_PROMPTS_FILE=path/to/prompts.yaml
   ```

4. CLI flag:

   ```bash
   codegate serve --prompts path/to/prompts.yaml
   ```

### Prompts file format

Prompts files are defined in YAML format with string values:

```yaml
prompt_name: 'Prompt text content'

another_prompt: 'More prompt text'

multiline_prompt: |
  This is a multi-line prompt.
  It can span multiple lines.
```

Access prompts in code:

```python
config = Config.load()
prompt = config.prompts.prompt_name
```

## Error handling

The configuration system uses a custom `ConfigurationError` exception for
handling configuration-related errors, such as:

- Invalid port numbers (must be between 1 and 65535)
- Invalid [log levels](#log-levels)
- Invalid [log formats](#log-formats)
- YAML parsing errors
- File reading errors
- Invalid prompt values (must be strings)
- Missing or invalid [prompts files](#prompts-file-format)

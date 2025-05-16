```bash
docker run --name codegate -d -p 8989:8989 -p 9090:9090 -p 8990:8990 --mount type=volume,src=codegate_volume,dst=/app/codegate_volume --restart unless-stopped ghcr.io/stacklok/codegate:latest
```

# GitHub workflows

## Shared rules

- Follow the repository's runner policy below.
- Upgrade stale actions when touching a workflow and keep versions consistent across workflows. Use the current stable
  major for new actions and follow the repository's action pinning policy.
- Rely on action defaults instead of repeating them in `env` or `with`.

Order step keys as follows, omitting keys the step does not need:

1. `id`
2. `name`
3. `working-directory`
4. `env`
5. `run`

For example:

```yaml
- id: check
  name: Check
  working-directory: .
  env:
    CI: 'true'
  run: bun checks
```

## Project workflow policy

This repository has no GitHub workflows. Use `ubuntu-latest` for new jobs and install dependencies with
`bun install --frozen-lockfile`. Run `bun checks` for lint, types, and local tests; builds and deployment stay separate.

<!-- OPENSPEC:START -->
# OpenSpec Instructions

These instructions are for AI assistants working in this project.

Always open `@/openspec/AGENTS.md` when the request:
- Mentions planning or proposals (words like proposal, spec, change, plan)
- Introduces new capabilities, breaking changes, architecture shifts, or big performance/security work
- Sounds ambiguous and you need the authoritative spec before coding

Use `@/openspec/AGENTS.md` to learn:
- How to create and apply change proposals
- Spec format and conventions
- Project structure and guidelines

Keep this managed block so 'openspec update' can refresh the instructions.

<!-- OPENSPEC:END -->

# Python Helper Scripts

This project includes a lightweight UV infrastructure for temporary Python helper scripts.

## Purpose
Python scripts are for **short-lived, task-specific automation** that accomplishes a purpose and is then discarded. The codebase should normally have no Python code.

## Usage

```bash
# Run a script
uv run scripts/my_script.py

# Run with optional helper dependencies (requests, pillow, pyyaml)
uv run --extra helper scripts/my_script.py

# Add a new dependency if needed
uv add <package> --optional helper
```

## Guidelines

1. **Ephemeral**: Scripts should be deleted after use
2. **Task-specific**: One script per task, focused purpose
3. **No persistence**: Python code should not remain in the codebase
4. **Location**: All scripts go in `scripts/` directory
5. **Gitignored**: Python files in `scripts/` are ignored by git

## When to Use

- Image processing/optimization tasks
- Data transformation or migration
- Bulk file operations
- API interactions for one-time tasks
- Complex text/content processing

## When NOT to Use

- Anything that should be part of the build process (use Node.js)
- Recurring automation (create proper tooling instead)
- Features or functionality (this is an Astro project)
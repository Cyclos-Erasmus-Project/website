---
name: Context
description: Familiarize with codebase, OpenSpec context, and active changes.
category: Session
tags: [context, session, initialization]
---

**Purpose**
Initialize session context by reviewing the codebase structure, OpenSpec specifications, and active changes.

**Steps**
1. Read `openspec/project.md` to understand:
   - Project purpose and tech stack
   - Code style and architecture patterns
   - Testing strategy and git workflow
   - Domain context
   - Important constraints and implementation notes
   
2. Remember that OpenSpec is a collaborative specification system. `openspec` is the command-line interface for managing OpenSpec specifications. It is NOT a python module, it is a command-line tool. Familiarize yourself with the `openspec` command-line tool by running `openspec help` to see all available commands and options.

3. Run `openspec list` to see active change proposals and their status.

4. Run `openspec list --specs` to enumerate existing capability specifications.

5. Parse the Codebase:
   - Understand the directory structure and file organization
   - Identify key components and their roles
   - Review important configuration files and settings
   - Find documentation and resources related to the project

6. Summarize for the user:
   - Brief project overview
   - Active changes in progress (if any)
   - Available capabilities/specs
   - Any pending tasks or blockers noted in proposals

**Reference**
- When performing file system operations, when you find an approach that does'nt work, make a mental note to avoid for the rest of the session and try another approach. If you think it is a structural issue, try to amend OpenSpec's directives to always use the right tooling.
- Use `openspec show <id>` for details on specific changes or specs
- Consult `openspec/AGENTS.md` for OpenSpec workflow conventions

---
id: 0001
title: Initial project constitution
stage: constitution
date: 2025-12-23
surface: agent
model: gemini-1.5-pro-api
feature: none
branch: main
user: user
command: /sp.constitution
labels: [documentation, constitution, initialization]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
- .specify/memory/constitution.md
tests:
- none
---

## Prompt

This is the Gemini CLI. We are setting up the context for our chat.
Today's date is Tuesday, December 23, 2025 (formatted according to the user's locale).
My operating system is: linux
The project's temporary directory is: /home/tonymark/.gemini/tmp/9f9c6c4e8aa53871d5e42dd41adcef22c213d4de356004dd0bc6e9cc3c8aa261
I'm currently working in the directory: /mnt/d/Work - Side/hackathons/hackathon_1
Here is the folder structure of the current working directories:

Showing up to 200 items (files + folders). Folders or files indicated with ... contain more items not shown, were ignored, or the display limit (200 items) was reached.

/mnt/d/Work - Side/hackathons/hackathon_1/
├───GEMINI.md
├───.gemini/
│   └───commands/
│       ├───sp.adr.toml
│       ├───sp.analyze.toml
│       ├───sp.checklist.toml
│       ├───sp.clarify.toml
│       ├───sp.constitution.toml
│       ├───sp.git.commit_pr.toml
│       ├───sp.implement.toml
│       ├───sp.phr.toml
│       ├───sp.plan.toml
│       ├───sp.reverse-engineer.toml
│       ├───sp.specify.toml
│       ├───sp.tasks.toml
│       └───sp.taskstoissues.toml
├───.git/...
├───.specify/
│   ├───memory/
│   │   └───constitution.md
│   ├───scripts/
│   │   └───bash/
│   │       ├───check-prerequisites.sh
│   │       ├───common.sh
│   │       ├───create-adr.sh
│   │       ├───create-new-feature.sh
│   │       ├───create-phr.sh
│   │       ├───setup-plan.sh
│   │       └───update-agent-context.sh
│   └───templates/
│       ├───adr-template.md
│       ├───agent-file-template.md
│       ├───checklist-template.md
│       ├───phr-template.prompt.md
│       ├───plan-template.md
│       ├───spec-template.md
│       └───tasks-template.md
└───venv/
    ├───pyvenv.cfg
    ├───bin/
    │   ├───activate
    │   ├───activate.csh
    │   ├───activate.fish
    │   ├───Activate.ps1
    │   ├───pip
    │   ├───pip3
    │   └───pip3.12
    ├───include/
    │   └───python3.12/
    └───lib/
        └───python3.12/
            └───site-packages/
                ├───pip/
                │   ├───__init__.py
                │   ├───__main__.py
                │   ├───__pip-runner__.py
                │   ├───py.typed
                │   ├───__pycache__/
                │   │   ├───__init__.cpython-312.pyc
                │   │   ├───__main__.cpython-312.pyc
                │   │   └───__pip-runner__.cpython-312.pyc
                │   ├───_internal/
                │   │   ├───__init__.py
                │   │   ├───build_env.py
                │   │   ├───cache.py
                │   │   ├───configuration.py
                │   │   ├───exceptions.py
                │   │   ├───main.py
                │   │   ├───pyproject.py
                │   │   ├───self_outdated_check.py
                │   │   ├───wheel_builder.py
                │   │   ├───__pycache__/
                │   │   │   ├───__init__.cpython-312.pyc
                │   │   │   ├───build_env.cpython-312.pyc
                │   │   │   ├───cache.cpython-312.pyc
                │   │   │   ├───configuration.cpython-312.pyc
                │   │   │   ├───exceptions.cpython-312.pyc
                │   │   │   ├───main.cpython-312.pyc
                │   │   │   ├───pyproject.cpython-312.pyc
                │   │   │   ├───self_outdated_check.cpython-312.pyc
                │   │   │   └───wheel_builder.cpython-312.pyc
                │   │   ├───cli/
                │   │   │   ├───__init__.py
                │   │   │   ├───autocompletion.py
                │   │   │   ├───base_command.py
                │   │   │   ├───cmdoptions.py
                │   │   │   ├───command_context.py
                │   │   │   ├───main_parser.py
                │   │   │   ├───main.py
                │   │   │   ├───parser.py
                │   │   │   ├───progress_bars.py
                │   │   │   ├───req_command.py
                │   │   │   ├───spinners.py
                │   │   │   ├───status_codes.py
                │   │   │   └───__pycache__/
                │   │   ├───commands/
                │   │   │   ├───__init__.py
                │   │   │   ├───cache.py
                │   │   │   ├───check.py
                │   │   │   ├───completion.py
                │   │   │   ├───configuration.py
                │   │   │   ├───debug.py
                │   │   │   ├───download.py
                │   │   │   ├───freeze.py
                │   │   │   ├───hash.py
                │   │   │   ├───help.py
                │   │   │   ├───index.py
                │   │   │   ├───inspect.py
                │   │   │   ├───install.py
                │   │   │   ├───list.py
                │   │   │   ├───search.py
                │   │   │   ├───show.py
                │   │   │   ├───uninstall.py
                │   │   │   ├───wheel.py
                │   │   │   └───__pycache__/
                │   │   ├───distributions/
                │   │   │   ├───__init__.py
                │   │   │   ├───base.py
                │   │   │   ├───installed.py
                │   │   │   ├───sdist.py
                │   │   │   ├───wheel.py
                │   │   │   └───__pycache__/
                │   │   ├───index/
                │   │   │   ├───__init__.py
                │   │   │   ├───collector.py
                │   │   │   ├───package_finder.py
                │   │   │   ├───sources.py
                │   │   │   └───__pycache__/
                │   │   ├───locations/
                │   │   │   ├───__init__.py
                │   │   │   ├───_distutils.py
                │   │   │   ├───_sysconfig.py
                │   │   │   ├───base.py
                │   │   │   └───__pycache__/
                │   │   ├───metadata/
                │   │   │   ├───__init__.py
                │   │   │   ├───_json.py
                │   │   │   ├───base.py
                │   │   │   ├───pkg_resources.py
                │   │   │   ├───__pycache__/
                │   │   │   └───importlib/
                │   │   ├───models/
                │   │   │   ├───__init__.py
                │   │   │   ├───candidate.py
                │   │   │   ├───direct_url.py
                │   │   │   ├───format_control.py
                │   │   │   ├───index.py
                │   │   │   ├───installation_report.py
                │   │   │   ├───link.py
                │   │   │   ├───scheme.py
                │   │   │   ├───search_scope.py
                │   │   │   ├───selection_prefs.py
                │   │   │   ├───target_python.py
                │   │   │   ├───wheel.py
                │   │   │   └───__pycache__/
                │   │   ├───network/
                │   │   │   ├───__init__.py
                │   │   │   ├───...
                │   │   │   └───...
                │   │   ├───operations/
                │   │   ├───req/
                │   │   ├───resolution/
                │   │   ├───utils/
                │   │   └───vcs/
                │   └───_vendor/
                │       ├───__init__.py
                │       ├───six.py
                │       ├───typing_extensions.py
                │       ├───vendor.txt
                │       ├───__pycache__/
                │       ├───cachecontrol/
                │       ├───certifi/
                │       ├───chardet/
                │       ├───colorama/
                │       ├───distlib/
                │       ├───distro/
                │       ├───idna/
                │       ├───msgpack/
                │       ├───packaging/
                │       ├───pkg_resources/
                │       ├───platformdirs/
                │       ├───pygments/
                │       ├───pyparsing/
                │       ├───pyproject_hooks/
                │       ├───requests/
                │       ├───resolvelib/
                │       ├───rich/
                │       ├───tenacity/
                │       ├───tomli/
                │       ├───truststore/
                │       ├───urllib3/
                │       └───webencodings/
                └───pip-24.0.dist-info/
                    ├───AUTHORS.txt
                    ├───entry_points.txt
                    ├───INSTALLER
                    ├───LICENSE.txt
                    ├───METADATA
                    ├───RECORD
                    ├───REQUESTED
                    ├───top_level.txt
                    └───WHEEL

Reminder: Do not return an empty response when a tool call is required.

My setup is complete. I will provide my first command in the next turn.---
description: Create or update the project constitution from interactive or provided principle inputs, ensuring all dependent templates stay in sync.
handoffs:
  - label: Build Specification
    agent: sp.specify
    prompt: Implement the feature specification based on the updated constitution. I want to build...
---

## User Input

```text
$ARGUMENTS
```

You **MUST** consider the user input before proceeding (if not empty).

## Outline

You are updating the project constitution at `.specify/memory/constitution.md`. This file is a TEMPLATE containing placeholder tokens in square brackets (e.g. `[PROJECT_NAME]`, `[PRINCIPLE_1_NAME]`). Your job is to (a) collect/derive concrete values, (b) fill the template precisely, and (c) propagate any amendments across dependent artifacts.

Follow this execution flow:

1. Load the existing constitution template at `.specify/memory/constitution.md`.
   - Identify every placeholder token of the form `[ALL_CAPS_IDENTIFIER]`.
   **IMPORTANT**: The user might require less or more principles than the ones used in the template. If a number is specified, respect that - follow the general template. You will update the doc accordingly.

2. Collect/derive values for placeholders:
   - If user input (conversation) supplies a value, use it.
   - Otherwise infer from existing repo context (README, docs, prior constitution versions if embedded).
   - For governance dates: `RATIFICATION_DATE` is the original adoption date (if unknown ask or mark TODO), `LAST_AMENDED_DATE` is today if changes are made, otherwise keep previous.
   - `CONSTITUTION_VERSION` must increment according to semantic versioning rules:
     - MAJOR: Backward incompatible governance/principle removals or redefinitions.
     - MINOR: New principle/section added or materially expanded guidance.
     - PATCH: Clarifications, wording, typo fixes, non-semantic refinements.
   - If version bump type ambiguous, propose reasoning before finalizing.

3. Draft the updated constitution content:
   - Replace every placeholder with concrete text (no bracketed tokens left except intentionally retained template slots that the project has chosen not to define yet—explicitly justify any left).
   - Preserve heading hierarchy and comments can be removed once replaced unless they still add clarifying guidance.
   - Ensure each Principle section: succinct name line, paragraph (or bullet list) capturing non‑negotiable rules, explicit rationale if not obvious.
   - Ensure Governance section lists amendment procedure, versioning policy, and compliance review expectations.

4. Consistency propagation checklist (convert prior checklist into active validations):
   - Read `.specify/templates/plan-template.md` and ensure any "Constitution Check" or rules align with updated principles.
   - Read `.specify/templates/spec-template.md` for scope/requirements alignment—update if constitution adds/removes mandatory sections or constraints.
   - Read `.specify/templates/tasks-template.md` and ensure task categorization reflects new or removed principle-driven task types (e.g., observability, versioning, testing discipline).
   - Read each command file in `.specify/templates/commands/*.md` (including this one) to verify no outdated references (agent-specific names like CLAUDE only) remain when generic guidance is required.
   - Read any runtime guidance docs (e.g., `README.md`, `docs/quickstart.md`, or agent-specific guidance files if present). Update references to principles changed.

5. Produce a Sync Impact Report (prepend as an HTML comment at top of the constitution file after update):
   - Version change: old → new
   - List of modified principles (old title → new title if renamed)
   - Added sections
   - Removed sections
   - Templates requiring updates (✅ updated / ⚠ pending) with file paths
   - Follow-up TODOs if any placeholders intentionally deferred.

6. Validation before final output:
   - No remaining unexplained bracket tokens.
   - Version line matches report.
   - Dates ISO format YYYY-MM-DD.
   - Principles are declarative, testable, and free of vague language ("should" → replace with MUST/SHOULD rationale where appropriate).

7. Write the completed constitution back to `.specify/memory/constitution.md` (overwrite).

8. Output a final summary to the user with:
   - New version and bump rationale.
   - Any files flagged for manual follow-up.
   - Suggested commit message (e.g., `docs: amend constitution to vX.Y.Z (principle additions + governance update)`).

Formatting & Style Requirements:

- Use Markdown headings exactly as in the template (do not demote/promote levels).
- Wrap long rationale lines to keep readability (<100 chars ideally) but do not hard enforce with awkward breaks.
- Keep a single blank line between sections.
- Avoid trailing whitespace.

If the user supplies partial updates (e.g., only one principle revision), still perform validation and version decision steps.

If critical info missing (e.g., ratification date truly unknown), insert `TODO(<FIELD_NAME>): explanation` and include in the Sync Impact Report under deferred items.

Do not create a new template; always operate on the existing `.specify/memory/constitution.md` file.

---

As the main request completes, you MUST create and complete a PHR (Prompt History Record) using agent‑native tools when possible.

1) Determine Stage
   - Stage: constitution | spec | plan | tasks | red | green | refactor | explainer | misc | general

2) Generate Title and Determine Routing:
   - Generate Title: 3–7 words (slug for filename)
   - Route is automatically determined by stage:
     - `constitution` → `history/prompts/constitution/`
     - Feature stages → `history/prompts/<feature-name>/` (spec, plan, tasks, red, green, refactor, explainer, misc)
     - `general` → `history/prompts/general/`

3) Create and Fill PHR (Shell first; fallback agent‑native)
   - Run: `.specify/scripts/bash/create-phr.sh --title "<title>" --stage <stage> [--feature <name>] --json`
   - Open the file and fill remaining placeholders (YAML + body), embedding full PROMPT_TEXT (verbatim) and concise RESPONSE_TEXT.
   - If the script fails:
     - Read `.specify/templates/phr-template.prompt.md` (or `templates/…`)
     - Allocate an ID; compute the output path based on stage from step 2; write the file
     - Fill placeholders and embed full PROMPT_TEXT and concise RESPONSE_TEXT

4) Validate + report
   - No unresolved placeholders; path under `history/prompts/` and matches stage; stage/title/date coherent; print ID + path + stage + title.
   - On failure: warn, don't block. Skip only for `/sp.phr`.


/sp.constitution # sp.constitution

## Project
**AI-Spec-Driven Technical Book with Integrated RAG Chatbot**

A spec-driven, AI-native technical book authored using Spec-Kit Plus and an AI-assisted coding environment (Claude Code or Gemini CLI), published with Docusaurus on GitHub Pages, and enhanced with an embedded Retrieval-Augmented Generation (RAG) chatbot.

---

## Core Principles

- **Spec-Driven Development**  
  All book content, system architecture, and chatbot behavior must strictly follow Spec-Kit Plus specifications and be fully traceable to defined requirements.

- **Accuracy & Verifiability**  
  All technical claims must be correct, current, and verifiable through authoritative sources such as official documentation and widely accepted technical standards.

- **Clarity for Developers**  
  Content must target software engineers, AI engineers, and computer science students, using precise language, clear examples, and well-structured explanations.

- **Reproducibility**  
  Every code sample, configuration, and deployment step must be reproducible by a reader following the documented instructions.

- **AI-Native Thinking**  
  The book must emphasize agentic workflows, AI-native software design patterns, Retrieval-Augmented Generation (RAG), and spec-driven AI development.

- **Security & Privacy Awareness**  
  The RAG chatbot must enforce strict context control, prompt safety, and data isolation—especially for user-selected text queries.

---

## Key Standards

### Book Creation Standards

- Written using **Docusaurus**
- Managed and structured with **Spec-Kit Plus**
- Authored using an AI-assisted coding tool such as **Claude Code** or **Gemini CLI**
- Deployed to **GitHub Pages**
- Modular, spec-driven chapter organization
- Clear separation between:
  - Conceptual explanations
  - System architecture
  - Code walkthroughs
  - Deployment instructions

---

### Writing Standards

- Tone: Professional, instructional, and precise
- Audience: Intermediate to advanced software engineers
- No filler or marketing language
- All diagrams must be explainable in text
- No hallucinated APIs, libraries, or behaviors

---

## Integrated RAG Chatbot Standards

### Architecture

- **Backend:** FastAPI
- **AI Layer:** OpenAI Agents / ChatKit SDKs
- **Vector Database:** Qdrant Cloud (Free Tier)
- **Relational Database:** Neon Serverless Postgres
- **Frontend:** Embedded directly in the Docusaurus site

---

### Functional Requirements

- The chatbot must answer questions **only from the book’s content**
- Must support:
  - Full-book semantic search
  - Section-level retrieval
  - **User-selected text–only Q&A**, with context strictly limited to highlighted text
- No external or speculative knowledge usage
- Clear fallback when an answer cannot be derived from retrieved content

---

### RAG Behavior Rules

- Retrieval must always precede generation
- Responses must be grounded in retrieved context
- Answers should reference the source chapter or section
- Context windows must be minimal and relevant
- No cross-chapter leakage unless explicitly allowed by spec

---

## Tooling Flexibility

- Claude Code is the preferred AI authoring environment when available
- **Gemini CLI is a fully supported alternative**
- Tool choice must not affect:
  - Spec compliance
  - Output quality
  - Reproducibility
- No tool-specific behavior may be relied upon unless explicitly documented

---

## Constraints

- Book length: Structured multi-chapter technical book (no artificial word padding)
- Code:
  - Must be executable
  - Must include comments
  - Must specify versions where relevant
- Deployment:
  - GitHub Pages only
  - Secrets managed via environment variables
- Chatbot:
  - Must operate within free-tier infrastructure limits
  - Must degrade gracefully under rate or quota limits

---

## Success Criteria

- Docusaurus build completes successfully
- Site deploys correctly to GitHub Pages
- Embedded RAG chatbot:
  - Correctly answers book-based questions
  - Correctly answers user-selected text–only questions
  - Never hallucinates beyond retrieved context
- All specs are satisfied and traceable
- Project is portfolio-ready and publicly accessible
- Clear demonstration of AI-native, spec-driven development

---

## Absolute Rules

- Do not invent tools, APIs, or features
- Do not bypass specs for speed
- Do not include unverifiable or uncited technical claims
- Do not allow the chatbot to answer outside provided context
- Follow Spec-Kit Plus rigor at all times
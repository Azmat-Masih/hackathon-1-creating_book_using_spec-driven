<!--
Sync Impact Report:
- Version change: [CONSTITUTION_VERSION] -> 1.0.0
- Modified principles:
  - [PRINCIPLE_1_NAME] -> Spec-Driven Development
  - [PRINCIPLE_2_NAME] -> Accuracy & Verifiability
  - [PRINCIPLE_3_NAME] -> Clarity for Developers
  - [PRINCIPLE_4_NAME] -> Reproducibility
  - [PRINCIPLE_5_NAME] -> AI-Native Thinking
  - [PRINCIPLE_6_NAME] -> Security & Privacy Awareness
- Added sections:
  - Tooling Flexibility
  - Constraints
  - Success Criteria
  - Absolute Rules
- Removed sections: None
- Templates requiring updates:
  - .specify/templates/plan-template.md (⚠ pending)
  - .specify/templates/spec-template.md (⚠ pending)
  - .specify/templates/tasks-template.md (⚠ pending)
  - .specify/commands/sp.adr.toml (⚠ pending)
  - .specify/commands/sp.analyze.toml (⚠ pending)
  - .specify/commands/sp.checklist.toml (⚠ pending)
  - .specify/commands/sp.clarify.toml (⚠ pending)
  - .specify/commands/sp.constitution.toml (⚠ pending)
  - .specify/commands/sp.git.commit_pr.toml (⚠ pending)
  - .specify/commands/sp.implement.toml (⚠ pending)
  - .specify/commands/sp.phr.toml (⚠ pending)
  - .specify/commands/sp.plan.toml (⚠ pending)
  - .specify/commands/sp.reverse-engineer.toml (⚠ pending)
  - .specify/commands/sp.specify.toml (⚠ pending)
  - .specify/commands/sp.tasks.toml (⚠ pending)
  - .specify/commands/sp.taskstoissues.toml (⚠ pending)
- Follow-up TODOs: None
-->
# AI-Spec-Driven Technical Book with Integrated RAG Chatbot Constitution

## Core Principles

### Spec-Driven Development
All book content, system architecture, and chatbot behavior must strictly follow Spec-Kit Plus specifications and be fully traceable to defined requirements.

### Accuracy & Verifiability
All technical claims must be correct, current, and verifiable through authoritative sources such as official documentation and widely accepted technical standards.

### Clarity for Developers
Content must target software engineers, AI engineers, and computer science students, using precise language, clear examples, and well-structured explanations.

### Reproducibility
Every code sample, configuration, and deployment step must be reproducible by a reader following the documented instructions.

### AI-Native Thinking
The book must emphasize agentic workflows, AI-native software design patterns, Retrieval-Augmented Generation (RAG), and spec-driven AI development.

### Security & Privacy Awareness
The RAG chatbot must enforce strict context control, prompt safety, and data isolation—especially for user-selected text queries.

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

### Writing Standards

- Tone: Professional, instructional, and precise
- Audience: Intermediate to advanced software engineers
- No filler or marketing language
- All diagrams must be explainable in text
- No hallucinated APIs, libraries, or behaviors

## Integrated RAG Chatbot Standards

### Architecture

- **Backend:** FastAPI
- **AI Layer:** OpenAI Agents / ChatKit SDKs
- **Vector Database:** Qdrant Cloud (Free Tier)
- **Relational Database:** Neon Serverless Postgres
- **Frontend:** Embedded directly in the Docusaurus site

### Functional Requirements

- The chatbot must answer questions **only from the book’s content**
- Must support:
  - Full-book semantic search
  - Section-level retrieval
  - **User-selected text–only Q&A**, with context strictly limited to highlighted text
- No external or speculative knowledge usage
- Clear fallback when an answer cannot be derived from retrieved content

### RAG Behavior Rules

- Retrieval must always precede generation
- Responses must be grounded in retrieved context
- Answers should reference the source chapter or section
- Context windows must be minimal and relevant
- No cross-chapter leakage unless explicitly allowed by spec

## Tooling Flexibility

- Claude Code is the preferred AI authoring environment when available
- **Gemini CLI is a fully supported alternative**
- Tool choice must not affect:
  - Spec compliance
  - Output quality
  - Reproducibility
- No tool-specific behavior may be relied upon unless explicitly documented

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

## Absolute Rules

- Do not invent tools, APIs, or features
- Do not bypass specs for speed
- Do not include unverifiable or uncited technical claims
- Do not allow the chatbot to answer outside provided context
- Follow Spec-Kit Plus rigor at all times

## Governance

Constitution supersedes all other practices. Amendments require documentation, approval, and a migration plan. All PRs/reviews must verify compliance. Complexity must be justified.

**Version**: 1.0.0 | **Ratified**: 2025-12-23 | **Last Amended**: 2025-12-23
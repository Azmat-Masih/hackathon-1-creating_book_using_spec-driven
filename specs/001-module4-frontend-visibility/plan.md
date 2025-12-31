# Implementation Plan: Module 4 - Frontend Visibility (Docusaurus)

**Branch**: `001-module4-frontend-visibility` | **Date**: December 30, 2025 | **Spec**: /specs/001-module4-frontend-visibility/spec.md
**Input**: Feature specification from `/specs/001-module4-frontend-visibility/spec.md`

## Summary

This plan addresses the issue of Module 4 content not appearing in the Docusaurus frontend sidebar. The primary goal is to ensure Module 4 subjects are correctly visible, navigable, and consistent with Modules 1-3, without modifying existing implementations for prior modules. The approach involves identifying and applying the necessary structural, metadata, and configuration requirements within the Docusaurus setup.

## Technical Context

**Language/Version**: JavaScript/TypeScript (for Docusaurus configuration), Markdown (for content)
**Primary Dependencies**: Docusaurus (v2.x or v3.x, consistent with existing setup), Node.js (LTS version for Docusaurus build)
**Storage**: Filesystem (for `sidebars.js`, `_category_.json`, and content Markdown files)
**Testing**: Docusaurus build process (`npm run build` or `yarn build`), manual browser UI verification
**Target Platform**: Web browsers (via Docusaurus static site generation)
**Project Type**: Web application (Frontend Docusaurus site)
**Performance Goals**: Fast loading of documentation pages (inherent to Docusaurus static sites)
**Constraints**:
-   Must not alter existing Module 1-3 implementation.
-   Must not alter shared configuration logic unless strictly required and justified.
-   No new plugins or themes allowed.
-   Adherence to existing Docusaurus configuration patterns.
**Scale/Scope**: Ensure Module 4 content (index + 6 chapters) appears correctly in the sidebar navigation.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **Spec-Driven Development**: All development will adhere to the specification defined in `specs/001-module4-frontend-visibility/spec.md`.
- [x] **Accuracy & Verifiability**: Configuration changes will be consistent with Docusaurus best practices and verified through build and UI checks.
- [x] **Clarity for Developers**: This is an internal configuration task for the book's frontend.
- [x] **Reproducibility**: Configuration changes will be documented and reproducible.
- [ ] **AI-Native Thinking**: Not directly applicable to this configuration task.
- [ ] **Security & Privacy Awareness**: Not directly applicable to this configuration task.
- [x] **Book Creation Standards**: Ensures Docusaurus functions correctly for Module 4, integrating new content into the existing framework.
- [x] **Writing Standards**: N/A (this is configuration, not content writing).
- [ ] **Integrated RAG Chatbot Standards**: N/A for this configuration task.
- [x] **Tooling Flexibility**: Development with Gemini CLI is fully supported.
- [x] **Constraints**: Adherence to "no breaking changes" and "no new plugins" from the spec.
- [x] **Success Criteria**: Docusaurus build completes successfully, module visible and navigable.
- [x] **Absolute Rules**: Adherence to all absolute rules of the constitution.

## Project Structure

### Documentation (this feature)

```text
specs/001-module4-frontend-visibility/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)

This feature primarily involves modifications within the `frontend/` directory, specifically affecting `frontend/sidebars.js` (if explicitly defined) or the filesystem structure/frontmatter of Markdown files within `frontend/docs/module-4/`.

```text
frontend/
├── docs/
│   ├── module-1/
│   ├── module-2/
│   ├── module-3/
│   └── module-4/             # Target directory for content visibility
│       ├── index.md
│       ├── chapter-1-intro-vla.md
│       └── ...
├── sidebars.ts               # Potential file for sidebar configuration
└── docusaurus.config.ts      # Main Docusaurus configuration
```

**Structure Decision**: This feature does not introduce new top-level directories or a new project structure. It focuses on conforming the existing `frontend/docs/module-4/` content to the Docusaurus sidebar generation mechanism, potentially by modifying `frontend/sidebars.ts` or ensuring correct frontmatter/file naming conventions.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|---|---|---|
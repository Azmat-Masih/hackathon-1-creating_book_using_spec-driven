# Quickstart Guide: Landing Page - Humanoid AI Book

**Branch**: `001-book-landing-page` | **Date**: December 30, 2025 | **Spec**: /specs/001-book-landing-page/spec.md

This quickstart guide provides instructions to set up your environment and verify the implementation of the Humanoid AI Book landing page.

## 1. Prerequisites

Ensure you have a working Docusaurus environment with all dependencies installed. This typically involves Node.js and the project's frontend dependencies.

## 2. Environment Setup

1.  **Navigate to Frontend Directory**:
    ```bash
    cd frontend
    ```

2.  **Install Dependencies (if not already done)**:
    ```bash
    npm install
    # or
    yarn install
    ```

## 3. Running the Landing Page Locally

1.  **Start Docusaurus Development Server**:
    ```bash
    npm run start
    # or
    yarn start
    ```
    This will typically open a browser window to `http://localhost:3000`. The landing page should be the default view.

## 4. Validate Landing Page Implementation

Once the Docusaurus development server is running and the landing page is displayed, perform the following validations:

1.  **Verify All Required Sections**:
    -   Visually confirm the presence of all 6 required sections: Hero Section, What This Book Covers, Learning Path, Who This Book Is For, Why This Book Is Different, and Visual Identity.
    -   Check that the Hero Section prominently displays "Humanoid AI" as the main headline.

2.  **Validate Content and Messaging**:
    -   Ensure the book title, subtitle, mission statement, and core messaging themes are accurately reflected.
    -   Verify that all content within sections (e.g., key topics, audience, unique selling points) matches the specifications.

3.  **Check Visual Identity**:
    -   **Important**: The `humanoid-hero-image.png` in `frontend/static/img/` is currently a placeholder. Replace this with a suitable "real humanoid robot imagery" before final validation.
    -   Confirm that the imagery used is "real humanoid robot imagery" as specified.
    -   Verify that the page is visually appealing and compatible with both dark and light modes.
    -   Ensure there is no generic Docusaurus branding emphasis.

4.  **Verify Call-to-Action (CTA)**:
    -   Locate the "Start Reading" CTA in the Hero Section.
    -   Click the CTA and confirm it successfully redirects to the main Docusaurus documentation index (i.e., `/docs/module-1/`). The direct `/docs/` route caused a broken link error during build.

5.  **Check Responsiveness**:
    -   Resize your browser window or use browser developer tools to check the landing page's appearance and functionality on various screen sizes (e.g., desktop, tablet, mobile).

6.  **Build Validation**:
    -   Run a full production build:
        ```bash
        npm run build
        # or
        yarn build
        ```
    -   Verify the build completes successfully with zero errors. (Warnings about deprecated `onBrokenMarkdownLinks` are noted but not build-breaking).

## 5. Next Steps

-   If any issues are found, refer to the `specs/001-book-landing-page/plan.md` and `specs/001-book-landing-page/spec.md` for implementation details and requirements.
-   **Replace `frontend/static/img/humanoid-hero-image.png` with a real image and optimize it for web performance.**
-   Once validated, the feature is ready for further integration or deployment.
## REMOVED Requirements

### Requirement: Work Packages Page

**Reason:** Partner consortium (Romania meeting, 5–7 May 2026) agreed that the WP1–WP5 breakdown describes internal project-management structure and is not appropriate for the public-facing site's audiences.

**Migration:** None required. No external integrations referenced the page; pre-1.0 project so no deprecation window. Project background and objectives remain covered on the About page.

## MODIFIED Requirements

### Requirement: Navigation

The website SHALL provide consistent navigation across all pages with language switching capability.

#### Scenario: User navigates between pages
- **WHEN** a user is on any page
- **THEN** the system displays a navigation menu with links to Home, About, Partners, News, Resources, and Contact
- **AND** the navigation indicates the current active page

#### Scenario: User switches language
- **WHEN** a user selects a different language from the language switcher
- **THEN** the system navigates to the equivalent page in the selected language
- **AND** the URL reflects the new language code (e.g., `/fr/about`)
- **AND** all UI elements display in the selected language

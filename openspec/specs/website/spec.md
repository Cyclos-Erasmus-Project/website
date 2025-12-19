# website Specification

## Purpose
TBD - created by archiving change add-static-website. Update Purpose after archive.
## Requirements
### Requirement: Homepage
The website SHALL provide a homepage that communicates the CYCLOS project's purpose and enables navigation to all sections.

#### Scenario: User visits homepage
- **WHEN** a user navigates to the website root
- **THEN** the system displays the CYCLOS logo, project tagline, and key objectives
- **AND** the system displays navigation to all main sections
- **AND** the system displays the EU ERASMUS+ co-funding acknowledgment

#### Scenario: User sees partner overview
- **WHEN** a user views the homepage
- **THEN** the system displays logos of all 4 partner organizations
- **AND** each logo links to the partners page

### Requirement: Navigation
The website SHALL provide consistent navigation across all pages with language switching capability.

#### Scenario: User navigates between pages
- **WHEN** a user is on any page
- **THEN** the system displays a navigation menu with links to Home, About, Partners, Work Packages, News, Resources, and Contact
- **AND** the navigation indicates the current active page

#### Scenario: User switches language
- **WHEN** a user selects a different language from the language switcher
- **THEN** the system navigates to the equivalent page in the selected language
- **AND** the URL reflects the new language code (e.g., `/fr/about`)
- **AND** all UI elements display in the selected language

### Requirement: Multilingual Support
The website SHALL support content in 5 languages: English (EN), French (FR), Romanian (RO), German (DE), and Greek (EL).

#### Scenario: Content available in all languages
- **WHEN** a user selects any supported language
- **THEN** the system displays all navigation, UI elements, and core content in that language

#### Scenario: Default language
- **WHEN** a user visits the website without a language prefix
- **THEN** the system redirects to the English version by default

### Requirement: About Page
The website SHALL provide an about page explaining the project's background, objectives, and timeline.

#### Scenario: User views about page
- **WHEN** a user navigates to the about page
- **THEN** the system displays the project background and context
- **AND** the system displays the project objectives
- **AND** the system displays the project timeline (September 2025 - February 2028)
- **AND** the system displays the target audience information

### Requirement: Partners Page
The website SHALL provide a partners page showcasing all partner organizations.

#### Scenario: User views partners page
- **WHEN** a user navigates to the partners page
- **THEN** the system displays a profile for each of the 4 partner organizations
- **AND** each profile includes the organization name, country, logo, description, and website link

#### Scenario: Partner profiles displayed
- **WHEN** viewing the partners page
- **THEN** the following organizations are displayed:
  - FLVS - Fédérons Les Villes pour la Santé (France)
  - ASSOC (Romania)
  - AFIS - Austrian Forum for Integration and Sustainability (Austria)
  - Computer Solutions SA (Greece)

### Requirement: Work Packages Page
The website SHALL provide a page explaining the 5 work packages of the project.

#### Scenario: User views work packages
- **WHEN** a user navigates to the work packages page
- **THEN** the system displays information about all 5 work packages:
  - WP1: Project Management
  - WP2: Cycling Knowledge
  - WP3: From Theory to Practice in Cycling
  - WP4: Digital Platform and Awareness
  - WP5: Dissemination, Recommendations, and Quality Evaluation

### Requirement: News Section
The website SHALL provide a news section for project updates and announcements.

#### Scenario: User views news listing
- **WHEN** a user navigates to the news page
- **THEN** the system displays a list of news articles ordered by date (newest first)
- **AND** each article shows title, date, and excerpt

#### Scenario: User views news article
- **WHEN** a user clicks on a news article
- **THEN** the system displays the full article content

### Requirement: Resources Page
The website SHALL provide a resources page for downloadable materials.

#### Scenario: User views resources
- **WHEN** a user navigates to the resources page
- **THEN** the system displays available downloadable resources
- **AND** each resource includes a title, description, and download link

### Requirement: Contact Page
The website SHALL provide a contact page with partner organization contact information.

#### Scenario: User views contact information
- **WHEN** a user navigates to the contact page
- **THEN** the system displays contact information for the lead partner (FLVS)
- **AND** the system displays a list of all partner organizations with their contact details

### Requirement: EU Funding Acknowledgment
The website SHALL display the required EU ERASMUS+ co-funding acknowledgment on all pages.

#### Scenario: EU disclaimer displayed
- **WHEN** a user views any page on the website
- **THEN** the footer displays the EU co-funding statement
- **AND** the footer displays the ERASMUS+ logo
- **AND** the footer displays the disclaimer text: "Funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the European Education and Culture Executive Agency (EACEA). Neither the European Union nor EACEA can be held responsible for them."

### Requirement: Responsive Design
The website SHALL be fully responsive and usable on mobile, tablet, and desktop devices.

#### Scenario: Mobile device access
- **WHEN** a user accesses the website on a mobile device
- **THEN** the layout adapts to the screen size
- **AND** navigation collapses into a mobile menu
- **AND** all content remains readable and accessible

#### Scenario: Tablet device access
- **WHEN** a user accesses the website on a tablet device
- **THEN** the layout adapts appropriately to the screen size
- **AND** all interactive elements are touch-friendly

### Requirement: Accessibility
The website SHALL comply with WCAG 2.1 Level AA accessibility guidelines.

#### Scenario: Screen reader compatibility
- **WHEN** a user navigates the website with a screen reader
- **THEN** all content is announced correctly
- **AND** all images have descriptive alt text
- **AND** the page structure is semantically correct

#### Scenario: Keyboard navigation
- **WHEN** a user navigates using only a keyboard
- **THEN** all interactive elements are reachable via Tab key
- **AND** focus indicators are visible
- **AND** a skip-to-content link is provided

#### Scenario: Color contrast
- **WHEN** viewing any text on the website
- **THEN** the contrast ratio between text and background meets WCAG AA requirements (4.5:1 for normal text, 3:1 for large text)

### Requirement: Performance
The website SHALL load quickly on standard connections.

#### Scenario: Initial page load
- **WHEN** a user first visits the website
- **THEN** the page becomes interactive within 3 seconds on a standard broadband connection
- **AND** the Lighthouse performance score is 90 or above


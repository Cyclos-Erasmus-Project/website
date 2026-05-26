## MODIFIED Requirements

### Requirement: Homepage
The website SHALL provide a homepage that communicates the CYCLOS project's purpose and enables navigation to all sections.

#### Scenario: User visits homepage
- **WHEN** a user navigates to the website root
- **THEN** the system displays the CYCLOS logo, project tagline, and key objectives
- **AND** the project tagline reads "Cycling for Inclusion" (not "Youth Cycling for Inclusion")
- **AND** the system displays navigation to all main sections
- **AND** the system displays the EU ERASMUS+ co-funding acknowledgment

#### Scenario: User sees partner overview
- **WHEN** a user views the homepage
- **THEN** the system displays logos of all 4 partner organizations
- **AND** each logo links to the partners page
- **AND** no placeholder initials are shown when logos are available

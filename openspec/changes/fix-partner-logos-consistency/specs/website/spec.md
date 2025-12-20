## MODIFIED Requirements

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
- **AND** no placeholder initials are shown when logos are available

### Requirement: Contact Page
The website SHALL provide a contact page with partner organization contact information.

#### Scenario: User views contact information
- **WHEN** a user navigates to the contact page
- **THEN** the system displays contact information for the lead partner (FLVS)
- **AND** the system displays a list of all partner organizations with their contact details
- **AND** each partner organization displays their official logo

#### Scenario: Partner logos displayed on contact page
- **WHEN** a user views the contact page
- **THEN** the system displays the official logo for each partner organization
- **AND** no placeholder initials are shown when logos are available

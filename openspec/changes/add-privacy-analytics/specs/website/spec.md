# Website Spec Delta: Privacy-Preserving Analytics

## ADDED Requirements

### Requirement: Privacy-Preserving Analytics

The website SHALL include privacy-preserving visitor analytics that collect anonymous usage data without requiring user consent.

#### Scenario: Analytics script loading
- **WHEN** a visitor loads any page
- **THEN** the analytics script loads asynchronously without blocking rendering
- **AND** no cookies are set on the visitor's browser
- **AND** no personally identifiable information is collected

#### Scenario: Analytics disabled
- **WHEN** the GOATCOUNTER_SITE environment variable is not configured
- **THEN** no analytics script is loaded
- **AND** the page functions normally without errors

#### Scenario: Geographic tracking for EU reporting
- **WHEN** a visitor accesses the website
- **THEN** their approximate country is recorded (derived from IP, IP not stored)
- **AND** this data is available for EU project reporting requirements

### Requirement: Analytics Configuration

The website SHALL support environment-based analytics configuration to enable provider flexibility.

#### Scenario: GoatCounter configuration
- **WHEN** GOATCOUNTER_SITE environment variable is set
- **THEN** the GoatCounter script loads with the configured site code
- **AND** data is sent to goatcounter.com

#### Scenario: Provider swappability
- **WHEN** a different analytics provider is needed in the future
- **THEN** only the script tag and environment variables need to change
- **AND** no other code modifications are required

### Requirement: Custom Analytics Reporting

The website project SHALL support custom analytics reporting via Python helper scripts for EU stakeholder needs beyond the standard dashboard.

#### Scenario: Data export for EU reporting
- **WHEN** detailed analytics reports are needed for EU stakeholders
- **THEN** a Python script can export data via GoatCounter API
- **AND** generate custom visualizations or reports
- **AND** the script is deleted after use per project conventions

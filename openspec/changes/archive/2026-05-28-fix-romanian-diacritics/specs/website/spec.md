## MODIFIED Requirements

### Requirement: Multilingual Support

The website SHALL support content in 5 languages: English (EN), French (FR), Romanian (RO), German (DE), and Greek (EL).

#### Scenario: Content available in all languages
- **WHEN** a user selects any supported language
- **THEN** the system displays all navigation, UI elements, and core content in that language
- **AND** all body text, descriptions, and labels are fully translated (no English fallbacks in translated pages)

#### Scenario: Default language
- **WHEN** a user visits the website without a language prefix
- **THEN** the system redirects to the English version by default

#### Scenario: German language completeness
- **WHEN** a user views German pages (/de/)
- **THEN** all page headings, body text, and UI labels display in German
- **AND** country names display in German (e.g., "Rumänien" not "Romania", "Griechenland" not "Greece")
- **AND** partner descriptions, objectives, and activity lists display in German
- **AND** no hardcoded English strings remain in German page templates

#### Scenario: Language-specific diacritics
- **WHEN** a user views translated pages that use a language with diacritics (e.g., Romanian /ro/)
- **THEN** all UI labels and body text display the correct language-specific diacritics (e.g., "Lucrăm împreună în toată Europa", "Domenii de expertiză")
- **AND** no plain-ASCII substitutions of accented characters remain in the translated strings

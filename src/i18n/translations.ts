export const languages = {
  en: 'English',
  fr: 'Français',
  ro: 'Română',
  de: 'Deutsch',
  el: 'Ελληνικά'
} as const

export type Language = keyof typeof languages

export const defaultLang: Language = 'en'

export const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.partners': 'Partners',
    'nav.workPackages': 'Work Packages',
    'nav.news': 'News',
    'nav.resources': 'Resources',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.close': 'Close menu',
    'nav.skipToContent': 'Skip to main content',

    // Homepage
    'home.hero.title': 'Youth Cycling for Inclusion',
    'home.hero.subtitle': 'Promoting social inclusion of disadvantaged young people through cycling, environmental awareness, and sustainable mobility.',
    'home.hero.cta': 'Learn More',
    'home.objectives.title': 'Our Objectives',
    'home.objectives.inclusion': 'Social Inclusion',
    'home.objectives.inclusionDesc': 'Support disadvantaged youth to integrate into society and the labor market through cycling activities.',
    'home.objectives.mobility': 'Green Mobility',
    'home.objectives.mobilityDesc': 'Promote sustainable transportation and environmental awareness among young people.',
    'home.objectives.skills': 'Skills Development',
    'home.objectives.skillsDesc': 'Build confidence, autonomy, and employability through practical cycling training.',
    'home.objectives.tools': 'Professional Tools',
    'home.objectives.toolsDesc': 'Equip youth workers with resources to organize inclusive cycling sessions.',
    'home.partners.title': 'Our Partners',
    'home.partners.viewAll': 'View All Partners',
    'home.news.title': 'Latest News',
    'home.news.viewAll': 'View All News',
    'home.workPackages.title': 'Work Packages',
    'home.workPackages.viewAll': 'Learn More About Our Work',

    // About
    'about.title': 'About CYCLOS',
    'about.background.title': 'Project Background',
    'about.background.text': 'CYCLOS is an ERASMUS+ KA220-YOU Cooperation Partnership project that brings together organizations from France, Romania, Austria, and Greece to promote the social inclusion of disadvantaged young people through cycling.',
    'about.objectives.title': 'Objectives',
    'about.timeline.title': 'Project Timeline',
    'about.timeline.start': 'Project Start',
    'about.timeline.end': 'Project End',
    'about.timeline.duration': '30 months',
    'about.target.title': 'Target Audience',
    'about.target.youth': 'Disadvantaged youth facing barriers to employment',
    'about.target.workers': 'Youth workers and professionals',
    'about.target.stakeholders': 'Local governments and NGOs',

    // Partners
    'partners.title': 'Partner Organizations',
    'partners.subtitle': 'Four organizations across Europe working together for youth inclusion',
    'partners.country': 'Country',
    'partners.website': 'Visit Website',
    'partners.lead': 'Lead Partner',

    // Work Packages
    'wp.title': 'Work Packages',
    'wp.subtitle': 'The project is organized into five work packages',
    'wp.wp1.title': 'WP1: Project Management',
    'wp.wp1.desc': 'Coordination, quality assurance, and administrative management of the project.',
    'wp.wp2.title': 'WP2: Cycling Knowledge',
    'wp.wp2.desc': 'Development of educational materials and training modules on cycling.',
    'wp.wp3.title': 'WP3: From Theory to Practice',
    'wp.wp3.desc': 'Practical cycling sessions for disadvantaged youth and training for professionals.',
    'wp.wp4.title': 'WP4: Digital Platform',
    'wp.wp4.desc': 'Development of a digital learning application for cycling and environmental awareness.',
    'wp.wp5.title': 'WP5: Dissemination & Evaluation',
    'wp.wp5.desc': 'Communication, dissemination of results, and quality evaluation.',

    // News
    'news.title': 'News & Updates',
    'news.subtitle': 'Stay informed about the latest project developments',
    'news.readMore': 'Read More',
    'news.noNews': 'No news articles available yet.',

    // Resources
    'resources.title': 'Resources',
    'resources.subtitle': 'Download project materials and educational resources',
    'resources.download': 'Download',
    'resources.noResources': 'Resources will be available as the project progresses.',
    'resources.comingSoon': 'Coming Soon',

    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch with the CYCLOS project team',
    'contact.lead.title': 'Lead Partner',
    'contact.partners.title': 'Partner Organizations',
    'contact.email': 'Email',

    // Footer
    'footer.project': 'An ERASMUS+ Project',
    'footer.funding': 'Co-funded by the European Union',
    'footer.disclaimer': 'Funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the European Education and Culture Executive Agency (EACEA). Neither the European Union nor EACEA can be held responsible for them.',
    'footer.rights': 'All rights reserved.',

    // Common
    'common.learnMore': 'Learn More',
    'common.readMore': 'Read More',
    'common.backToHome': 'Back to Home'
  },

  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.partners': 'Partenaires',
    'nav.workPackages': 'Lots de travail',
    'nav.news': 'Actualités',
    'nav.resources': 'Ressources',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.close': 'Fermer le menu',
    'nav.skipToContent': 'Aller au contenu principal',

    // Homepage
    'home.hero.title': 'Le vélo pour l\'inclusion des jeunes',
    'home.hero.subtitle': 'Promouvoir l\'inclusion sociale des jeunes défavorisés à travers le cyclisme, la sensibilisation environnementale et la mobilité durable.',
    'home.hero.cta': 'En savoir plus',
    'home.objectives.title': 'Nos Objectifs',
    'home.objectives.inclusion': 'Inclusion Sociale',
    'home.objectives.inclusionDesc': 'Accompagner les jeunes défavorisés dans leur intégration sociale et professionnelle grâce au vélo.',
    'home.objectives.mobility': 'Mobilité Verte',
    'home.objectives.mobilityDesc': 'Promouvoir les transports durables et la sensibilisation environnementale.',
    'home.objectives.skills': 'Développement des Compétences',
    'home.objectives.skillsDesc': 'Renforcer la confiance, l\'autonomie et l\'employabilité par la formation pratique.',
    'home.objectives.tools': 'Outils Professionnels',
    'home.objectives.toolsDesc': 'Équiper les professionnels pour organiser des sessions de vélo inclusives.',
    'home.partners.title': 'Nos Partenaires',
    'home.partners.viewAll': 'Voir tous les partenaires',
    'home.news.title': 'Dernières Actualités',
    'home.news.viewAll': 'Voir toutes les actualités',
    'home.workPackages.title': 'Lots de Travail',
    'home.workPackages.viewAll': 'En savoir plus sur notre travail',

    // About
    'about.title': 'À propos de CYCLOS',
    'about.background.title': 'Contexte du Projet',
    'about.background.text': 'CYCLOS est un projet de partenariat de coopération ERASMUS+ KA220-YOU qui rassemble des organisations de France, Roumanie, Autriche et Grèce pour promouvoir l\'inclusion sociale des jeunes défavorisés à travers le vélo.',
    'about.objectives.title': 'Objectifs',
    'about.timeline.title': 'Calendrier du Projet',
    'about.timeline.start': 'Début du projet',
    'about.timeline.end': 'Fin du projet',
    'about.timeline.duration': '30 mois',
    'about.target.title': 'Public Cible',
    'about.target.youth': 'Jeunes défavorisés confrontés à des obstacles à l\'emploi',
    'about.target.workers': 'Animateurs jeunesse et professionnels',
    'about.target.stakeholders': 'Collectivités locales et ONG',

    // Partners
    'partners.title': 'Organisations Partenaires',
    'partners.subtitle': 'Quatre organisations à travers l\'Europe travaillant ensemble pour l\'inclusion des jeunes',
    'partners.country': 'Pays',
    'partners.website': 'Visiter le site',
    'partners.lead': 'Partenaire principal',

    // Work Packages
    'wp.title': 'Lots de Travail',
    'wp.subtitle': 'Le projet est organisé en cinq lots de travail',
    'wp.wp1.title': 'LT1 : Gestion de Projet',
    'wp.wp1.desc': 'Coordination, assurance qualité et gestion administrative du projet.',
    'wp.wp2.title': 'LT2 : Connaissances Cyclistes',
    'wp.wp2.desc': 'Développement de matériels éducatifs et modules de formation sur le vélo.',
    'wp.wp3.title': 'LT3 : De la Théorie à la Pratique',
    'wp.wp3.desc': 'Sessions pratiques de vélo pour les jeunes défavorisés et formation des professionnels.',
    'wp.wp4.title': 'LT4 : Plateforme Numérique',
    'wp.wp4.desc': 'Développement d\'une application d\'apprentissage numérique pour le vélo et la sensibilisation environnementale.',
    'wp.wp5.title': 'LT5 : Diffusion et Évaluation',
    'wp.wp5.desc': 'Communication, diffusion des résultats et évaluation de la qualité.',

    // News
    'news.title': 'Actualités',
    'news.subtitle': 'Restez informé des derniers développements du projet',
    'news.readMore': 'Lire la suite',
    'news.noNews': 'Aucun article disponible pour le moment.',

    // Resources
    'resources.title': 'Ressources',
    'resources.subtitle': 'Téléchargez les matériels du projet et ressources éducatives',
    'resources.download': 'Télécharger',
    'resources.noResources': 'Les ressources seront disponibles au fur et à mesure de l\'avancement du projet.',
    'resources.comingSoon': 'Bientôt disponible',

    // Contact
    'contact.title': 'Nous Contacter',
    'contact.subtitle': 'Contactez l\'équipe du projet CYCLOS',
    'contact.lead.title': 'Partenaire Principal',
    'contact.partners.title': 'Organisations Partenaires',
    'contact.email': 'Email',

    // Footer
    'footer.project': 'Un projet ERASMUS+',
    'footer.funding': 'Cofinancé par l\'Union européenne',
    'footer.disclaimer': 'Financé par l\'Union européenne. Les points de vue et opinions exprimés n\'engagent que leur(s) auteur(s) et ne reflètent pas nécessairement ceux de l\'Union européenne ou de l\'Agence exécutive européenne pour l\'éducation et la culture (EACEA). Ni l\'Union européenne ni l\'EACEA ne peuvent en être tenues responsables.',
    'footer.rights': 'Tous droits réservés.',

    // Common
    'common.learnMore': 'En savoir plus',
    'common.readMore': 'Lire la suite',
    'common.backToHome': 'Retour à l\'accueil'
  },

  ro: {
    // Navigation
    'nav.home': 'Acasă',
    'nav.about': 'Despre',
    'nav.partners': 'Parteneri',
    'nav.workPackages': 'Pachete de lucru',
    'nav.news': 'Știri',
    'nav.resources': 'Resurse',
    'nav.contact': 'Contact',
    'nav.menu': 'Meniu',
    'nav.close': 'Închide meniul',
    'nav.skipToContent': 'Sari la conținutul principal',

    // Homepage
    'home.hero.title': 'Ciclismul pentru Incluziunea Tinerilor',
    'home.hero.subtitle': 'Promovarea incluziunii sociale a tinerilor defavorizați prin ciclism, conștientizare ecologică și mobilitate durabilă.',
    'home.hero.cta': 'Află mai multe',
    'home.objectives.title': 'Obiectivele Noastre',
    'home.objectives.inclusion': 'Incluziune Socială',
    'home.objectives.inclusionDesc': 'Sprijinirea tinerilor defavorizați să se integreze în societate și pe piața muncii prin activități de ciclism.',
    'home.objectives.mobility': 'Mobilitate Verde',
    'home.objectives.mobilityDesc': 'Promovarea transportului durabil și a conștientizării ecologice în rândul tinerilor.',
    'home.objectives.skills': 'Dezvoltarea Competențelor',
    'home.objectives.skillsDesc': 'Construirea încrederii, autonomiei și angajabilității prin formare practică.',
    'home.objectives.tools': 'Instrumente Profesionale',
    'home.objectives.toolsDesc': 'Dotarea lucrătorilor de tineret cu resurse pentru a organiza sesiuni inclusive de ciclism.',
    'home.partners.title': 'Partenerii Noștri',
    'home.partners.viewAll': 'Vezi toți partenerii',
    'home.news.title': 'Ultimele Știri',
    'home.news.viewAll': 'Vezi toate știrile',
    'home.workPackages.title': 'Pachete de Lucru',
    'home.workPackages.viewAll': 'Află mai multe despre activitatea noastră',

    // About
    'about.title': 'Despre CYCLOS',
    'about.background.title': 'Contextul Proiectului',
    'about.background.text': 'CYCLOS este un proiect de parteneriat de cooperare ERASMUS+ KA220-YOU care reunește organizații din Franța, România, Austria și Grecia pentru a promova incluziunea socială a tinerilor defavorizați prin ciclism.',
    'about.objectives.title': 'Obiective',
    'about.timeline.title': 'Calendarul Proiectului',
    'about.timeline.start': 'Începutul proiectului',
    'about.timeline.end': 'Sfârșitul proiectului',
    'about.timeline.duration': '30 de luni',
    'about.target.title': 'Grup Țintă',
    'about.target.youth': 'Tineri defavorizați care se confruntă cu bariere în calea angajării',
    'about.target.workers': 'Lucrători de tineret și profesioniști',
    'about.target.stakeholders': 'Autorități locale și ONG-uri',

    // Partners
    'partners.title': 'Organizații Partenere',
    'partners.subtitle': 'Patru organizații din Europa care lucrează împreună pentru incluziunea tinerilor',
    'partners.country': 'Țara',
    'partners.website': 'Vizitează site-ul',
    'partners.lead': 'Partener principal',

    // Work Packages
    'wp.title': 'Pachete de Lucru',
    'wp.subtitle': 'Proiectul este organizat în cinci pachete de lucru',
    'wp.wp1.title': 'PL1: Managementul Proiectului',
    'wp.wp1.desc': 'Coordonare, asigurarea calității și managementul administrativ al proiectului.',
    'wp.wp2.title': 'PL2: Cunoștințe de Ciclism',
    'wp.wp2.desc': 'Dezvoltarea materialelor educaționale și modulelor de formare despre ciclism.',
    'wp.wp3.title': 'PL3: De la Teorie la Practică',
    'wp.wp3.desc': 'Sesiuni practice de ciclism pentru tinerii defavorizați și formare pentru profesioniști.',
    'wp.wp4.title': 'PL4: Platforma Digitală',
    'wp.wp4.desc': 'Dezvoltarea unei aplicații de învățare digitală pentru ciclism și conștientizare ecologică.',
    'wp.wp5.title': 'PL5: Diseminare și Evaluare',
    'wp.wp5.desc': 'Comunicare, diseminarea rezultatelor și evaluarea calității.',

    // News
    'news.title': 'Știri și Actualizări',
    'news.subtitle': 'Rămâi informat despre ultimele evoluții ale proiectului',
    'news.readMore': 'Citește mai mult',
    'news.noNews': 'Nu există încă articole de știri disponibile.',

    // Resources
    'resources.title': 'Resurse',
    'resources.subtitle': 'Descarcă materialele proiectului și resursele educaționale',
    'resources.download': 'Descarcă',
    'resources.noResources': 'Resursele vor fi disponibile pe măsură ce proiectul avansează.',
    'resources.comingSoon': 'În curând',

    // Contact
    'contact.title': 'Contactează-ne',
    'contact.subtitle': 'Ia legătura cu echipa proiectului CYCLOS',
    'contact.lead.title': 'Partener Principal',
    'contact.partners.title': 'Organizații Partenere',
    'contact.email': 'Email',

    // Footer
    'footer.project': 'Un proiect ERASMUS+',
    'footer.funding': 'Cofinanțat de Uniunea Europeană',
    'footer.disclaimer': 'Finanțat de Uniunea Europeană. Punctele de vedere și opiniile exprimate aparțin exclusiv autorului (autorilor) și nu reflectă neapărat punctele de vedere ale Uniunii Europene sau ale Agenției Executive Europene pentru Educație și Cultură (EACEA). Nici Uniunea Europeană, nici EACEA nu pot fi considerate responsabile pentru acestea.',
    'footer.rights': 'Toate drepturile rezervate.',

    // Common
    'common.learnMore': 'Află mai multe',
    'common.readMore': 'Citește mai mult',
    'common.backToHome': 'Înapoi acasă'
  },

  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.about': 'Über uns',
    'nav.partners': 'Partner',
    'nav.workPackages': 'Arbeitspakete',
    'nav.news': 'Aktuelles',
    'nav.resources': 'Ressourcen',
    'nav.contact': 'Kontakt',
    'nav.menu': 'Menü',
    'nav.close': 'Menü schließen',
    'nav.skipToContent': 'Zum Hauptinhalt springen',

    // Homepage
    'home.hero.title': 'Radfahren für die Inklusion von Jugendlichen',
    'home.hero.subtitle': 'Förderung der sozialen Inklusion benachteiligter junger Menschen durch Radfahren, Umweltbewusstsein und nachhaltige Mobilität.',
    'home.hero.cta': 'Mehr erfahren',
    'home.objectives.title': 'Unsere Ziele',
    'home.objectives.inclusion': 'Soziale Inklusion',
    'home.objectives.inclusionDesc': 'Unterstützung benachteiligter Jugendlicher bei der Integration in Gesellschaft und Arbeitsmarkt durch Radfahraktivitäten.',
    'home.objectives.mobility': 'Grüne Mobilität',
    'home.objectives.mobilityDesc': 'Förderung nachhaltiger Verkehrsmittel und Umweltbewusstsein bei jungen Menschen.',
    'home.objectives.skills': 'Kompetenzentwicklung',
    'home.objectives.skillsDesc': 'Aufbau von Selbstvertrauen, Autonomie und Beschäftigungsfähigkeit durch praktisches Training.',
    'home.objectives.tools': 'Professionelle Werkzeuge',
    'home.objectives.toolsDesc': 'Ausstattung von Jugendarbeitern mit Ressourcen zur Organisation inklusiver Radfahrveranstaltungen.',
    'home.partners.title': 'Unsere Partner',
    'home.partners.viewAll': 'Alle Partner ansehen',
    'home.news.title': 'Aktuelle Nachrichten',
    'home.news.viewAll': 'Alle Nachrichten ansehen',
    'home.workPackages.title': 'Arbeitspakete',
    'home.workPackages.viewAll': 'Mehr über unsere Arbeit erfahren',

    // About
    'about.title': 'Über CYCLOS',
    'about.background.title': 'Projekthintergrund',
    'about.background.text': 'CYCLOS ist ein ERASMUS+ KA220-YOU Kooperationspartnerschaftsprojekt, das Organisationen aus Frankreich, Rumänien, Österreich und Griechenland zusammenbringt, um die soziale Inklusion benachteiligter junger Menschen durch Radfahren zu fördern.',
    'about.objectives.title': 'Ziele',
    'about.timeline.title': 'Projektzeitplan',
    'about.timeline.start': 'Projektstart',
    'about.timeline.end': 'Projektende',
    'about.timeline.duration': '30 Monate',
    'about.target.title': 'Zielgruppe',
    'about.target.youth': 'Benachteiligte Jugendliche mit Beschäftigungshindernissen',
    'about.target.workers': 'Jugendarbeiter und Fachkräfte',
    'about.target.stakeholders': 'Kommunalverwaltungen und NGOs',

    // Partners
    'partners.title': 'Partnerorganisationen',
    'partners.subtitle': 'Vier Organisationen aus ganz Europa arbeiten gemeinsam für die Inklusion von Jugendlichen',
    'partners.country': 'Land',
    'partners.website': 'Website besuchen',
    'partners.lead': 'Hauptpartner',

    // Work Packages
    'wp.title': 'Arbeitspakete',
    'wp.subtitle': 'Das Projekt ist in fünf Arbeitspakete gegliedert',
    'wp.wp1.title': 'AP1: Projektmanagement',
    'wp.wp1.desc': 'Koordination, Qualitätssicherung und administrative Leitung des Projekts.',
    'wp.wp2.title': 'AP2: Radfahrwissen',
    'wp.wp2.desc': 'Entwicklung von Bildungsmaterialien und Schulungsmodulen zum Thema Radfahren.',
    'wp.wp3.title': 'AP3: Von der Theorie zur Praxis',
    'wp.wp3.desc': 'Praktische Radfahrsitzungen für benachteiligte Jugendliche und Schulung für Fachkräfte.',
    'wp.wp4.title': 'AP4: Digitale Plattform',
    'wp.wp4.desc': 'Entwicklung einer digitalen Lernapp für Radfahren und Umweltbewusstsein.',
    'wp.wp5.title': 'AP5: Verbreitung und Evaluation',
    'wp.wp5.desc': 'Kommunikation, Verbreitung der Ergebnisse und Qualitätsbewertung.',

    // News
    'news.title': 'Neuigkeiten',
    'news.subtitle': 'Bleiben Sie über die neuesten Projektentwicklungen informiert',
    'news.readMore': 'Weiterlesen',
    'news.noNews': 'Noch keine Nachrichtenartikel verfügbar.',

    // Resources
    'resources.title': 'Ressourcen',
    'resources.subtitle': 'Projektmaterialien und Bildungsressourcen herunterladen',
    'resources.download': 'Herunterladen',
    'resources.noResources': 'Ressourcen werden verfügbar sein, wenn das Projekt voranschreitet.',
    'resources.comingSoon': 'Demnächst',

    // Contact
    'contact.title': 'Kontakt',
    'contact.subtitle': 'Nehmen Sie Kontakt mit dem CYCLOS-Projektteam auf',
    'contact.lead.title': 'Hauptpartner',
    'contact.partners.title': 'Partnerorganisationen',
    'contact.email': 'E-Mail',

    // Footer
    'footer.project': 'Ein ERASMUS+ Projekt',
    'footer.funding': 'Kofinanziert von der Europäischen Union',
    'footer.disclaimer': 'Von der Europäischen Union finanziert. Die geäußerten Ansichten und Meinungen entsprechen jedoch ausschließlich denen des Autors bzw. der Autoren und spiegeln nicht zwingend die der Europäischen Union oder der Europäischen Exekutivagentur für Bildung und Kultur (EACEA) wider. Weder die Europäische Union noch die EACEA können dafür verantwortlich gemacht werden.',
    'footer.rights': 'Alle Rechte vorbehalten.',

    // Common
    'common.learnMore': 'Mehr erfahren',
    'common.readMore': 'Weiterlesen',
    'common.backToHome': 'Zurück zur Startseite'
  },

  el: {
    // Navigation
    'nav.home': 'Αρχική',
    'nav.about': 'Σχετικά',
    'nav.partners': 'Εταίροι',
    'nav.workPackages': 'Πακέτα Εργασίας',
    'nav.news': 'Νέα',
    'nav.resources': 'Πόροι',
    'nav.contact': 'Επικοινωνία',
    'nav.menu': 'Μενού',
    'nav.close': 'Κλείσιμο μενού',
    'nav.skipToContent': 'Μετάβαση στο κύριο περιεχόμενο',

    // Homepage
    'home.hero.title': 'Ποδηλασία για την Ένταξη των Νέων',
    'home.hero.subtitle': 'Προώθηση της κοινωνικής ένταξης μειονεκτούντων νέων μέσω της ποδηλασίας, της περιβαλλοντικής ευαισθητοποίησης και της βιώσιμης κινητικότητας.',
    'home.hero.cta': 'Μάθετε Περισσότερα',
    'home.objectives.title': 'Οι Στόχοι Μας',
    'home.objectives.inclusion': 'Κοινωνική Ένταξη',
    'home.objectives.inclusionDesc': 'Υποστήριξη μειονεκτούντων νέων για ένταξη στην κοινωνία και την αγορά εργασίας μέσω δραστηριοτήτων ποδηλασίας.',
    'home.objectives.mobility': 'Πράσινη Κινητικότητα',
    'home.objectives.mobilityDesc': 'Προώθηση βιώσιμων μεταφορών και περιβαλλοντικής ευαισθητοποίησης στους νέους.',
    'home.objectives.skills': 'Ανάπτυξη Δεξιοτήτων',
    'home.objectives.skillsDesc': 'Οικοδόμηση αυτοπεποίθησης, αυτονομίας και απασχολησιμότητας μέσω πρακτικής εκπαίδευσης.',
    'home.objectives.tools': 'Επαγγελματικά Εργαλεία',
    'home.objectives.toolsDesc': 'Εφοδιασμός εργαζομένων νεολαίας με πόρους για την οργάνωση συμπεριληπτικών συνεδριών ποδηλασίας.',
    'home.partners.title': 'Οι Εταίροι Μας',
    'home.partners.viewAll': 'Δείτε Όλους τους Εταίρους',
    'home.news.title': 'Τελευταία Νέα',
    'home.news.viewAll': 'Δείτε Όλα τα Νέα',
    'home.workPackages.title': 'Πακέτα Εργασίας',
    'home.workPackages.viewAll': 'Μάθετε Περισσότερα για την Εργασία Μας',

    // About
    'about.title': 'Σχετικά με το CYCLOS',
    'about.background.title': 'Ιστορικό του Έργου',
    'about.background.text': 'Το CYCLOS είναι ένα έργο Συμπράξεων Συνεργασίας ERASMUS+ KA220-YOU που συγκεντρώνει οργανισμούς από τη Γαλλία, τη Ρουμανία, την Αυστρία και την Ελλάδα για την προώθηση της κοινωνικής ένταξης μειονεκτούντων νέων μέσω της ποδηλασίας.',
    'about.objectives.title': 'Στόχοι',
    'about.timeline.title': 'Χρονοδιάγραμμα Έργου',
    'about.timeline.start': 'Έναρξη έργου',
    'about.timeline.end': 'Λήξη έργου',
    'about.timeline.duration': '30 μήνες',
    'about.target.title': 'Ομάδα Στόχος',
    'about.target.youth': 'Μειονεκτούντες νέοι που αντιμετωπίζουν εμπόδια στην απασχόληση',
    'about.target.workers': 'Εργαζόμενοι νεολαίας και επαγγελματίες',
    'about.target.stakeholders': 'Τοπικές κυβερνήσεις και ΜΚΟ',

    // Partners
    'partners.title': 'Οργανισμοί Εταίροι',
    'partners.subtitle': 'Τέσσερις οργανισμοί σε όλη την Ευρώπη συνεργάζονται για την ένταξη των νέων',
    'partners.country': 'Χώρα',
    'partners.website': 'Επισκεφθείτε την Ιστοσελίδα',
    'partners.lead': 'Κύριος Εταίρος',

    // Work Packages
    'wp.title': 'Πακέτα Εργασίας',
    'wp.subtitle': 'Το έργο είναι οργανωμένο σε πέντε πακέτα εργασίας',
    'wp.wp1.title': 'ΠΕ1: Διαχείριση Έργου',
    'wp.wp1.desc': 'Συντονισμός, διασφάλιση ποιότητας και διοικητική διαχείριση του έργου.',
    'wp.wp2.title': 'ΠΕ2: Γνώσεις Ποδηλασίας',
    'wp.wp2.desc': 'Ανάπτυξη εκπαιδευτικού υλικού και ενοτήτων κατάρτισης για την ποδηλασία.',
    'wp.wp3.title': 'ΠΕ3: Από τη Θεωρία στην Πράξη',
    'wp.wp3.desc': 'Πρακτικές συνεδρίες ποδηλασίας για μειονεκτούντες νέους και κατάρτιση για επαγγελματίες.',
    'wp.wp4.title': 'ΠΕ4: Ψηφιακή Πλατφόρμα',
    'wp.wp4.desc': 'Ανάπτυξη ψηφιακής εφαρμογής μάθησης για ποδηλασία και περιβαλλοντική ευαισθητοποίηση.',
    'wp.wp5.title': 'ΠΕ5: Διάδοση και Αξιολόγηση',
    'wp.wp5.desc': 'Επικοινωνία, διάδοση αποτελεσμάτων και αξιολόγηση ποιότητας.',

    // News
    'news.title': 'Νέα και Ενημερώσεις',
    'news.subtitle': 'Μείνετε ενημερωμένοι για τις τελευταίες εξελίξεις του έργου',
    'news.readMore': 'Διαβάστε Περισσότερα',
    'news.noNews': 'Δεν υπάρχουν ακόμη διαθέσιμα άρθρα νέων.',

    // Resources
    'resources.title': 'Πόροι',
    'resources.subtitle': 'Κατεβάστε υλικά του έργου και εκπαιδευτικούς πόρους',
    'resources.download': 'Λήψη',
    'resources.noResources': 'Οι πόροι θα είναι διαθέσιμοι καθώς το έργο προχωρά.',
    'resources.comingSoon': 'Σύντομα Διαθέσιμο',

    // Contact
    'contact.title': 'Επικοινωνήστε Μαζί Μας',
    'contact.subtitle': 'Επικοινωνήστε με την ομάδα του έργου CYCLOS',
    'contact.lead.title': 'Κύριος Εταίρος',
    'contact.partners.title': 'Οργανισμοί Εταίροι',
    'contact.email': 'Email',

    // Footer
    'footer.project': 'Ένα Έργο ERASMUS+',
    'footer.funding': 'Συγχρηματοδοτείται από την Ευρωπαϊκή Ένωση',
    'footer.disclaimer': 'Χρηματοδοτείται από την Ευρωπαϊκή Ένωση. Οι απόψεις και οι γνώμες που εκφράζονται είναι αποκλειστικά του/των συγγραφέα/ων και δεν αντικατοπτρίζουν απαραίτητα τις απόψεις της Ευρωπαϊκής Ένωσης ή του Ευρωπαϊκού Εκτελεστικού Οργανισμού Εκπαίδευσης και Πολιτισμού (EACEA). Ούτε η Ευρωπαϊκή Ένωση ούτε ο EACEA μπορούν να θεωρηθούν υπεύθυνοι για αυτές.',
    'footer.rights': 'Με επιφύλαξη παντός δικαιώματος.',

    // Common
    'common.learnMore': 'Μάθετε Περισσότερα',
    'common.readMore': 'Διαβάστε Περισσότερα',
    'common.backToHome': 'Επιστροφή στην Αρχική'
  }
} as const

export type TranslationKey = keyof typeof translations.en

export function useTranslations(lang: Language) {
  return function t(key: TranslationKey): string {
    return translations[lang][key] || translations.en[key] || key
  }
}

export function getLanguageFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/')
  if (lang in languages) {
    return lang as Language
  }
  return defaultLang
}

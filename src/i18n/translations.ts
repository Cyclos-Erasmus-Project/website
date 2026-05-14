export const languages = {
  en: "English",
  fr: "Français",
  ro: "Română",
  de: "Deutsch",
  el: "Ελληνικά",
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = "en";

export const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.partners": "Partners",
    "nav.news": "News",
    "nav.resources": "Resources",
    "nav.contact": "Contact",
    "nav.menu": "Menu",
    "nav.close": "Close menu",
    "nav.skipToContent": "Skip to main content",

    // Homepage
    "home.hero.title": "Youth Cycling for Inclusion",
    "home.hero.subtitle":
      "Promoting social inclusion of disadvantaged young people through cycling, environmental awareness, and sustainable mobility.",
    "home.hero.cta": "Learn More",
    "home.objectives.title": "Our Objectives",
    "home.objectives.inclusion": "Social Inclusion",
    "home.objectives.inclusionDesc":
      "Support disadvantaged youth to integrate into society and the labor market through cycling activities.",
    "home.objectives.mobility": "Green Mobility",
    "home.objectives.mobilityDesc":
      "Promote sustainable transportation and environmental awareness among young people.",
    "home.objectives.skills": "Skills Development",
    "home.objectives.skillsDesc":
      "Build confidence, autonomy, and employability through practical cycling training.",
    "home.objectives.tools": "Professional Tools",
    "home.objectives.toolsDesc":
      "Equip youth workers with resources to organize inclusive cycling sessions.",
    "home.partners.title": "Our Partners",
    "home.partners.viewAll": "View All Partners",
    "home.news.title": "Latest News",
    "home.news.viewAll": "View All News",

    // About
    "about.title": "About CYCLOS",
    "about.background.title": "Project Background",
    "about.background.text":
      "CYCLOS is an ERASMUS+ KA220-YOU Cooperation Partnership project that brings together organizations from France, Romania, Austria, and Greece to promote the social inclusion of disadvantaged young people through cycling.",
    "about.objectives.title": "Objectives",
    "about.timeline.title": "Project Timeline",
    "about.timeline.start": "Project Start",
    "about.timeline.end": "Project End",
    "about.timeline.duration": "30 months",
    "about.timeline.collaborative": "of collaborative work",
    "about.target.title": "Target Audience",
    "about.target.youth": "Disadvantaged youth facing barriers to employment",
    "about.target.workers": "Youth workers and professionals",
    "about.target.stakeholders": "Local governments and NGOs",
    "about.target.youthDesc":
      "Young people with disabilities, migrant backgrounds, or from low socioeconomic situations",
    "about.target.workersDesc":
      "Professionals organizing activities for disadvantaged youth",
    "about.target.stakeholdersDesc":
      "Organizations working on youth inclusion and sustainable mobility",
    "about.projectOverview.p1":
      "CYCLOS (Youth Cycling for Inclusion) is an ERASMUS+ KA220-YOU Cooperation Partnership that brings together four organizations from France, Romania, Austria, and Greece. The project addresses a critical challenge: many disadvantaged young people face barriers to employment and social integration, with mobility being a significant obstacle.",
    "about.projectOverview.p2":
      "By focusing on cycling as a tool for inclusion, CYCLOS aims to help these young people overcome mobility barriers, develop practical skills, build confidence, and become more autonomous. At the same time, the project promotes environmental awareness and sustainable transportation practices.",
    "about.projectOverview.p3":
      "The project will develop educational materials, organize practical cycling sessions, create a digital learning platform, and provide training for youth workers across the partner countries.",
    "about.fundedBy": "Funded by the European Union",
    "about.fundedByDesc":
      "CYCLOS is a Cooperation Partnership funded under the ERASMUS+ Programme (KA220-YOU) with a total budget of 250,000 euros. The project is coordinated by FLVS (France) in partnership with organizations from Romania, Austria, and Greece.",
    "about.objective1":
      "Promote the social inclusion of disadvantaged young people through cycling",
    "about.objective2":
      "Raise environmental awareness and encourage greener mobility choices",
    "about.objective3":
      "Help youth become more autonomous and independent in their daily lives",
    "about.objective4": "Boost skills, self-confidence, and employability",
    "about.objective5":
      "Equip youth workers with tools to organize inclusive cycling sessions",
    "about.objective6": "Develop a digital platform for learning and awareness",

    // Partners
    "partners.title": "Partner Organizations",
    "partners.subtitle":
      "Four organizations across Europe working together for youth inclusion",
    "partners.country": "Country",
    "partners.website": "Visit Website",
    "partners.lead": "Lead Partner",
    "partners.areasOfExpertise": "Areas of Expertise",
    "partners.workingTogether": "Working Together Across Europe",
    "partners.workingTogetherDesc":
      "Our diverse partnership brings together expertise in health promotion, social services, education, and technology to create meaningful impact for disadvantaged youth.",

    // News
    "news.title": "News & Updates",
    "news.subtitle": "Stay informed about the latest project developments",
    "news.readMore": "Read More",
    "news.noNews": "No news articles available yet.",

    // Resources
    "resources.title": "Resources",
    "resources.subtitle":
      "Download project materials and educational resources",
    "resources.download": "Download",
    "resources.noResources":
      "Resources will be available as the project progresses.",
    "resources.comingSoon": "Coming Soon",

    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "Get in touch with the CYCLOS project team",
    "contact.lead.title": "Lead Partner",
    "contact.partners.title": "Partner Organizations",
    "contact.email": "Email",
    "contact.getInTouch": "Get in Touch",
    "contact.generalInquiries": "General Inquiries",
    "contact.generalInquiriesDesc":
      "For questions about the CYCLOS project, please contact the lead partner.",
    "contact.mediaPress": "Media & Press",
    "contact.mediaPressDesc":
      "For media inquiries and press requests, please reach out to the project coordinator.",
    "contact.partnershipOpportunities": "Partnership Opportunities",
    "contact.partnershipOpportunitiesDesc":
      "Interested in collaborating? Contact us to discuss potential partnerships.",
    "contact.sendEmail": "Send Email",
    "contact.europeanNetwork": "Our European Network",
    "contact.europeanNetworkDesc":
      "Four countries working together for youth inclusion through cycling",

    // Countries
    "countries.france": "France",
    "countries.romania": "Romania",
    "countries.austria": "Austria",
    "countries.greece": "Greece",

    // Footer
    "footer.project": "An ERASMUS+ Project",
    "footer.funding": "Co-funded by the European Union",
    "footer.description":
      "Promoting social inclusion of disadvantaged young people through cycling, environmental awareness, and sustainable mobility.",
    "footer.disclaimer":
      "Funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the European Education and Culture Executive Agency (EACEA). Neither the European Union nor EACEA can be held responsible for them.",
    "footer.rights": "All rights reserved.",

    // Common
    "common.learnMore": "Learn More",
    "common.readMore": "Read More",
    "common.backToHome": "Back to Home",
  },

  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.partners": "Partenaires",
    "nav.news": "Actualités",
    "nav.resources": "Ressources",
    "nav.contact": "Contact",
    "nav.menu": "Menu",
    "nav.close": "Fermer le menu",
    "nav.skipToContent": "Aller au contenu principal",

    // Homepage
    "home.hero.title": "Le vélo pour l'inclusion des jeunes",
    "home.hero.subtitle":
      "Promouvoir l'inclusion sociale des jeunes défavorisés à travers le cyclisme, la sensibilisation environnementale et la mobilité durable.",
    "home.hero.cta": "En savoir plus",
    "home.objectives.title": "Nos Objectifs",
    "home.objectives.inclusion": "Inclusion Sociale",
    "home.objectives.inclusionDesc":
      "Accompagner les jeunes défavorisés dans leur insertion sociale et professionnelle par le vélo.",
    "home.objectives.mobility": "Mobilité durable",
    "home.objectives.mobilityDesc":
      "Promouvoir les transports durables et la sensibilisation à l'environnement.",
    "home.objectives.skills": "Développement des Compétences",
    "home.objectives.skillsDesc":
      "Renforcer la confiance, l'autonomie et l'employabilité par la formation pratique.",
    "home.objectives.tools": "Outils Professionnels",
    "home.objectives.toolsDesc":
      "Équiper les professionnels pour organiser des sessions de vélo inclusives.",
    "home.partners.title": "Nos Partenaires",
    "home.partners.viewAll": "Voir tous les partenaires",
    "home.news.title": "Dernières Actualités",
    "home.news.viewAll": "Voir toutes les actualités",

    // About
    "about.title": "À propos de CYCLOS",
    "about.background.title": "Contexte du projet",
    "about.background.text":
      "CYCLOS est un projet de partenariat de coopération Erasmus+ (KA220-YOU) qui réunit des organisations de France, de Roumanie, d'Autriche et de Grèce. Son objectif est de promouvoir l'inclusion sociale des jeunes en situation de vulnérabilité grâce à la pratique du vélo.",
    "about.objectives.title": "Objectifs",
    "about.timeline.title": "Calendrier du Projet",
    "about.timeline.start": "Début du projet",
    "about.timeline.end": "Fin du projet",
    "about.timeline.duration": "30 mois",
    "about.target.title": "Public cible",
    "about.target.youth": "Jeunes en situation de vulnérabilité",
    "about.target.workers":
      "Animateurs jeunesse et professionnels de l'accompagnement",
    "about.target.stakeholders":
      "Collectivités locales et organisations de la société civile",
    "about.timeline.collaborative": "de travail collaboratif",
    "about.target.youthDesc":
      "Jeunes confrontés à des obstacles à l'emploi, notamment les jeunes en situation de handicap, issus de l'immigration ou de milieux socio-économiques défavorisés.",
    "about.target.workersDesc":
      "Professionnels organisant des activités et des actions en faveur de jeunes en situation de vulnérabilité.",
    "about.target.stakeholdersDesc":
      "Structures engagées dans l'inclusion des jeunes et la promotion de la mobilité durable.",
    "about.projectOverview.p1":
      "CYCLOS (Youth Cycling for Inclusion) est un projet de partenariat de coopération Erasmus+ (KA220-YOU) qui réunit quatre organisations issues de France, de Roumanie, d'Autriche et de Grèce. Le projet répond à un enjeu majeur : de nombreux jeunes en situation de vulnérabilité rencontrent des obstacles importants à l'emploi et à l'insertion sociale, la mobilité constituant l'un des freins principaux.",
    "about.projectOverview.p2":
      "En s'appuyant sur le vélo comme outil d'inclusion, CYCLOS vise à aider ces jeunes à surmonter les difficultés liées à la mobilité, à développer des compétences pratiques, à renforcer leur confiance en eux et à gagner en autonomie. Parallèlement, le projet encourage la sensibilisation aux enjeux environnementaux et la promotion de modes de transport durables.",
    "about.projectOverview.p3":
      "Le projet prévoit la création de ressources pédagogiques, l'organisation de sessions pratiques autour du vélo, le développement d'une plateforme numérique d'apprentissage ainsi que la mise en place de formations destinées aux professionnels de la jeunesse dans les pays partenaires.",
    "about.fundedBy": "Financé par l'Union européenne",
    "about.fundedByDesc":
      "CYCLOS est un projet de partenariat de coopération financé dans le cadre du programme Erasmus+ (KA220-YOU), pour un budget total de 250 000 €. Le projet est coordonné par la FLVS (France), en partenariat avec des organisations de Roumanie, d'Autriche et de Grèce.",
    "about.objective1":
      "Promouvoir l'inclusion sociale des jeunes en situation de vulnérabilité grâce à la pratique du vélo.",
    "about.objective2":
      "Sensibiliser aux enjeux environnementaux et encourager des choix de mobilité plus durables.",
    "about.objective3":
      "Aider les jeunes à gagner en autonomie et en indépendance dans leur vie quotidienne.",
    "about.objective4":
      "Renforcer les compétences, la confiance en soi et l'employabilité des jeunes.",
    "about.objective5":
      "Doter les professionnels de la jeunesse d'outils pour organiser des activités cyclistes inclusives.",
    "about.objective6":
      "Développer une plateforme numérique dédiée à l'apprentissage et à la sensibilisation.",

    // Partners
    "partners.title": "Organisations Partenaires",
    "partners.subtitle":
      "Quatre structures en Europe s'engagent ensemble pour l'inclusion des jeunes via le cyclisme.",
    "partners.country": "Pays",
    "partners.website": "Visiter le site",
    "partners.lead": "Partenaire principal",
    "partners.areasOfExpertise": "Domaines d'expertise",
    "partners.workingTogether": "Travailler ensemble à travers l'Europe",
    "partners.workingTogetherDesc":
      "Notre partenariat diversifié réunit des expertises en promotion de la santé, services sociaux, éducation et technologie pour créer un impact significatif pour les jeunes défavorisés.",

    // News
    "news.title": "Actualités",
    "news.subtitle": "Suivez l'avancée du projet CYCLOS en temps réel",
    "news.readMore": "Lire la suite",
    "news.noNews": "Aucun article disponible pour le moment.",

    // Resources
    "resources.title": "Ressources",
    "resources.subtitle":
      "Téléchargez les matériels du projet et ressources éducatives",
    "resources.download": "Télécharger",
    "resources.noResources":
      "Les ressources seront disponibles au fur et à mesure de l'avancement du projet.",
    "resources.comingSoon": "Bientôt disponible",

    // Contact
    "contact.title": "Nous contacter",
    "contact.subtitle": "Contactez l'équipe du projet CYCLOS.",
    "contact.lead.title": "Partenaire principal",
    "contact.partners.title": "Organisations partenaires",
    "contact.email": "Email",
    "contact.getInTouch": "Entrer en contact",
    "contact.generalInquiries": "Demandes générales",
    "contact.generalInquiriesDesc":
      "Pour toute question concernant le projet CYCLOS, veuillez contacter le partenaire principal.",
    "contact.mediaPress": "Médias & presse",
    "contact.mediaPressDesc":
      "Pour les demandes presse et médias, merci de contacter le coordinateur du projet.",
    "contact.partnershipOpportunities": "Opportunités de partenariat",
    "contact.partnershipOpportunitiesDesc":
      "Vous souhaitez collaborer avec nous ? Contactez-nous pour discuter de partenariats potentiels.",
    "contact.sendEmail": "Envoyer un e-mail",
    "contact.europeanNetwork": "Notre réseau européen",
    "contact.europeanNetworkDesc":
      "Quatre pays engagés ensemble pour l'inclusion des jeunes à travers le vélo.",

    // Countries
    "countries.france": "France",
    "countries.romania": "Roumanie",
    "countries.austria": "Autriche",
    "countries.greece": "Grèce",

    // Footer
    "footer.project": "Un projet Erasmus+ cofinancé par l'Union européenne",
    "footer.funding": "Cofinancé par l'Union européenne",
    "footer.description":
      "Le vélo, vecteur d'inclusion et de durabilité. Donner aux jeunes en situation de vulnérabilité les clés de leur autonomie par le cyclisme, la mobilité verte et l'engagement écologique.",
    "footer.disclaimer":
      "Ce projet est cofinancé par l'Union européenne dans le cadre du programme Erasmus+. Les points de vue et opinions exprimés dans ce cadre n'engagent que leurs auteurs et ne reflètent pas nécessairement la position officielle de l'Union européenne ou de l'Agence exécutive européenne pour l'éducation et la culture (EACEA). Ni l'Union européenne ni l'EACEA ne sauraient être tenues responsables des contenus présentés.",
    "footer.rights": "Tous droits réservés.",

    // Common
    "common.learnMore": "En savoir plus",
    "common.readMore": "Lire la suite",
    "common.backToHome": "Retour à l'accueil",
  },

  ro: {
    // Navigation
    "nav.home": "Acasă",
    "nav.about": "Despre",
    "nav.partners": "Parteneri",
    "nav.news": "Știri",
    "nav.resources": "Resurse",
    "nav.contact": "Contact",
    "nav.menu": "Meniu",
    "nav.close": "Închide meniul",
    "nav.skipToContent": "Sari la conținutul principal",

    // Homepage
    "home.hero.title": "Ciclismul pentru Incluziunea Tinerilor",
    "home.hero.subtitle":
      "Promovarea incluziunii sociale a tinerilor defavorizați prin ciclism, conștientizare ecologică și mobilitate durabilă.",
    "home.hero.cta": "Află mai multe",
    "home.objectives.title": "Obiectivele Noastre",
    "home.objectives.inclusion": "Incluziune Socială",
    "home.objectives.inclusionDesc":
      "Sprijinirea tinerilor defavorizați să se integreze în societate și pe piața muncii prin activități de ciclism.",
    "home.objectives.mobility": "Mobilitate Verde",
    "home.objectives.mobilityDesc":
      "Promovarea transportului durabil și a conștientizării ecologice în rândul tinerilor.",
    "home.objectives.skills": "Dezvoltarea Competențelor",
    "home.objectives.skillsDesc":
      "Construirea încrederii, autonomiei și angajabilității prin formare practică.",
    "home.objectives.tools": "Instrumente Profesionale",
    "home.objectives.toolsDesc":
      "Dotarea lucrătorilor de tineret cu resurse pentru a organiza sesiuni inclusive de ciclism.",
    "home.partners.title": "Partenerii Noștri",
    "home.partners.viewAll": "Vezi toți partenerii",
    "home.news.title": "Ultimele Știri",
    "home.news.viewAll": "Vezi toate știrile",

    // About
    "about.title": "Despre CYCLOS",
    "about.background.title": "Contextul Proiectului",
    "about.background.text":
      "CYCLOS este un proiect de parteneriat de cooperare ERASMUS+ KA220-YOU care reunește organizații din Franța, România, Austria și Grecia pentru a promova incluziunea socială a tinerilor defavorizați prin ciclism.",
    "about.objectives.title": "Obiective",
    "about.timeline.title": "Calendarul Proiectului",
    "about.timeline.start": "Începutul proiectului",
    "about.timeline.end": "Sfârșitul proiectului",
    "about.timeline.duration": "30 de luni",
    "about.target.title": "Grup Țintă",
    "about.target.youth":
      "Tineri defavorizați care se confruntă cu bariere în calea angajării",
    "about.target.workers": "Lucrători de tineret și profesioniști",
    "about.target.stakeholders": "Autorități locale și ONG-uri",
    "about.timeline.collaborative": "de muncă colaborativă",
    "about.target.youthDesc":
      "Tineri cu dizabilități, de origine imigrantă sau din situații socio-economice dificile",
    "about.target.workersDesc":
      "Profesioniști care organizează activități pentru tinerii defavorizați",
    "about.target.stakeholdersDesc":
      "Organizații care lucrează pentru incluziunea tinerilor și mobilitatea durabilă",
    "about.projectOverview.p1":
      "CYCLOS (Youth Cycling for Inclusion) este un parteneriat de cooperare ERASMUS+ KA220-YOU care reunește patru organizații din Franța, România, Austria și Grecia. Proiectul abordează o provocare critică: mulți tineri defavorizați se confruntă cu bariere în calea angajării și integrării sociale, mobilitatea fiind un obstacol semnificativ.",
    "about.projectOverview.p2":
      "Concentrându-se pe ciclism ca instrument de incluziune, CYCLOS își propune să ajute acești tineri să depășească barierele de mobilitate, să dezvolte abilități practice, să-și construiască încrederea și să devină mai autonomi. În același timp, proiectul promovează conștientizarea ecologică și practicile de transport durabil.",
    "about.projectOverview.p3":
      "Proiectul va dezvolta materiale educaționale, va organiza sesiuni practice de ciclism, va crea o platformă digitală de învățare și va asigura formarea lucrătorilor de tineret din țările partenere.",
    "about.fundedBy": "Finanțat de Uniunea Europeană",
    "about.fundedByDesc":
      "CYCLOS este un parteneriat de cooperare finanțat în cadrul Programului ERASMUS+ (KA220-YOU) cu un buget total de 250.000 de euro. Proiectul este coordonat de FLVS (Franța) în parteneriat cu organizații din România, Austria și Grecia.",
    "about.objective1":
      "Promovarea incluziunii sociale a tinerilor defavorizați prin ciclism",
    "about.objective2":
      "Creșterea conștientizării ecologice și încurajarea alegerilor de mobilitate mai ecologice",
    "about.objective3":
      "Ajutarea tinerilor să devină mai autonomi și independenți în viața de zi cu zi",
    "about.objective4":
      "Dezvoltarea abilităților, a încrederii în sine și a angajabilității",
    "about.objective5":
      "Dotarea lucrătorilor de tineret cu instrumente pentru organizarea sesiunilor inclusive de ciclism",
    "about.objective6":
      "Dezvoltarea unei platforme digitale pentru învățare și conștientizare",

    // Partners
    "partners.title": "Organizații Partenere",
    "partners.subtitle":
      "Patru organizații din Europa care lucrează împreună pentru incluziunea tinerilor",
    "partners.country": "Țara",
    "partners.website": "Vizitează site-ul",
    "partners.lead": "Partener principal",
    "partners.areasOfExpertise": "Domenii de expertiza",
    "partners.workingTogether": "Lucram impreuna in toata Europa",
    "partners.workingTogetherDesc":
      "Parteneriatul nostru divers reuneste expertiza in promovarea sanatatii, servicii sociale, educatie si tehnologie pentru a crea un impact semnificativ pentru tinerii defavorizati.",

    // News
    "news.title": "Știri și Actualizări",
    "news.subtitle": "Rămâi informat despre ultimele evoluții ale proiectului",
    "news.readMore": "Citește mai mult",
    "news.noNews": "Nu există încă articole de știri disponibile.",

    // Resources
    "resources.title": "Resurse",
    "resources.subtitle":
      "Descarcă materialele proiectului și resursele educaționale",
    "resources.download": "Descarcă",
    "resources.noResources":
      "Resursele vor fi disponibile pe măsură ce proiectul avansează.",
    "resources.comingSoon": "În curând",

    // Contact
    "contact.title": "Contactează-ne",
    "contact.subtitle": "Ia legătura cu echipa proiectului CYCLOS",
    "contact.lead.title": "Partener Principal",
    "contact.partners.title": "Organizații Partenere",
    "contact.email": "Email",
    "contact.getInTouch": "Contactează-ne",
    "contact.generalInquiries": "Întrebări generale",
    "contact.generalInquiriesDesc":
      "Pentru întrebări despre proiectul CYCLOS, vă rugăm să contactați partenerul principal.",
    "contact.mediaPress": "Media și presă",
    "contact.mediaPressDesc":
      "Pentru solicitări media și de presă, vă rugăm să contactați coordonatorul proiectului.",
    "contact.partnershipOpportunities": "Oportunități de parteneriat",
    "contact.partnershipOpportunitiesDesc":
      "Interesat de colaborare? Contactați-ne pentru a discuta despre parteneriate potențiale.",
    "contact.sendEmail": "Trimite e-mail",
    "contact.europeanNetwork": "Rețeaua noastră europeană",
    "contact.europeanNetworkDesc":
      "Patru țări care lucrează împreună pentru incluziunea tinerilor prin ciclism",

    // Countries
    "countries.france": "Franța",
    "countries.romania": "România",
    "countries.austria": "Austria",
    "countries.greece": "Grecia",

    // Footer
    "footer.project": "Un proiect ERASMUS+",
    "footer.funding": "Cofinanțat de Uniunea Europeană",
    "footer.description":
      "Promovarea incluziunii sociale a tinerilor defavorizați prin ciclism, conștientizare ecologică și mobilitate durabilă.",
    "footer.disclaimer":
      "Finanțat de Uniunea Europeană. Punctele de vedere și opiniile exprimate aparțin exclusiv autorului (autorilor) și nu reflectă neapărat punctele de vedere ale Uniunii Europene sau ale Agenției Executive Europene pentru Educație și Cultură (EACEA). Nici Uniunea Europeană, nici EACEA nu pot fi considerate responsabile pentru acestea.",
    "footer.rights": "Toate drepturile rezervate.",

    // Common
    "common.learnMore": "Află mai multe",
    "common.readMore": "Citește mai mult",
    "common.backToHome": "Înapoi acasă",
  },

  de: {
    // Navigation
    "nav.home": "Startseite",
    "nav.about": "Über uns",
    "nav.partners": "Partner",
    "nav.news": "Aktuelles",
    "nav.resources": "Ressourcen",
    "nav.contact": "Kontakt",
    "nav.menu": "Menü",
    "nav.close": "Menü schließen",
    "nav.skipToContent": "Zum Hauptinhalt springen",

    // Homepage
    "home.hero.title": "Radfahren für die Inklusion von Jugendlichen",
    "home.hero.subtitle":
      "Förderung der sozialen Inklusion benachteiligter junger Menschen durch Radfahren, Umweltbewusstsein und nachhaltige Mobilität.",
    "home.hero.cta": "Mehr erfahren",
    "home.objectives.title": "Unsere Ziele",
    "home.objectives.inclusion": "Soziale Inklusion",
    "home.objectives.inclusionDesc":
      "Unterstützung benachteiligter Jugendlicher bei der Integration in Gesellschaft und Arbeitsmarkt durch Radfahraktivitäten.",
    "home.objectives.mobility": "Grüne Mobilität",
    "home.objectives.mobilityDesc":
      "Förderung nachhaltiger Verkehrsmittel und Umweltbewusstsein bei jungen Menschen.",
    "home.objectives.skills": "Kompetenzentwicklung",
    "home.objectives.skillsDesc":
      "Aufbau von Selbstvertrauen, Autonomie und Beschäftigungsfähigkeit durch praktisches Training.",
    "home.objectives.tools": "Professionelle Werkzeuge",
    "home.objectives.toolsDesc":
      "Ausstattung von Jugendarbeitern mit Ressourcen zur Organisation inklusiver Radfahrveranstaltungen.",
    "home.partners.title": "Unsere Partner",
    "home.partners.viewAll": "Alle Partner ansehen",
    "home.news.title": "Aktuelle Nachrichten",
    "home.news.viewAll": "Alle Nachrichten ansehen",

    // About
    "about.title": "Über CYCLOS",
    "about.background.title": "Projekthintergrund",
    "about.background.text":
      "CYCLOS ist ein ERASMUS+ KA220-YOU Kooperationspartnerschaftsprojekt, das Organisationen aus Frankreich, Rumänien, Österreich und Griechenland zusammenbringt, um die soziale Inklusion benachteiligter junger Menschen durch Radfahren zu fördern.",
    "about.objectives.title": "Ziele",
    "about.timeline.title": "Projektzeitplan",
    "about.timeline.start": "Projektstart",
    "about.timeline.end": "Projektende",
    "about.timeline.duration": "30 Monate",
    "about.target.title": "Zielgruppe",
    "about.target.youth":
      "Benachteiligte Jugendliche mit Beschäftigungshindernissen",
    "about.target.workers": "Jugendarbeiter und Fachkräfte",
    "about.target.stakeholders": "Kommunalverwaltungen und NGOs",
    "about.timeline.collaborative": "der Zusammenarbeit",
    "about.target.youthDesc":
      "Junge Menschen mit Behinderungen, Migrationshintergrund oder aus sozioökonomisch schwachen Verhältnissen",
    "about.target.workersDesc":
      "Fachkräfte, die Aktivitäten für benachteiligte Jugendliche organisieren",
    "about.target.stakeholdersDesc":
      "Organisationen, die sich für Jugendinklusion und nachhaltige Mobilität einsetzen",
    "about.projectOverview.p1":
      "CYCLOS (Youth Cycling for Inclusion) ist eine ERASMUS+ KA220-YOU Kooperationspartnerschaft, die vier Organisationen aus Frankreich, Rumänien, Österreich und Griechenland zusammenbringt. Das Projekt befasst sich mit einer kritischen Herausforderung: Viele benachteiligte junge Menschen stehen vor Hindernissen bei der Beschäftigung und sozialen Integration, wobei Mobilität ein erhebliches Hindernis darstellt.",
    "about.projectOverview.p2":
      "Mit dem Fokus auf Radfahren als Instrument zur Inklusion zielt CYCLOS darauf ab, diesen jungen Menschen zu helfen, Mobilitätsbarrieren zu überwinden, praktische Fähigkeiten zu entwickeln, Selbstvertrauen aufzubauen und autonomer zu werden. Gleichzeitig fördert das Projekt Umweltbewusstsein und nachhaltige Verkehrspraktiken.",
    "about.projectOverview.p3":
      "Das Projekt wird Bildungsmaterialien entwickeln, praktische Radfahrsitzungen organisieren, eine digitale Lernplattform schaffen und Schulungen für Jugendarbeiter in den Partnerländern anbieten.",
    "about.fundedBy": "Gefördert von der Europäischen Union",
    "about.fundedByDesc":
      "CYCLOS ist eine Kooperationspartnerschaft, die im Rahmen des ERASMUS+ Programms (KA220-YOU) mit einem Gesamtbudget von 250.000 Euro gefördert wird. Das Projekt wird von FLVS (Frankreich) in Partnerschaft mit Organisationen aus Rumänien, Österreich und Griechenland koordiniert.",
    "about.objective1":
      "Förderung der sozialen Inklusion benachteiligter junger Menschen durch Radfahren",
    "about.objective2":
      "Stärkung des Umweltbewusstseins und Förderung umweltfreundlicherer Mobilitätsentscheidungen",
    "about.objective3":
      "Jugendlichen helfen, im Alltag autonomer und unabhängiger zu werden",
    "about.objective4":
      "Stärkung von Kompetenzen, Selbstvertrauen und Beschäftigungsfähigkeit",
    "about.objective5":
      "Jugendarbeiter mit Werkzeugen ausstatten, um inklusive Radfahrsitzungen zu organisieren",
    "about.objective6":
      "Entwicklung einer digitalen Plattform für Lernen und Bewusstseinsbildung",

    // Partners
    "partners.title": "Partnerorganisationen",
    "partners.subtitle":
      "Vier Organisationen aus ganz Europa arbeiten gemeinsam für die Inklusion von Jugendlichen",
    "partners.country": "Land",
    "partners.website": "Website besuchen",
    "partners.lead": "Hauptpartner",
    "partners.areasOfExpertise": "Fachgebiete",
    "partners.workingTogether": "Gemeinsam in ganz Europa",
    "partners.workingTogetherDesc":
      "Unsere vielfältige Partnerschaft vereint Expertise in Gesundheitsförderung, sozialen Diensten, Bildung und Technologie, um einen bedeutsamen Beitrag für benachteiligte Jugendliche zu leisten.",

    // News
    "news.title": "Neuigkeiten",
    "news.subtitle":
      "Bleiben Sie über die neuesten Projektentwicklungen informiert",
    "news.readMore": "Weiterlesen",
    "news.noNews": "Noch keine Nachrichtenartikel verfügbar.",

    // Resources
    "resources.title": "Ressourcen",
    "resources.subtitle":
      "Projektmaterialien und Bildungsressourcen herunterladen",
    "resources.download": "Herunterladen",
    "resources.noResources":
      "Ressourcen werden verfügbar sein, wenn das Projekt voranschreitet.",
    "resources.comingSoon": "Demnächst",

    // Contact
    "contact.title": "Kontakt",
    "contact.subtitle": "Nehmen Sie Kontakt mit dem CYCLOS-Projektteam auf",
    "contact.lead.title": "Hauptpartner",
    "contact.partners.title": "Partnerorganisationen",
    "contact.email": "E-Mail",
    "contact.getInTouch": "Kontaktieren Sie uns",
    "contact.generalInquiries": "Allgemeine Anfragen",
    "contact.generalInquiriesDesc":
      "Bei Fragen zum CYCLOS-Projekt wenden Sie sich bitte an den Hauptpartner.",
    "contact.mediaPress": "Medien & Presse",
    "contact.mediaPressDesc":
      "Für Medienanfragen und Presseanfragen wenden Sie sich bitte an den Projektkoordinator.",
    "contact.partnershipOpportunities": "Partnerschaftsmöglichkeiten",
    "contact.partnershipOpportunitiesDesc":
      "Interesse an einer Zusammenarbeit? Kontaktieren Sie uns, um mögliche Partnerschaften zu besprechen.",
    "contact.sendEmail": "E-Mail senden",
    "contact.europeanNetwork": "Unser europäisches Netzwerk",
    "contact.europeanNetworkDesc":
      "Vier Länder arbeiten gemeinsam für die Inklusion von Jugendlichen durch Radfahren",

    // Countries
    "countries.france": "Frankreich",
    "countries.romania": "Rumänien",
    "countries.austria": "Österreich",
    "countries.greece": "Griechenland",

    // Footer
    "footer.project": "Ein ERASMUS+ Projekt",
    "footer.funding": "Kofinanziert von der Europäischen Union",
    "footer.description":
      "Förderung der sozialen Inklusion benachteiligter junger Menschen durch Radfahren, Umweltbewusstsein und nachhaltige Mobilität.",
    "footer.disclaimer":
      "Von der Europäischen Union finanziert. Die geäußerten Ansichten und Meinungen entsprechen jedoch ausschließlich denen des Autors bzw. der Autoren und spiegeln nicht zwingend die der Europäischen Union oder der Europäischen Exekutivagentur für Bildung und Kultur (EACEA) wider. Weder die Europäische Union noch die EACEA können dafür verantwortlich gemacht werden.",
    "footer.rights": "Alle Rechte vorbehalten.",

    // Common
    "common.learnMore": "Mehr erfahren",
    "common.readMore": "Weiterlesen",
    "common.backToHome": "Zurück zur Startseite",
  },

  el: {
    // Navigation
    "nav.home": "Αρχική",
    "nav.about": "Σχετικά",
    "nav.partners": "Εταίροι",
    "nav.news": "Νέα",
    "nav.resources": "Πόροι",
    "nav.contact": "Επικοινωνία",
    "nav.menu": "Μενού",
    "nav.close": "Κλείσιμο μενού",
    "nav.skipToContent": "Μετάβαση στο κύριο περιεχόμενο",

    // Homepage
    "home.hero.title": "Ποδηλασία για την Ένταξη των Νέων",
    "home.hero.subtitle":
      "Προώθηση της κοινωνικής ένταξης μειονεκτούντων νέων μέσω της ποδηλασίας, της περιβαλλοντικής ευαισθητοποίησης και της βιώσιμης κινητικότητας.",
    "home.hero.cta": "Μάθετε Περισσότερα",
    "home.objectives.title": "Οι Στόχοι Μας",
    "home.objectives.inclusion": "Κοινωνική Ένταξη",
    "home.objectives.inclusionDesc":
      "Υποστήριξη μειονεκτούντων νέων για ένταξη στην κοινωνία και την αγορά εργασίας μέσω δραστηριοτήτων ποδηλασίας.",
    "home.objectives.mobility": "Πράσινη Κινητικότητα",
    "home.objectives.mobilityDesc":
      "Προώθηση βιώσιμων μεταφορών και περιβαλλοντικής ευαισθητοποίησης στους νέους.",
    "home.objectives.skills": "Ανάπτυξη Δεξιοτήτων",
    "home.objectives.skillsDesc":
      "Οικοδόμηση αυτοπεποίθησης, αυτονομίας και απασχολησιμότητας μέσω πρακτικής εκπαίδευσης.",
    "home.objectives.tools": "Επαγγελματικά Εργαλεία",
    "home.objectives.toolsDesc":
      "Εφοδιασμός εργαζομένων νεολαίας με πόρους για την οργάνωση συμπεριληπτικών συνεδριών ποδηλασίας.",
    "home.partners.title": "Οι Εταίροι Μας",
    "home.partners.viewAll": "Δείτε Όλους τους Εταίρους",
    "home.news.title": "Τελευταία Νέα",
    "home.news.viewAll": "Δείτε Όλα τα Νέα",

    // About
    "about.title": "Σχετικά με το CYCLOS",
    "about.background.title": "Ιστορικό του Έργου",
    "about.background.text":
      "Το CYCLOS είναι ένα έργο Συμπράξεων Συνεργασίας ERASMUS+ KA220-YOU που συγκεντρώνει οργανισμούς από τη Γαλλία, τη Ρουμανία, την Αυστρία και την Ελλάδα για την προώθηση της κοινωνικής ένταξης μειονεκτούντων νέων μέσω της ποδηλασίας.",
    "about.objectives.title": "Στόχοι",
    "about.timeline.title": "Χρονοδιάγραμμα Έργου",
    "about.timeline.start": "Έναρξη έργου",
    "about.timeline.end": "Λήξη έργου",
    "about.timeline.duration": "30 μήνες",
    "about.target.title": "Ομάδα Στόχος",
    "about.target.youth":
      "Μειονεκτούντες νέοι που αντιμετωπίζουν εμπόδια στην απασχόληση",
    "about.target.workers": "Εργαζόμενοι νεολαίας και επαγγελματίες",
    "about.target.stakeholders": "Τοπικές κυβερνήσεις και ΜΚΟ",
    "about.timeline.collaborative": "συνεργατικής εργασίας",
    "about.target.youthDesc":
      "Νέοι με αναπηρίες, μεταναστευτικό υπόβαθρο ή από χαμηλές κοινωνικοοικονομικές καταστάσεις",
    "about.target.workersDesc":
      "Επαγγελματίες που οργανώνουν δραστηριότητες για μειονεκτούντες νέους",
    "about.target.stakeholdersDesc":
      "Οργανισμοί που εργάζονται για την ένταξη των νέων και τη βιώσιμη κινητικότητα",
    "about.projectOverview.p1":
      "Το CYCLOS (Youth Cycling for Inclusion) είναι μια Σύμπραξη Συνεργασίας ERASMUS+ KA220-YOU που συγκεντρώνει τέσσερις οργανισμούς από τη Γαλλία, τη Ρουμανία, την Αυστρία και την Ελλάδα. Το έργο αντιμετωπίζει μια κρίσιμη πρόκληση: πολλοί μειονεκτούντες νέοι αντιμετωπίζουν εμπόδια στην απασχόληση και την κοινωνική ένταξη, με την κινητικότητα να αποτελεί σημαντικό εμπόδιο.",
    "about.projectOverview.p2":
      "Εστιάζοντας στην ποδηλασία ως εργαλείο ένταξης, το CYCLOS στοχεύει να βοηθήσει αυτούς τους νέους να ξεπεράσουν τα εμπόδια κινητικότητας, να αναπτύξουν πρακτικές δεξιότητες, να χτίσουν αυτοπεποίθηση και να γίνουν πιο αυτόνομοι. Ταυτόχρονα, το έργο προωθεί την περιβαλλοντική ευαισθητοποίηση και τις βιώσιμες πρακτικές μεταφοράς.",
    "about.projectOverview.p3":
      "Το έργο θα αναπτύξει εκπαιδευτικό υλικό, θα οργανώσει πρακτικές συνεδρίες ποδηλασίας, θα δημιουργήσει μια ψηφιακή πλατφόρμα μάθησης και θα παρέχει εκπαίδευση για εργαζόμενους νεολαίας στις χώρες-εταίρους.",
    "about.fundedBy": "Χρηματοδοτείται από την Ευρωπαϊκή Ένωση",
    "about.fundedByDesc":
      "Το CYCLOS είναι μια Σύμπραξη Συνεργασίας που χρηματοδοτείται στο πλαίσιο του Προγράμματος ERASMUS+ (KA220-YOU) με συνολικό προϋπολογισμό 250.000 ευρώ. Το έργο συντονίζεται από την FLVS (Γαλλία) σε συνεργασία με οργανισμούς από τη Ρουμανία, την Αυστρία και την Ελλάδα.",
    "about.objective1":
      "Προώθηση της κοινωνικής ένταξης μειονεκτούντων νέων μέσω της ποδηλασίας",
    "about.objective2":
      "Αύξηση της περιβαλλοντικής ευαισθητοποίησης και ενθάρρυνση πιο πράσινων επιλογών κινητικότητας",
    "about.objective3":
      "Βοήθεια στους νέους να γίνουν πιο αυτόνομοι και ανεξάρτητοι στην καθημερινή τους ζωή",
    "about.objective4":
      "Ενίσχυση δεξιοτήτων, αυτοπεποίθησης και απασχολησιμότητας",
    "about.objective5":
      "Εξοπλισμός εργαζομένων νεολαίας με εργαλεία για την οργάνωση συμπεριληπτικών συνεδριών ποδηλασίας",
    "about.objective6":
      "Ανάπτυξη ψηφιακής πλατφόρμας για μάθηση και ευαισθητοποίηση",

    // Partners
    "partners.title": "Οργανισμοί Εταίροι",
    "partners.subtitle":
      "Τέσσερις οργανισμοί σε όλη την Ευρώπη συνεργάζονται για την ένταξη των νέων",
    "partners.country": "Χώρα",
    "partners.website": "Επισκεφθείτε την Ιστοσελίδα",
    "partners.lead": "Κύριος Εταίρος",
    "partners.areasOfExpertise": "Τομείς Εξειδίκευσης",
    "partners.workingTogether": "Συνεργασία σε Ολόκληρη την Ευρώπη",
    "partners.workingTogetherDesc":
      "Η ποικιλόμορφη συνεργασία μας συγκεντρώνει εμπειρογνωμοσύνη στην προώθηση της υγείας, τις κοινωνικές υπηρεσίες, την εκπαίδευση και την τεχνολογία για να δημιουργήσει σημαντικό αντίκτυπο για τους μειονεκτούντες νέους.",

    // News
    "news.title": "Νέα και Ενημερώσεις",
    "news.subtitle":
      "Μείνετε ενημερωμένοι για τις τελευταίες εξελίξεις του έργου",
    "news.readMore": "Διαβάστε Περισσότερα",
    "news.noNews": "Δεν υπάρχουν ακόμη διαθέσιμα άρθρα νέων.",

    // Resources
    "resources.title": "Πόροι",
    "resources.subtitle": "Κατεβάστε υλικά του έργου και εκπαιδευτικούς πόρους",
    "resources.download": "Λήψη",
    "resources.noResources":
      "Οι πόροι θα είναι διαθέσιμοι καθώς το έργο προχωρά.",
    "resources.comingSoon": "Σύντομα Διαθέσιμο",

    // Contact
    "contact.title": "Επικοινωνήστε Μαζί Μας",
    "contact.subtitle": "Επικοινωνήστε με την ομάδα του έργου CYCLOS",
    "contact.lead.title": "Κύριος Εταίρος",
    "contact.partners.title": "Οργανισμοί Εταίροι",
    "contact.email": "Email",
    "contact.getInTouch": "Επικοινωνήστε μαζί μας",
    "contact.generalInquiries": "Γενικές ερωτήσεις",
    "contact.generalInquiriesDesc":
      "Για ερωτήσεις σχετικά με το έργο CYCLOS, επικοινωνήστε με τον κύριο εταίρο.",
    "contact.mediaPress": "Μέσα ενημέρωσης και τύπος",
    "contact.mediaPressDesc":
      "Για αιτήματα μέσων ενημέρωσης και τύπου, επικοινωνήστε με τον συντονιστή του έργου.",
    "contact.partnershipOpportunities": "Ευκαιρίες συνεργασίας",
    "contact.partnershipOpportunitiesDesc":
      "Ενδιαφέρεστε για συνεργασία; Επικοινωνήστε μαζί μας για να συζητήσουμε πιθανές συνεργασίες.",
    "contact.sendEmail": "Αποστολή email",
    "contact.europeanNetwork": "Το ευρωπαϊκό μας δίκτυο",
    "contact.europeanNetworkDesc":
      "Τέσσερις χώρες συνεργάζονται για την ένταξη των νέων μέσω της ποδηλασίας",

    // Countries
    "countries.france": "Γαλλία",
    "countries.romania": "Ρουμανία",
    "countries.austria": "Αυστρία",
    "countries.greece": "Ελλάδα",

    // Footer
    "footer.project": "Ένα Έργο ERASMUS+",
    "footer.funding": "Συγχρηματοδοτείται από την Ευρωπαϊκή Ένωση",
    "footer.description":
      "Προώθηση της κοινωνικής ένταξης μειονεκτούντων νέων μέσω της ποδηλασίας, της περιβαλλοντικής ευαισθητοποίησης και της βιώσιμης κινητικότητας.",
    "footer.disclaimer":
      "Χρηματοδοτείται από την Ευρωπαϊκή Ένωση. Οι απόψεις και οι γνώμες που εκφράζονται είναι αποκλειστικά του/των συγγραφέα/ων και δεν αντικατοπτρίζουν απαραίτητα τις απόψεις της Ευρωπαϊκής Ένωσης ή του Ευρωπαϊκού Εκτελεστικού Οργανισμού Εκπαίδευσης και Πολιτισμού (EACEA). Ούτε η Ευρωπαϊκή Ένωση ούτε ο EACEA μπορούν να θεωρηθούν υπεύθυνοι για αυτές.",
    "footer.rights": "Με επιφύλαξη παντός δικαιώματος.",

    // Common
    "common.learnMore": "Μάθετε Περισσότερα",
    "common.readMore": "Διαβάστε Περισσότερα",
    "common.backToHome": "Επιστροφή στην Αρχική",
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

export function useTranslations(lang: Language) {
  return function t(key: TranslationKey): string {
    return translations[lang][key] || translations.en[key] || key;
  };
}

export function getLanguageFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split("/");
  if (lang in languages) {
    return lang as Language;
  }
  return defaultLang;
}

export const config = {
  name: 'Narovana Mahery Rakotoson',
  title: 'Ingénieur Agronome',
  typingTexts: [
    'Production Animale · Agritech',
    'Nutrition & Performances',
    'Modélisation & Aide à la décision',
    'Durabilité & Bien-être Animal',
  ],
  about: [
    "Tourné vers l'agritech, je maîtrise les outils de modélisation et d'aide à la décision. Je transforme les données de terrain en leviers stratégiques pour une gestion intelligente et optimisée des exploitations animales.",
    "Mon approche allie rigueur scientifique, efficacité technique et valorisation des ressources locales — pour des élevages plus performants, durables et respectueux du bien-être animal.",
  ],
  langs: ['🇲🇬 Malgache', '🇫🇷 Français', '🇬🇧 Anglais'],
  cv: './Rakotoson_narovana_mahery.pdf',
  photo: './pic/Picture.jpeg',
  logo: './pic/logo2.png',
};

export const stats = [
  { value: 5, suffix: '+', label: 'Années de formation' },
  { value: 4, suffix: '',  label: 'Expériences terrain' },
  { value: 2, suffix: '',  label: 'Certifications' },
  { value: 3, suffix: '',  label: 'Langues maîtrisées' },
];

export const slides = [
  {
    bg: './pic/visuel.png',
    label: 'Production Animale',
    title: '« Maîtriser la complexité<br>du vivant, du sol au cheptel. »',
    cta: { text: 'Découvrir', href: '#about' },
  },
  {
    bg: './pic/visuel1.jpg',
    label: 'Nutrition & Performances',
    title: "« Maximiser l'efficacité<br>alimentaire et l'indice<br>de consommation. »",
    cta: { text: 'Mes expertises', href: '#expertise' },
  },
  {
    bg: './pic/visuel2.png',
    label: 'Agritech & Modélisation',
    title: "« Transformer la donnée<br>d'élevage en décisions<br>rentables. »",
    cta: { text: 'Découvrir les outils', href: '#expertise' },
  },
  {
    bg: './pic/visuel3.avif',
    label: 'Génétique & Environnement',
    title: "« Optimiser l'environnement<br>pour révéler le potentiel<br>génétique. »",
    cta: { text: 'Me contacter', href: '#contact' },
  },
];

export const expertises = [
  {
    icon: './pic/icon/ico-opt.png',
    title: 'Conception & Optimisation',
    desc: "Conception de systèmes d'élevage adaptés aux réalités locales. Optimisation des flux de production, conditions d'hébergement et gestion du cheptel.",
  },
  {
    icon: './pic/icon/ico-eco.png',
    title: 'Analyse Technico-Économique',
    desc: 'Évaluation des performances zootechniques et économiques. Calcul des indices de consommation, marges brutes et indicateurs de rentabilité.',
  },
  {
    icon: './pic/icon/ico-durabilité.png',
    title: 'Durabilité & Bien-être Animal',
    desc: "Intégration des pratiques durables. Respect des normes de bien-être animal et réduction de l'empreinte environnementale des exploitations.",
  },
  {
    icon: './pic/icon/ico-ingénierie.png',
    title: 'Modélisation & Agritech',
    desc: "Maîtrise des outils numériques de modélisation et d'aide à la décision. Données terrain transformées en leviers stratégiques opérationnels.",
  },
  {
    emoji: '🌱',
    title: 'Autosuffisance Alimentaire',
    desc: "Conception de projets pour l'autosuffisance alimentaire. Formation et encadrement des paysans aux techniques de production optimisées.",
  },
  {
    emoji: '🔒',
    title: 'Outils Numériques',
    desc: 'Maîtrise des outils informatiques agricoles. Certifié en cybersécurité pour une gestion sécurisée des données d\'exploitation.',
  },
];

export const projects = [
    {
    year: '2026',
    client: 'Orycto',
    title: 'Développement d\'application de gestion d\'elevage Cunicole',
    role: 'Developpeur et Technicien Réalisateur',
    tags: ['Gestion d\'elevage', 'Développement', 'Cuniculture'],
    desc: "Conception et mise en œuvre d'une application de gestion d'élevage cunicole. Développement de fonctionnalités pour le suivi de la production, la gestion du cheptel et l'optimisation des performances.",
    outcomes: [
      'En cours de développement',
      'Optimisation des processus de suivi de production',
      'Transfert de compétences aux utilisateurs',
    ],
  },
  {
    year: '2025',
    client: 'Stage Master 1 - Umagis',
    title: 'Projet Autosuffisance Alimentaire',
    role: 'Technicien Réalisateur',
    tags: ['Production végétale', 'Formation', 'Encadrement'],
    desc: "Conception et mise en œuvre de projets d'autosuffisance alimentaire en milieu rural. Formation et encadrement de paysans aux techniques de production optimisées.",
    outcomes: [
      'Optimisation des flux de production',
      'Coordination inter-équipes',
      'Transfert de compétences aux paysans',
    ],
  },
    {
    year: '2023',
    client: 'Ferme Caille',
    title: 'Projet de Fin d’Études - Licence Professionnelle',
    role: 'Suivi et Contrôle de la Production',
    tags: ['Qualité', 'Production', 'Caracteristiques'],
    desc: "Caracteristiques des morceaux à la découpe de la Caille Japonnaise.",
    outcomes: [
      'Contrôle qualité de production',
      'Abattage et découpe de la Caille Japonnaise',
      'Rédaction de rapports de mémoire de fin d’études',
    ],
  },
  {
    year: '2022',
    client: 'Aikko Impex Agriculture — Antsirabe',
    title: 'Contrôle Qualité & Production',
    role: 'Opérateur de Production',
    tags: ['Qualité', 'Production', 'Coordination'],
    desc: "Intégration dans les lignes de production agricole industrielle. Mise en place de procédures de contrôle qualité et coordination inter-services.",
    outcomes: [
      'Contrôle qualité des lignes de production',
      'Coordination inter-services',
      'Rédaction de rapports de production',
    ],
  },
  {
    year: '2021',
    client: 'Tambohobe Katsaoka',
    title: 'Immersion Terrain Élevage',
    role: 'Ouvrier Agricole',
    tags: ['Élevage', 'Terrain', 'Zootechnie'],
    desc: "Première immersion pratique en milieu d'élevage professionnel. Apprentissage des gestes techniques et observation des pratiques zootechniques de terrain.",
    outcomes: [
      'Pratiques zootechniques fondamentales',
      'Gestion quotidienne du cheptel',
      'Observation et diagnostic terrain',
    ],
  },
];

export const skills = {
  technical: [
    { label: 'Production Animale',       level: 90 },
    { label: 'Nutrition & Alimentation', level: 85 },
    { label: 'Analyse Technico-Éco.',    level: 82 },
    { label: 'Modélisation & Agritech',  level: 78 },
    { label: 'Bien-être & Durabilité',   level: 80 },
    { label: 'Génétique Animale',        level: 75 },
  ],
  tools: [
    { label: 'Microsoft Office',        level: 92 },
    { label: 'Outils de modélisation',  level: 75 },
    { label: 'Cybersécurité',           level: 72 },
    { label: 'R / Statistiques',        level: 68 },
  ],
};

export const certifications = [
  {
    icon: '🎓',
    type: 'Formation',
    title: 'Sciences Agronomiques',
    org: 'Umagis / EPSA Bevalala',
    year: '2021 — 2025',
    badge: 'En cours',
  },
  {
    icon: '🔒',
    type: 'Certification',
    title: 'Cybersécurité',
    org: 'Centre de Formation Technologique',
    year: 'Avr. — Juin 2024',
    badge: 'Niv. Avancé',
  },
  {
    icon: '📜',
    type: 'Diplôme',
    title: 'Baccalauréat Série D',
    org: 'Lycée Saint Michel Itaosy',
    year: '2020',
    badge: null,
  },
];

export const contacts = [
  {
    href: 'https://wa.me/261382298810',
    icon: './pic/icon/icons8-whatsapp-50.png',
    label: 'WhatsApp',
    value: '+261 38 22 988 10',
    external: true,
  },
  {
    href: 'mailto:narovanam@gmail.com',
    icon: './pic/icon/icons8-enveloppe-cerclée-50.png',
    label: 'Email',
    value: 'narovanam@gmail.com',
    external: false,
  },
  {
    href: 'https://www.facebook.com/narovanam.rakotoson',
    icon: './pic/icon/icons8-facebook-nouveau-50.png',
    label: 'Facebook',
    value: 'Narovana',
    external: true,
  },
  {
    href: 'https://www.instagram.com/mahery__n',
    icon: './pic/icon/icons8-instagram-50.png',
    label: 'Instagram',
    value: '@mahery__n',
    external: true,
  },
  {
    href: 'https://www.snapchat.com/add/narovanaaa',
    icon: './pic/icon/icons8-snapchat-logo-encerclé-50.png',
    label: 'Snapchat',
    value: 'narovanaaa',
    external: true,
  },
];

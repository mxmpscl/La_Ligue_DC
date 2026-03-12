export const events = [
  {
    id: 'lyon',
    city: 'Lyon',
    month: '26 septembre',
    date: '26 septembre',
    theme: 'Mode Streetwear',
    title: 'STREETWEAR & CRÉATION',
    promise: 'Cet événement sera consacré à la mode streetwear et à la création urbaine.',
    bullets: [
      'Défilé streetwear avec marques locales et jeunes créateurs',
      'Pop-up shop pour découvrir et acheter les collections',
      'Ateliers de customisation de sneakers avec des partenaires (ex : Foot Locker)',
      'Espace photo pour créer du contenu pour les réseaux sociaux',
      'Interviews de créateurs et de talents locaux'
    ],
    image: '/Event Mode.png',
    description: 'Lyon possède une scène créative dynamique avec de nombreux créateurs, écoles de mode et marques émergentes. L’événement prendra la forme d’un défilé streetwear permettant aux marques locales, créateurs et étudiants de présenter leurs collections et de vendre leurs produits directement au public.',
    contest: {
      buttonText: 'Participer en tant que mannequin',
      description: 'Tente d\'être sélectionné pour défiler.',
      available: true
    },
    program: [
      { time: '14:00', title: 'Ouverture des pop-up shops & Ateliers customisation' },
      { time: '16:30', title: 'Interviews de créateurs & talents locaux' },
      { time: '19:00', title: 'Défilé streetwear' },
      { time: '21:00', title: 'Afterparty & Création de contenu' }
    ],
    infos: {
      lieu: 'La Sucrière, Lyon',
      horaires: '14h00 - 01h00',
      age: 'Tout public (Afterparty 18+)',
      acces: 'Tram T1 - Arrêt Montrochet'
    },
    faq: [
      { q: 'Comment participer au défilé ?', a: 'Inscris-toi via notre jeu concours pour tenter d\'être sélectionné comme mannequin !' },
      { q: 'Peut-on acheter sur place ?', a: 'Oui, les pop-up shops permettent d\'acheter directement les collections des créateurs.' }
    ]
  },
  {
    id: 'st-etienne',
    city: 'Saint-Étienne',
    month: '20 février',
    date: '20 février',
    theme: 'Danse / Breakdance',
    title: 'BATTLE & PERFORMANCES',
    promise: 'Cet événement sera dédié à la danse urbaine et au breakdance.',
    bullets: [
      'Battles et démonstrations de breakdance',
      'Performances de danseurs invités',
      'Scène ouverte pour les artistes locaux',
      'DJ set pour accompagner les performances'
    ],
    image: '/Event Brake Dance.png',
    description: 'Saint-Étienne possède une forte culture alternative liée à son passé industriel et à sa scène artistique. L’événement mettra en avant les danseurs et collectifs locaux à travers différentes performances et démonstrations.',
    contest: {
      buttonText: 'Bientôt disponible',
      description: 'Gagne tes places pour l\'événement.',
      available: false
    },
    program: [
      { time: '13:00', title: 'Scène ouverte & Inscriptions' },
      { time: '15:00', title: 'Démonstrations & Performances invités' },
      { time: '17:00', title: 'Battles de breakdance' },
      { time: '20:30', title: 'DJ set & Block Party' }
    ],
    infos: {
      lieu: 'Le Fil, Saint-Étienne',
      horaires: '13h00 - 00h00',
      age: 'Tout public',
      acces: 'Bus M7 - Arrêt Le Fil'
    },
    faq: [
      { q: 'Comment participer à la scène ouverte ?', a: 'Les inscriptions se feront sur place en début d\'après-midi.' },
      { q: 'Y a-t-il de quoi manger sur place ?', a: 'Oui, plusieurs food trucks seront présents sur le parvis.' }
    ]
  },
  {
    id: 'clermont',
    city: 'Clermont-Ferrand',
    month: '3 juillet',
    date: '3 juillet',
    theme: 'Skate / Trottinette Freestyle',
    title: 'CONCRETE JUNGLE',
    promise: 'Cet événement sera consacré aux sports urbains, notamment le skate et la trottinette freestyle.',
    bullets: [
      'Démonstrations de skate et trottinette freestyle par des riders locaux',
      'Sessions libres pour permettre aux participants de montrer leurs figures',
      'Interviews de riders pour raconter leur parcours',
      'Micro-trottoirs avec le public'
    ],
    image: '/Event Skate.png',
    description: 'Ces disciplines font partie intégrante de la street culture et attirent un public jeune et passionné. Clermont-Ferrand possède plusieurs espaces dédiés aux sports urbains et une communauté active de riders.',
    contest: {
      buttonText: 'Bientôt disponible',
      description: 'Gagne tes places pour l\'événement.',
      available: false
    },
    program: [
      { time: '10:00', title: 'Sessions libres & Échauffements' },
      { time: '14:00', title: 'Démonstrations de riders locaux' },
      { time: '16:30', title: 'Interviews & Micro-trottoirs' },
      { time: '19:00', title: 'Finalisation de la frise artistique & Soirée' }
    ],
    infos: {
      lieu: 'Skatepark Epicentre, Clermont-Ferrand',
      horaires: '10h00 - 23h00',
      age: 'Tout public',
      acces: 'Tram A - Arrêt Les Pistes'
    },
    faq: [
      { q: 'Le port du casque est-il obligatoire ?', a: 'Oui, pour les mineurs participant aux sessions libres.' },
      { q: 'L\'événement est-il maintenu en cas de pluie ?', a: 'Le skatepark est couvert, l\'événement aura lieu par tous les temps.' }
    ]
  }
];

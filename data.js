/*
  Données partagées du Product Builder Show.
  Un seul fichier de vérité : les 4 propositions de page le chargent toutes,
  donc une correction ici (nom, défi, FAQ) se répercute partout.
*/

/*
  Chaque défi porte aussi sa "fiche complète" (ouverte en modal pleine page).
  Les champs marqués [à compléter] sont à remplir défi par défi.
*/
const FICHE_VIDE = {
  contexte: "[à compléter : d'où vient ce besoin, ce qui existe déjà, pourquoi maintenant]",
  utilisateurs: "[à compléter : qui va utiliser l'outil au quotidien, dans quelles situations]",
  fonctionnalites: "[à compléter : les 3 à 5 fonctionnalités attendues dans la version hackathon]",
  criteres: "[à compléter : ce que le jury regardera pour juger le défi réussi]",
  bonus: "[à compléter : les idées qui feraient la différence si l'équipe a le temps]"
};

const DEFIS = [
  {
    emoji: "🎲",
    titre: "Escape Game Onboarding",
    probleme: "Le premier jour chez WeFiiT est souvent une avalanche d'infos difficile à retenir.",
    build: "Un escape game digital où le nouvel arrivant résout des énigmes basées sur la culture, les outils et les valeurs WeFiiT pour « déverrouiller » son accès à l'équipe.",
    fiche: Object.assign({}, FICHE_VIDE)
  },
  {
    emoji: "🏆",
    titre: "Vitrine des Réalisations",
    probleme: "Les beaux livrables produits en mission restent invisibles en interne, donc peu valorisés lors des évaluations ou des pitchs commerciaux.",
    build: "Une galerie interactive où chacun poste un livrable marquant (anonymisé si besoin), taguée par compétence et secteur, consultable par tous.",
    fiche: Object.assign({}, FICHE_VIDE)
  },
  {
    emoji: "🖼️",
    titre: "Brief du consultant",
    probleme: "Le brief est la vitrine du consultant. Aujourd'hui les briefs sont jugés trop longs, avec un design vieilli et sans mise en avant des compétences IA.",
    build: "Une plateforme pour créer ses briefs avec assistance à la rédaction et mise en avant de son impact et de ses compétences IA. Design épuré, à l'image de WeFiiT, où le client comprend le profil du consultant dès la première page.",
    fiche: Object.assign({}, FICHE_VIDE)
  },
  {
    emoji: "🧰",
    titre: "Toolkit agentique du consultant",
    probleme: "Chacun bricole ses propres agents dans son coin. Résultat : aucune harmonisation, et surtout aucun agent signature WeFiiT qui porte notre positionnement métier.",
    build: "Assemblez la suite d'agents du consultant WeFiiT : définition d'OKR, cadrage de discovery, rédaction de user stories, automatisation de tests. Des agents partagés, reconnaissables, qui témoignent de notre expertise.",
    fiche: Object.assign({}, FICHE_VIDE)
  },
  {
    emoji: "🎤",
    titre: "Entraînement Soutenance",
    probleme: "La soutenance reste un moment de stress pour les WeFiiTers, à chaque fois. Un seul remède : la préparation.",
    build: "Un coach IA qui simule la soutenance avant le vrai jury. Il écoute votre pitch, joue le client sceptique, envoie les questions pièges et vous débriefe sur le fond, la posture et le storytelling. Le stress de l'oral, en mode répétable et sans témoin gênant.",
    fiche: Object.assign({}, FICHE_VIDE)
  },
  {
    emoji: "🤝",
    titre: "Matching mentoring",
    probleme: "120 WeFiiTers, une masse d'expertises et de skills mais difficilement activables.",
    build: "Une app qui matche mentorés et mentors selon compétences, appétences et objectifs de carrière. À votre équipe de décider ce qui fait un bon match, et de le faire deviner à l'IA.",
    fiche: Object.assign({}, FICHE_VIDE)
  }
];

/* Le capitaine est au même niveau que l'équipage : il apparaît en premier
   dans la liste, signalé seulement par un petit emoji. */
const EQUIPES = [
  { cap: "Lucie BIONDI", membres: ["Louis DODEIGNE", "Rohat GEZER", "Jeremy HADDAD", "Yamila DARY"] },
  { cap: "Hugo DE LA RUELLE", membres: ["François JACQUEMIN", "Nicolas DENIEUL", "Helena N'GOLLO", "Louis DALLEAU"] },
  { cap: "William FABRIS", membres: ["Noemie GIRAUDEAU", "Océane LEFEVRE", "Anne VELENOVSKY", "Hermine DU VIGNAUX"] },
  { cap: "Pauline PELLETIER", membres: ["Amandine ROY", "Alexandre NGUYEN", "Maria NADIFI", "Antoine PIATKOWSKI"] },
  { cap: "Chloé DURAND", membres: ["Khadija KARRAY", "Benjamin GOUESLARD", "Jade SYCHAREUN", "Mathieu LE FAUCHEUR"] },
  { cap: "Chris SARKIS", membres: ["Pierre LABLACHE-COMBIER", "Alexandre CARNEADO", "Tharagan SRIKANTHASAMY", "Pablo NEMEJANSKI"] },
  { cap: "Ronan BEBIN", membres: ["Baptiste LECACHEUR", "Antoine LE HIR", "Joséphine PILLET", "Victor GODY"] },
  { cap: "Felix NAVARRE", membres: ["Malha CHEBLAL", "Anne-Lise PRICAZ", "Julia MATHURIN", "Mathilde PERRIN"] },
  { cap: "Rodolphe LE BLEVENEC", membres: ["Olivier LEVY", "Inès LACARRIERE", "Léane GOURCY"] },
  { cap: "Thomas VOISIN", membres: ["Antoine BRIQUET", "Matthis HUET", "Léa CRINON"] },
  { cap: "Nils VERVAET", membres: ["Leontine BERTHOME", "Hugues DUPROZ", "Alina KSENDZENKO", "Soline BIANQUIS"] },
  { cap: "Mathias VIVIER", membres: ["Rayan RAHMANI-MERAITS", "Enzo GRANO", "Thomas BIGOT", "Chloé MARTIN"] },
  { cap: "Erwan SAVOYEN", membres: ["Cédric LOZAC'H", "Grégoire DELÉVACQUE", "Soukaina SBAI"] },
  { cap: "Sarah THIEBAUT", membres: ["Christopher WOODS", "Mélanie HENG", "Gaëlle BRICAUD-NG SUI WA", "Amaury SERVIN"] },
  { cap: "Pauline AGACHE", membres: ["Marwan ZIDANE", "Alice GAILLARD", "Hamza BITER", "Iris HEDOUIN"] },
  { cap: "Delphine RINGUENET", membres: ["Pierre CHAMOREAU", "Marthe ORTOLO", "Morgane KRAU", "François Xavier CAPELLE"] },
  { cap: "Emma COLOMBAT", membres: ["Alexis ROBERT", "Alice MAUZ", "Camille LOPEZ", "Paul VALTON"] },
  { cap: "Alice GUERIN", membres: ["Adrien SUBITTE", "Agathe LECOCQ", "Martin BOUZID", "Pauline FAUVEL"] },
  { cap: "Alice REVEREND", membres: ["Pauline ROBIAL", "Axel ALIZIER", "Camille CLAUDE", "Thomas LAUDET"] },
  { cap: "Alain PERRONE", membres: ["Mailis BONHOMMÉ", "Gabriel DIAS COSTA", "Adel BENDJEBBAR"] },
  { cap: "Baptiste CLENET", membres: ["Victor NIORE", "Syrine BOURICHA", "Nathan THOMAS"] },
  { cap: "Adrien-Ismaël HENRIQUES", membres: ["Laura CABANILLAS NAVARRO", "Axelle TORTAI", "Pauline MASSON"] },
  { cap: "Corentin BARCZYK", membres: ["Marius ROUSSEL", "Anne-Claire GAILLARD", "Elise PEREZ Y LANDAZURI"] }
];

const RAISONS = [
  { emoji: "🚀", titre: "Montez en compétence sur l'IA", texte: "Apprenez en faisant : créez par vous-mêmes de vrais outils internes. Le learning by doing, grandeur nature." },
  { emoji: "🛠️", titre: "Créez des outils utiles à WeFiiT", texte: "Des livrables réutilisables, à réelle valeur ajoutée pour les tribes de l'entreprise." },
  { emoji: "🤝", titre: "Vivez un moment collectif", texte: "Émulation, cohésion et partage entre WeFiiTers autour de l'apprentissage de l'IA." }
];

const OUTILS = [
  { nom: "Claude", texte: "Votre copilote IA : générez, codez, brainstormez, itérez." },
  { nom: "GitHub", texte: "Hébergez et versionnez votre code, collaborez à plusieurs." },
  { nom: "Supabase", texte: "Base de données et backend prêts à l'emploi pour donner vie à votre app." }
];

const FAQS = [
  { q: "Combien de temps dure le hackathon ?", a: "2 heures chrono. [à compléter]" },
  { q: "Faut-il savoir coder ?", a: "[à compléter]" },
  { q: "Comment se déroule la restitution ?", a: "[à compléter]" },
  { q: "Quels sont les critères du jury ?", a: "[à compléter]" }
];

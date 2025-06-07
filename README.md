# PrograPassion

Site d'affiliation dédié à l'éducation en programmation, construit avec Next.js 14, Tailwind CSS, DaisyUI et GSAP.

## Structure du Projet

```
prograPassion/
├── public/                    # Fichiers statiques
│   └── images/               # Images du site
│       ├── formations/       # Images des formations
│       └── selections/       # Images des sélections
├── src/
│   ├── app/                  # Routes de l'application (Next.js App Router)
│   │   ├── (auth)/          # Routes authentifiées
│   │   │   ├── dashboard/   # Tableau de bord
│   │   │   └── profile/     # Profil utilisateur
│   │   ├── formation/       # Page des formations
│   │   ├── selections/      # Page des sélections
│   │   ├── layout.tsx       # Layout principal
│   │   └── page.tsx         # Page d'accueil
│   ├── components/          # Composants React
│   │   ├── ui/             # Composants UI réutilisables
│   │   │   ├── Header.tsx  # En-tête du site
│   │   │   ├── Footer.tsx  # Pied de page
│   │   │   └── SelectionCard.tsx # Carte de sélection
│   │   └── shared/         # Composants partagés
│   ├── types/              # Types TypeScript
│   │   └── index.ts        # Types globaux
│   ├── utils/              # Utilitaires
│   │   └── dataLoader.ts   # Chargement des données
│   ├── data/               # Données JSON
│   │   ├── formations.json # Données des formations
│   │   └── selections.json # Données des sélections
│   ├── constants/          # Constantes
│   ├── hooks/              # Hooks React personnalisés
│   ├── lib/                # Bibliothèques et configurations
│   └── styles/             # Styles globaux
├── next.config.js          # Configuration Next.js
├── tailwind.config.ts      # Configuration Tailwind
├── postcss.config.js       # Configuration PostCSS
└── package.json            # Dépendances et scripts
```

## Routes et Navigation

- `/` : Page d'accueil
- `/formations` : Liste des formations disponibles
- `/selections` : Sélections de formations thématiques
- `/dashboard` : Tableau de bord (authentifié)
- `/profile` : Profil utilisateur (authentifié)

## Composants Principaux

### Layout (`src/app/layout.tsx`)
- Layout principal de l'application
- Inclut le Header et le Footer
- Gère les métadonnées globales

### Header (`src/components/ui/Header.tsx`)
- Navigation principale
- Menu mobile responsive
- Gestion de l'authentification

### SelectionCard (`src/components/ui/SelectionCard.tsx`)
- Affiche une sélection de formations
- Modal animé avec GSAP
- Gestion des états et des interactions

## Gestion des Données

Les données sont stockées dans des fichiers JSON :
- `src/data/formations.json` : Liste des formations
- `src/data/selections.json` : Sélections thématiques

Chargement via `src/utils/dataLoader.ts` :
```typescript
import { getFormations } from '@/utils/dataLoader';
import { getSelections } from '@/utils/dataLoader';
```

## Installation

1. Cloner le repository :
```bash
git clone [URL_DU_REPO]
cd prograPassion
```

2. Installer les dépendances :
```bash
npm install
```

3. Créer les dossiers d'images :
```bash
mkdir -p public/images/{formations,selections}
```

4. Démarrer le serveur de développement :
```bash
npm run dev
```

Le site sera accessible sur http://localhost:3000

## Technologies Utilisées

- **Next.js 14** : Framework React avec App Router
- **Tailwind CSS** : Framework CSS utilitaire
- **DaisyUI** : Composants UI pour Tailwind
- **GSAP** : Animations avancées
- **TypeScript** : Typage statique

## Optimisations

- Images optimisées avec Next.js Image
- CSS optimisé avec Critters
- Code splitting automatique
- Préchargement des routes
- Cache intelligent

## Développement

Pour le développement :
1. Créer une branche : `git checkout -b feature/nouvelle-fonctionnalite`
2. Commiter les changements : `git commit -am 'Description des changements'`
3. Pousser la branche : `git push origin feature/nouvelle-fonctionnalite`

## Production

Pour construire pour la production :
```bash
npm run build
npm start
```

## Fonctionnalités

- **Page d'accueil** : Présentation de la plateforme
- **Sélections** : Ressources et formations sélectionnées
- **Formation** : Catalogue des formations disponibles
- **Dashboard** : Espace personnel pour suivre sa progression

## SEO

Le site est optimisé pour le SEO avec :
- Métadonnées dynamiques pour chaque page
- Structure HTML sémantique
- Balises Open Graph pour le partage social
- URLs propres et descriptives

## Licence

Tous droits réservés © PrograPassion 
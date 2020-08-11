# Coding Test - Breather

## Français

### Set-up et execution

1. Vérifier que Node est installé (version 12 ou supérieure)
2. Cloner ce repository `clone git@github.com:CJourneaux/coding-test-breather.git`
3. Naviguer à la racine du repository `cd coding-test-breather`
4. Exécuter `npm install` (ou `yarn install`, selon préférences personnelles)
5. Exécuter `npm start`

L'application est accessible à l'adresse http://localhost:3000.

### Dépendances

Cette application utilise les packages suivants. Chaque package a été choisi pour sa capacité à accélérer le développement, tout en restant le plus léger possible, afin de ne pas cacher la logique utilisée.

Ces packages ont eux-mêmes peu de dépendances et sont très légers, permettant de ne pas surcharger l'application sans raison.

- `react`, `react-dom`, `react-scripts`, les packages React standards
- `@chakra-ui/core`, `@emotion/core`, `@emotion/styled`, `emotion-theming` fournissent une librairie de components basiques permettant de facilement mettre en place et customiser une interface acceptable
- `downshift` permet de facilement créer des components avec auto-complétion avec accessibilité incluse
- `react-fetch-hook` facilite l'utilisation de la méthode `fetch` dans des component React
- `dayjs` and son plugin `relativeTime` formate les dates afin de les rendre plus lisibles

### Réflexions

- Il n'y a aucun test dans cette application. Il serait préférable de prendre le temps d'en ajouter quelques uns, surtout pour le component `Pagination`.
- Il est possible d'utiliser l'application uniquement avec le clavier, et elle est également accessible et labellisée pour des utilisateurs malvoyants.
- J'aurai aimé ajouter la possibilité pour un utilisateur de changer la langue entre le français et l'anglais. Je n'ai pas pris le temps de le faire, puisque Hacker News ne semble pas proposer beaucoup de contenu en français de toute façon, mais cette fonctionnalité aurait pu être appréciée.
- L'interface n'est pas idéale. Il est possible de cliquer sur un auteur, ou sur les commentaires pour aller les lire directement sur Hacker News plutôt que d'aller lire l'article directement, mais le component `StoryCard` entier est mis en valeur en même temps que chacun de ces liens. Cette double mise en valeur pourrait dérouter les utilisateurs.

## English

### Set-up and running

1. Verify you have Node installed (version 12 and up)
2. Run `npm install` (or `yarn install`, depending on your preference)
3. Run `npm start`

The application will be visible at http://localhost:3000.

### Dependencies

This application depend on the following packages. Each one of those was chosen because it helps writing code faster, but is light-weight enough that the logic behind using them is not hidden away.

They have few dependencies themselves, and are very light, allowing to not bloat the application unnecessarily.

- `react`, `react-dom`, `react-scripts`, the standards React packages
- `@chakra-ui/core`, `@emotion/core`, `@emotion/styled`, `emotion-theming` provide a basic library of components to easily build a nice customisable UI
- `downshift` helps creating accessible typeahead and autocomplete components
- `react-fetch-hook` facilitates handling the logic around using fetch in React components
- `dayjs` and its plugin `relativeTime` formats dates to be more human readable

### Reflexions

- There are no tests in this application. It would be nice to have some, especially for the Pagination component.
- The application is fully navigable by keyboard, and is accessible for visually-impaired users.
- It would have been nice to propose a toggle to switch between French and English. I did not do it, as there seem to be little articles in French on Hacker News, but nonetheless, it would be a nice feature to have.
- The UI is not ideal. It is possible to click on an author, or the comments to view the discussion around the story in Hacker News, but the whole card gets highlighted, which could cause confusion for users.

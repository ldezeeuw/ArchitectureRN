
## Utils

Ce dossier contient tous les utilitaires, ce dossier sera exporté dans le package @uptoo/react-mobile

| améliorations | Importance/10 |
|--|--|
| Enlever les modules inutilisés | 6 |
| Faire une section dev/debug | 4 |
| Faire une section style | 4 |
| Faire une section helpers | 4 |
| Ajouter Reactotron a la section dev/debug | 4 |
| Pour le module style faire une meilleur utilisation des variables pour pouvoir paramétrer le thème l'application ou simplement changer les couleurs (primary\|secondary\|...) | 8 |

### Tree

      utils/
      ├── debug
      │   ├── a.js
      │   ├── b.js
      │   └── index.js      // Fichier d'export des modules a et b
      ├── helpers
      │   ├── a.js
      │   ├── b.js
      │   └── index.js      // Fichier d'export des modules a et b
      ├── index.js          // Fichier d'export des modules enfants (debug|helpers|style)
      └── style
          ├── a.js
          ├── b.js
          └── index.js      // Fichier d'export des modules a et b
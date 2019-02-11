## Utils

Ce dossier contient tous les utilitaires, ce dossier sera exporté dans le package @uptoo/react-mobile

| améliorations |
|--|
| Enlever les modules inutilisés |
| Faire s'adapter la taille des fonts en fonction de la taille de l'écran |
| Faire une section dev/debug |
| Faire une section style |
| Faire une section helpers |
| Ajouter Reactotron a la section dev/debug |
| Pour le module style faire une meilleur utilisation des variables pour pouvoir paramétrer le thème l'application ou simplement changer les couleurs (primary\|secondary\|...) |

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
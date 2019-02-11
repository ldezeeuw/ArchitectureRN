## Les différents éléments de configuration

- ### Fichier index qui exporte tous les éléments variable de configuration
      const API_DOMAIN = 'https://...

      export {
          API_DOMAIN,
          ...
      }

| améliorations |
|--|
| Paramétrer les variables en fonctions d'une variable d'environnement |
---
- ### Dossier Store
*fichiers :*
  - configureStore.js
  - configureStore.dev.js
  - configureStore.prod.js
 
*Aucune améliorations à faire excepter renommer les fichiers*

---
- ### Routes/Scenes

Le modèle de conception des routes est bon il faudrais le garder mais plus le compartimenter pour aérer les fichiers de configuration des routes :

| améliorations | Importance/10 |
|--|--|
| Faire un **Composant route** qui rend possible le paramétrage des **hooks** par props : <br/>`<Route deviceOrientation={true} SafeViewAera={true} {...} />` |
|<br/> Faire un **Composant** pour wrapper la **structure** de route **initial** (routes logged-in et route accessible a tous) <br/> `<SceneStructure initialScenes={logged-in\|accessible} loggedScenes={...} accessibleScenes={...} />`|
| <br/>Faire un HOC/fonction qui prend en paramètre l'accès premier a l'application ex :<br/>`scenes(this.isLogged)`<br/>cette fonction servira à initialiser le composant de structure des routes  |
|<br/>Faire des Composants/Wrapper pour les routes container et les nested. Ces composants servirait à faire un comportement par default des routes parents et des routes enfants et à avoir toujours la meme manière d'animer les parents et enfants respectivement |
|<br/>Faire un fichier d'import |
---
### Tree
    ── Configuration
       ├── index.js
       ├── scenes
       │   ├── accesible.js 
       │   ├── index.js 
       │   └── restricted.js 
       └── store
           ├── dev.js
           ├── index.js
           └── prod.js
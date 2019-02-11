

## Src

### Containers
> Un container est le composant le plus haut dans la hiérarchie

#### *Guidelines*

- Si connecter à redux réduire le nombre de props reçu par le container au maximum
- Utiliser des helpers, externaliser des fonctions pour réduire la taille du fichier ex :
    - Pour les fonctions lié a une entité (Socket|FirebaseCloudMessagin)
    - Pour les initial state trop volumineux (Api.init avec bcp de params, ...)
    - Pour tout ce qui réduit la taille des containers de manière générale
- Garder au maximum la logique metier et les requêtes dans les container.
- Une méthode render de max 80 ligne

### Components
> Un composant ne contiens pas nécessairement de logique mais a un but unique et précis

Si je suis sur une page de détail je peux voir plusieurs éléments distincts

- **Le post**
    - ***Le header*** contenant les information de l'utilisateur (photo, nom, prénom)
    - ***Le contenu***, principalement du text
    - ***le footer***
- **Les commentaires**
    - ***Le container***
    - ***Les items*** (commentaires)

Ce qui ce traduit par :

**Component container**

    render = () => ({
        <Post />            // Wrapper pour (<Header/>|<Content/>|<Footer/>)
        <Commentaires />    // Liste
    })

**Post**

    render = () => ({
        <View>
            <Header />                      // Composant sans logique
            <Content />                     // Composant sans logique
            <Footer onLike={this.onLike} /> // Composant qui wrap un composant de like
        </View>
    })
**Comments**

    render = () => ({
        <List renderItem={comment => <Comment comment={item}>} />
    })

### Composition d'un composant
> Déterminer quels composants on leur skeleton attribué

    ── componentName
       ├── index.js         // Main file
       ├── skeletton.js     // Skeleton loader
       └── style.js         // Style du component

### Composition d'un container
    ├── componentName   // Composant lié a la feature qui n'est
    │   ├── index.js    //  utilisé qu'a l'interieur de ce container
    │   └── style.js
    ├── helpers         // Helpers du container destiné a réduire la taille du fichier
    │   ├── a.js
    │   ├── b.js
    │   └── index.js
    ├── index.js        // Fichier principal
    └── style.js
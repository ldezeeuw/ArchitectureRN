## Scripts

### Liste des scripts et leur utilitée
---
### `npm run clean`

Cette commande sert a remettre la packager en état quand il "crash"
Cette commande coupe tous les serveur de dev et clear leur cache

`watchman watch-del-all && rm -rf /tmp/metro-bundler-cache-* && npm run clear-cache && killall -9 node`

Cette commande peut ne pas suffire dans 1 certains cas, quand le packager a crash et qu'il ne met pas à jour les sources (il re-sert toujours une ancienne version du projet)

***Attention ne faire cette commande que si vous êtes sur d'être dans ce cas de figure***

`npm cache clean --force`

---

### `npm run clear-cache`
>*Script utilisé par le script `npm run clean`*

Clear le cache de gulp
`gulp clear-cache`

---
### `npm run fixRNRF`
Ce script sert à changer le nom des imports dans le package `react-navigation` pour matcher les import de `react-native-router-flux`

Ce fix est du au fait de l'early-stage des packets utilisés, il ne sera probablement plus nécéssaire après une mise a jour des modules

---
### `npm run postinstall`
Ce script sert a fixer les images pour android après une installation des modules

---
### Tout les scripts

    "clean": "watchman watch-del-all && rm -rf /tmp/metro-bundler-cache-* && npm run clear-cache && killall -9 node",
    "start": "REACT_NATIVE_A=X&&react-native start --port 3000 ",
    "ios-bundle": "react-native bundle --dev false --entry-file index.ios.js --platform ios --bundle-output ios/main.jsbundle",
    "ios-dev-bundle": "react-native bundle --entry-file index.ios.js --platform ios --bundle-output ios/main.jsbundle",
    "android-bundle": "react-native bundle --dev false --entry-file index.android.js --platform android --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest andro android/app/src/main/res/",
    "android-dev-bundle": "react-native bundle --entry-file index.android.js --platform android --bundle-output android/app/src/main/assets/index.android.bundle",
    "clear-cache": "gulp clear-cache",
    "fixRNRF": "sed -i '' 's/ TabRouter/ tabRouter/g' ./node_modules/react-native-router-flux/node_modules/react-navigation/src/navigators/DrawerNavigator.js && sed -i '' 's/ StackRouter/ stackRouter/g' ./node_modules/react-native-router-flux/node_modules/react-navigation/src/navigators/StackNavigator.js && sed -i '' 's/ TabRouter/ tabRouter/g' ./node_modules/react-native-router-flux/node_modules/react-navigation/src/navigators/TabNavigator.js",
    "postinstall": "node ./ReactNativeGradleFix/android-release-gradle-fix.js",
    "remove-library": "rm -r node_modules/@uptoo/",
    "install-library": "npm i @uptoo/react-mobile@latest --save",
    "refresh": "npm run remove-library && npm run install-library"

# Certificats et configuration pour les  Notifications Push

##### **La durée de vie d'un certificat est de 11mois environs!**

### Configuration sur la console developer Apple 
> Go to -> https://developer.apple.com/

- **S'identifier** (marketing@uptoo.com)
- Sur le panel de gauche sous "Identifiers" **cliquer sur App Id's**
- **Sélectionner** ou Créer un **ID**
- Si c'est un édit il faut scroller pour pouvoir **cliquer sur le bouton "EDIT"**
- Cliquez sur créer un certificats (à coté des notifications push)
- Ensuite il faut créer un certificat a l'aide de l'application **"keychain Access"**
- Une fois cette application ouverte il faut cliquer sur le menu **"Trousseaux d'access"**
-- **Assistant de certification**
-- **Demander un certificat à d'une autorité de certificat**
- L'assistant de création d'un certificat va s'ouvrir
-- Remplir **l'adresse mail**
-- Sélectionner l'option **sauvegarder sur le disque**
- Une fois le fichier créé il faut maintenant **l'uploader**
- Puis il faut **télécharger** le fichier et l'exécuter (Un certificat devrais apparaitre dans keychain)
- Dans keychain, click droit sur le nouveau certificat (Ne pas expand!)
- Exporter (le format du fichier devrais être .p12)

il faut maintenant passer par firebase pour finir la configuration, gardez le fichier .p12 généré.

### Configuration de la console firebase

> Go to -> https://console.firebase.google.com/u/1/
-
- **S'identifier** (marketing@uptoo.com)
- **Sélectionner l'application** ou en créer une nouvelle
- Accéder au **paramètres** (Le rouage quand on sélectionne une application)
- Sélectionner l'onglet (Tabs) **"cloud messaging"**
- Puis importez le fichier .p12 correspondant dans l'environnement souhaité

***Pour avoir la configuration en dev et prod il faut réitérer les actions de cette pour l'environnement souhaité***

# Issues


### Si les nodes_modules sont supprimés :
- Réinstaller les modules puis effectuer un "***react-native link***"

Cette commande ne marche pas pour certains modules (Janvier 2019). Le module de socket react-native-udp causera une impossibilité de re-build l'appplication dans ce cas il faut :

    react-native unlink react-native-udp

puis

    npm run fixRNRF && npm run postinstall
    
Le premier fix des erreur de typographie uppercase lowercase et le second corrigera les version des modules gradle.

### Si le packager plante
"***90% du temps  cette érreur est du au fait d'installer des modules pendant que le packager tourne***"

Si le packager a eu un probleme dans un premier temps il faut couper le projet puis run
    
    npm run clean
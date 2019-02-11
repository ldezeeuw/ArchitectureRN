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
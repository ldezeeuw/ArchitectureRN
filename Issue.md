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

Si le packager a eu un probleme :
    
    npm run clean
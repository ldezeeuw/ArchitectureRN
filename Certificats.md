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


    Création du router with redux

    class Root extends Component {
        constructor(props) {
            initialisation de la config
        }

        componentWillMount() {
            get le token dans le storage
            si il y a un token on vérifie qu'il est toujours valide

            on instencie les routes de l'application avec la scene
            de départ en fonction du token et de sa validitée
        }
        
        componentDidMount() {
            on instancie les notifications
            si on est logé on update le deviceId et le deviceOS '/me/devices'
            sinon on le stock en attendant le login
            pareil pour le on token refresh
            
            on get la notif initiale si il y en a une
            (quand on clique sur une notif et que l'app est kill)
            
            si il y en a une on set dans le storage son id
            pour ne pas la retraité par la suite
            (la notif ne s'éfface passi l'app n'est pas kill)
            
            on register l'event des notif
            si la notif n'est pas locale et qu'elle a été ouverte depuis la tray
            alors on peut la traité

            pour android si l'app est active et que la plateforme
            est android on affiche une notif locale
            
            pour ios on apelle le callback finish lié a la notif

            Et pour finir on hide le splash screen
        }

        componentWillReceiveProps(nextProps) {
            si le drawer est ouvert sur la nextScene on le close
            pour éviter qu'il reste ouvert lors de la navigation
            
            on regarde si l'utilisateur se connecte et si il le fait
            alors on get l'utilisateur
            on set l'utilisateur ans bugsnag
            on set l'utilisateur dans les reducer
        }

        componentWillUnmount() {
            On supprime les listener des notif
        }

        render() {
        }
    }

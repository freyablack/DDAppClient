let APIURL = '';

switch(window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3000';
        break;
        case 'fab-character-app-client.herokuapp.com':
            APIURL = 'fab-character-app-server.herokuapp.com'
}

export default APIURL;
import firebase from 'firebase'
import {
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    MESSAGE_SENDER_ID,
    APP_ID
} from 'react-native-dotenv'

const firebaseConfig = {
    apiKey: 'AIzaSyDy8QtqAlhquRrVM3nccFGWNH2k8O-aIEQ',
    authDomain: 'petsocial-app.firebaseapp.com',
    databaseURL: 'https://petsocial-app.firebaseio.com"',
    projectId: 'petsocial-app',
    storageBucket: 'petsocial-app.appspot.com',
    messagingSenderId: '498119946438',
    appId: '1:498119946438:web:82c4e0795e772f87b2a7c7'
}

// Initialize Firebase
let Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase

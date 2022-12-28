import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCbhAdjE-6wAx4u5ReVfjbfi0v4zQfrC6E",
    authDomain: "clone-88122.firebaseapp.com",
    projectId: "clone-88122",
    storageBucket: "clone-88122.appspot.com",
    messagingSenderId: "401214475296",
    appId: "1:401214475296:web:8e7bf3feae61e5f9b28045",
    measurementId: "G-GNF7H2PGHC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBQGS-dlQrpF0VIPKVyoHrRTwDZI9SAFrQ",
    authDomain: "todo-app-cp-2e12c.firebaseapp.com",
    databaseURL: "https://todo-app-cp-2e12c.firebaseio.com",
    projectId: "todo-app-cp-2e12c",
    storageBucket: "todo-app-cp-2e12c.appspot.com",
    messagingSenderId: "428032190300",
    appId: "1:428032190300:web:f77f18c53525bebe34c399",
    measurementId: "G-VQVS1N6513"
});

const db = firebaseApp.firestore();

export default db;
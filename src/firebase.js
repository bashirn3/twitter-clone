import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDOFO4XL-rWHKr6C-y_eixFNR7bnTwvyGQ",
    authDomain: "twitter-clone-84dcf.firebaseapp.com",
    databaseURL: "https://twitter-clone-84dcf.firebaseio.com",
    projectId: "twitter-clone-84dcf",
    storageBucket: "twitter-clone-84dcf.appspot.com",
    messagingSenderId: "625357131296",
    appId: "1:625357131296:web:700773851dcf6b80f93645",
    measurementId: "G-J61WD55TZD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
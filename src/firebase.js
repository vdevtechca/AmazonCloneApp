// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBD89K5YfcnzjY_eLkqU3j5EhiFXlsTh60",
    authDomain: "app-4a1bc.firebaseapp.com",
    projectId: "app-4a1bc",
    storageBucket: "app-4a1bc.appspot.com",
    messagingSenderId: "1029714181102",
    appId: "1:1029714181102:web:aaa4deec74b8eebdb5acff",
    measurementId: "G-4XMY9WFPR8"
});


  const auth = firebase.auth();

  export { auth };
import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyB55dCTrdPdZ539bhKR7QVkPqQsnptHYKg",
    authDomain: "e-ride-4-1c265.firebaseapp.com",
    projectId: "e-ride-4-1c265",
    storageBucket: "e-ride-4-1c265.appspot.com",
    messagingSenderId: "303649356039",
    appId: "1:303649356039:web:84416ca87e3369d43aada2"
  };

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

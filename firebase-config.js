// firebase-config.js - पूरे प्रोजेक्ट के लिए कॉमन फ़ायरबेस कनेक्शन
const firebaseConfig = {
  apiKey: "AIzaSyAj1gkyf8DIdW0zbtflo44R395MSr3ccEQ",
  authDomain: "local-host-f2778.firebaseapp.com",
  databaseURL: "https://local-host-f2778-default-rtdb.firebaseio.com",
  projectId: "local-host-f2778",
  storageBucket: "local-host-f2778.firebasestorage.app",
  messagingSenderId: "1047439436453",
  appId: "1:1047439436453:web:30e8176df0d0f5a7673b4c",
  measurementId: "G-23H4J7C5T5"
};

// फ़ायरबेस को शुरू करें
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD1GYpQ5_GID5jChCWFQkRXNZRwpkGxDAc",
  authDomain: "instafake-47314.firebaseapp.com",
  projectId: "instafake-47314",
  storageBucket: "instafake-47314.appspot.com",
  messagingSenderId: "546462669890",
  appId: "1:546462669890:web:f4233fe484f803240ce1db",
  measurementId: "G-FKHEKDJ03B"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
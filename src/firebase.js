import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCuO3v6bbCx1f6N3C2vpTpkoFnw2AHhIHs",
  authDomain: "g-mail-clone-mau.firebaseapp.com",
  projectId: "g-mail-clone-mau",
  storageBucket: "g-mail-clone-mau.appspot.com",
  messagingSenderId: "877304181130",
  appId: "1:877304181130:web:ff4f71a0c40deb28355873",
  measurementId: "G-BNSW8D240W"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};
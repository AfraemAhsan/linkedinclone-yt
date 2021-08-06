import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBCBZcxNxZpDau1aiobDemXQe4kRlJIX7s",
  authDomain: "linkedin-clone-project-5e1f3.firebaseapp.com",
  projectId: "linkedin-clone-project-5e1f3",
  storageBucket: "linkedin-clone-project-5e1f3.appspot.com",
  messagingSenderId: "801834855903",
  appId: "1:801834855903:web:3a649474bf2c286528e86a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

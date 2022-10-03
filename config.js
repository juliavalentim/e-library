// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo3aafZdF2vHowTdNBFQxixunZcfc7oxg",
  authDomain: "e-library-71c4c.firebaseapp.com",
  projectId: "e-library-71c4c",
  storageBucket: "e-library-71c4c.appspot.com",
  messagingSenderId: "514041748619",
  appId: "1:514041748619:web:44aa420cd4de1c9a28888e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore()
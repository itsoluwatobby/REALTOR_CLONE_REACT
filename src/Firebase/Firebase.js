// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtlKz_T03z7QvDva0i1VV5MvlMFZz5lH4",
  authDomain: "realtor-clone-2140b.firebaseapp.com",
  projectId: "realtor-clone-2140b",
  storageBucket: "realtor-clone-2140b.appspot.com",
  messagingSenderId: "578984275409",
  appId: "1:578984275409:web:08709c75d7c3f3d5fdc4f0",
  measurementId: "G-33JQZK148Q"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore()
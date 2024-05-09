import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCJI94XqtYTlRiONL0ZRvEvXsXRYMEA5LU",
  authDomain: "fir-d85da.firebaseapp.com",
  projectId: "fir-d85da",
  storageBucket: "fir-d85da.appspot.com",
  messagingSenderId: "875146168156",
  appId: "1:875146168156:web:eff2c26b83c29231376399",
  measurementId: "G-P9RQ25V3SS",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();

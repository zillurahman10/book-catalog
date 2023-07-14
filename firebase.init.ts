import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyBV2X3HIp2pwljLR-IHbQBdPtaOqiovvlA",
  authDomain: "book-catalog-zr.firebaseapp.com",
  projectId: "book-catalog-zr",
  storageBucket: "book-catalog-zr.appspot.com",
  messagingSenderId: "975204513257",
  appId: "1:975204513257:web:9b4dbf82b96e3bd8b14778",
  measurementId: "G-4LWV7RD2J2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;

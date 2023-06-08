import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBl35T3v-eMonRGb3QMgbuSlOEwuXXj1V4",
  authDomain: "football-acadamy1.firebaseapp.com",
  projectId: "football-acadamy1",
  storageBucket: "football-acadamy1.appspot.com",
  messagingSenderId: "133777329781",
  appId: "1:133777329781:web:b50d599de4f23935df323c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
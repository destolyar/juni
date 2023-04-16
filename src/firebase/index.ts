import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDRiSBPQI6tcknRgae-tvIgn_yOfossWSg",
  authDomain: "juni-b86dd.firebaseapp.com",
  projectId: "juni-b86dd",
  storageBucket: "juni-b86dd.appspot.com",
  messagingSenderId: "46219637232",
  appId: "1:46219637232:web:648fe028feac7e7be6ad35",
  measurementId: "G-MLP0XS6PFR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
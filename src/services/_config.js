import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{ getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyA0Wi8v3DFMdzJNbgaOThZX0fnkTLUvPAQ",
    authDomain: "truelearn-1808c.firebaseapp.com",
    projectId: "truelearn-1808c",
    storageBucket: "truelearn-1808c.appspot.com",
    messagingSenderId: "279284135274",
    appId: "1:279284135274:web:9fec8fbb7bfb2066a1a113",
    measurementId: "G-FJMCL5RCMS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)
export {auth}
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAY4ECibdvHaryxqc5Ta6OhfI0emUbZRsw",
    authDomain: "jonatangoncalvesapp.firebaseapp.com",
    projectId: "jonatangoncalvesapp",
    storageBucket: "jonatangoncalvesapp.appspot.com",
    messagingSenderId: "977512839717",
    appId: "1:977512839717:web:0317ee2f987a000b1d9dcc",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
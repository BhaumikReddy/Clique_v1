// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2syLvzF2hRkXMZ-TYAyf4LSFtT0OOkrU",
  authDomain: "clique-7ea31.firebaseapp.com",
  projectId: "clique-7ea31",
  storageBucket: "clique-7ea31.appspot.com",
  messagingSenderId: "206015656035",
  appId: "1:206015656035:web:ddea8262f580fabac2c856",
  measurementId: "G-TBJ1YSRB7G"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{app,auth};

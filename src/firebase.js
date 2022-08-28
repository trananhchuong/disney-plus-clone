import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRE_BASE_API_KEY,
  authDomain: "disney-plus-clone-84f5f.firebaseapp.com",
  projectId: "disney-plus-clone-84f5f",
  storageBucket: "disney-plus-clone-84f5f.appspot.com",
  messagingSenderId: "871248997874",
  appId: "1:871248997874:web:fd7133e6af5c64453a8f6b",
  measurementId: "G-M47EEFHNGV",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage, signInWithPopup };
export default db;

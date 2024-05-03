import { initializeApp } from "firebase/app";
import { createContext, useContext } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyAZkQTSRSDQpyjXDPtA9JC6S4Gk-VUM3hU",
  authDomain: "patient-health-monitorin-9446b.firebaseapp.com",
  projectId: "patient-health-monitorin-9446b",
  storageBucket: "patient-health-monitorin-9446b.appspot.com",
  messagingSenderId: "215826700937",
  appId: "1:215826700937:web:04b19b52077a609d938458",
  databaseURL:
    "https://patient-health-monitorin-9446b-default-rtdb.firebaseio.com/",
};
export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);

const firebaseAuth = getAuth(firebaseApp);

export const FirebaseProvider = (props) => {
  const signUpUserWithEmailAndPassword = (email, password) => {
    createUserWithEmailAndPassword(firebaseAuth, email, password);
  };
  const loginUser = (email, password) => {
    signInWithEmailAndPassword(firebaseAuth, email, password);
  }
  return (
    <FirebaseContext.Provider value={{ signUpUserWithEmailAndPassword, loginUser }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

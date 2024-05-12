import { initializeApp } from "firebase/app";
import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { child, get, getDatabase, onValue, ref } from "firebase/database";

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
const database = getDatabase(firebaseApp);

export const FirebaseProvider = (props) => {
  const [data, setData] = useState();
  const signUpUserWithEmailAndPassword = (email, password) => {
    createUserWithEmailAndPassword(firebaseAuth, email, password);
  };
  const loginUser = (email, password) => {
    signInWithEmailAndPassword(firebaseAuth, email, password);
  }
 useEffect(()=>{
  onValue(ref(database, "users/Anshul"), (snapshot => {
    setData(snapshot.val());
    //console.log(snapshot.val());
  }))
 }, []);
  return (
    <FirebaseContext.Provider value={{ signUpUserWithEmailAndPassword, loginUser, data }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
export {FirebaseContext};
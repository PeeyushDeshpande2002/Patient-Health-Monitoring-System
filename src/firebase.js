import { initializeApp } from "firebase/app";

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

export const app = initializeApp(firebaseConfig);

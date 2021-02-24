import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAkYtaAtK3zRV1C4qxttw6Iz_-SpY38cYY",
  authDomain: "expensify-dac2e.firebaseapp.com",
  databaseURL: "https://expensify-dac2e-default-rtdb.firebaseio.com",
  projectId: "expensify-dac2e",
  storageBucket: "expensify-dac2e.appspot.com",
  messagingSenderId: "265374738309",
  appId: "1:265374738309:web:7b2b55a569f062560646ec",
  measurementId: "G-LK1K56WLMF",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
export { firebase, database as default };

import firebase from "firebase/compat/app";
import database from "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyCrc7sV3m9BpZZ28h-YnxxTdamp8lmGHRw", // Add API Key
  databaseURL: "https://codeango-meets-default-rtdb.asia-southeast1.firebasedatabase.app/", // Add databaseURL
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export const db = firebase;

let dbRef = firebase.database().ref();

export let connectedRef = firebase.database().ref(".info/connected");

// export const userName = prompt("What's your name?");

// if (window.location.href === "http://localhost:3000/meeting/") {
const urlparams = new URLSearchParams(window.location.search);
var roomId = urlparams.get("id");
// }

if (roomId) {
  dbRef = dbRef.child(roomId);
} else {
  dbRef = dbRef.push();
  window.history.replaceState(null, "Meet", "?id=" + dbRef.key);
}

export default dbRef;

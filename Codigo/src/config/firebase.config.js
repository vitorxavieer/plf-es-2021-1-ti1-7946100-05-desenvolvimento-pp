import firebase from "firebase/app"
require("firebase/firestore")
require("firebase/auth")

var firebaseConfig = {
  apiKey: "AIzaSyBpcJyAtFLiOSI8oRSZEcfiaQCQav8drs0",
  authDomain: "tiaw-42592.firebaseapp.com",
  projectId: "tiaw-42592",
  storageBucket: "tiaw-42592.appspot.com",
  messagingSenderId: "133937133951",
  appId: "1:133937133951:web:7341685b6fda0769f8024a",
}

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()

export const auth = firebase.auth()

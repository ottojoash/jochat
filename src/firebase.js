import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getStorage } from "firebase/storage";

const firebaseConfig = {

  apiKey: "AIzaSyCdor8vBVac6DBC0E9s_MxjooPNUyE8CWs",

  authDomain: "chat-33449.firebaseapp.com",

  projectId: "chat-33449",

  storageBucket: "chat-33449.appspot.com",

  messagingSenderId: "975561594325",

  appId: "1:975561594325:web:70ff8b15a4563222fd195c",

  measurementId: "G-G03R49D8B4"

};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage();
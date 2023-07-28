import { initializeApp } from "firebase/app"; //Creates the connection
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAjSQtcu-HMihAXgxr11i1Z8mlZ2wAWjd4",
  authDomain: "learning-8fd2d.firebaseapp.com",
  projectId: "learning-8fd2d",
  storageBucket: "learning-8fd2d.appspot.com",
  messagingSenderId: "58677867656",
  appId: "1:58677867656:web:365054c07895e52a909b3d",
  measurementId: "G-86VNMSREDK"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
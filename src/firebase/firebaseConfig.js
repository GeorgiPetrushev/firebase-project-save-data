import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAk00-uOCbmIIlPrnkY8UkDQxQtMH22Xcg",
  authDomain: "fir-add-data-f6ae0.firebaseapp.com",
  projectId: "fir-add-data-f6ae0",
  storageBucket: "fir-add-data-f6ae0.appspot.com",
  messagingSenderId: "452902661711",
  appId: "1:452902661711:web:ac6fc44291d1f180ffc43a",
  measurementId: "G-PG68RW5S9D"
};

// apiKey: "AIzaSyAk00-uOCbmIIlPrnkY8UkDQxQtMH22Xcg",
// authDomain: "fir-add-data-f6ae0.firebaseapp.com",
// projectId: "fir-add-data-f6ae0",
// storageBucket: "fir-add-data-f6ae0.appspot.com",
// messagingSenderId: "452902661711",
// appId: "1:452902661711:web:ac6fc44291d1f180ffc43a",
// measurementId: "G-PG68RW5S9D"



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
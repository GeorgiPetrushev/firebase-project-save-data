import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KYE,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKER,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
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
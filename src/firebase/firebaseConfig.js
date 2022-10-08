import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_API_KYE,
//   authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  // storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKER,
  // messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  // appId: process.env.NEXT_PUBLIC_APP_ID,
  // measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KYE,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: "fir-add-data-f6ae0",
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKER,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
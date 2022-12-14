// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: 'AIzaSyDZ9Nh1XlCGmrVVryvyzqSFsR68nCOYeo0',
  // authDomain: 'thrift9ja.firebaseapp.com',
  // databaseURL: 'https://thrift9ja-default-rtdb.firebaseio.com',
  // projectId: 'thrift9ja',
  // storageBucket: 'thrift9ja.appspot.com',
  // messagingSenderId: '463363186826',
  // appId: '1:463363186826:web:2c74682be80e60411bcd73',
  // measurementId: 'G-Z17HH29L33',

  apiKey: "AIzaSyB17WlcQDy0xDsLjSl5i1yPZDxoukmKuLI",
  authDomain: "grupr-b9d32.firebaseapp.com",
  projectId: "grupr-b9d32",
  storageBucket: "grupr-b9d32.appspot.com",
  messagingSenderId: "1005429207425",
  appId: "1:1005429207425:web:99af8bba9d9a23a30fb880",
  measurementId: "G-5GMHD5KR3Y",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app)

export const auth = getAuth(app);
export const db = getFirestore(app);

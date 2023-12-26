// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: 'dropin-blog-409109.firebaseapp.com',
  projectId: 'dropin-blog-409109',
  storageBucket: 'dropin-blog-409109.appspot.com',
  messagingSenderId: '925453186936',
  appId: '1:925453186936:web:31803608f0cf5a9686ba8d',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';

import {getDatabase} from 'firebase/database';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA5jXiPklynxwlFsebbWUsGMpcfQKf9nRo',
  authDomain: 'cui-portal-227bd.firebaseapp.com',
  projectId: 'cui-portal-227bd',
  storageBucket: 'cui-portal-227bd.appspot.com',
  messagingSenderId: '551560889364',
  appId: '1:551560889364:web:f09e444ff46887b6b09301',
  measurementId: 'G-QH5Z41N4L5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
const auth = getAuth();

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

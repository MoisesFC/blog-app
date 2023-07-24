import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAqfHtFDpFfnWq-rj_0rBYXFadTMbnU_a4",
  authDomain: "react-blog-a5f95.firebaseapp.com",
  projectId: "react-blog-a5f95",
  storageBucket: "react-blog-a5f95.appspot.com",
  messagingSenderId: "1072850035029",
  appId: "1:1072850035029:web:fe549237718897ae000fdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

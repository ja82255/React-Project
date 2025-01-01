import { initializeApp } from 'firebase/app';



const firebaseConfig = {
  apiKey: "AIzaSyCnHr0yy-n7WtEsApsf9M97evh8PulWXNI",
  authDomain: "react-project-f32c4.firebaseapp.com",
  projectId: "react-project-f32c4",
  storageBucket: "react-project-f32c4.appspot.com",
  messagingSenderId: "84253042507",
  appId: "1:84253042507:web:8518952e7179ec61092ace"
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export  {app};

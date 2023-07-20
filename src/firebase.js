// import firebase from "firebase";

// const firebaseConfig = {
//     apiKey: "AIzaSyB-hnwQrpUGAZUKbJkWOUzN3B7Lffsg5_M",
//     authDomain: "linkedin-clone10-5596d.firebaseapp.com",
//     projectId: "linkedin-clone10-5596d",
//     storageBucket: "linkedin-clone10-5596d.appspot.com",
//     messagingSenderId: "860720092949",
//     appId: "1:860720092949:web:7a1e7a140966710a353b1c"
//   };

//   const firebaseApp = firebase.initializeApp(firebaseConfig);
//   const db = firebaseApp.firestore();
//   const auth = firebase.auth();


//   export{db,auth};
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyBOK7x5N5UnjY4TDqndzH7l5tvdNIsWFRc",
//   authDomain: "todo-app-e3cf0.firebaseapp.com",
//   projectId: "todo-app-e3cf0",
//   storageBucket: "todo-app-e3cf0.appspot.com",
//   messagingSenderId: "940016886081",
//   appId: "1:940016886081:web:91686613f16b1b1f8001c0",
//   measurementId: "G-JHPC7TP12K"
// };

// // Use this to initialize the firebase App
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// // Use these for db & auth
// const db = firebaseApp.firestore();
// const auth = firebase.auth();


// export { db, auth };

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOK7x5N5UnjY4TDqndzH7l5tvdNIsWFRc",
    authDomain: "todo-app-e3cf0.firebaseapp.com",
    projectId: "todo-app-e3cf0",
    storageBucket: "todo-app-e3cf0.appspot.com",
    messagingSenderId: "940016886081",
    appId: "1:940016886081:web:91686613f16b1b1f8001c0",
  };
  
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
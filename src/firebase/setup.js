import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAMChU1R4ZflkJ1ES-hkYnWqeUVUBSbkxs",
  authDomain: "image-loader-af30f.firebaseapp.com",
  projectId: "image-loader-af30f",
  storageBucket: "image-loader-af30f.appspot.com",
  messagingSenderId: "495991840360",
  appId: "1:495991840360:web:a2ee45ee34700af45ea5dd",
  measurementId: "G-T1Y5KVJWX5",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const galleryStorage = firebase.storage();
const galleryFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { galleryStorage, galleryFirestore,timeStamp };

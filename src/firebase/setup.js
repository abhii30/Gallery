import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBLzkuOsC8QX_7OqKwJ5iB6UF0x9o5kGPY",
  authDomain: "imageloader-d1044.firebaseapp.com",
  projectId: "imageloader-d1044",
  storageBucket: "imageloader-d1044.appspot.com",
  messagingSenderId: "561888683749",
  appId: "1:561888683749:web:c9decdea4936e7754b160c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const galleryStorage = firebase.storage();
const galleryFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { galleryStorage, galleryFirestore,timeStamp };

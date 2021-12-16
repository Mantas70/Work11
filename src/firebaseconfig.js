import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAhc9yGa3EkyV2tWHN3ZNNX_A6jCLNO0vs",
    authDomain: "timetableapp-ccb8e.firebaseapp.com",
    projectId: "timetableapp-ccb8e",
    storageBucket: "timetableapp-ccb8e.appspot.com",
    messagingSenderId: "569867873543",
    appId: "1:569867873543:web:4a645bb5c09b06fd6029a2"
};
export const app = firebase.initializeApp(firebaseConfig);
export default firebase;
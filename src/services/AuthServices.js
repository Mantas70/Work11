import {app} from "../firebaseconfig";
import firebase from "firebase";

const auth = app.auth();
const db = app.firestore();

const registerWithEmailPassword = async (name, email, password) =>{
    try {
        const res = await auth.createUserWithEmailAndPassword(email, password)
        const user = res.user
        await db.collection("users")
            .add({
                uid: user.uid,
                name,
                authProvider: "local",
                email
            })
    }catch (err){
        console.log(err)
    }
}
const signInWithEmailPassword = async (email,password) =>{
    try {
        await auth.signInWithEmailAndPassword(email, password)
    }catch(error){
        console.log(error)
    }
}
const Logout = ()=>{
   auth.signOut()
}
const sendPasswordReset = async (email) =>{
    try{
        await auth.sendPasswordResetEmail(email);
        alert("Laiskas sekmingai issiustas")
    }catch(error){
        console.log(error)
    }
}
export {
    auth,
    db,
    registerWithEmailPassword,
    Logout,
    signInWithEmailPassword,
    sendPasswordReset
}
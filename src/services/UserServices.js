import firebase from "../firebaseconfig";
export const getUserData = (user, setUserHandler)=>{
    try{
        firebase
            .firestore()
            .collection("users")
            .where('uid',"==",user?.uid)
            .get()
            .then((userData)=>{setUserHandler(userData.docs[0].data())})

    }catch(error){
        console.log(error)
    }
}
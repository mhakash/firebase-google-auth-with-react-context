import fb from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDE_7TBAuY7rXnUWawtcQv54YesbIVcr9Y",
  authDomain: "auth-react-c301a.firebaseapp.com",
  projectId: "auth-react-c301a",
  storageBucket: "auth-react-c301a.appspot.com",
  messagingSenderId: "261416999981",
  appId: "1:261416999981:web:ff10d7f93875abfaf5eca4",
};

export const firebase = !fb.apps.length
  ? fb.initializeApp(firebaseConfig)
  : fb.app();

export const authenticate = async () => {
  let provider = new fb.auth.GoogleAuthProvider();
  firebase.auth().languageCode = "en";
  try {
    await firebase.auth().signInWithPopup(provider);
  } catch (err) {
    console.log("error cannot sign in");
  }
};

export const signout = async () => {
  try {
    await firebase.auth().signOut();
  } catch (err) {
    console.log(err.message);
  }
};

export default fb;

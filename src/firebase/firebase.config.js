
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCx7IVfIgtaJFic5t9se7LkS4rN1_5BvEU",
  authDomain: "community-food-ae807.firebaseapp.com",
  projectId: "community-food-ae807",
  storageBucket: "community-food-ae807.appspot.com",
  messagingSenderId: "659084946253",
  appId: "1:659084946253:web:8140b757505570d0352504"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
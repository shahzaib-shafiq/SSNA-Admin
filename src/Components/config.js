
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyBWQuyweq6en5j5siHq5EW3y-btXks-Ty8",
  authDomain: "ssna-admin.firebaseapp.com",
  databaseURL: "https://ssna-admin-default-rtdb.firebaseio.com",
  projectId: "ssna-admin",
  storageBucket: "ssna-admin.appspot.com",
  messagingSenderId: "879576680646",
  appId: "1:879576680646:web:1ef428430e21783e1e6fc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
const imagedb=getStorage(app);


const provider=new GoogleAuthProvider();
export {auth,provider,imagedb};

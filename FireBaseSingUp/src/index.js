import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3-dBx0BJDQzZQcA3K4C844i0-yfs2JDM",
  authDomain: "webclass-fd20a.firebaseapp.com",
  projectId: "webclass-fd20a",
  storageBucket: "webclass-fd20a.appspot.com",
  messagingSenderId: "52327713787",
  appId: "1:52327713787:web:9e2dd54756303679f9d95e"
};
const email="angelofabara@epn.edu.ec";
const password="12354678";
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // usuario registrado Exitosamente
    const user = userCredential.user;
    alert(`User: ${user.email} created`);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Error al ingresar: " +errorMessage);
  });

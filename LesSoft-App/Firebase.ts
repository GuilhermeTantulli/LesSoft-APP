import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Importar o módulo de autenticação
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAdwHfsbqjEMeAyuaIRk4Ik5xejTfy7A8I",
  authDomain: "lessoft-app.firebaseapp.com",
  projectId: "lessoft-app",
  storageBucket: "lessoft-app.firebasestorage.app",
  messagingSenderId: "976829952234",
  appId: "1:976829952234:web:c4eb33b954b10e5c672793",
  measurementId: "G-BP48V099K1"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Auth e Firestore
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore }; // Exporta o objeto de autenticação


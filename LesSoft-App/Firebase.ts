import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, EmailAuthProvider, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
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
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

const firestore = getFirestore(app);

// Exporta o objeto de autenticação e o provedor de autenticação
export { auth, EmailAuthProvider, firestore };

// Importar Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Analytics es opcional
import { getAnalytics } from "firebase/analytics";

// Configuración
const firebaseConfig = {
  apiKey: "AIzaSyAWs6Pq7qYn72s_NKcuse8RALryCmwkMXE",
  authDomain: "e-commerce-38d43.firebaseapp.com",
  projectId: "e-commerce-38d43",
  storageBucket: "e-commerce-38d43.firebasestorage.app",
  messagingSenderId: "963999843048",
  appId: "1:963999843048:web:805ba5b0f4a1720a99bf5d",
  measurementId: "G-WZ2W05KLBK",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Firestore (BASE DE DATOS)
export const db = getFirestore(app);

// Analytics (opcional)
export const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";

import { getFirestore, collection, addDoc, getDocs, onSnapshot, getDoc, deleteDoc, doc, updateDoc, orderBy, query } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHIMWcigzcERl7v7m8w9e2AeAhoHKjCzs",
  authDomain: "biblioteca-e3ad9.firebaseapp.com",
  databaseURL: "https://biblioteca-e3ad9-default-rtdb.firebaseio.com",
  projectId: "biblioteca-e3ad9",
  storageBucket: "biblioteca-e3ad9.appspot.com",
  messagingSenderId: "5376990542",
  appId: "1:5376990542:web:ec8b42d1481e7b08dd121f"
  // measurementId: "G-Z8RJQHVHEJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore();

//   exportar funciones modulos

export const getModulos = () => getDocs(collection(db, "modulos"));

export const onGetModulos = (callback) => onSnapshot(collection(db, "modulos"), callback);

export const getModulo = id => getDoc(doc(db, "modulos", id));

export const updateModulo = (id, newFields) => updateDoc(doc(db, "modulos", id), newFields);

// exportar funciones docentes
export const addDocente = (rut, nombre, modulo, dia, horainicio, horatermino, fecha) => addDoc(collection(db, "docentes"), { rut: rut, nombre: nombre, modulo: modulo, dia: dia, horainicio: horainicio, horatermino: horatermino, fecha: fecha })

export const getDocentes = () => getDocs(collection(db, "docentes"));

export const onGetDocentes = (callback) => onSnapshot(query(collection(db, "docentes"), orderBy("horainicio", "asc")), callback);

export const getDocente = id => getDoc(doc(db, "docentes", id));

export const updateDocente = (id, newFields) => updateDoc(doc(db, "docentes", id), newFields);

export const deleteDocente = id => deleteDoc(doc(db, "docentes", id));

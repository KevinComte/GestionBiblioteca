import { auth } from './firebaseConfig.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

const formAuth = document.getElementById('formLogin');
// export let credenciales2 = '';

formAuth.addEventListener('submit', async(e)=>{
    e.preventDefault();
    // console.log(auth)
    const email = formAuth['textoEmail'].value;
    const pass = formAuth['textoPassword'].value;


    try {
        const credenciales = await signInWithEmailAndPassword(auth, email, pass);
        // credenciales2 = credenciales;
        console.log(credenciales);
        window.location.href = './index.html';
     
    } catch (error) {
        if(error.code === "auth/wrong-password"){
            console.log('error password');
        }else if(error.code === "auth/user-not-found"){
            console.log('error user');
        }else{
            console.log(error);
        }

        
    }
  
})
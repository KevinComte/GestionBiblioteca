import { getModulos, onGetModulos, getModulo, updateModulo } from "./firebaseConfig.js";
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
import { auth } from './firebaseConfig.js';
// import { credenciales2 } from "./auth.js";

const credencialAuth = document.getElementById('credencialAuth');
onAuthStateChanged(auth, async (user) =>{
// console.log(user);

if(user == null){
    window.location.href = './auth.html';
}else{
    credencialAuth.innerText = user.email;
}
});

const logOut = document.getElementById('logOut');



logOut.addEventListener('click', async(e)=> {
    await signOut(auth);
    window.location.href = './auth.html';
});


const modulo101 = document.getElementById('modulo101');
const modulo102 = document.getElementById('modulo102');
const modulo103 = document.getElementById('modulo103');
const modulo104 = document.getElementById('modulo104');
const modulo209 = document.getElementById('modulo209');
const modulo210 = document.getElementById('modulo210');
const modulo211 = document.getElementById('modulo211');
const modulo212 = document.getElementById('modulo212');
const tbody = document.querySelector('.tbodyClase');

let id = '';
let data = [];

let hoursAndMinutes = '';
let hoursAndMinutes2 = '';


// Declaraciones para modal
const ocuparModulo_Modal = document.getElementById('ocuparModulo');
const mostrarModal_Modal = document.getElementById('defaultModal');
const reservaModal = document.getElementById('reservaModal');
const botonModal = document.getElementById('mostrarModal');
const cerrarModal = document.getElementById('cerrarModal');
const cerrarModalReserva = document.getElementById('cerrarModalReserva');
const modificarForm = document.getElementById('formOcupar');
const reservaForm = document.getElementById('formReserva');


window.addEventListener('DOMContentLoaded', async () => {
    onGetModulos(querySnapshot => {
      
        let html101 = '', html102 = '', html103 = '', html104 = '', html209 = '', html210 = '', html211 = '', html212 = '';
        querySnapshot.forEach(element => {



        ////////////////////////
        //Pintar modulo 101 
        ///////////////////////    
        if (element.data().nombre == '101A') {
            html101 += `<th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-white">
                        ${element.data().nombre}
                        </th>
                        <td class="px-6 py-4">
                        ${element.data().capacidad}
                        </td>`;

        // Verificar estado de módulo
        if (element.data().estado == 'Libre') {
                        html101 += ` <td class="px-6 py-4 bg-red-800 font-medium text-white bg-green-700">
                        ${element.data().estado}
                        </td>`;
        } else {
                        html101 += ` <td class="px-6 py-4 bg-red-800 font-medium text-white">
                        ${element.data().estado}
                        </td>`;
        }

                        html101 += ` <td class="px-6 py-4">
                        ${element.data().horainicio}
                        </td>
                        <td class="px-6 py-4 font-medium text-white">
                        ${element.data().horatermino}
                        </td>
                        <td class="px-6 py-4">
                        ${element.data().usuario}
                        </td>
                        <td class="px-6 py-4 font-medium text-yellow-300">
                        ${element.data().reserva}
                        </td>
                        <td class="px-6 py-4">
                        <button data-id="${element.id}" id="liberarModulo" class="btn-liberar text-slate-900 mr-2 font-medium px-2 py-1 hover:text-white bg-green-500 hover:shadow-lg hover:shadow-green-500/80 rounded-lg">Liberar</button>
                        <button data-id="${element.id}" id="ocuparModulo" class="btn-ocupar text-slate-900 mr-2 font-medium px-2 py-1 hover:text-white bg-red-500 hover:shadow-lg hover:shadow-red-500/80 rounded-lg">Ocupar</button>
                        <button data-id="${element.id}" id="reservaModulo" class="btn-editarReserva text-slate-900 font-medium px-2 py-1 hover:text-white bg-yellow-500 hover:shadow-lg hover:shadow-yellow-500/80 rounded-lg">Reserva</button>
                        </td>`;
        }

        ////////////////////////
        //Pintar modulo 102 
        ///////////////////////    
        if (element.data().nombre == '102A') {
            html102 += `<th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-white">
                        ${element.data().nombre}
                        </th>
                        <td class="px-6 py-4">
                        ${element.data().capacidad}
                        </td>`;

        // Verificar estado de módulo
        if (element.data().estado == 'Libre') {
                        html102 += ` <td class="px-6 py-4 bg-red-800 font-medium text-white bg-green-700">
                        ${element.data().estado}
                        </td>`;
        } else {
                        html102 += ` <td class="px-6 py-4 bg-red-800 font-medium text-white">
                        ${element.data().estado}
                        </td>`;
        }

                        html102 += ` <td class="px-6 py-4">
                        ${element.data().horainicio}
                        </td>
                        <td class="px-6 py-4 font-medium text-white">
                        ${element.data().horatermino}
                        </td>
                        <td class="px-6 py-4">
                        ${element.data().usuario}
                        </td>
                        <td class="px-6 py-4 font-medium text-yellow-300">
                        ${element.data().reserva}
                        </td>
                        <td class="px-6 py-4">
                        <button data-id="${element.id}" id="liberarModulo" class="btn-liberar text-slate-900 mr-2 font-medium px-2 py-1 hover:text-white bg-green-500 hover:shadow-lg hover:shadow-green-500/80 rounded-lg">Liberar</button>
                        <button data-id="${element.id}" id="ocuparModulo" class="btn-ocupar text-slate-900 mr-2 font-medium px-2 py-1 hover:text-white bg-red-500 hover:shadow-lg hover:shadow-red-500/80 rounded-lg">Ocupar</button>
                        <button data-id="${element.id}" id="reservaModulo" class="btn-editarReserva text-slate-900 font-medium px-2 py-1 hover:text-white bg-yellow-500 hover:shadow-lg hover:shadow-yellow-500/80 rounded-lg">Reserva</button>
           
                        </td>`;
        }     
    
        ////////////////////////
        //Pintar modulo 103 
        ///////////////////////    
        if (element.data().nombre == '103A') {
            html103 += `<th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-white">
                        ${element.data().nombre}
                        </th>
                        <td class="px-6 py-4">
                        ${element.data().capacidad}
                        </td>`;

        // Verificar estado de módulo
        if (element.data().estado == 'Libre') {
                        html103 += ` <td class="px-6 py-4 bg-red-800 font-medium text-white bg-green-700">
                        ${element.data().estado}
                        </td>`;
        } else {
                        html103 += ` <td class="px-6 py-4 bg-red-800 font-medium text-white">
                        ${element.data().estado}
                        </td>`;
        }

                        html103 += ` <td class="px-6 py-4">
                        ${element.data().horainicio}
                        </td>
                        <td class="px-6 py-4 font-medium text-white">
                        ${element.data().horatermino}
                        </td>
                        <td class="px-6 py-4">
                        ${element.data().usuario}
                        </td>
                        <td class="px-6 py-4">
                        ${element.data().reserva}
                        </td>
                        <td class="px-6 py-4 font-medium text-yellow-300">
                        <button data-id="${element.id}" id="liberarModulo" class="btn-liberar text-slate-900 mr-2 font-medium px-2 py-1 hover:text-white bg-green-500 hover:shadow-lg hover:shadow-green-500/80 rounded-lg">Liberar</button>
                        <button data-id="${element.id}" id="ocuparModulo" class="btn-ocupar text-slate-900 mr-2 font-medium px-2 py-1 hover:text-white bg-red-500 hover:shadow-lg hover:shadow-red-500/80 rounded-lg">Ocupar</button>
                        <button data-id="${element.id}" id="reservaModulo" class="btn-editarReserva text-slate-900 font-medium px-2 py-1 hover:text-white bg-yellow-500 hover:shadow-lg hover:shadow-yellow-500/80 rounded-lg">Reserva</button>
           
                        </td>`;
        }        

        ////////////////////////
        //Pintar modulo 104 
        ///////////////////////    
        if (element.data().nombre == '104A') {
            html104 += `<th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-white">
                        ${element.data().nombre}
                        </th>
                        <td class="px-6 py-4">
                        ${element.data().capacidad}
                        </td>`;

        // Verificar estado de módulo
        if (element.data().estado == 'Libre') {
                        html104 += ` <td class="px-6 py-4 bg-red-800 font-medium text-white bg-green-700">
                        ${element.data().estado}
                        </td>`;
        } else {
                        html104 += ` <td class="px-6 py-4 bg-red-800 font-medium text-white">
                        ${element.data().estado}
                        </td>`;
        }

                        html104 += ` <td class="px-6 py-4">
                        ${element.data().horainicio}
                        </td>
                        <td class="px-6 py-4 font-medium text-white">
                        ${element.data().horatermino}
                        </td>
                        <td class="px-6 py-4">
                        ${element.data().usuario}
                        </td>
                        <td class="px-6 py-4 font-medium text-yellow-300">
                        ${element.data().reserva}
                        </td>
                        <td class="px-6 py-4">
                        <button data-id="${element.id}" id="liberarModulo" class="btn-liberar text-slate-900 mr-2 font-medium px-2 py-1 hover:text-white bg-green-500 hover:shadow-lg hover:shadow-green-500/80 rounded-lg">Liberar</button>
                        <button data-id="${element.id}" id="ocuparModulo" class="btn-ocupar text-slate-900 mr-2 font-medium px-2 py-1 hover:text-white bg-red-500 hover:shadow-lg hover:shadow-red-500/80 rounded-lg">Ocupar</button>
                        <button data-id="${element.id}" id="reservaModulo" class="btn-editarReserva text-slate-900 font-medium px-2 py-1 hover:text-white bg-yellow-500 hover:shadow-lg hover:shadow-yellow-500/80 rounded-lg">Reserva</button>
           
                        </td>`;
        } 
       
        ////////////////////////
        //Pintar modulo 209 
        ///////////////////////    
        if (element.data().nombre == '209A') {
            html209 += `<th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-white">
                        ${element.data().nombre}
                        </th>
                        <td class="px-6 py-4">
                        ${element.data().capacidad}
                        </td>`;

        // Verificar estado de módulo
        if (element.data().estado == 'Libre') {
                        html209 += ` <td class="px-6 py-4 bg-red-800 font-medium text-white bg-green-700">
                        ${element.data().estado}
                        </td>`;
        } else {
                        html209 += ` <td class="px-6 py-4 bg-red-800 font-medium text-white">
                        ${element.data().estado}
                        </td>`;
        }

                        html209 += ` <td class="px-6 py-4">
                        ${element.data().horainicio}
                        </td>
                        <td class="px-6 py-4 font-medium text-white">
                        ${element.data().horatermino}
                        </td>
                        <td class="px-6 py-4">
                        ${element.data().usuario}
                        </td>
                        <td class="px-6 py-4 font-medium text-yellow-300">
                        ${element.data().reserva}
                        </td>
                        <td class="px-6 py-4">
                        <button data-id="${element.id}" id="liberarModulo" class="btn-liberar text-slate-900 mr-2 font-medium px-2 py-1 hover:text-white bg-green-500 hover:shadow-lg hover:shadow-green-500/80 rounded-lg">Liberar</button>
                        <button data-id="${element.id}" id="ocuparModulo" class="btn-ocupar text-slate-900 mr-2 font-medium px-2 py-1 hover:text-white bg-red-500 hover:shadow-lg hover:shadow-red-500/80 rounded-lg">Ocupar</button>
                        <button data-id="${element.id}" id="reservaModulo" class="btn-editarReserva text-slate-900 font-medium px-2 py-1 hover:text-white bg-yellow-500 hover:shadow-lg hover:shadow-yellow-500/80 rounded-lg">Reserva</button>
                        </td>`;
        }
        
        ////////////////////////
        //Pintar modulo 210 
        ///////////////////////    
        if (element.data().nombre == '210A') {
            html210 += `<th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-white">
                        ${element.data().nombre}
                        </th>
                        <td class="px-6 py-4">
                        ${element.data().capacidad}
                        </td>`;

        // Verificar estado de módulo
        if (element.data().estado == 'Libre') {
                        html210 += ` <td class="px-6 py-4 bg-red-800 font-medium text-white bg-green-700">
                        ${element.data().estado}
                        </td>`;
        } else {
                        html210 += ` <td class="px-6 py-4 bg-red-800 font-medium text-white">
                        ${element.data().estado}
                        </td>`;
        }

                        html210 += ` <td class="px-6 py-4">
                        ${element.data().horainicio}
                        </td>
                        <td class="px-6 py-4 font-medium text-white">
                        ${element.data().horatermino}
                        </td>
                        <td class="px-6 py-4">
                        ${element.data().usuario}
                        </td>
                        <td class="px-6 py-4 font-medium text-yellow-300">
                        ${element.data().reserva}
                        </td>
                        <td class="px-6 py-4">
                        <button data-id="${element.id}" id="liberarModulo" class="btn-liberar text-slate-900 mr-2 font-medium px-2 py-1 hover:text-white bg-green-500 hover:shadow-lg hover:shadow-green-500/80 rounded-lg">Liberar</button>
                        <button data-id="${element.id}" id="ocuparModulo" class="btn-ocupar text-slate-900 mr-2 font-medium px-2 py-1 hover:text-white bg-red-500 hover:shadow-lg hover:shadow-red-500/80 rounded-lg">Ocupar</button>
                        <button data-id="${element.id}" id="reservaModulo" class="btn-editarReserva text-slate-900 font-medium px-2 py-1 hover:text-white bg-yellow-500 hover:shadow-lg hover:shadow-yellow-500/80 rounded-lg">Reserva</button>
                        </td>`;
        }        

        ////////////////////////
        //Pintar modulo 211
        ///////////////////////    
        if (element.data().nombre == '211A') {
            html211 += `<th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-white">
                        ${element.data().nombre}
                        </th>
                        <td class="px-6 py-4">
                        ${element.data().capacidad}
                        </td>`;

        // Verificar estado de módulo
        if (element.data().estado == 'Libre') {
                        html211 += ` <td class="px-6 py-4 bg-red-800 font-medium text-white bg-green-700">
                        ${element.data().estado}
                        </td>`;
        } else {
                        html211 += ` <td class="px-6 py-4 bg-red-800 font-medium text-white">
                        ${element.data().estado}
                        </td>`;
        }

                        html211 += ` <td class="px-6 py-4">
                        ${element.data().horainicio}
                        </td>
                        <td class="px-6 py-4 font-medium text-white">
                        ${element.data().horatermino}
                        </td>
                        <td class="px-6 py-4">
                        ${element.data().usuario}
                        </td>
                        <td class="px-6 py-4 font-medium text-yellow-300">
                        ${element.data().reserva}
                        </td>
                        <td class="px-6 py-4">
                        <button data-id="${element.id}" id="liberarModulo" class="btn-liberar text-slate-900 mr-2 font-medium px-2 py-1 hover:text-white bg-green-500 hover:shadow-lg hover:shadow-green-500/80 rounded-lg">Liberar</button>
                        <button data-id="${element.id}" id="ocuparModulo" class="btn-ocupar text-slate-900 mr-2 font-medium px-2 py-1 hover:text-white bg-red-500 hover:shadow-lg hover:shadow-red-500/80 rounded-lg">Ocupar</button>
                        <button data-id="${element.id}" id="reservaModulo" class="btn-editarReserva text-slate-900 font-medium px-2 py-1 hover:text-white bg-yellow-500 hover:shadow-lg hover:shadow-yellow-500/80 rounded-lg">Reserva</button>
                        </td>`;
        } 
        
        ////////////////////////
        //Pintar modulo 212 
        ///////////////////////    
        if (element.data().nombre == '212A') {
            html212 += `<th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-white">
                        ${element.data().nombre}
                        </th>
                        <td class="px-6 py-4">
                        ${element.data().capacidad}
                        </td>`;

        // Verificar estado de módulo
        if (element.data().estado == 'Libre') {
                        html212 += ` <td class="px-6 py-4 bg-red-800 font-medium text-white bg-green-700">
                        ${element.data().estado}
                        </td>`;
        } else {
                        html212 += ` <td class="px-6 py-4 bg-red-800 font-medium text-white">
                        ${element.data().estado}
                        </td>`;
        }

                        html212 += ` <td class="px-6 py-4">
                        ${element.data().horainicio}
                        </td>
                        <td class="px-6 py-4 font-medium text-white">
                        ${element.data().horatermino}
                        </td>
                        <td class="px-6 py-4">
                        ${element.data().usuario}
                        </td>
                        <td class="px-6 py-4 font-medium text-yellow-300">
                        ${element.data().reserva}
                        </td>
                        <td class="px-6 py-4">
                        <button data-id="${element.id}" id="liberarModulo" class="btn-liberar text-slate-900 mr-2 font-medium px-2 py-1 hover:text-white bg-green-500 hover:shadow-lg hover:shadow-green-500/80 rounded-lg">Liberar</button>
                        <button data-id="${element.id}" id="ocuparModulo" class="btn-ocupar text-slate-900 mr-2 font-medium px-2 py-1 hover:text-white bg-red-500 hover:shadow-lg hover:shadow-red-500/80 rounded-lg">Ocupar</button>
                        <button data-id="${element.id}" id="reservaModulo" class="btn-editarReserva text-slate-900 font-medium px-2 py-1 hover:text-white bg-yellow-500 hover:shadow-lg hover:shadow-yellow-500/80 rounded-lg">Reserva</button>
                        </td>`;
        }        
        });


        modulo101.innerHTML = html101;
        modulo102.innerHTML = html102;
        modulo103.innerHTML = html103;
        modulo104.innerHTML = html104;
        modulo209.innerHTML = html209;
        modulo210.innerHTML = html210;
        modulo211.innerHTML = html211;
        modulo212.innerHTML = html212;


        // Editar

        const btnOcupar = tbody.querySelectorAll('.btn-ocupar');
        btnOcupar.forEach((btn) => {
            btn.addEventListener('click', async (e) => {
                const doc = await getModulo(e.target.dataset.id);
                const modulo = doc.data();
                mostrarModal_Modal.classList.remove('hidden');
                id = doc.id;
                
            });
        });

        const btnReserva = tbody.querySelectorAll('.btn-editarReserva');
        btnReserva.forEach((btn) => {
            btn.addEventListener('click', async (e) => {
                const doc = await getModulo(e.target.dataset.id);
                const modulo = doc.data();
                reservaModal.classList.remove('hidden');
                id = doc.id;
                
                
            });
        });

        // Liberar
        const btnLiberar = tbody.querySelectorAll('.btn-liberar');
        btnLiberar.forEach((btn) => {
            btn.addEventListener('click', async (e) => {
                const doc = await getModulo(e.target.dataset.id);
                const modulo = doc.data();
                id = doc.id;

                updateModulo(id, {
                    estado: 'Libre',
                    horainicio: '',
                    horatermino: '',
                    usuario: '',
                    insumos: '',
            
                });
            });
        });
    });
});


cerrarModal.addEventListener('click', () => {
    mostrarModal_Modal.classList.add('hidden');
});

cerrarModalReserva.addEventListener('click', () => {
    reservaModal.classList.add('hidden');
});

// evento formulario


reservaForm.addEventListener('submit',(e) =>{
    e.preventDefault();
    const horarioReserva = reservaForm['textoReserva'].value;
    updateModulo(id, {
        reserva: horarioReserva
    });

    reservaForm.reset();
    reservaModal.classList.add('hidden');
})




modificarForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const usuario = modificarForm['textoUsuario'].value;
    const horaTermino = modificarForm['textoHoraTermino'].value;


    let ahora = new Date();
    let horas = '' + ahora.getHours();
    let minutos = '' + ahora.getMinutes();

   
    if (minutos.length < 2) {
        hoursAndMinutes = ahora.getHours() + ':0' + ahora.getMinutes();
        hoursAndMinutes2 = ahora.getHours() + 2 + ':0' + ahora.getMinutes();
    } else {
        hoursAndMinutes = ahora.getHours() + ':' + ahora.getMinutes();
        hoursAndMinutes2 = ahora.getHours() + 2 + ':' + ahora.getMinutes();
    }

    if(horaTermino == ''){
        updateModulo(id, {
            estado: 'Ocupado',
            horainicio: hoursAndMinutes,
            horatermino: hoursAndMinutes2,
            usuario: usuario,
    
        });
    }else{
        updateModulo(id, {
            estado: 'Ocupado',
            horainicio: hoursAndMinutes,
            horatermino: horaTermino,
            usuario: usuario,
    
        });
    }

   modificarForm.reset();
   mostrarModal_Modal.classList.add('hidden');

    // const modificarModulo = moduloReferencia.push();
    // console.log(modificarModulo);
})


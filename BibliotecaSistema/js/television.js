import { getModulos, onGetModulos, getModulo, updateModulo } from "./firebaseConfig.js";

const modulo101 = document.getElementById('modulo101TV');
const modulo102 = document.getElementById('modulo102TV');
const modulo103 = document.getElementById('modulo103TV');
const modulo104 = document.getElementById('modulo104TV');
const modulo209 = document.getElementById('modulo209TV');
const modulo210 = document.getElementById('modulo210TV');
const modulo211 = document.getElementById('modulo211TV');
const modulo212 = document.getElementById('modulo212TV');

window.addEventListener('DOMContentLoaded', async () => {
    onGetModulos(querySnapshot => {

        let html101 = '', html102 = '', html103 = '', html104 = '', html209 = '', html210 = '', html211 = '', html212 = '';
        querySnapshot.forEach(element => {

            ////////////////////////
            //Pintar modulo 101 
            ///////////////////////    
            if (element.data().nombre == '101A') {
                html101 += `<img class=" h-44 rounded-t-lg" src="/media/image-1.jpg" alt="" />
                <div class="p-4">
                    <h5 class="mb-1 text-2xl font-bold tracking-tight text-white">Módulo ${element.data().nombre} </h5>
                    <p class="mb-1 font-normal">Capacidad: ${element.data().capacidad} <br>`
                if (element.data().estado == 'Libre') {
                    html101 += `Estado:<span class="text-green-400 font-medium"> ${element.data().estado} </span><br>
                Hora límite de Uso: <span class="font-medium">${element.data().horatermino}</span><br>
                Hora Reservada a Docente: <span class="font-medium text-yellow-400">${element.data().reserva}</span></p>
                    <div class="flex justify-center"><img class="imagenEstadoLibre h-9" src="/media/icons8-green-circle-48.png"
                            alt=""></div>
                            </div>`;
                    modulo101.classList.remove('bordeOcupado');
                    modulo101.classList.add('bordeLibre');
                } else {
                    html101 += `Estado:<span class="text-red-400 font-medium"> ${element.data().estado} </span><br>
                Hora límite de Uso: <span class="font-medium">${element.data().horatermino}</span><br>
                Hora Reservada a Docente: <span class="font-medium text-yellow-400">${element.data().reserva}</span></p>
                    <div class="flex justify-center"><img class="imagenEstadoOcupado h-9" src="/media/icons8-red-circle-48.png"
                            alt=""></div>
                            </div>`;
                    modulo101.classList.remove('bordeLibre');
                    modulo101.classList.add('bordeOcupado');
                }

            }

            ////////////////////////
            //Pintar modulo 102
            ///////////////////////    
            if (element.data().nombre == '102A') {
                html102 += `<img class="h-44 rounded-t-lg" src="/media/image-1.jpg" alt="" />
            <div class="p-4">
                <h5 class="mb-1 text-2xl font-bold tracking-tight text-white">Módulo ${element.data().nombre}</h5>
                <p class="mb-1 font-normal">Capacidad: ${element.data().capacidad} <br>`
                if (element.data().estado == 'Libre') {
                    html102 += `Estado:<span class="text-green-400 font-medium"> ${element.data().estado} </span><br>
            Hora límite de Uso: <span class="font-medium">${element.data().horatermino}</span><br>
            Hora Reservada a Docente: <span class="font-medium text-yellow-400">${element.data().reserva}</span></p>
                <div class="flex justify-center"><img class="imagenEstadoLibre h-9" src="/media/icons8-green-circle-48.png"
                        alt=""></div>
                        </div>`;
                    modulo102.classList.remove('bordeOcupado');
                    modulo102.classList.add('bordeLibre');
                } else {
                    html102 += `Estado:<span class="text-red-400 font-medium"> ${element.data().estado} </span><br>
            Hora límite de Uso: <span class="text-red-400 font-medium">${element.data().horatermino}</span><br>
            Hora Reservada a Docente: <span class="font-medium text-yellow-400">${element.data().reserva}</span></p>
                <div class="flex justify-center"><img class="imagenEstadoOcupado h-9" src="/media/icons8-red-circle-48.png"
                        alt=""></div>
                        </div>`;
                    modulo102.classList.remove('bordeLibre');
                    modulo102.classList.add('bordeOcupado');
                }

            }

            ////////////////////////
            //Pintar modulo 103 
            ///////////////////////    
            if (element.data().nombre == '103A') {
                html103 += `<img class="h-44 rounded-t-lg" src="/media/image-1.jpg" alt="" />
            <div class="p-4">
                <h5 class="mb-1 text-2xl font-bold tracking-tight text-white">Módulo ${element.data().nombre}</h5>
                <p class="mb-1 font-normal">Capacidad: ${element.data().capacidad} <br>`
                if (element.data().estado == 'Libre') {
                    html103 += `Estado:<span class="text-green-400 font-medium"> ${element.data().estado} </span><br>
            Hora límite de Uso: <span class="font-medium">${element.data().horatermino}</span><br>
            Hora Reservada a Docente: <span class="font-medium text-yellow-400">${element.data().reserva}</span></p>
                <div class="flex justify-center"><img class="imagenEstadoLibre h-9" src="/media/icons8-green-circle-48.png"
                        alt=""></div>
                        </div>`;
                    modulo103.classList.remove('bordeOcupado');
                    modulo103.classList.add('bordeLibre');
                } else {
                    html103 += `Estado:<span class="text-red-400 font-medium"> ${element.data().estado} </span><br>
            Hora límite de Uso: <span class="font-medium">${element.data().horatermino} <br></span>
            Hora Reservada a Docente: <span class="font-medium text-yellow-400">${element.data().reserva}</span></p>
                <div class="flex justify-center"><img class="imagenEstadoOcupado h-9" src="/media/icons8-red-circle-48.png"
                        alt=""></div>
                        </div>`;
                    modulo103.classList.remove('bordeLibre');
                    modulo103.classList.add('bordeOcupado');
                }

            }

            ////////////////////////
            //Pintar modulo 104 
            ///////////////////////    
            if (element.data().nombre == '104A') {
                html104 += `<img class="h-44 rounded-t-lg" src="/media/image-1.jpg" alt="" />
            <div class="p-4">
                <h5 class="mb-1 text-2xl font-bold tracking-tight text-white">Módulo ${element.data().nombre} </h5>
                <p class="mb-1 font-normal">Capacidad: ${element.data().capacidad} <br>`
                if (element.data().estado == 'Libre') {
                    html104 += `Estado:<span class="text-green-400 font-medium"> ${element.data().estado} </span><br>
            Hora límite de Uso: <span class="font-medium">${element.data().horatermino}</span><br>
            Hora Reservada a Docente: <span class="font-medium text-yellow-400">${element.data().reserva}</span></p>
                <div class="flex justify-center"><img class="imagenEstadoLibre h-9" src="/media/icons8-green-circle-48.png"
                        alt=""></div>
                        </div>`;
                    modulo104.classList.remove('bordeOcupado');
                    modulo104.classList.add('bordeLibre');
                } else {
                    html104 += `Estado:<span class="text-red-400 font-medium"> ${element.data().estado} </span><br>
            Hora límite de Uso: <span class="font-medium">${element.data().horatermino}</span><br>
            Hora Reservada a Docente: <span class="font-medium text-yellow-400">${element.data().reserva}</span></p>
                <div class="flex justify-center"><img class="imagenEstadoOcupado h-9" src="/media/icons8-red-circle-48.png"
                        alt=""></div>
                        </div>`;
                    modulo104.classList.remove('bordeLibre');
                    modulo104.classList.add('bordeOcupado');
                }

            }

            ////////////////////////
            //Pintar modulo 209
            ///////////////////////    
            if (element.data().nombre == '209A') {
                html209 += `<img class="h-44 rounded-t-lg" src="/media/image-1.jpg" alt="" />
            <div class="p-4">
                <h5 class="mb-1 text-2xl font-bold tracking-tight text-white">Módulo ${element.data().nombre}</h5>
                <p class="mb-1 font-normal">Capacidad: ${element.data().capacidad} <br>`
                if (element.data().estado == 'Libre') {
                    html209 += `Estado:<span class="text-green-400 font-medium"> ${element.data().estado} </span><br>
            Hora límite de Uso: <span class="font-medium">${element.data().horatermino}</span><br>
            Hora Reservada a Docente: <span class="font-medium text-yellow-400">${element.data().reserva}</span></p>
                <div class="flex justify-center"><img class="imagenEstadoLibre h-9" src="/media/icons8-green-circle-48.png"
                        alt=""></div>
                        </div>`;
                    modulo209.classList.remove('bordeOcupado');
                    modulo209.classList.add('bordeLibre');
                } else {
                    html209 += `Estado:<span class="text-red-400 font-medium"> ${element.data().estado} </span><br>
            Hora límite de Uso: <span class="font-medium">${element.data().horatermino}</span><br>
            Hora Reservada a Docente: <span class="font-medium text-yellow-400">${element.data().reserva}</span></p>
                <div class="flex justify-center"><img class="imagenEstadoOcupado h-9" src="/media/icons8-red-circle-48.png"
                        alt=""></div>
                        </div>`;
                    modulo209.classList.remove('bordeLibre');
                    modulo209.classList.add('bordeOcupado');
                }

            }

            ////////////////////////
            //Pintar modulo 210 
            ///////////////////////    
            if (element.data().nombre == '210A') {
                html210 += `<img class="h-44 rounded-t-lg" src="/media/image-1.jpg" alt="" />
            <div class="p-4">
                <h5 class="mb-1 text-2xl font-bold tracking-tight text-white">Módulo ${element.data().nombre}</h5>
                <p class="mb-1 font-normal">Capacidad: ${element.data().capacidad} <br>`
                if (element.data().estado == 'Libre') {
                    html210 += `Estado:<span class="text-green-400 font-medium"> ${element.data().estado} </span><br>
            Hora límite de Uso: <span class="font-medium">${element.data().horatermino}</span><br>
            Hora Reservada a Docente: <span class="font-medium text-yellow-400">${element.data().reserva}</span></p>
                <div class="flex justify-center"><img class="imagenEstadoLibre h-9" src="/media/icons8-green-circle-48.png"
                        alt=""></div>
                        </div>`;
                    modulo210.classList.remove('bordeOcupado');
                    modulo210.classList.add('bordeLibre');
                } else {
                    html210 += `Estado:<span class="text-red-400 font-medium"> ${element.data().estado} </span><br>
            Hora límite de Uso: <span class="font-medium">${element.data().horatermino}</span><br>
            Hora Reservada a Docente: <span class="font-medium text-yellow-400">${element.data().reserva}</span></p>
                <div class="flex justify-center"><img class="imagenEstadoOcupado h-9" src="/media/icons8-red-circle-48.png"
                        alt=""></div>
                        </div>`;
                    modulo210.classList.remove('bordeLibre');
                    modulo210.classList.add('bordeOcupado');
                }

            }

            ////////////////////////
            //Pintar modulo 211 
            ///////////////////////    
            if (element.data().nombre == '211A') {
                html211 += `<img class="h-44 rounded-t-lg" src="/media/image-1.jpg" alt="" />
            <div class="p-4">
                <h5 class="mb-1 text-2xl font-bold tracking-tight text-white">Módulo ${element.data().nombre}</h5>
                <p class="mb-1 font-normal">Capacidad: ${element.data().capacidad} <br>`
                if (element.data().estado == 'Libre') {
                    html211 += `Estado:<span class="text-green-400 font-medium"> ${element.data().estado} </span><br>
            Hora límite de Uso: <span class="font-medium">${element.data().horatermino}</span><br>
            Hora Reservada a Docente: <span class="font-medium text-yellow-400">${element.data().reserva}</span></p>
                <div class="flex justify-center"><img class="imagenEstadoLibre h-9" src="/media/icons8-green-circle-48.png"
                        alt=""></div>
                        </div>`;
                    modulo211.classList.remove('bordeOcupado');
                    modulo211.classList.add('bordeLibre');
                } else {
                    html211 += `Estado:<span class="text-red-400 font-medium"> ${element.data().estado} </span><br>
            Hora límite de Uso: <span class="font-medium">${element.data().horatermino}</span><br>
            Hora Reservada a Docente: <span class="font-medium text-yellow-400">${element.data().reserva}</span></p>
                <div class="flex justify-center"><img class="imagenEstadoOcupado h-9" src="/media/icons8-red-circle-48.png"
                        alt=""></div>
                        </div>`;
                    modulo211.classList.remove('bordeLibre');
                    modulo211.classList.add('bordeOcupado');
                }

            }

            ////////////////////////
            //Pintar modulo 212 
            ///////////////////////    
            if (element.data().nombre == '212A') {
                html212 += `<img class="h-44 rounded-t-lg" src="/media/image-1.jpg" alt="" />
            <div class="p-4">
                <h5 class="mb-1 text-2xl font-bold tracking-tight text-white">Módulo ${element.data().nombre}</h5>
                <p class="mb-1 font-normal">Capacidad: ${element.data().capacidad} <br>`
                if (element.data().estado == 'Libre') {
                    html212 += `Estado:<span class="text-green-400 font-medium"> ${element.data().estado} </span><br>
            Hora límite de Uso: <span class="font-medium">${element.data().horatermino}</span><br>
            Hora Reservada a Docente: <span class="font-medium text-yellow-400">${element.data().reserva}</span></p>
                <div class="flex justify-center"><img class="imagenEstadoLibre h-9" src="/media/icons8-green-circle-48.png"
                        alt=""></div>
                        </div>`;
                    modulo212.classList.remove('bordeOcupado');
                    modulo212.classList.add('bordeLibre');
                } else {
                    html212 += `Estado:<span class="text-red-400 font-medium"> ${element.data().estado} </span><br>
            Hora límite de Uso: <span class="font-medium">${element.data().horatermino}</span><br>
            Hora Reservada a Docente: <span class="font-medium text-yellow-400">${element.data().reserva}</span></p>
                <div class="flex justify-center"><img class="imagenEstadoOcupado h-9" src="/media/icons8-red-circle-48.png"
                        alt=""></div>
                        </div>`;
                    modulo212.classList.remove('bordeLibre');
                    modulo212.classList.add('bordeOcupado');
                }

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

    });
});
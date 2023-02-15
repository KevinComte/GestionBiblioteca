import {
  addDocente,
  onGetDocentes,
  getDocente,
  updateDocente,
  deleteDocente,

} from "./firebaseConfig.js";

const botonAgregar = document.getElementById("btnDocente");
const agregarDocente = document.getElementById("formDocentes");
const filtrarDocentes = document.getElementById("formFiltrar");
const docenteModal = document.getElementById("docenteModal");
const cerrarModalDocente = document.getElementById("cerrarModalDocente");
const tablaDoc = document.querySelector('.tablaDocentes');
let diaF = '';
let editStatusDocente = false;
let btnEditar = '';
let btnEliminar = '';
let id = '';

cerrarModalDocente.addEventListener("click", () => {
  docenteModal.classList.add("hidden");
});

botonAgregar.addEventListener("click", () => {
  docenteModal.classList.remove("hidden");
});

filtrarDocentes.addEventListener("submit", (e) => {
  e.preventDefault();
  diaF = filtrarDocentes["selectFiltrarDia"].value;

  onGetDocentes((querySnapshot) => {
    let listaDocentes = "";
    querySnapshot.forEach((element) => {
      if (element.data().dia == diaF) {
        listaDocentes += `<tr>
              <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-white border-b">
              ${element.data().rut}
              </th>
              <td class="px-6 py-4 border-b">
              ${element.data().nombre}
              </td>
              <td class="px-6 py-4 border-b">
              ${element.data().modulo}
              </td>
              <td class="px-6 py-4 border-b">
              ${element.data().dia}
              </td>
              <td class="px-6 py-4 border-b">
              ${element.data().horainicio}
              </td>
              <td class="px-6 py-4 border-b">
              ${element.data().horatermino}
              </td>
              <td class="px-6 py-4 border-b">
              ${element.data().fecha}
              </td>
              <td class="px-6 py-4 border-b">
              <input type="checkbox">
              </td>
              <td class="px-6 py-4 border-b">
              <button data-id="${element.id}" id="editarDocente" class="btn-editarDocente text-yellow-300 mr-3 font-medium hover:text-yellow-500">Editar</button>
              <button data-id="${element.id}" id="eliminarDocente" class="btn-eliminarDocente text-red-300 font-medium hover:text-red-500">Eliminar</button>
              
              </td>
          </tr>`;
      } else {
        // console.log(diaF);
      }
    });
    tablaDoc.innerHTML = listaDocentes;

    // Editar docente
    btnEditar = tablaDoc.querySelectorAll('.btn-editarDocente');
    if (btnEditar != '') {
      btnEditar.forEach((btn) => {
        btn.addEventListener('click', async (e) => {

          const doc = await getDocente(e.target.dataset.id);
          const docente = doc.data();
          docenteModal.classList.remove('hidden');

          id = doc.id;

          agregarDocente["docenteRut"].value = docente.rut;
          agregarDocente["docenteNombre"].value = docente.nombre;
          agregarDocente["selectModulo"].value = docente.modulo;
          agregarDocente["selectDia"].value = docente.dia;
          agregarDocente["docenteHoraInicio"].value = docente.horainicio;
          agregarDocente["docenteHoraTermino"].value = docente.horatermino;
          agregarDocente["docenteFecha"].value = docente.fecha;
          editStatusDocente = true;

          agregarDocente['agregarDoc'].innerText = 'Editar';

        });
      });
    }

    // Eliminar Docente
    btnEliminar = tablaDoc.querySelectorAll('.btn-eliminarDocente');
    if (btnEliminar != '') {
      btnEliminar.forEach((btn) => {
        btn.addEventListener('click', ({target: {dataset}}) => {
            deleteDocente(dataset.id);
        });

      });
    }

  });
});

agregarDocente.addEventListener("submit", (e) => {
  e.preventDefault();
  const rut = agregarDocente["docenteRut"].value;
  const nombre = agregarDocente["docenteNombre"].value;
  const modulo = agregarDocente["selectModulo"].value;
  const dia = agregarDocente["selectDia"].value;
  const horainicio = agregarDocente["docenteHoraInicio"].value;
  const horatermino = agregarDocente["docenteHoraTermino"].value;
  const fecha = agregarDocente["docenteFecha"].value;

  if (!editStatusDocente) {
    addDocente(rut, nombre, modulo, dia, horainicio, horatermino, fecha);
  } else {
    updateDocente(id, { rut, nombre, modulo, dia, horainicio, horatermino, fecha });
    editStatusDocente = false;
  }


  agregarDocente.reset();
  docenteModal.classList.add("hidden");

});





// pintar docentes
window.addEventListener('DOMContentLoaded', async () => {
  onGetDocentes(querySnapshot => {

    // Editar Docente




  });


});

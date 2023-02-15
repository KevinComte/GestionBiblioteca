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
const tablaDoc = document.querySelector(".tablaDocentes");
let diaF = "";
let editStatusDocente = false;
let btnEditar = "";
let btnEliminar = "";
let id = "";

let dia = "";

cerrarModalDocente.addEventListener("click", () => {
  docenteModal.classList.add("hidden");
});

botonAgregar.addEventListener("click", () => {
  docenteModal.classList.remove("hidden");
});

window.addEventListener("DOMContentLoaded", async () => {
  // diaF = filtrarDocentes["selectFiltrarDia"].value;

  onGetDocentes((querySnapshot) => {
    let listaDocentes = "";
    dia = "";
    // console.log(diaF);
    querySnapshot.forEach((element) => {
      if (element.id == "diaSelec") {
        dia = element.data().diaSeleccionado;
      } else {
      }
      if (dia == element.data().dia) {
        listaDocentes += `<tr>
              <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-white border-b">
              ${element.data().rut}
              </th>
              <td class="px-6 py-4 border-b">
              ${element.data().nombre}
              </td>
              <td class="px-6 py-4 border-b bg-blue-900">
              ${element.data().modulo}
              </td>
              <td class="px-6 py-4 border-b">
              ${element.data().dia}
              </td>
              <td class="px-6 py-4 border-b text-yellow-300">
              ${element.data().horainicio}
              </td>
              <td class="px-6 py-4 border-b">
              ${element.data().horatermino}
              </td>
              <td class="px-6 py-4 border-b">
              ${element.data().fecha}
              </td>
              <td class="px-6 py-4 border-b">
              <label class="cont">
  <input type="checkbox">
 
</label>
              </td>
              <td class="px-6 py-4 border-b">
              <button data-id="${
                element.id
              }" id="editarDocente" class="btn-editarDocente text-slate-900 mr-2 font-medium px-2 py-1 hover:text-white bg-yellow-500 hover:shadow-lg hover:shadow-yellow-500/80 rounded-lg">Editar</button>
              <button data-id="${
                element.id
              }" id="eliminarDocente" class="btn-eliminarDocente text-slate-900 mr-2 font-medium px-2 py-1 hover:text-white bg-red-500 hover:shadow-lg hover:shadow-red-500/80 rounded-lg">Eliminar</button>
              
              </td>
          </tr>`;
      }
    });

    tablaDoc.innerHTML = listaDocentes;

    // Editar docente
    btnEditar = tablaDoc.querySelectorAll(".btn-editarDocente");
    if (btnEditar != "") {
      btnEditar.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
          const doc = await getDocente(e.target.dataset.id);
          console.log(doc.id);
          const docente = doc.data();
          docenteModal.classList.remove("hidden");

          id = doc.id;

          agregarDocente["docenteRut"].value = docente.rut;
          agregarDocente["docenteNombre"].value = docente.nombre;
          agregarDocente["selectModulo"].value = docente.modulo;
          agregarDocente["selectDia"].value = docente.dia;
          agregarDocente["docenteHoraInicio"].value = docente.horainicio;
          agregarDocente["docenteHoraTermino"].value = docente.horatermino;
          agregarDocente["docenteFecha"].value = docente.fecha;
          editStatusDocente = true;

          agregarDocente["agregarDoc"].innerText = "Editar";
        });
      });
    }

    // Eliminar Docente
    btnEliminar = tablaDoc.querySelectorAll(".btn-eliminarDocente");
    if (btnEliminar != "") {
      btnEliminar.forEach((btn) => {
        btn.addEventListener("click", ({ target: { dataset } }) => {
          deleteDocente(dataset.id);
        });
      });
    }
  });
});

filtrarDocentes.addEventListener("submit", (e) => {
  e.preventDefault();
  diaF = filtrarDocentes["selectFiltrarDia"].value;
  console.log(diaF);
  let idDia = "diaSelec";
  // const doc = await getDocente('diaSelec');
  updateDocente(idDia, { diaSeleccionado: diaF });
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
    updateDocente(id, {
      rut,
      nombre,
      modulo,
      dia,
      horainicio,
      horatermino,
      fecha,
    });
    editStatusDocente = false;
  }

  agregarDocente.reset();
  docenteModal.classList.add("hidden");
});

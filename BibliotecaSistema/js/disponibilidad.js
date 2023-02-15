import { getModulos, onGetModulos, getModulo, updateModulo } from "./firebaseConfig.js";
const tablaModulos = document.querySelector(".tablaModulos");

window.addEventListener("DOMContentLoaded", async () => {
    // diaF = filtrarDocentes["selectFiltrarDia"].value;
  
    onGetModulos((querySnapshot) => {
      let listaModulos = "";

      querySnapshot.forEach((element) => {
          listaModulos += `<tr>
                <th scope="row" class="px-3 py-2 font-medium whitespace-nowrap text-white border-b">
                ${element.data().nombre}
                </th>
                <td class="px-3 py-2 border-b">
                ${element.data().capacidad}
                </td>`;
                if(element.data().estado == 'Libre'){
                    listaModulos +=    ` <td class="px-3 py-2 border-b bg-green-700">
                    ${element.data().estado}
                    </td>`;
                }else{
                    listaModulos +=  ` <td class="px-3 py-2 border-b bg-red-700">
                    ${element.data().estado}
                    </td>`;
                }
                listaModulos +=   `
                <td class="px-3 py-2 border-b">
                ${element.data().horatermino}
                </td>
                <td class="px-3 py-2 border-b text-yellow-300">
                ${element.data().reserva}
                </td>
            </tr>`;
    
      });
      tablaModulos.innerHTML = listaModulos;
    });
});
import { getModulos, onGetModulos, getModulo, updateModulo } from "./firebaseConfig.js";

const liberarForm = document.getElementById('formLiberar');
const alertaLiberar = document.getElementById('liberarAlerta');
const alertaError = document.getElementById('errorAlerta');

liberarForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    const moduloLiberado = liberarForm['selectModulo'].value;


    try {
        if(moduloLiberado != ""){
            updateModulo(moduloLiberado, {
                estado: 'Libre',
                horainicio: '',
                horatermino: '',
                usuario: '',
                insumos: '',
        
            });
    
            liberarForm['selectModulo'].disabled = true;
            alertaError.classList.add('hidden');
            
            alertaLiberar.classList.remove('hidden');
            // alertaLiberar.style.transition = 'transform 300ms ease-out';
            // alertaLiberar.style.transform = 'translate(0px, 44px)';
        }else{
            alertaError.classList.remove('hidden');
            
        }
    } catch (error) {
        
    }

   

   

});
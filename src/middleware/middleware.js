import Swal from 'sweetalert2/dist/sweetalert2.js';

import { addHero } from '../actions/myTeam';

export const handleAddMyTeamData = (dispatch, data, myTeamArr, id)=>{

      
    const goodResult = myTeamArr.filter(hero => hero.biography.alignment === "good");
    const badResult = myTeamArr.filter(hero => hero.biography.alignment === "bad");

    const [idSelected] = myTeamArr.filter(hero=> hero.id === id);
    const [herodata] =  data.filter(hero=> hero.id === id)
  
   //validacion y filto de heroes segun las especificaciones del proyecto

    if (!idSelected === true) {
        if (myTeamArr.length < 6) {       
            if (goodResult.length < 3 && herodata.biography.alignment === 'good') {
                 dispatch(addHero(herodata)) 
            } else if (badResult.length < 3 && herodata.biography.alignment === 'bad'){
                 dispatch(addHero(herodata))
            }else{
                if (goodResult.length < 3) {
                    Swal.fire('Oops...', 'tienes tres  heroes malos, selcciona unos buenos', 'error')
                } else {
                    Swal.fire('Oops...', 'tienes tres  heroes buenos, selcciona unos malos', 'error') 
                }
            }
         } else {             
             Swal.fire('Oops...', 'Tu equipo ya cuenta con seis integrantes ', 'error')
         } 
    } else {        
        Swal.fire('Oops...', 'hero ya esta en tu equipo', 'error')
    }
};
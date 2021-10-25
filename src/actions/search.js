import axios from 'axios';
import { types } from '../types/types';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss'

//Llamada a API Heroes para recibir la lista de coincidencias con en nombre solicitado
export const heroSearch = (data)=>{

    const {search: hero} = data 
         
    return async(dispatch)=>{
       
            const res = await axios.get(`https://superheroapi.com/api.php/10226000777461921/search/${hero}`);
            const errorNotFound = res.data.error
            const data = res.data.results
        try {           
            if (!!data === false) {
                Swal.fire(`${errorNotFound}`, 'Access is denied ', 'error')                
            } else {
                dispatch(setDataSearch(data))
            }
        } catch (error) {
            console.log(error)
        }
    }
};

//Llamada a api para solicitar informacion requeria por ID
export const searchDetailsId = (id)=>{

    return async (dispatch)=>{
        try{
        const config = {
            method: 'GET',
            url: `https://cors-everywhere-me.herokuapp.com/https://superheroapi.com/api/10226000777461921/${id}`,
        }
        const res = await axios(config);
        const dataDetail = res.data;
        
        dispatch(setDataDetails(dataDetail));

        }catch(error){
            console.log(error)
        }
    }
};
const setDataSearch = (data)=>({
    type: types.startSearchHero,
    payload:{
        data
    }
});

export const clearDataSearch = ()=>({
    type: types.clearSearchHero,
    payload:{
        data:[]
    }
});

const setDataDetails = (data)=>({
    type: types.showDetails,
    payload:{
        data
    }
});

export const clearDataDetails = ()=>({
    type: types.clearDetails,
    payload:{
        data:[]
    }
});







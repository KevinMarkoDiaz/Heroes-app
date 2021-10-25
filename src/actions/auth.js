import axios from 'axios';
import { types } from '../types/types';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss'

export const startLogin = (email, password) =>{

    return async(dispatch) =>{

        try {            
            
        const res = await axios.post('https://cors-everywhere-me.herokuapp.com/http://challenge-react.alkemy.org/', {email, password})
        const {token} = res.data;
            
            localStorage.setItem('token', token)
            dispatch(login(token))           
            window.location.reload(false);
            
        } catch (error) {

           console.log(error)            

            Swal.fire(`Opss...`, 'Access is denied ', 'error')
        }
    }
};

export const startLogOut = ()=>{

    window.localStorage.clear();
    return async(dispatch)=>{
        dispatch(logOut())
    }
};

const logOut = ()=>({
    type: types.startLogout
});

const login =(token)=>({
    type: types.startLogin,
    payload:{
        token
    }
});
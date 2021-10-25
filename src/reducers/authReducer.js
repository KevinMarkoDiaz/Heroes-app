import { types } from "../types/types";

const initialState = {
    auth: false,
    checking: false,    
};


export const authReducer = (state = initialState, action)=>{

    switch (action.type) {
        case types.startLogin:

            return({
                ...state,
                auth:true,
                checking: false,
                ...action.payload
                
            })   

            
        case types.startLogout:

            return({
               initialState
                
            })     
            
        
        default: 
        
                return state
            
    }
    
};
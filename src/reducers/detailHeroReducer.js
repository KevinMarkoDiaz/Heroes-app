import { types } from "../types/types";


const initialState = {
    data: []
}

export const detailHeroReducer = (state= initialState, action)=>{

    switch (action.type) {
        case types.showDetails:
            
            return({
                ...action.payload
            });

        case types.clearDetails:
            
            return(
                state,
                {
                ...action.payload
            })
            ;           
    
        default:
            return(
                state
                )
    }

};
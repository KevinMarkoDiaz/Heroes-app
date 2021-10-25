import { types } from "../types/types";


const initiaState = {
    data: []
}

export const heroReducer = (state = initiaState , action)=>{

   switch (action.type) {
       case types.startSearchHero:

            return(
                state,
                {
                ...action.payload
            })
        case types.clearSearchHero:

            return(
                initiaState
            )   
            
       default:

            return(
                state
            )
           
   }

}

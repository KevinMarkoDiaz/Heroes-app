import { types } from "../types/types";

const initiaState = {
    data: []
}

export const myTeam = (state= initiaState, {type, payload})=>{

    switch (type) {
        case types.addHeroTeam:

        return ({

            data: [
                ...state.data,
                payload
            ]        
        })

        case types.removeHeroTeam:


        return({

            data: [
                ...payload.newTeam
            ]
        })
            
            
        default:
            return(
                state
            )
    }

}; 
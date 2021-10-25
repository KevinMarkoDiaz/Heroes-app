import { types } from "../types/types";

export const addHero = (data)=>{
    
    return async (dispatch)=>{        
        dispatch(addHeroStore(data))         
    }    
};

export const removeHero = (myTeam, id)=>{
   
    const newTeam = myTeam.filter(hero => hero.id !== id);
    
    return async(dispatch)=>{
        dispatch(removeHeroState(newTeam))
    }
};

const addHeroStore = (data)=>({
    type: types.addHeroTeam,
    payload:{
        ...data
    }
});

const removeHeroState = (newTeam)=>({

    type: types.removeHeroTeam,
    payload:{
        newTeam
    }
});
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import { authReducer } from "../reducers/authReducer";
import { heroReducer } from "../reducers/heroReducer";
import { detailHeroReducer } from "../reducers/detailHeroReducer";
import { myTeam } from "../reducers/myTeam";




const reducers = combineReducers({
    
    authReducer: authReducer,
    heroReducer: heroReducer,
    detailStore: detailHeroReducer,
    myTeam: myTeam

})
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(

    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
    
    
); 
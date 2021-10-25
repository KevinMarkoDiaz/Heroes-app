import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import { searchDetailsId } from '../../../actions/search'
import { handleAddMyTeamData } from '../../../middleware/middleware'

export const HeroSearchCard = ({hero}) => {

    const {id} = hero;
    const {data} = useSelector(state => state.heroReducer);
    const {data: myTeamArr} = useSelector(state => state.myTeam);
    const dispatch = useDispatch();

    const handleAddMyTeamDataHero = ()=>{
        handleAddMyTeamData(dispatch, data, myTeamArr, id)
    };

    const handleDetails = (e)=>{        
        dispatch(searchDetailsId(id))
    };

    return (
        <>
           <div className="col-sm man d-flex justify-content-evenly  " key={hero.id}>                           
                <div className="card cardHover shadow-lg mb-5" style={{width: 18+"rem"}} >
                    <img src={hero.image.url} className="card-img-top" alt="Hero img"/>
                        <div className="card-body">
                            <h5 className="card-title">{hero.name}</h5>
                                <div className="d-flex justify-content-between">
                                    <Link 
                                        to="/detail" 
                                        type="button" 
                                        onClick={ handleDetails} 
                                        className="btn btn-outline-primary btn-sm"
                                    >
                                        Details
                                    </Link>
                                    <button 
                                        type="button" 
                                        onClick={handleAddMyTeamDataHero} 
                                        className="btn btn-outline-success btn-sm "
                                    >
                                        Add
                                    </button>
                                </div>                                   
                        </div>
                </div>                        
            </div>  
        </>
    )
}

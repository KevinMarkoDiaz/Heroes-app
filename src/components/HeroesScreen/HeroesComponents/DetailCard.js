import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { clearDataDetails } from '../../../actions/search';
import { handleAddMyTeamData } from '../../../middleware/middleware'

export const DetailCard = () => {

    const dispatch = useDispatch();
    
    const {data} = useSelector(state => state.heroReducer);
    const {data:heroDetail} = useSelector(state => state.detailStore);
    const {data: myTeamArr} = useSelector(state => state.myTeam);
    const{ biography } = heroDetail   

    const{name, image, appearance, work, id }= heroDetail;
    const hairColor = appearance["hair-color"]
    const eyeColor = appearance["eye-color"]
    const{ aliases } = biography    
   
    const handleAddMyTeamDataHero = ()=>{
        handleAddMyTeamData(dispatch, data, myTeamArr, id)
    };

    const handleClearDetails = ()=>{
        dispatch(clearDataDetails())
    };

    return (
        <>
            <div className="bg__grey container-lg shadow mt-5 align-items-center d-flex justify-content-center animate__animated animate__fadeInLeftBig  animate__faster" >      
                <div className=" bg__grey card border shadow mt-4 mb-4 Fontligth" style={{maxWidth: 1000+"px"}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={image.url} className="img-fluid rounded-start shadow" alt="img Hero"/>
                        </div>
                        <div className="col-md-8 bor">
                          <div className="card-body">
                            <h4 className="card-title"><i className="fas fa-shield-alt"></i> {name}</h4>
                             <ul className="listStyleNone">
                              <li><p> Peso: <strong>{appearance.weight[1]}</strong></p></li>
                              <li><p> Altura: <strong>{appearance.height[1]}</strong></p></li>
                              <li><p> Color de ojos: <strong>{eyeColor}</strong></p></li>
                              <li><p> Color de cabello: <strong>{hairColor}</strong></p></li>
                              <li><p> Logar de trabajo: <strong>{work.base}</strong></p></li>
                              <li><h5><i className="fas fa-mask"></i> Alias:</h5>
                                  <ul>
                                    {
                                       aliases.map(alias=>(<li key={alias} className="listStyleNone">{alias}</li>))         
                                    }
                                  </ul>
                                </li>                          
                                    
                            </ul>
                          </div>
                        </div>
                    </div>
              <div className="d-flex justify-content-between p-3">                              
                <Link  
                    to="/search" 
                    className="btn btn-warning" 
                    onClick={handleClearDetails}
                    >
                    Back
                </Link>
                <button 
                    type="button" 
                    onClick={handleAddMyTeamDataHero} 
                    className="btn btn-success btn-sm"
                    >
                    Agregar
                </button>                              
                    </div>
              </div>                              
            </div>    
        </>
    )
};

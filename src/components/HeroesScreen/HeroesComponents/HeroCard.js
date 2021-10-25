import React from 'react'
import { useDispatch } from 'react-redux';

import { Radar } from "react-chartjs-2";

import { removeHero } from '../../../actions/myTeam';


export const HeroCard = ({hero , myTeam}) => {

    const dispatch = useDispatch()

    const handleRemove = (e)=>{    
        const id = hero.id
        dispatch(removeHero(myTeam, id ))
    };
    
    //configuracion de Chartjs
    
    const data =  {
        labels: ["intelligense", "strength", "speed", "durability", "power", "combat"],
        datasets: [
          {
            label: 'Powerstats,',
            data: [hero.powerstats.intelligense, hero.powerstats.strength, hero.powerstats.speed, hero.powerstats.durability, hero.powerstats.power, hero.powerstats.combat],
            backgroundColor: 'rgba(81, 255, 0, 0.203)',
            borderColor: 'rgba(51, 160, 0, 1)',
            borderWidth: 1,
          },
        ],
      };

      const options = {
        scale: {
          ticks: { beginAtZero: true },
        },
      };

    return (
      <>  
        <div className="col-sm d-flex justify-content-evenly ">
            <div className="card mb-5 shadow-lg " style={{width: 18+"rem"}}>
                <div className="cardHover">
                     <img src={hero.image.url} className="card-img-top " alt="HeroImg"/> 
                     <div className="cardHover__hover" id="canvas">
                        {
                            data?<Radar data={data} options={options} />: null
                        }
                     </div>
                </div>

               <div className="card-body">
                   <h5 className="card-title"><i className="fas fa-shield-alt"></i> {hero.name}</h5>                                         
                   <div className="d-flex justify-content-between">
                   <button type="button" className="btn btn-outline-danger btn-sm " onClick={handleRemove}>
                       Remove 
                   </button>
                   <button type="button" className="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target={"#staticBackdrop"+hero.id}>
                        Details
                   </button>


                  <div className="modal fade" id={"staticBackdrop"+ hero.id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="staticBackdropLabel">HERO DETAILS</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          <div className="card border-0 mb-3" style={{maxWidth: 1000+"px"}}>
                            <div className="row g-0">
                              <div className="col-md-4">
                                <img src={hero.image.url} className="img-fluid rounded-start shadow" alt="img Hero"/>
                              </div>
                              <div className="col-md-8">
                                <div className="card-body">
                                    <h4 className="card-title"><i className="fas fa-shield-alt"></i> {hero.name}</h4>
                                    <ul className="listStyleNone">
                                            <li><p>Peso: <strong>{hero.appearance.weight[1]}</strong></p></li>
                                            <li><p>Altura: <strong>{hero.appearance.height[1]}</strong></p></li>
                                            <li><p>Color de ojos: <strong>{hero.appearance.eyeColor}</strong></p></li>
                                            <li><p>Color de cabello:<strong>{hero.appearance.hairColor}</strong></p></li>
                                            <li><p>Logar de trabajo: <strong>{hero.work.base}</strong></p></li>
                                            <li><h5> <i className="fas fa-mask"></i> Alias:</h5> 
                                                <ul>{
                                                      hero.biography.aliases.map(alias  => (
                                                          <li key={alias} className="listStyleNone"> {alias} </li>
                                                      ))
                                                    }
                                                </ul>
                                            </li>
                                    </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-danger" data-bs-dismiss="modal" >
                              Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>                                           
)
};

import React from 'react'

import { StatusTeam } from './StatusTeam';
import {HeroCard} from './HeroCard';

export const DataTeam = ({myTeam}) => {
    return (
        <>
        <StatusTeam />
          <div className="  container-sm mt-5 " >
            <div className="row row-cols-1 d-flex justify-content-evenly ">
              {
                 myTeam.map((hero)=> <HeroCard hero={hero} myTeam={myTeam} key={hero.id}/>)
              };
            </div>
          </div>
        </>
    )
}

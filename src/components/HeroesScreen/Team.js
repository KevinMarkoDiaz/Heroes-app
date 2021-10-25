import React from 'react'
import { useSelector } from 'react-redux'

import { NavBar } from './HeroesComponents/NavBar';
import { NoTeam } from './HeroesComponents/NoTeam';
import { DataTeam } from './HeroesComponents/DataTeam';

export const Team = () => {

  const {data:myTeam} = useSelector(state => state.myTeam)   

  return(
    <>
      <NavBar/>
      {
        !!myTeam[0] === false ? <NoTeam/> : <DataTeam myTeam={myTeam}/>
      }
    </>
  )
};


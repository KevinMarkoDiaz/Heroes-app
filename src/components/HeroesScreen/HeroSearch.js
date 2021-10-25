import React from 'react'
import { useSelector } from 'react-redux'

import 'sweetalert2/src/sweetalert2.scss'

import { NavBar } from './HeroesComponents/NavBar'

import { HeroSearchCard } from './HeroesComponents/HeroSearchCard';
import { SearchImput } from './HeroesComponents/SearchImput';


export const HeroSearch = () => {    
  
    const {data} = useSelector(state => state.heroReducer)

    return (
        <>
            <NavBar/>
            <SearchImput/>
            <div className="  container-sm mt-5 animate__animated animate__fadeIn " >
            <div className="row row-cols-1 d-flex justify-content-evenly ">
            {
                data.map(hero=><HeroSearchCard hero={hero} key={hero.id}/>)
            }
            </div>
          </div>
        </>
    )
};

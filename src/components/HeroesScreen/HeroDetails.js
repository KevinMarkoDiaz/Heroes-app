import React from 'react'
import { useSelector } from 'react-redux'

import { NavBar } from './HeroesComponents/NavBar'
import { DetailCard } from './HeroesComponents/DetailCard';
import { Loading } from './HeroesComponents/Loading';

export const HeroDetails = () => {
    
    const {data:heroDetail} = useSelector(state => state.detailStore);
    const{ biography } = heroDetail;

    return (
        <>
            <NavBar/>
            {
                !!biography === false?  <Loading/> : <DetailCard />
            }
        </>
    )        
};
                        
                        
                        
import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';


export const PublicRoute = ({
    component: Component,
    ...rest
}) => {
    
    const token = localStorage.getItem('token')
 
    return (
        <Route { ...rest }
            component={ (props) => (
                ( !!token )
                    ? ( <Redirect to="/" /> )
                    : ( <Component { ...props } /> )
            )}        
        />
    )
}
PublicRoute.propTypes = {
    component: PropTypes.func.isRequired
}

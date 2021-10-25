import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({
    component: Component,
    ...rest
}) => {

    const token = localStorage.getItem('token')
    
    return (
        
        <Route { ...rest }
            component={ (props) => (
                ( !!token )
                    ? ( <Component { ...props } /> )
                    : ( <Redirect to="/login" /> )
            )}        
        />
    )
}

PrivateRoute.propTypes = {
    component: PropTypes.func.isRequired
}

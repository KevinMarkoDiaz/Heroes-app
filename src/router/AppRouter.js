import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  
  } from "react-router-dom";
  
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { LoginScreen } from "../components/auth/LoginScreen";
import { HeroDetails } from "../components/HeroesScreen/HeroDetails";
import { HeroSearch } from "../components/HeroesScreen/HeroSearch";
import { Team } from "../components/HeroesScreen/Team";


export const AppRouter = () => {  

    return (
        <Router>                
               <Switch>           
                  <PrivateRoute 
                      exact 
                      path="/" 
                      component={Team}
                      /> 

                  <PrivateRoute 
                      exact 
                      path="/detail" 
                      component={HeroDetails}
                      />   

                  <PrivateRoute 
                      exact 
                      path="/search" 
                      component={HeroSearch}
                      /> 

                  <PublicRoute 
                      exact 
                      path="/login" 
                      component={LoginScreen}
                      />

                  <Redirect to='/'/>                
              </Switch>
        </Router>
    )     
};

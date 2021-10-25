import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogOut } from '../../../actions/auth';

export const NavBar = () => {

const dispatch = useDispatch()

const handleLogOut = (e)=>{

  dispatch(startLogOut())
};
    return (
        <>
          <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">                
                
                <Link to="/" className="navbar-brand">My team <i className="fas fa-users " ></i></Link>
                <Link to="/search" className="navbar-brand">Search  <i className="fas fa-search"></i></Link>          
                
            <form className="d-flex">
                 <button className="btn btn-outline-danger" onClick={handleLogOut}>Log out <i className="fas fa-sign-out-alt"></i></button>
            </form>
            </div>
          </nav>  
        </>
    )
};

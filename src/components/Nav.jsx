
import  './Nav.css'
import { NavLink} from 'react-router-dom'
import React from 'react';


export default function Nav (){

   
    return(
        <div className="maindiv">
            <div className="logo">
                <h5>Aishat Ismail</h5>
            </div>

            <div className="navLinks">
                <div className="links">
                    <NavLink to={'/'}>
                        <div>Home</div>
                    </NavLink>

                    <NavLink to={'/about'}>
                        <div>About</div>
                    </NavLink>

                    <NavLink to={'/services'}>
                        <div>Services</div>
                    </NavLink>

                    <NavLink to={'/contact'}>
                        <div>Contact</div>
                    </NavLink>
                    
                </div>
                <div className="linkBtn">
                    <NavLink to={'/login'}>
                        <button>LogIn</button>
                    </NavLink>
                    
                    <NavLink to={'/'}>
                        <button>LogOut</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

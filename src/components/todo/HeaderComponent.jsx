import { Component } from "react";
import { Link } from "react-router-dom";
import AuthentictionSevice from "./AuthentictionSevice.js";

class HeaderComponent extends Component{
   
    render(){
        const isUserLoggedIn = AuthentictionSevice.isUserLoggedIn();
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a className="navbar-brand">WisdomValley</a>
                    </div>
                    <ul className="navbar-nav">
                       {isUserLoggedIn && <li ><Link className="nav-link" to={'/welcome/Admin'}>Home</Link></li>}
                        {isUserLoggedIn && <li><Link  className="nav-link" to={'/todos'}>ToDos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end" >
                        {!isUserLoggedIn && <li ><Link className="nav-link" to={'/login'}>Login</Link></li>}
                        {isUserLoggedIn && <li ><Link className="nav-link" to={'/logout'} onClick={AuthentictionSevice.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default HeaderComponent
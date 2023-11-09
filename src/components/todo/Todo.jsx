import React ,{Component} from "react";
import LoginApp from "./Login";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Welcome from "./Welcome";
import withNavigation from "./withNavigation";
import withParams from "./withParams";
import Todos from "./Todos";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import LogoutComponent from "./LogoutComponent";
import AuthenticatedRoute from "./AuthenticatedRoute";


class TodoApp extends Component{
    render(){
        const LoginComponentWithNavigation = withNavigation(LoginApp);
        const WelcomeComponentWithParams = withParams(Welcome);
        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
        return(
            <>
            
            <Router>
            <HeaderComponentWithNavigation />
                    <Routes>
                        <Route path="/" element={<LoginComponentWithNavigation />} />
                        <Route path="/login" element={<LoginComponentWithNavigation />} />
                        <Route path="/welcome/:name" element={<AuthenticatedRoute> <WelcomeComponentWithParams /> </AuthenticatedRoute>} />
                        <Route path="*" element={<ErrorComponent />} />
                        <Route path="/todos" element={<AuthenticatedRoute> <Todos /> </AuthenticatedRoute>} />
                        <Route path="/logout" element={<AuthenticatedRoute><LogoutComponent /> </AuthenticatedRoute>}  />
                    </Routes>
                    <FooterComponent /> 
                </Router>
             
            </>
        )
    }
}

function ErrorComponent(){
    return(
        <div>Eoor page please check the URL or contact support at abc@gmail.com</div>
    )
}


export default TodoApp
import { Component } from "react";
import AuthentictionSevice from "./AuthentictionSevice.js";

class LoginApp extends Component{

    constructor(props){
        super(props)

        this.state = {
            username : 'Admin',
            password : '',
            hasLoggedInFailed : false,
            isLoginSuccess : false
        }

        this.handleEvent = this.handleEvent.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    loginClicked(event){
        if(this.state.username === 'Admin' && this.state.password === 'admin123'){
            AuthentictionSevice.registerSuccessfulLogin(this.state.username)
           this.props.navigate(`/welcome/${this.state.username}`)
        }
       else
        {
            console.log(event.target.name);
            this.setState(
                {
                    hasLoggedInFailed : false,
                    isLoginSuccess : false
                }
            )
        }
    }

    render(){

        return(
            <>
             <h1>Login</h1>
                <div className="container">
               {this.state.hasLoggedInFailed && <div className="alert alert-warning">Invalid credential</div>}
               
              
                UserName : <input type="text" name="username" value={this.state.username} onChange={this.handleEvent}></input>
                Password : <input type="password" name="password" onChange={this.handleEvent}></input>
                <button onClick={this.loginClicked}>Login</button>
                </div>
            </>
        )
    }

    handleEvent(event){console.log(event.target.value); this.setState({[event.target.name]:event.target.value})}
}

export default LoginApp;
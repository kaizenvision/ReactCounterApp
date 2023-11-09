import { Component } from "react";
import Todos from "./Todos";
import { Link } from "react-router-dom";

class Welcome extends Component{
    render(){
        return(
            <div>
                 <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.params.name}.
                    You can manage your todos <Link to="/todos">here</Link>.
                </div>
            </div>
        )
    }
}
export default Welcome;
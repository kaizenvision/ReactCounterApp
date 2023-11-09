import { Component } from "react";

class Todos extends Component{
    constructor(props){
        super(props)

        this.state = {
            todos :
            [
                {id : 1, description: "learn react", done:false, targetDate: new Date()},
                {id : 2, description: "learn sprinboot", done:false, targetDate: new Date()},
                {id : 3, description: "Become fullstack", done:false, targetDate: new Date()}
            ]
        }
    }
    render(){
        return(
            <div className="container">
                <table className="table">
                    <thead>
                        <th>id</th>
                        <th>Description</th>
                        <th>Is Completed?</th>
                        <th>Target Date</th>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo =>
                                    <tr>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                    </tr>
                            )
                            
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Todos;
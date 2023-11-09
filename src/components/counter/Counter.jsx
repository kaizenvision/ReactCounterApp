import { Component } from "react";
import './Counter.css'

class Counter extends Component{
    constructor(){
        super();
        this.state = {
            counter : 0
        }

        this.increment = this.increment.bind(this)
    }

    render(){
        return (
            <div className="counter">
                <CounterButton by={1}  incrementMethod = {this.increment}/>
                <CounterButton by={10}  incrementMethod = {this.increment}/>
                <CounterButton by={15}  incrementMethod = {this.increment}/>
                <CounterButton by={100}  incrementMethod = {this.increment}/>
                <CounterButton by={50}  incrementMethod = {this.increment}/>
                <CounterButton by={5}  incrementMethod = {this.increment}/>
                <span className="count">{this.state.counter}</span>
            </div>
        )
    }

    increment(by){
        this.setState({
            counter : this.state.counter + by
        })
    }
}

class CounterButton extends Component{

  
    render(){
        return (
            <div className="counter">
                <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
           
            </div>
        )
    }
    
}

CounterButton.defaulProps = {
    by : 1
};

export default Counter
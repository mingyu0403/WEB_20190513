import React, {Component} from 'react';

import './counter.scss';
import Number from "./Number";

// statefull component
class Counter extends Component {

    state = {
        num1: 0,
        num2: 0,
        result: 0
    };

    render() {
        let {num1, num2, result} = this.state;
        return (
            <div className='counter-style'>
                <div>{result}</div>
                <Number delta={num1} handleChange={this.handleChangeNum1}/>
                <Number delta={num2} handleChange={this.handleChangeNum2}/>
                <button onClick={this.handleAdd}>+</button>
                <button onClick={this.handleSub}>-</button>
                <button onClick={this.handleMul}>*</button>
                <button onClick={this.handleDiv}>/</button>
            </div>
        );
    }

    handleChangeNum1 = event => this.setState({
        num1: parseInt(event.target.value)
    });
    handleChangeNum2 = event => this.setState({
        num2: parseInt(event.target.value)
    });
    handleAdd = () => this.setState({
        result: this.state.num1+this.state.num2
    });
    handleSub = () => this.setState({
        result: this.state.num1-this.state.num2
    });
    handleMul = () => this.setState({
        result: this.state.num1*this.state.num2
    });
    handleDiv = () => this.setState({
        result: this.state.num1/this.state.num2
    });
}

export default Counter;
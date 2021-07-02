import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, sign_in } from '../actions';


class Counter extends Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)    
    }
    handleChange(e){
        const target_name = e.target.name;
        switch(target_name){
            case "increment":
                this.props.increment()
                break;
            case "decrement":
                this.props.decrement()
            case "sign_in":
                this.props.sign_in()
        }
    }
    render() { 
        return ( 
            <Fragment>
                <h1>Counter {this.props.counter} </h1>
                <span><button name="increment" onClick={this.handleChange}>+</button><button name="decrement" onClick={this.handleChange}>-</button></span>
                <h1>Logged </h1>
                <button name="sign_in" onClick={this.handleChange}>sign in</button>
            </Fragment>

        );
    }
}

const mapState2Props =  state => ({
    counter:state.counter
})

export default connect(mapState2Props,{increment,decrement, sign_in})(Counter);
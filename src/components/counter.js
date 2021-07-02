import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';


class Counter extends Component {
    constructor(props){
        super(props)
        
    }

    render() { 
        return ( 
            <Fragment>
                <h1>Counter {this.props.counter} </h1>
                <span><button name="increment" onClick={this.props.increment}>+</button><button name="decrement" onClick={this.props.decrement}>-</button></span>
                <h1>Logged </h1>
            </Fragment>

        );
    }
}

const mapState2Props =  state => ({
    counter:state.counter
})

export default connect(mapState2Props,{increment,decrement})(Counter);
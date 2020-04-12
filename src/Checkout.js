import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    useHistory,
    Redirect
  } from "react-router-dom";

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });
        this.input = React.createRef();
        this.state = {
            cost : this.formatter.format(0),
            amount : 0,
            product : null,
            data : null
        }

        this.updateCost = this.updateCost.bind(this);
    }

    componentWillMount() {
        this.setState({
            product : this.props.location.state.product,
            data : this.props.location.state.data,
        });
    }

    updateCost() {
        

        this.setState({
            amount : this.input.current.value,
            cost : this.formatter.format(this.input.current.value * this.state.data.cost)
        });
    }

    render() {
        return (
            <section className='section checkout'>
                <div className='section row justify-content-md-center'>
                    <div className='col-8'>
                        <div className='header'>
                            <h2 className='title'>Checkout</h2>
                            <hr></hr>
                        </div>
                        <div>
                            <h5 className='title is-5'>{this.state.product.itemName}</h5>
                            <p>{this.state.product.description}</p>
                            <br></br>
                            <p>Cost per unit: {this.formatter.format(this.state.data.cost)}</p>

                            <p>Amount: </p>
                            <input min={0} ref={this.input} className='input am-in' type='number' name='amount' step='1' onChange={this.updateCost}/>
                            <hr></hr>
                            <p>Total: {this.state.cost}</p>
                            <br></br>
                            <button className='button is-light'>
                                Proceed
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Checkout;
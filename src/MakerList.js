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
import './App.css';


class MakerView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            used : false,
            data : null,
            product : null
        }
        this.formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });
    }

    setData(data, prod) {
        this.setState({
            product : prod,
            data: data,
            used: true
        })
    }

    render() {
        if (!this.state.used) {
            return (
                <div className='maker-view'></div>
            )
        }
        
        return (
            <div className='maker-view'>
                <div className='maker-type'>
                    <h5 className='title is-4'>Manufacture type: </h5>
                    <p>{this.state.data.type}</p>
                </div>
                <div className='maker-type'>
                    <h5 className='title is-5'>Available Materials: </h5>
                    <p>{this.state.data.material}</p>
                </div>
                <div className='maker-type'>
                    <h5 className='title is-5'>Cost per unit : </h5>
                    <p>{this.formatter.format(this.state.data.cost)}</p>
                </div>
                <div className='bottom-bar'>
                    <Link to={{pathname : '/Checkout', state : {data: this.state.data, product: this.state.product}}}>
                        <button className='button float-l is-white'>Request</button>
                    </Link>
                </div>
            </div>
        );
    }
}

class MakerCard extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return(
            <div className='box maker-card' onClick={() => {
                    this.props.callback(this.props.object);
                }}>
                <h4 className='title is-4'>{this.props.object.name}</h4>
            </div>
        );
    }
}

class MakerList extends Component {
    constructor(props) {
        super(props);
        this.makerView = React.createRef();
        this.updateMakerView = this.updateMakerView.bind(this);
        this.state = {
            product : null,
            makers : [
                {
                    name : 'Maker1',
                    type : '3dprinter',
                    material : 'PETG',
                    cost : 99
                },
                {
                    name : 'Maker2',
                    type : '3dprinter',
                    material : 'PETG',
                    cost : 91
                },
                {
                    name : 'Maker3',
                    type : '3dprinter',
                    material : 'PETG',
                    cost : 90
                },
            ],
            currentSelection : null
        }
    }

    componentDidMount() {
        this.setState({
            product : this.props.location.state.product,
        });
    }

    updateMakerView(data) {
        this.makerView.current.setData(data, this.state.product);
    }

    render() {
        return (
            <section className='section maker-list'>
                <div className='columns'>
                     <div className='container'>
                        <div className='header level'>
                            <div className='level-left'>
                                <h2 className='title'>Makers</h2>
                            </div>
                            <div className='level-right'>
                                <button className='button is-white fs-12'>Filter</button>
                            </div>
                        </div>
                        <div className='list-container'>
                            {this.state.makers.map((maker) => <MakerCard object={maker} callback={this.updateMakerView}></MakerCard>)}
                        </div>
                     </div>
                     <div className='column notification is-one-third'>
                        <div className='maker-show'>
                            <MakerView ref={this.makerView}/>
                        </div>
                     </div>
                </div>
            </section>
        );
    }
}

export default MakerList;
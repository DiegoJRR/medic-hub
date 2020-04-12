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


class MakerCard extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return(
            <div className='box maker-card'>
                <h4 className='title is-4'>{this.props.object.name}</h4>
            </div>
        );
    }
}

class MakerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            makers : [
                {
                    name : 'Maker1'
                },
                {
                    name : 'Maker2'
                },
                {
                    name : 'Maker3'
                },
                {
                    name : 'Maker4'
                },
                {
                    name : 'Maker5'
                },
                {
                    name : 'Maker6'
                },
                {
                    name : 'Maker7'
                },
                {
                    name : 'Maker3'
                },
                {
                    name : 'Maker4'
                },
                {
                    name : 'Maker5'
                },
                {
                    name : 'Maker6'
                },
                {
                    name : 'Maker7'
                }
            ]
        }
    }

    render() {
        return (
            <section className='section maker-list offset'>
                <div className='columns'>
                     <div className='container'>
                        <div className='header'>
                            <h2 className='title'>Makers</h2>
                        </div>
                        <div className='list-container'>
                            {this.state.makers.map((maker) => <MakerCard object={maker}></MakerCard>)}
                        </div>
                     </div>
                     <div className='column notification is-one-third'>
                        <div className='maker-show'>
                            
                        </div>
                     </div>
                </div>
            </section>
        );
    }
}

export default MakerList;
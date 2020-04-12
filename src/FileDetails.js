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


class FileDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl : '',
            itemName : '',
            redirected : null
        }
        // this.detailView = React.createRef();
        // this.solicitudeView = React.createRef();
    }

    componentDidMount() {
        this.setState({
            imageUrl : this.props.location.state.imageUrl,
            itemName : this.props.location.state.itemName
        });
    }

    render() {
        
        if (this.state.redirected) {
            return this.state.redirected;
        }
        return (
            <div className='file-details section'>
               <div className="tile is-ancestor">
                <div className='tile is-parent is-vertical is-12'>
                    <div className='tile is-vertical is-12'>
                        <div className='title is-parent is-12'>
                            <div className='tile is-child is-12'>
                                <h2 className='title'>{this.state.itemName}</h2> 
                                <hr></hr>
                            </div>
                        </div>
                    </div>
                    <div className="tile">
                        <div className="tile is-12">
                        <div className="tile is-parent">
                            <div className="tile is-4 is-child notification is-primary view-container">
                                <img className='display-img' src={this.state.imageUrl}></img>
                            </div>
                            <div className="tile is-parent is-vertical">
                                <div className='tile is-child specs-container'>
                                    <div  className='specs-detail-view'>
                                        <p>Description</p>
                                        <br></br>
                                        <ul>
                                            <li>Field</li>
                                            <li>Field</li>
                                            <li>Field</li>
                                            <li>Field</li>
                                            <li>Field</li>
                                        </ul>
                                    </div>
                                    <div  className='specs-solicitude-view' hidden>
                                        Solicitar
                                    </div>
                                </div>
                                <div className='tile is-child is-12 level'>
                                    <div className='float-l'>
                                        <Link to={{pathname : '/MakerList',
                                                state : {name: this.state.itemName}}}>
                                                <button className='level-item button is-white' onClick={() => {}}>Explore Providers</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FileDisplay;
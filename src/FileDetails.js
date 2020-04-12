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
            description : 'description',
            redirected : null
        }
        // this.detailView = React.createRef();
        // this.solicitudeView = React.createRef();
    }

    componentWillMount() {
        console.log('->', this.props.location.state)
        this.setState({
            file : this.props.location.state,
            // imageUrl : this.props.location.state.imageUrl,
            // itemName : this.props.location.state.itemName,
            // description : this.props.location.state.description,
            // specs : this.props.location.state.specs,
            // gallery : this.props.location.state.gallery
        });
    }

    render() {
        if (this.state.redirected) {
            return this.state.redirected;
        }
        return (
            <div className='file-details section'>
                <div className='container-fluid'>
                    <div className='col'>
                        <div className='row'>
                            <h2 className='title'>{this.state.file.itemName}</h2> 
                            
                        </div>
                        <hr></hr>
                        <div className='row'>
                            <div className='col-4'>
                                <div className='view-container'>
                                    <img className='display-img' src={this.state.file.imageUrl}></img>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='row specs-container'>
                                    <div className='specs-detail-view content'>
                                        <p>{this.state.file.description}</p>
                                        <br></br>
                                        <p>Specifications:</p>
                                        <ul>
                                            {this.state.file.specs.map((spec) => <li>{spec}</li>)}
                                            {/* <li>Field</li>
                                            <li>Field</li>
                                            <li>Field</li> */}
                                        </ul>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='float-l'>
                                        <Link to={{pathname : '/MakerList', state : {product: this.state.file}}}>
                                                <button className='level-item button is-white'>Explore Providers</button>
                                        </Link>
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
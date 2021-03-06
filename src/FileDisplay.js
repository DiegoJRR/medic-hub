import React, { Component } from 'react'
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

class FileDisplay extends Component {
    constructor(props) {
        super(props);
        this.modal = React.createRef();
        this.state = {
            redirected: null
        }
        // const history = useHistory();
    }

    render() {
        if (this.state.redirected) {
            return this.state.redirected;
        }
        return (
            
                <div className='file-display'>
                    <Link to={{
                                    pathname : '/FileDetails',
                                    state : this.props.file
                                }}>
                    <div className='card'>
                        <div className='card-image'>
                            <figure className='image'>
                                <img src={this.props.file.imageUrl} className='catalogue-image'></img>
                            </figure>
                        </div>
                        <div className='card-content'>
                            {this.props.file.itemName}
                        </div>
                    </div>
                    </Link>
                </div>
            
        );
    }
}

export default FileDisplay;
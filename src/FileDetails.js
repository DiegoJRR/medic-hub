import React, { Component } from 'react'

class FileDisplay extends Component {
    constructor(props) {
        super(props);
        // this.modal = React.createRef();
    }

    render() {
        return (
            <div className='file-details section'>
               <h2 className='title'>Detalles</h2> 
               <hr></hr>
            </div>
        );
    }
}

export default FileDisplay;
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FileDisplay from './FileDisplay';


class Catalogue extends Component{
    constructor() {
        super();
        this.state = {
            files: [ 
                {
                    imageUrl :  'https://images.squarespace-cdn.com/content/v1/5d647c4040b9040001c0455b/1586466644919-LGR5IYLNLQO16Y45X3ZE/ke17ZwdGBToddI8pDm48kKQ1xBlOM7WxMkwWe95lhjkUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcMqQWq0cYjfM5jLBa0sz3Rt9dqOJw0ABqnOEeS16cazGmwmKtXae4XX90fwiq1GqX/untitled.133.jpg?format=750w',
                    itemName :  'file0'
                },
                {
                    imageUrl :  'https://images.squarespace-cdn.com/content/v1/5d647c4040b9040001c0455b/1586466644919-LGR5IYLNLQO16Y45X3ZE/ke17ZwdGBToddI8pDm48kKQ1xBlOM7WxMkwWe95lhjkUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcMqQWq0cYjfM5jLBa0sz3Rt9dqOJw0ABqnOEeS16cazGmwmKtXae4XX90fwiq1GqX/untitled.133.jpg?format=750w',
                    itemName :  'file1'
                },
                {
                    imageUrl :  'https://images.squarespace-cdn.com/content/v1/5d647c4040b9040001c0455b/1586466644919-LGR5IYLNLQO16Y45X3ZE/ke17ZwdGBToddI8pDm48kKQ1xBlOM7WxMkwWe95lhjkUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcMqQWq0cYjfM5jLBa0sz3Rt9dqOJw0ABqnOEeS16cazGmwmKtXae4XX90fwiq1GqX/untitled.133.jpg?format=750w',
                    itemName :  'file2'
                }
            
            ]
        };
    }


    render() {
        console.log(this.props)
        return (
            <section className='catalogue section'>
                {
                    this.state.files.map( (file) => {
                        return <FileDisplay imageUrl={file.imageUrl} itemName={file.itemName}/>;
                    })
                }
            </section>
          );
    }
}

export default Catalogue;

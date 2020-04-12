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
                    itemName :  'Mask Strain Relievers',
                    description : "Here is theantidoteftc's design for a Mask Strain Reliever to be worn in the back of the head while utilizing surgical masks or any other face covering that typically catches behind the ear. The strain reliever redirects the strain on the back of the ear to behind the head, allowing for increase comfort while healthcare workers work for prolonged periods of time. We are planning on submitting for NIH review. Let me know if you have any suggestions or comments!",
                    modelUrl : './models/MaskStringRelieverV7.STL',
                    specs : [
                        "Rafts: No",
                        "Supports: No",
                        "Resolution: 0.3mm Layer Height",
                        "Infill: Doesn't Matter",
                        "Filament_brand: Hatchbox (Anything really)",
                        "Filament_material: PLA or PETG"
                    ],
                    gallery : []
                },
                {
                    imageUrl :  'https://images.squarespace-cdn.com/content/v1/5d647c4040b9040001c0455b/1586466644919-LGR5IYLNLQO16Y45X3ZE/ke17ZwdGBToddI8pDm48kKQ1xBlOM7WxMkwWe95lhjkUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcMqQWq0cYjfM5jLBa0sz3Rt9dqOJw0ABqnOEeS16cazGmwmKtXae4XX90fwiq1GqX/untitled.133.jpg?format=750w',
                    itemName :  'Intubation Box',
                    description : 'The Intubation Box is an inexpensive and reusable protective device originally designed by Dr Hsien Yung Lai in Taiwan, to protect healthcare providers when intubating Covid-19 patients.\nWe, ER doctors and designers, have taken his gracious design and altered it for the American body habitus.\nThe Intubation Box works by sitting over the head and shoulders of a Covid-19 patient as they are intubated by a healthcare provider. The acrylic box acts as a protective shield between the patient and medical provider, with the intent of reducing the healthcare provider’s exposure to Coronavirus (COVID-19).\nAfter each intubation, the box can be cleaned with a bleach or alcohol solution. Ie. Sani-Cloth wipes.',
                    modelUrl : '#',
                    specs : [],
                    gallery : []
                },
                {
                    imageUrl :  'https://images.squarespace-cdn.com/content/v1/5d647c4040b9040001c0455b/1586466644919-LGR5IYLNLQO16Y45X3ZE/ke17ZwdGBToddI8pDm48kKQ1xBlOM7WxMkwWe95lhjkUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcMqQWq0cYjfM5jLBa0sz3Rt9dqOJw0ABqnOEeS16cazGmwmKtXae4XX90fwiq1GqX/untitled.133.jpg?format=750w',
                    itemName :  'Y Splitter',
                    description : 'The Y splitter is unique ventilator expansion device that allows a single ventilator to support up to two patients during times of acute equipment shortages.',
                    modelUrl : './models/YSplitter_Prothesia.stl',
                    specs : [
                        "designed to work with ISO 5356 standard respiratory connections;",
                        "can be easily produced by 3D printing;",
                        "allows for appropriate filtering of bacteria and viruses in the ventilator tubing;",
                        "is strong and impact resistant; and",
                        "does not impact the care of other patients connected to the same machine.",
                    ],
                    gallery : [
                        "https://bc3-production-us-east-2.s3.us-east-2.amazonaws.com/3u9jvq8hu01wlbiwoprnfbx16pqo?response-content-disposition=inline%3B%20filename%3D%22Ysplitter.gif%22%3B%20filename%2A%3DUTF-8%27%27Ysplitter.gif&response-content-type=image%2Fgif&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJA4YU4LL6QTTS55A%2F20200412%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200412T145344Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=7db21b1096cf00c86ee1cdae3ae5f322bb7e50efff2540e1598e67ca8895bcef"
                    ]
                }
            ]
        };
    }


    render() {
        return (
            <section className='catalogue section'>
                {
                    this.state.files.map( (file) => {
                        return <FileDisplay file={file}/>;
                    })
                }
            </section>
          );
    }
}

export default Catalogue;

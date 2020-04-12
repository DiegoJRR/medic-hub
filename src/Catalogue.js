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
                    imageUrl :  "https://bc3-production-us-east-2.s3.us-east-2.amazonaws.com/3u9jvq8hu01wlbiwoprnfbx16pqo?response-content-disposition=inline%3B%20filename%3D%22Ysplitter.gif%22%3B%20filename%2A%3DUTF-8%27%27Ysplitter.gif&response-content-type=image%2Fgif&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJA4YU4LL6QTTS55A%2F20200412%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200412T145344Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=7db21b1096cf00c86ee1cdae3ae5f322bb7e50efff2540e1598e67ca8895bcef",
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
                },
                {
                    imageUrl :  "https://bc3-production-us-east-2.s3.us-east-2.amazonaws.com/tikxkixpuj9w1u5yvzxpxezomcmw?response-content-disposition=inline%3B%20filename%3D%22Clamp.gif%22%3B%20filename%2A%3DUTF-8%27%27Clamp.gif&response-content-type=image%2Fgif&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJA4YU4LL6QTTS55A%2F20200412%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200412T164008Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=a1592cfec44aad1e7f7dcd3109d8243ad4b510920cd9d62353e51c475bfbf4b8",
                    itemName :  'Clamp',
                    description : '',
                    modelUrl : '#',
                    specs : [
                        
                    ],
                    gallery : [
                        "https://bc3-production-us-east-2.s3.us-east-2.amazonaws.com/tikxkixpuj9w1u5yvzxpxezomcmw?response-content-disposition=inline%3B%20filename%3D%22Clamp.gif%22%3B%20filename%2A%3DUTF-8%27%27Clamp.gif&response-content-type=image%2Fgif&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJA4YU4LL6QTTS55A%2F20200412%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200412T164008Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=a1592cfec44aad1e7f7dcd3109d8243ad4b510920cd9d62353e51c475bfbf4b8 "
                    ]
                },
                {
                    imageUrl :  "https://bc3-production-us-east-2.s3.us-east-2.amazonaws.com/ky9is8soh0bl1ovhed1hnl1gves9?response-content-disposition=inline%3B%20filename%3D%22Stopgap%20Surgical%20Face%20Mask%20%2528SFM%2529--.gif%22%3B%20filename%2A%3DUTF-8%27%27Stopgap%2520Surgical%2520Face%2520Mask%2520%2528SFM%2529--.gif&response-content-type=image%2Fgif&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJA4YU4LL6QTTS55A%2F20200412%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200412T164258Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=bf01c7185b37ab00179940a38c9f1968a4a6b53f8cf2c8273cd443490e41246f",
                    itemName :  'Stopgap Surgical Face Mask',
                    description : '',
                    modelUrl : '#',
                    specs : [
                        
                    ],
                    gallery : [
                        "https://bc3-production-us-east-2.s3.us-east-2.amazonaws.com/ky9is8soh0bl1ovhed1hnl1gves9?response-content-disposition=inline%3B%20filename%3D%22Stopgap%20Surgical%20Face%20Mask%20%2528SFM%2529--.gif%22%3B%20filename%2A%3DUTF-8%27%27Stopgap%2520Surgical%2520Face%2520Mask%2520%2528SFM%2529--.gif&response-content-type=image%2Fgif&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJA4YU4LL6QTTS55A%2F20200412%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200412T164258Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=bf01c7185b37ab00179940a38c9f1968a4a6b53f8cf2c8273cd443490e41246f"
                    ]
                }
            ]
        };
    }


    render() {
        return (
            <section className='catalogue w-100'>
                <div className='w-100'>
                    <div className='row justify-content-md-center w-100 mx-0 landing'>
                        <div className='container col-8'>
                            <h2 className='title is-2'>Why?</h2>
                            <p>The medical device industry demands rapid prototyping and deployment. We are seeing it now with the COVID-19 pandemic, and we are going to see it after it. By leveraging rapid prototyping/manufacturing, hospitals and biomedical engineers will be able to test and use a diverse set of medical devices.</p>
                            <br></br>
                            <h2 className='title is-2'>How it works?</h2>
                            <div className='container'>
                                <ol>
                                    <li>Do you want a customzied valve for your Medtronic ventilator? Find it in the platform.</li>
                                    <li>Build your order by picking quality, priority, material</li>
                                    <li>We match you up with the best manufacturer based on your needs</li>
                                    <li>Your device is delivered to your doorstep</li>
                                </ol>
                            </div>
                            <br></br>
                            <h2 className='title is-2'>Devices available</h2>
                            <div className='container content'>
                                <ul>
                                    <li>Intubation box</li>
                                    <li>House clamp for patient intubation</li>
                                    <li>Y splitter for ventilator</li>
                                    <li>Venturi valve</li>
                                    <li>Kiwishield by Prothesia</li>
                                    <li>Mask strain relievers</li>
                                    <li>Slim shield mask</li>
                                </ul>
                            </div>
                            <br></br>
                        </div>    
                    </div> 
                </div>
                <div className='w-100 banner mx-0'>
                    <h2 className='title is-1'>
                        Explore Devices
                    </h2>
                </div>
                <div className='container card-cont'>
                    {
                        this.state.files.map( (file) => 
                                <FileDisplay file={file}/>
                        )
                    }
                </div>
            </section>
          );
    }
}

export default Catalogue;

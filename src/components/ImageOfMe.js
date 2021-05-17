import * as React from 'react'

import imageOfMe from '../images/me.jpeg';

const imageStyle = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "30%",
    height: "auto",
    borderRadius: '10%',
}
const container = {
    textAlign: 'center'
}


const ImageOfMe = () => {
    return (
        <article style={container}>
            <img 
                style={imageStyle}
                src={imageOfMe}
                alt='My Face'
            />  
            <h4>Hello, my names Harman</h4>
            <p>
                I'm a budding software developer, looking for
                my big break into the industry. <br/>
                This is my portfolio webpage, below you'll find 
                projects. 
                <br/>Enjoy
            </p>
      </article>
    );
}

export default ImageOfMe;
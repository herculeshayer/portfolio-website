import * as React from 'react'

import imageOfMe from '../images/me-on-hike.jpg';

const imageStyle = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "22vw",
    height: "auto",
    borderRadius: '100%',
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
            <h1 style={{fontSize: "3vw",textShadow: "0.1vw 0.1vw #808080"}}>Hi, I'm Harman</h1>
            <p style={{fontSize: "18px", paddingRight: "20px", paddingLeft: "20px"}}>
                I'm a self-taught developer, I've accomplished this through
                Lynda/LinkedInLearning, YouTube, and Udemy. I've decided to complete a
                few projects which will hopefully demonstrate my knowledge in both Frontend 
                and Backend software development.
                <br/>
                <br/>
                I've recieved my diploma in Computer Information Systems (CIS) from Kwantlen 
                Polytechnic University, and have since transferred my credits to Thompson River University
                and plan to complete my 3rd and 4th years in Computing Science.
                <br/>
                <br/>
                I have a yearning for knowledge & desire for success. I'm willing to learn any and all 
                technologies which will further advance my career and passions. 
                <br/>
                <br/>
                Below are a few projects which I have completed. I am in the process of completing additional projects.
                <br/>
                <br/>
                Thank you, and enjoy!
            </p>
      </article>
    );
}

export default ImageOfMe;
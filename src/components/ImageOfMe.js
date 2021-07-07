import * as React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GoPrimitiveDot } from 'react-icons/go';

import imageOfMe from '../images/my-face/spike-ball-fixed.jpg';

const imageStyle = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50vw",
    maxWidth: "450px",
    height: "auto",
    borderRadius: '25%',
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
            <div style={{fontSize: "36px", paddingTop: "25px"}}>
                <a href="https://github.com/herculeshayer" alt="link to personal github account"><AiFillGithub style={{paddingRight: "10px"}}/></a> 
                <a href="https://www.linkedin.com/in/harman-hayer/" alt="link to personal linkedin"><AiFillLinkedin /></a>
            </div>
            <h1 style={{fontSize: "5vw",textShadow: "0.1vw 0.1vw #808080"}}>Hi, I'm Harman</h1>
            
            
            <div style={{fontSize: "20px", paddingRight: "10vw", paddingLeft: "10vw"}}>
                
                
                
                <p><GoPrimitiveDot /> A Self-Taught Software Developer</p>
                
                <p><GoPrimitiveDot /> Computer Information Systems Diploma graduate from Kwantlen Polytechnic University </p>
                
                <p><GoPrimitiveDot /> Thompson River University student (3<sup>rd</sup> year) pursuing a bachelor's degree in Computing Science</p>

                <p><GoPrimitiveDot /> Recovering Ben & Jerrys ice cream addict</p>
                
                <p><GoPrimitiveDot /> Spikeball Olympic gold medalist</p>

                
                <p style={{paddingTop: "2rem"}}>Below are a few projects which I have completed. <br/> Thanks for stopping by! &#128516;</p>
                
                
                
                
            </div>
      </article>
    );
}

export default ImageOfMe;
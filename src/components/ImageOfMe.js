import * as React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdFingerprint } from 'react-icons/md';
import { FiSun} from 'react-icons/fi';
import { HiOutlineFire, HiOutlineGlobe } from 'react-icons/hi';

import imageOfMe from '../images/my-face/spike-ball-fixed.jpg';

const imageStyle = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "22vw",
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
            
            <p style={{fontSize: "20px", paddingRight: "10vw", paddingLeft: "10vw"}}>
            
                
                  <MdFingerprint /> { `<Self-Taught Software Developer />` }
                <br/><br/>
                <FiSun /> Computer Information Systems Diploma from Kwantlen Polytechnic University 
                <br/><br/>
                <HiOutlineFire/> Thompson River University student (3<sup>rd</sup> year) pursuing a bachelor's degree in Computing Science
                <br/><br/>
                <HiOutlineGlobe/> Below are a few projects which I have completed. 
                <br/>
                Thanks for stopping by! &#128516;
                <br/>
                
            </p>
      </article>
    );
}

export default ImageOfMe;
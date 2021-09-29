import * as React from 'react';
import { Link } from 'gatsby';

import Data from "../data/Data";

// import myBlog from "../images/my-blog.jpg";



const DisplayProjects = () => {

    const projectLink = Data.map((project, key) => {
        const { text, url, description, tools, img, liveSite} = project;
        return (
            <section key={key} style={gridItem}>
    
                <h2 style={{textAlign: "center", fontSize: "2.5vw"}}>{text}</h2>
                <img style={imageStyle} src={img} alt='site homepage'/>
                
                <div style={{marginTop: "10px"}}>
                    <Link to={url} style={{marginRight: "2px"}}><button>Source Code</button></Link>
                    <Link to={liveSite}><button>Live Demo</button></Link>
                </div>
                
            
                <p>{description}</p>
                <p>{tools}</p>
                
                
            </section>
        );
    })
    return (
        <div>
            <h3 style={{fontSize: "4vw", textAlign: "center", textShadow: "0.1vw 0.1vw #808080"}}>Projects</h3>
            <section className="grid-container" style={flexContainer}>
                {projectLink}
            </section>
        </div>
    );
}


export default DisplayProjects;
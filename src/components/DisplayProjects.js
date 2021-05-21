import * as React from 'react';
import { Link } from 'gatsby';

import Data from "../data/Data";

// import myBlog from "../images/my-blog.jpg";


const imageStyle = {
    display: "block",
    // minWidth: "250px",
    maxWidth: "9.0vw",
    height: "auto",
    margin: "auto",
    width: "50%"
}
const flexContainer = {
    display: "grid",
    // backgroundColor: "white",
    
    // gridTemplateColumns: "repeat(auto-fill, minmax(338.8px,1fr)",
    gridTemplateRows: "auto 1fr",

    gridColumnGap: "2rem",
    gridRowGap: "1rem",

    // border: "2px solid black",
    // borderRadius: "5px",
    
    // padding: "50px",
    minWidth: "20vw",
    height: "auto",
    // wordWrap: "break-word"
    margin: "auto",
    width: "50%",
    
}
const gridItem = {
    // display: "inline-block",
    // marginRight: "10px",
    padding: "10px",
    border: "2px solid black",
    borderRadius: "5px",
    backgroundColor: "white",
    // justifyContent: "center"
    textAlign: "center"
}

const DisplayProjects = () => {

    const projectLink = Data.map((project, key) => {
        const { text, url, description, tools, img } = project;
        return (
            <section key={key} style={gridItem}>
    
                <h2 style={{textAlign: "center"}}>{text}</h2>
                <img style={imageStyle} src={img} alt='site homepage'/>
                
                <div>
                    <Link to={url}><button>Source Code</button></Link>
                    <Link ><button>Live Demo</button></Link>
                </div>
                
            
                <p>{description}</p>
                
                    
                    <ul>
                    <li>{tools}</li>
                    </ul>
                
                
            </section>
        );
    })
    return (
        <div>
            <h3 style={{fontSize: "3vw", textAlign: "center", textShadow: "0.1vw 0.1vw #808080"}}>Projects</h3>
            <section className="grid-container" style={flexContainer}>
                {projectLink}

            </section>
        </div>
    );
}


export default DisplayProjects;
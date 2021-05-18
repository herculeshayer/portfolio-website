import * as React from 'react';
import { Link } from 'gatsby';

import Data from "../data/Data";

import myBlog from "../images/my-blog.jpg";

const projectStyle = {
    paddingTop : 150
}
const imageStyle = {
    display: "block",
    width: "15vw",
    height: "auto"
}
const flexContainer = {
    display: "grid"
}

const DisplayProjects = () => {

    const projectLink = Data.map((project, key) => {
        const { text, url, description, stack } = project;
        return (
            <div key={key} style={flexContainer}>
                <h2>{text}</h2>
                {/* <Link to={url}></Link> */}
                <img style={imageStyle} src={myBlog} alt='site homepage'/>
                <button><Link to={url}>Source Code</Link></button>
               
                <p>{description}</p>
                <ul>
                    <li>{stack}</li>
                </ul>
            </div>
        );
    })
    return (
        <div>
            <h3 style={projectStyle}>Projects</h3>
            {projectLink}
        </div>
    );
}


export default DisplayProjects;
import * as React from 'react';

import Data from "../data/Data";

const projectStyle = {
    paddingTop : 150
}

const DisplayProjects = () => {

    const projectLink = Data.map((project) => {
        const { text, url, description } = project;
        return (
            <h2>{text}</h2>
        );
    })
    return (
        <>
        <h3 style={projectStyle}>Projects Here</h3>
        {projectLink}
        </>
    );
}


export default DisplayProjects;
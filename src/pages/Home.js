import * as React from 'react';

import { homepageLinks } from './../data/Data';

const Home = () => {
    return(
        <article id="grid">

            <div id="grid-bio-item">
                <span id="hi">hello!</span>
                <div>here you'll find a few projects of mine with their description & technologies used</div>
                <p>projects are created primarily for personal curiosity & growth</p>
                {/* <p>thanks for stopping by! </p> */}
            </div>
            <div id="grid-project">

                {
                    homepageLinks.map((project, key) => {
                        const { text, url, tools } = project;
                        return(
                            <div id="grid-project-item" key={key}>
                                <a className="single-project" href={url}>
                                    <h1>{text}</h1>
                                    <p>{tools}</p>

                                </a>

                            </div>
                        );
                    })
                }
                
            </div>
            
            

        </article>
    );
}

export default Home;
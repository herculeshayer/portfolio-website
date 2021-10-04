import * as React from 'react';

import { homepageLinks } from './../data/Data';

const Home = () => {
    return(
        <article id="grid">

            <div id="grid-bio-item">
                <span><span id="hi">hi!</span> my names harman and i am a software developer</span>
                <p>this is my portfolio where you will find my work</p>
                <p>have a look around and stay a while</p>
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
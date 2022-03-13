import * as React from 'react';

import { homepageLinks } from './../data/Data';

const Home = () => {
    return(
        <article id="grid">

            <div id="grid-bio-item">
                <span id="hi">bonjour!</span>
                <div>as long as you live, keep learning how to live - <b>seneca</b></div>
                <p>your time is limited, so dont waste it living someone elses life - <b>steve jobs</b></p>
                <p><a href="https://www.youtube.com/watch?v=Hj0UvmXrQC0">thanks for stopping by!</a></p>
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
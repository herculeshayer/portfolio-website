import * as React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

import Header from './../components/Header'

import { projectpageLinks } from '../data/Data';


const Projects = () => {
    return(
        <section>

            <Header />
            <NavBar />
            <section id="flex">
                {projectpageLinks.map((project, key) => {
                    const { text, source, description, tools } = project;
                    return(
                        <div id="flex-item" key={key}>
                            <a className="single-proj" href={source}>
                                <h1>{text}</h1>
                                <p>{description}</p>
                                <p>{tools}</p>


                            </a>


                        </div>
                    );
                })}
            </section>
                
            <Footer />

        </section>
    );
}

export default Projects;
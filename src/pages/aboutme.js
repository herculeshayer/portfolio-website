import * as React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

import './../css/index.css';

const About = () => {
    return(
        <section>
            <Header />
            <NavBar />
                <article id="about-container">
                    <div>
                        <p><b>experience</b>: full metal software alchemist intern @ article :: may2022-aug2022</p>
                    </div>

                    <div>
                        
                        <p>
                            <b>intro</b>: 
                            i like dags and hikes and film and rice
                        </p>
                    </div>
                    <div>
                        <p>
                            <b>goals</b>: 
                            to become that guy
                        </p>
                    </div>
                        <p>
                            you can't give up. once youre in it, youre in it and you've got to go all the way to the end, because you commit yourself to such a level where there is no compromise. you give everything you have, everything absolutely everything. and sometimes you find even more, because it requires more if you want still to be ahead, if you want to win - <a href="https://www.youtube.com/watch?v=n9qZu7h5ys0"><b>ayrton senna</b></a>
                        </p>
                        <p>
                            i am natures greatest miracle - <a href="https://www.youtube.com/watch?v=kz_vh50XrHg"><b>homer simpson</b></a>
                        </p>

                </article>
            <Footer />


        </section>
    );
}

export default About;
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

                        <h1 style={{"fontSize": 150}}>sept/oct 2020 - feb 2022</h1>
                        <h3 style={{"fontSize": 50}}>ful stack engineer intern - article may2022-janm2023</h3>
                        <p>
                            <b>intro</b>: 
                            i like dogs and hikes  
                        </p>
                    </div>
                    <div>
                        <p>
                            <b>goals</b>: 
                            1/2/3/4 - gold in 77kg ibjjf - 25 books a year - farm - raise well mannered children
                        </p>
                    </div>
                        <p>
                            you can't give up. once youre in it, youre in it and you've got to go all the way to the end, because you commit yourself to such a level where there is no compromise. you give everything you have, everything absolutely everything. and sometimes you find even more, because it requires more if you want still to be ahead, if you want to win - ayrton senna
                        </p>
                        <p>
                            i am natures greatest miracle - homer simpson
                        </p>

                </article>
            <Footer />


        </section>
    );
}

export default About;
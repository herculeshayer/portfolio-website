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
                        <p>
                            <b>interests</b>: 
                            weekdays are filled with the following: 
                            weightlifting, walking, and programming. <br />
                            weekends: 
                            anything i feel like doing
                        </p>
                    <div>
                        <p>
                            <b>goals</b>: 
                            1/2/3/4 - gold in 77kg ibjjf - 25 books a year - farm - raise well mannered children
                        </p>
                    </div>

                </article>
            <Footer />


        </section>
    );
}

export default About;
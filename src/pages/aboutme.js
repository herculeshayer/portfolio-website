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

                        <h1 style={{"fontSize": 150}}>as of 16, february 2022 ive completed what i set out to do in sept/oct 2020</h1>
                        <p>
                            <b>intro</b>: 
                            i was one of those kids that never knew what career to choose, there are just so many options, how
                            is anyone supposed to choose one.
                            i went from college program to college program in hopes of finding something id enjoy, thinking about how itd never happen.
                            <br/><br/>i realized i am just going to try as many things as i can, keep what i enjoy, and discard what i dont. 
                            
                            
                        </p>
                    </div>
                        <p>
                            <b>interests</b>: 
                            weekdays are filled with the following: 
                            weightlifting, walking, and programming. <br />
                            weekends: 
                            video games, hiking, movies, and hanging out w/ like-minded baffoons

                        </p>
                    <div>
                        <p>
                            <b>goals</b>: 
                            1/2/3/4 - gold in 77kg ibjjf - 25 books a year - own large acerage farm - raise well mannered children
                        </p>
                    </div>
                    
                    
                </article>
            <Footer />


        </section>
    );
}

export default About;
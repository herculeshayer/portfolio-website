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
                        <p>
                            <b>intro</b>: 
                            my names harman and i love trying difficult things especially if i suck at them.
                            im stubborn and dont give up quickly, its almost a flaw.  
                        </p>
                    </div>
                    <div>
                        <p>
                            <b>why??????programming???!??</b>: 
                            i was one of those kids that never knew what career to choose, there are just so many options, how
                            is anyone supposed to choose one.
                            i went from college program to college program in hopes of finding something id enjoy, thinking about how itd never happen.
                            <br/>i realized im just going to try as many things as i can and keep what i enjoy and discard what i dont.
                            
                        </p>
                    </div>
                        <p>
                            <b>interests</b>: 
                            weekdays are filled with the following: 
                            weight-training, meditation, stretching, reading, writing, and coding. <br />
                            weekends: 
                            video games, hiking, movies, and hanging out w/ like-minded baffoons


                        </p>
                    <div>
                        <p>
                            <b>goals</b>: 
                            become a software developer that also manages server architecture. 
                            work for 15-20 yrs, retire, become a professor, teach 1-2 classes at a local college, die?
                        </p>
                    </div>
                    <div>
                        <p>
                            <b>favorite movie + book + video game</b>:  
                            <br/>gladiator starring russel crowe and joaquin pheonix directed by ridley scott
                            <br/>the stranger by albert camus || metamorphosis by franz kafka
                            <br/>dark souls 1
                            
                        </p>
                    </div> 
                    
                </article>
            <Footer />


        </section>
    );
}

export default About;
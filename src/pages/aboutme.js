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
                            
                            i remember my first programming class, i failed it. 
                            in order to get my diploma, i needed the credit so i took it again.
                            this time, i passed and kinda liked it. 
                            i passed the class and began looking into it in my spare time
                        </p>
                    </div>
                    <div>
                        <p>
                            <b>journey</b>: 
                            i was one of those kids that never knew what career to choose, there are so many options.
                            i went from career to career in hopes of finding something id enjoy. 
                            well, eventually, i stumbled onto something. i liked it more than anything else id tried, 
                            and decided id continue doing it until i no longer wanted to
                            
                        </p>
                    </div>
                        <p>
                            <b>interests</b>: 
                            most weeks are filled with the following: 
                            weight-training, meditation, yoga, reading, writing, and combat sports
                        </p>
                    <div>
                        <p>
                            <b>goals</b>: 
                            my goals are simple. i am to become a software engineer with a distinction in cloud architecture, 
                            and give back to others with what i have learned
                        </p>
                    </div>
                    <div>
                        <p>
                            <b>inspiration</b>: 
                            i am interested in essentially two areas at this point in my life; teaching and technology. i want 
                            to utilize my interests in technology and help others educate themselves and improve their lives
                            through the process
                            
                        </p>
                    </div> 
                    
                </article>
            <Footer />


        </section>
    );
}

export default About;
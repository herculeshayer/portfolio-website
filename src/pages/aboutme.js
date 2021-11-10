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
                            this time, i kinda liked it. 
                            the rest is history.

                            
                        </p>
                    </div>
                    <div>
                        <p>
                            <b>journey</b>: 
                            i was one of those kids that never knew what theyd do. 
                            i went from career to career in hopes of finding something id enjoy. 
                            well, i eventually stumbled onto something i like more than anything else ive tried, and im not letting go.
                            
                        </p>
                    </div>
                        <p>
                            <b>interest</b>: 
                            i weight-train, run, meditate, yoga, read, write, watch films, listen to music,
                            hike, practice jiujitsu (anything combat sport related, honestly), ride motorcycles (had to sell it for tuition but i plan to purchase another),
                            play video games on occasion, and get into trouble with friends
                            
                        </p>
                    <div>
                        <p>
                            <b>goal</b>: 
                            my goals are simple. i am to become a software engineer with a distinction in cloud architecture, 
                            and give back to others with what i have learned. i am also going to attempt a masters degree after my bachelors, 
                            wish me luck
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
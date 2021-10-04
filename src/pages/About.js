import * as React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NavBar from '../components/NavBar';



const About = () => {
    return(
        <section>
            <Header />
            <NavBar />
                <article id="about-container">
                    <div>
                        <p>
                            <b>intro</b>: 
                            it began in college.
                            i remember my first programming class, i had absolutely no idea what was going on.
                            regardless, it stuck, and here i am. 

                            i transferred my credits from my computer information systems diploma and entered a 
                            computing science program @ tru where im currently a 3rd year compsci student
                        </p>
                    </div>
                    <div>
                        <p>
                            <b>journey</b>: 
                            i honestly did not think i would ever find something id enjoy doing as a career, until i discovered 
                            system administration & software development. looking back on the 
                            previous year, i have gained an absurd amount of knowledge. i had not heard of terms like frontend or backend, and
                            now i am building web apps with react & node from scratch. do not get me wrong, i am no master, i am still learning; although, its much easier 
                            now, and my scope has expanded exponentially
                        </p>
                    </div>
                        <p>
                            <b>interest</b>: 
                            i weight-train, run, meditate, stretch, read, write, watch films, listen to music,
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
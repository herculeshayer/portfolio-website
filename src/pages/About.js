import * as React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NavBar from '../components/NavBar';


//styles
import './../css/index.css'

const About = () => {
    return(
        <section>
            <Header />
            <NavBar />
                <h1>About</h1>
            <Footer />


        </section>
    );
}

export default About;
import * as React from 'react';
import { Link } from 'gatsby'

const NavBar = () => {
    return(
        <nav>
            <ul>
                <li><Link to="/">home</Link></li>
                <li><a href="https://pdf-host-bucket.s3.us-west-2.amazonaws.com/resume-v7.pdf">resume</a></li>
                <li><Link to="/projects">projects</Link></li>
                <li><Link to="/about">about</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;
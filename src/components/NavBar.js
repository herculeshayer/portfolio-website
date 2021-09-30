import * as React from 'react';
import { Link } from 'gatsby'

const NavBar = () => {
    return(
        <nav>
            <ul>
                <li><Link to="/">home</Link></li>
                <li><a href="https://resume.creddle.io/resume/47zeay722f2">resume</a></li>
                <li><Link to="/projects">projects</Link></li>
                <li><Link to="/about">about</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;
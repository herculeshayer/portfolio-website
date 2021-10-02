import * as React from 'react';
import { Link } from 'gatsby'

const NavBar = () => {
    return(
        <nav>
            <ul>
                <li class ="grow"><Link to="/">home</Link></li>
                <li class ="grow"><a href="https://resume.creddle.io/resume/47zeay722f2">resume</a></li>
                <li class ="grow"><Link to="/projects">projects</Link></li>
                <li class ="grow"><Link to="/about">about</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;
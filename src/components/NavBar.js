import * as React from 'react';
import { Link } from 'gatsby'

const NavBar = () => {
    return(
        <nav>
            <ul>
                <li><Link to="/">home</Link></li>
                <li><a href="./../assets/resume.pdf">resume</a></li>
                <li><Link to="/Projects">projects</Link></li>
                <li><Link to="/About">about</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;
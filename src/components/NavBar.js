import * as React from 'react';
import { Link } from 'gatsby'

const NavBar = () => {
    return(
        <nav>
            <ul>

                <li class="grow"><Link to="/">home</Link></li>
                <li class="grow"><a href="https://resume-v1.s3.us-west-2.amazonaws.com/resume-v1.51.pdf">resume</a></li>
                <li class="grow"><Link to="/projects">projects</Link></li>
                <li class="grow"><Link to="/aboutme">about</Link></li>

            </ul>
        </nav>
    );
}

export default NavBar;

import React from "react";
import {Link} from 'react-router-dom';

const About = () => (
    <div className="row mt-5">
        <Link to="/"> Home </Link>
        <div className="col-md-4 offset-md-1">
            <h2>About page</h2>
        </div>
    </div>
);
export default About;
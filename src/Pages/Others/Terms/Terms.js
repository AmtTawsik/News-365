import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h3>This is terms anad conditions</h3>
            <Link to='/register'><Button>Back to Register</Button></Link>
        </div>
    );
};

export default Terms;
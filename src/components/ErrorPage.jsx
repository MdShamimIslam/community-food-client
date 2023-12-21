import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className=' text-center my-24'>
            <h3 className='text-5xl font-bold'>Page Not Found</h3>
            <p className='text-xl mt-4'><Link to='/'>Back to home</Link></p>
        </div>
    );
};

export default ErrorPage;
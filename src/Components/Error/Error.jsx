import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='bg1 h-screen border-4'>
            <div className=''>
                <img className='w-11/12 md:w-5/12 lg:w-5/12 mx-auto pt-72 md:pt-20 lg:pt-40' src="https://webartdevelopers.com/blog/wp-content/uploads/2021/05/404-error-page-svg-animation.gif" alt="" />
                <div className='w-40 mx-auto mt-20 md:mt-8'>
                    <Link to='/' className='btn  text-center'>Go To Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Error;
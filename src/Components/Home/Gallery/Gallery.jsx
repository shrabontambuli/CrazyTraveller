import React from 'react';

const Gallery = () => {
    return (
        <div>
            <div className='text-center mt-20'>
                <h3 className='text-5xl text font-light mb-5'>Choose your</h3>
                <h1 className='text-7xl text-black font-light'>Destination</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-5 mt-20 container mx-auto'>
                <div>
                    <div className="relative">
                        <img className='rounded-lg w-full  h-[600px] opacity-60' src="/images/malaysia.jpg" />
                        <div className='absolute top-64 left-32 lg:left-80 text-center'>
                            <h1 className='text-white text-4xl font-serif'>Malaysia</h1>
                            <h3 className='btn rounded-xl mt-6'>16 Tours</h3>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex justify-center items-center'>
                        <div className="relative">
                            <img className='rounded-lg w-[400px] mx-auto h-80 opacity-60 pe-3' src="/images/dubai.avif" />
                            <div className='absolute top-28 left-10 lg:left-36 text-center'>
                                <h1 className='text-white text-4xl font-serif'>Dubai</h1>
                                <h3 className='btn rounded-xl mt-6'>16 Tours</h3>
                            </div>
                        </div>
                        <div className="relative">
                            <img className='rounded-lg w-[400px] mx-auto h-80 opacity-60 ps-3' src="/images/Greece.jpg" />
                            <div className='absolute top-28 left-10 lg:left-40 text-center'>
                                <h1 className='text-white text-4xl font-serif'>Greece</h1>
                                <h3 className='btn rounded-xl mt-6'>16 Tours</h3>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-5">
                        <img className='rounded-lg w-[768px] mx-auto h-[260px] opacity-60' src="/images/Singapore.jpg" />
                        <div className='absolute top-20 left-32 lg:left-80 text-center'>
                            <h1 className='text-white text-4xl font-serif'>Singapore</h1>
                            <h3 className='btn rounded-xl mt-6'>16 Tours</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center mt-16'>
                <button className='btn'>View More</button>
            </div>
        </div>
    );
};

export default Gallery;
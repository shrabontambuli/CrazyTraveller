import React from 'react';

const BestTravelers = () => {
    return (
        <div>
            <div className='text-center mt-20'>
                <h3 className='text-5xl text font-light mb-5'>Best Traveler’s</h3>
                <h1 className='text-7xl text-black font-light'>Shared Photos</h1>
                <p className='w-9/12 mx-auto mt-6 lg:px-24'>Whether you’re traveling with friends or joined a group tour, you’ll remember your trip long after saying goodbye at the airport. For many travelers, preserving these memories with photos is important. When group photos are on one phone, selfies on another, and the best shots of landmarks on a memory card or two, gathering photos from the entire group is a challenge. </p>
            </div>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center gap-5 mt-20'>
                <div>
                    <img className='w-[500px] h-[600px]' src="/images/1.jpg" alt="" />
                </div>
                <div>
                    <img className='w-[500px] h-[600px]' src="/images/2.jpg" alt="" />
                </div>
                <div>
                    <img className='w-[500px] h-[600px]' src="/images/3.jpg" alt="" />
                </div>
                <div>
                    <img className='w-[500px] h-[600px]' src="/images/4.jpg" alt="" />
                </div>
                <div>
                    <img className='w-[500px] h-[600px]' src="/images/5.jpg" alt="" />
                </div>
                <div>
                    <img className='w-[500px] h-[600px]' src="/images/6.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default BestTravelers;
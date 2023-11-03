import React from 'react';

const Home = () => {
    return (
        <div>
            {/* Banner Section */}
            <div>
                <div className="hero min-h-screen" style={{ backgroundImage: `url("/images/banner.jpg")` }}>
                    <div className="hero-content text-center lg:text-left">
                        <div className="max-w-md lg:max-w-full">
                            <h1 className="text-3xl text-white font-extralight mb-5">Explorer and Travel</h1>
                            <h1 className="text-7xl text-white font-bold">Let’s Go Now</h1>
                            <p className="py-6 text-white">Explore is one of the worlds leading small group adventure travel companies. Explore adventures go beyond a vacation to give you an authentic travel experience. The Explore formula is simple: small, international groups of like-minded people, getting off the beaten track and not just seeing a place, but really experiencing it.</p>

                            <div className='grid grid-cols-3 bg2 py-9 mt-10 lg:mt-20 items-center lg:w-7/12'>
                                <div className='flex justify-center items-center border-r-2'>
                                    <div>
                                        <svg className='me-2 lg:me-4 md:me-4' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M20 10C20 14.418 12 22 12 22C12 22 4 14.418 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z" stroke="white" stroke-width="1.5" />
                                            <path d="M12 11C12.2652 11 12.5196 10.8946 12.7071 10.7071C12.8946 10.5196 13 10.2652 13 10C13 9.73478 12.8946 9.48043 12.7071 9.29289C12.5196 9.10536 12.2652 9 12 9C11.7348 9 11.4804 9.10536 11.2929 9.29289C11.1054 9.48043 11 9.73478 11 10C11 10.2652 11.1054 10.5196 11.2929 10.7071C11.4804 10.8946 11.7348 11 12 11Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div className='text-white'>
                                        <p>Location</p>
                                        <p className='lg:text-xl font-semibold'>Tangail</p>
                                    </div>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <div>
                                        <svg className='ms-4 lg:me-4 md:me-3' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M15 4V2M15 4V6M15 4H10.5M3 10V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V10M3 10H21M3 10V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H7M21 10V6C21 5.46957 20.7893 4.96086 20.4142 4.58579C20.0391 4.21071 19.5304 4 19 4H18.5M7 2V6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div className='text-white'>
                                        <p>Date</p>
                                        <p className='lg:text-xl font-semibold'>13 May, 2023</p>
                                    </div>
                                </div>
                                <div>
                                    <button className='btn lg:px-6 lg:ms-16'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M17 17L21 21M3 11C3 13.1217 3.84285 15.1566 5.34315 16.6569C6.84344 18.1571 8.87827 19 11 19C13.1217 19 15.1566 18.1571 16.6569 16.6569C18.1571 15.1566 19 13.1217 19 11C19 8.87827 18.1571 6.84344 16.6569 5.34315C15.1566 3.84285 13.1217 3 11 3C8.87827 3 6.84344 3.84285 5.34315 5.34315C3.84285 6.84344 3 8.87827 3 11Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Banner Section */}
        </div>
    );
};

export default Home;
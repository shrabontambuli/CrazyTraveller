import React from 'react';

const Testimonials = () => {
    return (
        <div>
            <div className='text-center mt-20'>
                <h3 className='text-5xl text font-light mb-5'>Review & Testimonials</h3>
                <h1 className='text-7xl text-black font-light'>Top Reviews For Etour</h1>
                <p className='w-9/12 mx-auto mt-6 lg:px-32'>The Photographic Society of America defines a travel photo as an image that expresses the feeling of a time and place, portrays a land, its people, or a culture in its natural state, and has no geographical limitations.</p>
            </div>
            <div className='mt-4 md:mt-20 lg:mt-32'>
                <div className='relative container mx-auto'>
                    <svg className='mx-auto w-full' xmlns="http://www.w3.org/2000/svg" height="190" viewBox="0 0 980 190" fill="none">
                        <path d="M0 2C0 0.895431 0.89543 0 2 0H978C979.105 0 980 0.895431 980 2V170C980 171.105 979.105 172 978 172H600.328C599.798 172 599.289 172.211 598.914 172.586L582.914 188.586C581.654 189.846 579.5 188.953 579.5 187.172V174C579.5 172.895 578.605 172 577.5 172H1.99999C0.895417 172 0 171.105 0 170V2Z" fill="url(#paint0_linear_12_136)" />
                        <defs>
                            <linearGradient id="paint0_linear_12_136" x1="-107.8" y1="96" x2="1073.1" y2="96" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#CD1A40" />
                                <stop offset="1" stop-color="#FF803C" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <p className='absolute top-16 px-2 text-white text-center w-full lg:w-7/12 lg:left-80 text-xs md:text-base'>
                        Travel photography integrates elements of portrait, landscape, and nature photography, elevated by some of the world's most unique, picturesque landscapes.
                    </p>
                    <img className='w-10 md:w-20 lg:w-20 absolute top-7 md:-top-7 lg:-top-12 lg:left-80 left-4' src="/icon/left-quotes-sign.png" alt="" />
                </div>
                <div className='container mx-auto mt-10 lg:mt-20'>
                    <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-10'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center items-center gap-10'>
                            <div>
                                <img className='w-24 h-24 rounded-full border-4	border-orange-600' src="/images/img1.jpg" alt="" />
                            </div>
                            <div>
                                <img className='w-24 h-24 rounded-full border-4	border-orange-600' src="/images/img2.jpg" alt="" />
                            </div>
                            <div>
                                <img className='w-24 h-24 rounded-full border-4	border-orange-600' src="/images/img3.jpg" alt="" />
                            </div>
                            <div>
                                <img className='w-24 h-24 rounded-full border-4	border-orange-600' src="/images/img4.jpg" alt="" />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 justify-items-center items-center gap-10'>
                            <div className='col-span-2 h-24 w-80 text-center lg:-ms-32'>
                                <h3 className='text-xl font-medium mt-6'>Scarlett Thomas</h3>
                                <p>Singapore</p>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-10 lg:-ms-24'>
                                <div>
                                    <img className='w-24 h-24 rounded-full border-4	border-orange-600 ms-7 md:ms-0 lg:ms-0' src="/images/img5.jpg" alt="" />
                                </div>
                                <div>
                                    <img className='w-24 h-24 rounded-full border-4	border-orange-600 ms-7 md:ms-0 lg:ms-0' src="/images/img6.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg mt-72 py-8 md:py-0 lg:py-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center gap-10 lg:h-96'>
                    <div>
                        <img className='h-[610px] -mt-48' src="/images/building.png" alt="" />
                    </div>
                    <div>
                        <h1 className='text-2xl md:text-5xl lg::text-7xl text-white font-bold text-center md:text-left'>Get Our Monthly
                            Newsletter
                        </h1>
                        <p className='w-9/12 mx-auto md:mx-0 lg:mx-0 mt-6 text-white'>TrustLaw is the Thomson Reuters Foundation’s global pro bono service, facilitating free legal assistance to NGOs and social enterprises around the world.</p>
                        <div className='flex items-center justify-center md:justify-start mt-10'>
                            <input className='input1 px-10 py-4 rounded-lg' type="email" placeholder='Input your @email address in here' name="" id="" />
                            <button className='bg-white px-4 py-4 rounded-lg'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g clip-path="url(#clip0_12_157)">
                                        <path d="M16.172 11.0002L10.808 5.63617L12.222 4.22217L20 12.0002L12.222 19.7782L10.808 18.3642L16.172 13.0002H4V11.0002H16.172Z" fill="#FF803C" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_12_157">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
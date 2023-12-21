import React from 'react';

const Shop = () => {
    return (
        <div className='py-10'>
            <div className='text-center mt-20'>
                <h3 className='text-5xl text font-light mb-5'>Popular</h3>
                <h1 className='text-7xl text-black font-light'>Tourist Shop</h1>
                <p className='w-9/12 mx-auto mt-6 lg:px-32'>A package tour, package vacation, or package holiday comprises transport and accommodation advertised and sold together by a vendor known as a tour operator. Other services may be provided such as a rental car, activities or outings during the holiday.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-5 mt-20 container mx-auto'>
                <div>
                    <div className="relative">
                        <img className='rounded-lg w-full  h-[600px] opacity-60' src="https://www.cuddlynest.com/blog/wp-content/uploads/2022/05/shopping-in-rome-via-dei-condotti.jpg" />
                        <div className='absolute top-64 left-32 lg:left-80 text-center'>
                            <h1 className='text-black text-4xl font-serif'>Rome, Italy</h1>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex justify-center items-center'>
                        <div className="relative">
                            <img className='rounded-lg w-[400px] mx-auto h-80 opacity-60 pe-3' src="https://www.gpsmycity.com/img/art_item/b8303cbb0ff-ceramics.jpg" />
                            <div className='absolute top-28 left-2 lg:left-28 text-center'>
                                <h1 className='text-black text-4xl font-serif'>Rome, Italy</h1>
                            </div>
                        </div>
                        <div className="relative">
                            <img className='rounded-lg w-[400px] mx-auto h-80 opacity-60 ps-3' src="https://www.telegraph.co.uk/content/dam/Travel/2023/rome-shopping-GettyImages-160589015.jpg" />
                            <div className='absolute top-28 left-5 lg:left-28 text-center'>
                                <h1 className='text-black text-4xl font-serif'>Rome, Italy</h1>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-5">
                        <img className='rounded-lg w-[768px] mx-auto h-[260px] opacity-60' src="https://theromanguy.com/italy-travel-blog/wp-content/uploads/How-Many-Days-Should-You-Spend-in-Rome-feature-1440-675.jpg" />
                        <div className='absolute top-28 left-32 lg:left-80 text-center'>
                            <h1 className='text-black text-4xl font-serif'>Rome, Italy</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-5 mt-5 container mx-auto'>
                <div>
                    <div className='flex justify-center items-center'>
                        <div className="relative">
                            <img className='rounded-lg w-[400px] mx-auto h-80 opacity-60 pe-3' src="/images/dubai.avif" />
                            <div className='absolute top-28 left-10 lg:left-36 text-center'>
                                <h1 className='text-black text-4xl font-serif'>Dubai</h1>
                                <h3 className='btn rounded-xl mt-6 text-white'>16 Tours</h3>
                            </div>
                        </div>
                        <div className="relative">
                            <img className='rounded-lg w-[400px] mx-auto h-80 opacity-60 ps-3' src="/images/Greece.jpg" />
                            <div className='absolute top-28 left-10 lg:left-40 text-center'>
                                <h1 className='text-black text-4xl font-serif'>Greece</h1>
                                <h3 className='btn rounded-xl mt-6 text-white'>16 Tours</h3>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-5">
                        <img className='rounded-lg w-[768px] mx-auto h-[260px] opacity-60' src="/images/Singapore.jpg" />
                        <div className='absolute top-20 left-32 lg:left-80 text-center'>
                            <h1 className='text-black text-4xl font-serif'>Singapore</h1>
                            <h3 className='btn rounded-xl mt-6 text-white'>16 Tours</h3>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative">
                        <img className='rounded-lg w-full  h-[600px] opacity-60' src="/images/malaysia.jpg" />
                        <div className='absolute top-64 left-32 lg:left-80 text-center'>
                            <h1 className='text-black text-4xl font-serif'>Malaysia</h1>
                            <h3 className='btn rounded-xl mt-6 text-white'>16 Tours</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-5 mt-5 container mx-auto'>
                <div>
                    <div className="relative">
                        <img className='rounded-lg w-full  h-[600px] opacity-60' src="/images/malaysia.jpg" />
                        <div className='absolute top-64 left-32 lg:left-80 text-center'>
                            <h1 className='text-black text-4xl font-serif'>Malaysia</h1>
                            <h3 className='btn rounded-xl mt-6 text-white'>16 Tours</h3>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex justify-center items-center'>
                        <div className="relative">
                            <img className='rounded-lg w-[400px] mx-auto h-80 opacity-60 pe-3' src="/images/dubai.avif" />
                            <div className='absolute top-28 left-10 lg:left-36 text-center'>
                                <h1 className='text-black text-4xl font-serif'>Dubai</h1>
                                <h3 className='btn rounded-xl mt-6 text-white'>16 Tours</h3>
                            </div>
                        </div>
                        <div className="relative">
                            <img className='rounded-lg w-[400px] mx-auto h-80 opacity-60 ps-3' src="/images/Greece.jpg" />
                            <div className='absolute top-28 left-10 lg:left-40 text-center'>
                                <h1 className='text-black text-4xl font-serif'>Greece</h1>
                                <h3 className='btn rounded-xl mt-6 text-white'>16 Tours</h3>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-5">
                        <img className='rounded-lg w-[768px] mx-auto h-[260px] opacity-60' src="/images/Singapore.jpg" />
                        <div className='absolute top-20 left-32 lg:left-80 text-center'>
                            <h1 className='text-black text-4xl font-serif'>Singapore</h1>
                            <h3 className='btn rounded-xl mt-6 text-white'>16 Tours</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
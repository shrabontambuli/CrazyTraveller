import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Destination = () => {

    const [tour, setTour] = useState([]);
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setTour(data))
    }, [])
    

    return (
        <div className='py-10'>
            <div className='text-center mt-20'>
                <h3 className='text-5xl text font-light mb-5'>Popular</h3>
                <h1 className='text-7xl text-black font-light'>Tour Packages</h1>
                <p className='w-9/12 mx-auto mt-6 lg:px-32'>A package tour, package vacation, or package holiday comprises transport and accommodation advertised and sold together by a vendor known as a tour operator. Other services may be provided such as a rental car, activities or outings during the holiday.</p>
            </div>
            <div className='mt-20 grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-8 container mx-auto'>
                {
                    tour.map(d => <div key={d._id} className='div2 w-11/12 pb-4'>
                        <img className='w-full h-96' src={d.picture} alt="" />
                        <div className='flex justify-between items-center px-5 mt-8'>
                            <div>
                                <h1 className='text-black text-4xl font-serif'>{d.name}</h1>
                                <p className='text-[#1E1E1E] mt-2'>10 days trip</p>
                            </div>
                            <div>
                                <p className='font-semibold'>{d.price}</p>
                                <Link to={`/details/${d._id}`} >
                                    <button className='btn mt-2 font-semibold'>Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Destination;
import React from 'react';
import { Link } from 'react-router-dom';

const Details = () => {

    // const [tourDetails, setTourDetails] = useState([]);
    // useEffect(() => {
    //     fetch(`/data.json/${params.id}`)
    //         .then(res => res.json())
    //         .then(data => setTourDetails(data))
    // }, [])
    // // const data = tourDetails.find(d => d._id === _id)
    // console.log(tourDetails);

    return (
        <div className='py-10 mt-16 container mx-auto'>
            <div className='div2 w-11/12 mx-auto pb-4'>
                <img className='w-full h-96' src='' alt="" />
                <div className='flex justify-between items-center px-5 mt-8'>
                    <div>
                        <h1 className='text-black text-4xl font-serif'>hjcg</h1>
                        <p className='text-[#1E1E1E] mt-2'>10 days trip</p>
                    </div>
                    <div>
                        <p className='font-semibold'>fgfg</p>
                        <Link to='/destination' >
                            <button className='btn mt-2 font-semibold'>Go Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
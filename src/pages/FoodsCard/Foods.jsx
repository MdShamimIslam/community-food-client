// import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import FoodCard from './FoodCard';
import { Link } from 'react-router-dom';

const Foods = () => {
    const [foods,setFoods] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/limitFoods')
        .then(res=>res.json())
        .then(data=>setFoods(data))
    },[])
   
    // const [data] = useQuery({
    //     queryKey: ['foods'],
    //     queryFn: async () => {
    //       const data = await fetch('http://localhost:5000/foods');
    //       return ('query data---',data);
    //     },
    //   })

    return (
        <div className= 'my-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                foods?.map(food=><FoodCard key={food._id} food={food}></FoodCard>)
            }
            </div>
            <div className='flex justify-center'>
            <Link to="/availableFoods">
            <button className='btn text-white w-[300px] my-12 bg-gradient-to-r from-orange-500 to-blue-500'>Show All Food</button>
            </Link>
            </div>
        </div>
    );
};

export default Foods;
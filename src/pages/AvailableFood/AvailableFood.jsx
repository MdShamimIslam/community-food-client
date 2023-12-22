import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FoodCard from '../FoodsCard/FoodCard';

const AvailableFood = () => {
    const foods = useLoaderData();
    return (
        <div className='my-24'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                foods?.map(food=><FoodCard key={food._id} food={food}></FoodCard>)
            }
            </div>
        </div>
    );
};

export default AvailableFood;
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const ManageFood = () => {
    const {user} = useContext(AuthContext);
    const [foods,setFoods] = useState([]);

useEffect(()=>{
    fetch(`http://localhost:5000/createFood?email=${user?.email}`)
    .then(res=>res.json())
    .then(data=>setFoods(data))
},[])

    return (
        <div className='my-16'>
            <h3 className='text-2xl'>manage Food : {foods?.length}</h3>
        </div>
    );
};

export default ManageFood;
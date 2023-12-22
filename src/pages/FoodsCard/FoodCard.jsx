import React from "react";

const FoodCard = ({ food }) => {
  console.log(food);
  const {
    _id,
    donator_email,
    donator_img,
    donator_name,
    quantity,
    expired_date,
    location,
    status,
    food_name,
    food_Des,
    food_img,
  } = food;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={food_img}
          className="w-full h-[250px]"
          alt="food-image"
        />
      </figure>
      <div className="card-body">
      <div className="my-4 flex items-center gap-4">
            <div className="avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={donator_img} />
                </div>
            </div>
            <div>
                <p className="font-semibold">{donator_name}</p>
                <p>{location}</p>
            </div>
        </div>
        <h2 className="card-title">{food_name}</h2>
        <p>{food_Des}</p>
        <p>Number of person to be served : <span className="font-semibold text-cyan-500">{quantity}</span></p>
        <p>Pick Location : {location}</p>
        <p className=" text-pink-500">Expired Date : {expired_date}</p>
        
       
        <div className="card-actions ">
          <button className="btn text-white bg-gradient-to-r from-sky-500 to-purple-500 w-full">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

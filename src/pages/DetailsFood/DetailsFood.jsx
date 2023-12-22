import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ModalFood from "./ModalFood";

const DetailsFood = () => {
  const food = useLoaderData();
  const {
    donator_img,
    donator_name,
    quantity,
    expired_date,
    location,
    food_name,
    food_img,
  } = food;

  return (
    <div className="my-16">
      <div className="card w-2/3 bg-base-100 shadow-xl mx-auto">
        <figure>
          <img src={food_img} className="w-full h-[450px]" alt="food-image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{food_name}</h2>
          <p>
            Number of person to be served :{" "}
            <span className="font-semibold text-cyan-500">{quantity}</span>
          </p>
          <p>Pick Location : {location}</p>
          <p className=" text-pink-500">Expired Date : {expired_date}</p>
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
          <div>
            <Link to="">
              <button
                onClick={() =>
                  document.getElementById("request-modal").showModal()
                }
                className="btn text-white bg-gradient-to-r from-sky-500 to-purple-500 w-full"
              >
                Request Food
              </button>
            </Link>
          </div>
          <ModalFood food={food}></ModalFood>
        </div>
      </div>
    </div>
  );
};

export default DetailsFood;

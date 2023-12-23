import React, { useState } from "react";
import FoodCard from "../FoodsCard/FoodCard";
import { useQuery } from "@tanstack/react-query";

const AvailableFood = () => {
  // const { user } = useContext(AuthContext);
  const [foodName, setFoodName] = useState("");

  const { data: foods } = useQuery({
    queryKey: ["foods",foodName],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/foods?food_name=${foodName}`);
      return res.json();
    },
  });

  return (
    <div className="my-24">
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Filter by Food Name</span>
        </div>
        <select
          className="select select-bordered"
          onChange={(e) => setFoodName(e.target.value)}
        >
          <option disabled selected>
            Pick one
          </option>
          {foods?.map((food) => (
            <option key={food._id}>{food.food_name}</option>
          ))}
        </select>
      </label>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
        {foods?.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default AvailableFood;

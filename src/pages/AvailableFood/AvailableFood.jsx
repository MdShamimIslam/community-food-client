import React, { useState } from "react";
import FoodCard from "../FoodsCard/FoodCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const AvailableFood = () => {
  const [foodName, setFoodName] = useState("");
  const [expiredDate, setExpiredDate] = useState("");
  const { data: foods } = useQuery({
    queryKey: ["foods", foodName, expiredDate],
    queryFn: async () => {
      const res = await axios.get(
        `https://community-food-server-snowy.vercel.app/foods?food_name=${foodName}&sortOrder=${expiredDate}`
      );
      return res.data;
    },
  });

  return (
    <div className="my-24">
      <Helmet>
        <title>FoodBuzz | Available Food</title>
      </Helmet>
      <div className="flex  flex-col md:flex-row gap-6 justify-center">
        <label className="form-control w-full max-w-xs ml-12  md:ml-0">
          <div className="label">
            <span className="label-text">Search Food Name</span>
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
        <label className="form-control w-full max-w-xs ml-12 md:ml-0">
          <div className="label">
            <span className="label-text">Expired Date</span>
          </div>
          <select
            className="select select-bordered"
            onChange={(e) => setExpiredDate(e.target.value)}
          >
            <option disabled selected>
              Choose one
            </option>
            <option value="desc">High to low</option>
            <option value="asc">Low to high</option>
          </select>
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6 p-4">
        {foods?.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default AvailableFood;

import React from "react";
import { Helmet } from "react-helmet-async";
import FoodSlider from "../FoodSlider/FoodSlider";
import Foods from "../FoodsCard/Foods";

const Home = () => {
  return (
    <div className="my-16">
      <Helmet>
        <title>FoodBuzz | Home</title>
      </Helmet>
      <FoodSlider></FoodSlider>
      <Foods></Foods>
    </div>
  );
};

export default Home;

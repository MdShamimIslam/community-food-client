import React from "react";
import burger from "../../assets/images/burger.jpg";

const FoodSlider = () => {
  return (
    <div className=" my-12  w-full">
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={burger} className=" md:w-full rounded-lg shadow-2xl " />
          <div className="flex justify-center">
            <div>
              <h1 className="text-5xl font-bold">Burger guru!</h1>
              <p className="py-6 w-2/3 ">
                A burger is a patty of ground beef grilled and placed between t
                wo halves of a bun. Slices of raw onion, lettuce, bacon,
                mayonnaise, and other ingredients add flavor. Burgers are
                considered an American food but are popular around the world.
              </p>
              <button className="btn btn-primary">Let's see the Food</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodSlider;

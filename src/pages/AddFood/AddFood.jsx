import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddFood = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useContext(AuthContext);

  const onSubmit = (data) => {
    fetch("http://localhost:5000/createFood", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Food Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="my-16 w-4/5 mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Food Name</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered"
              {...register("food_name")}
              required
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Food Image URL</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered"
              {...register("food_img")}
              required
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Food Quantity</span>
            </div>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered"
              {...register("quantity")}
              required
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Pickup Location</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered"
              {...register("location")}
              required
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Expired Date</span>
            </div>
            <input
              type="date"
              placeholder="Type here"
              className="input input-bordered"
              {...register("expired_date")}
              required
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Food Description</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered"
              {...register("food_Des")}
              required
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Your Image URL</span>
            </div>
            <input
              type="text"
              value={user?.photoURL}
              readOnly
              placeholder="Type here"
              className="input input-bordered"
              {...register("donator_img")}
              required
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Your name</span>
            </div>
            <input
              type="text"
              value={user?.displayName}
              readOnly
              placeholder="Type here"
              className="input input-bordered"
              {...register("donator_name")}
              required
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Your Email</span>
            </div>
            <input
              type="email"
              value={user?.email}
              readOnly
              placeholder="Type here"
              className="input input-bordered"
              {...register("donator_email")}
              required
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Food Status</span>
            </div>
            <input
              type="text"
              value="available"
              readOnly
              placeholder="Type here"
              className="input input-bordered"
              {...register("status")}
              required
            />
          </label>
        </div>
        <div className="flex justify-center">
          <button className=" mt-8 btn text-white bg-gradient-to-r from-sky-500 to-purple-500 w-1/3">
            Add Food
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFood;

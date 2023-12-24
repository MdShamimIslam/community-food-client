import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Controller, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const ModalFood = ({ food }) => {
  const { user } = useContext(AuthContext);
  const { register, control, handleSubmit } = useForm();

  const originalDate = new Date();
  const options = { day: "numeric", month: "numeric", year: "numeric" };
  // Format the date
  const formattedDate = originalDate.toLocaleDateString("en-GB", options);

  const {
    _id,
    status,
    donator_name,
    donator_email,
    expired_date,
    location,
    food_name,
    food_img,
  } = food;

  const onSubmit = (data) => {
    const {
      food_name,
      food_img,
      food_request_id,
      donate_money,
      food_des,
      donator_email,
      donator_name,
      requester_email,
      request_date,
      location,
      expired_date,
    } = data;
    const requestInfo = {
      food_name,
      food_img,
      food_request_id,
      donate_money,
      food_des,
      location,
      status,
      donator_email,
      donator_name,
      requester_email,
      request_date,
      expired_date,
      requester_name: user?.displayName,
      requester_img: user?.photoURL,
    };
    fetch("https://community-food-server-snowy.vercel.app/requestFood", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(requestInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Request Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>FoodBuzz | Modal Food</title>
      </Helmet>
      <dialog id="request-modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4 p-4">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Food Name</span>
                </div>
                <input
                  type="text"
                  value={food_name}
                  readOnly
                  {...register("food_name")}
                  className="input input-bordered w-full"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Food Image URL</span>
                </div>
                <input
                  type="text"
                  value={food_img}
                  readOnly
                  {...register("food_img")}
                  className="input input-bordered w-full"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">food Id</span>
                </div>
                <input
                  type="text"
                  value={_id}
                  readOnly
                  {...register("food_request_id")}
                  className="input input-bordered w-full"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Food Donator Email</span>
                </div>
                <input
                  type="text"
                  value={donator_email}
                  readOnly
                  {...register("donator_email")}
                  className="input input-bordered w-full"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Food Donator Name</span>
                </div>
                <input
                  type="text"
                  value={donator_name}
                  readOnly
                  {...register("donator_name")}
                  className="input input-bordered w-full"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Your Email</span>
                </div>
                <input
                  type="text"
                  value={user?.email}
                  readOnly
                  {...register("requester_email")}
                  className="input input-bordered w-full"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Your Request Date</span>
                </div>
                <input
                  type="text"
                  value={formattedDate}
                  readOnly
                  {...register("request_date")}
                  className="input input-bordered w-full"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Pick Up Location</span>
                </div>
                <input
                  type="text"
                  value={location}
                  readOnly
                  {...register("location")}
                  className="input input-bordered w-full"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Expired Date</span>
                </div>
                <input
                  type="text"
                  value={expired_date}
                  readOnly
                  {...register("expired_date")}
                  className="input input-bordered w-full"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">
                    Your Donation Money (if you want)
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Donate money"
                  {...register("donate_money")}
                  className="input input-bordered w-full"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Say Something</span>
                </div>
                <Controller
                  name="food_des"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <textarea
                      className="textarea resize-none h-24 textarea-bordered"
                      {...field}
                      placeholder="type here"
                    />
                  )}
                />
              </label>

              <button className=" mt-2 btn text-white bg-gradient-to-r from-sky-500 to-purple-500">
                Send Request
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ModalFood;

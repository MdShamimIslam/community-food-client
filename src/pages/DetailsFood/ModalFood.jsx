import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const ModalFood = ({ food }) => {
  const { user } = useContext(AuthContext);
  const {
    _id,
    donator_name,
    donator_email,
    expired_date,
    location,
    food_name,
    food_img,
  } = food;
  return (
    <div>
      <dialog id="request-modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="space-y-4 p-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Food Name</span>
              </div>
              <input
                type="text"
                value={food_name}
                readOnly
                placeholder="Type here"
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
                placeholder="Type here"
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
                placeholder="Type here"
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
                placeholder="Type here"
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
                placeholder="Type here"
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
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Your Request Date</span>
              </div>
              <input
                type="text"
                value="explore korte hobe"
                readOnly
                placeholder="Type here"
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
                placeholder="Type here"
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
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Food Description</span>
              </div>
              <input
                type="text"
                placeholder="Description here"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Your Donation Money</span>
              </div>
              <input
                type="text"
                placeholder="Donate money"
                className="input input-bordered w-full"
              />
            </label>
            <button className=" mt-2 btn text-white bg-gradient-to-r from-sky-500 to-purple-500">
             Send Request
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ModalFood;

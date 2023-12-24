import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const FoodRequest = () => {
  const { user } = useContext(AuthContext);
  const { data: foods, refetch } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => {
      const res = await fetch(
        `https://community-food-server-snowy.vercel.app/requestFood?email=${user?.email}`
      );
      return res.json();
    },
  });

  const handleRemoveRequest = (food) => {
    console.log(food);
    Swal.fire({
      title: "Are you sure?",
      text: `You want to remove ${food.food_name}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://community-food-server-snowy.vercel.app/requestFood/${food._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Removed!",
                text: "Your request has been removed.",
                icon: "success",
              });
              refetch();
            }
          });
      }
    });
  };

  return (
    <div className="my-16">
      <Helmet>
        <title>FoodBuzz | Food Request</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="">
              <th>Food Image</th>
              <th>Donar Name</th>
              <th>Pick up Location</th>
              <th>Expired Date</th>
              <th>Request Date</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {foods?.map((food) => (
              <tr key={food._id}>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={food.food_img} alt="food-image" />
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="">{food.donator_name}</div>
                    </div>
                  </div>
                </td>
                <td>{food.location}</td>
                <td>{food.expired_date}</td>
                <td>{food.request_date}</td>
                <td>${food.donate_money}</td>
                <td>{food.status}</td>
                <td>
                  <button
                    onClick={() => handleRemoveRequest(food)}
                    className="btn btn-sm bg-gradient-to-r from-sky-500 to-purple-500"
                  >
                    cancel request
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FoodRequest;

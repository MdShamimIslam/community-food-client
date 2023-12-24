import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const SingleManageFood = () => {
  //   const { id } = useParams();

  //   const { data: foods } = useQuery({
  //     queryKey: ["foods"],
  //     queryFn: async () => {
  //       const res = await fetch("https://community-food-server-snowy.vercel.app/requestFood");
  //       return res.json();
  //     },
  //   });

  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("https://community-food-server-snowy.vercel.app/requestFood")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  const handleStatusChange = (id) => {
    fetch(`https://community-food-server-snowy.vercel.app/requestFood/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Delivered" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Updated!",
            text: "Your request has been updated.",
            icon: "success",
          });
          const remaining = foods.filter((food) => food._id !== id);
          const updated = foods.find((food) => food._id === id);
          updated.status = "Delivered";
          const newBookings = [updated, ...remaining];
          setFoods(newBookings);
        }
      });
  };

  return (
    <div className="my-16">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Requester Image</th>
              <th>Requester Name</th>
              <th>Requester Email</th>
              <th>Request Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {foods?.map((food) => (
              <tr key={food._id}>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={food.requester_img} alt="food-image" />
                    </div>
                  </div>
                </td>
                <td>{food.requester_name}</td>
                <td>{food.requester_email}</td>
                <td>{food.request_date}</td>
                <td>
                  <button
                    onClick={() => handleStatusChange(food._id)}
                    className="btn btn-xs"
                  >
                    {food.status}
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

export default SingleManageFood;

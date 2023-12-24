import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageFood = () => {
  const { user } = useContext(AuthContext);
  const { data: foods, refetch } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/createFood?email=${user?.email}`
      );
      return res.json();
    },
  });

  const handleDeleteFood = (food) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to delete ${food.food_name}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/createFood/${food._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Removed!",
                text: "Your request has been deleted.",
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
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="">
              <th>Food Image</th>
              <th>Food Name</th>
              <th>Pick up Location</th>
              <th>Expired Date</th> 
              <th>Delete Action</th>
              <th>Manage Action</th>
              <th>Update Action</th>
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
                  {food.food_name}
                </td>
                <td>{food.location}</td>                                                                                                                                                                               
                <td>${food.expired_date}</td>
                <td>
                  <button
                    onClick={() => handleDeleteFood(food)}
                    className="btn text-white font-light btn-sm bg-gradient-to-r from-sky-500 to-purple-500"
                  >
                    Delete
                  </button>
                </td>
                
                <td>
                  <button
                    onClick={() => handleManageUser()}
                    className="btn text-white font-light btn-sm bg-gradient-to-r from-sky-500 to-purple-500"
                  >
                    Manage
                  </button>
                </td>
                <td>
                  <Link to={`/updateFood/${food._id}`}>
                    <button className="btn text-white font-light btn-sm bg-gradient-to-r from-sky-500 to-purple-500">
                      Edit
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageFood;

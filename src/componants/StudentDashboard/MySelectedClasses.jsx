import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import swal from 'sweetalert';
import useCard from "../Hooks/useCard";

const MySelectedClasses = () => {
  const [cart, isLoading, refetch] = useCard();

  const handleClassDelete = id => {
    const proceed = confirm('Are you sure to want to delete?')
    if(proceed){
      fetch(`https://football-acadamy-server.vercel.app/selectclass/${id}`, {
        method: 'DELETE'
      })
      .then(res=> res.json())
      .then(data => {
        refetch()
        console.log(data);
        if(data.deletedCount > 0) {
          swal({
            title: "Delete Sussess!",
            icon: "success",
          });
          refetch()
          // window.location.reload(true)
        }
      })
    }
  }
  return (
    <div>
      <h1 className="flex justify-center font-bold text-4xl py-10">
        My Selected Classes
      </h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-sm text-gray-100 bg-slate-600 rounded-md">
                <th>S/N</th>
                <th>Class Photo</th>
                <th>Class Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Student</th>
                <th>Payment</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((classItem, index) => (
                <tr key={index} className="bg-slate-800 shadow-2xl">
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={classItem.image} alt="" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <div className="font-bold">{classItem.title}</div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <div className="font-bold">{classItem.pricee}</div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <div className="font-bold">{classItem.description}</div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <div className="font-bold">{classItem.studentCount}</div>
                    </div>
                  </td>
                  <td>
                    <Link to={`/dashboard/payment/${classItem?._id}`}>
                     <button className="btn btn-xs text-orange-400 py-2 px-4"
                     >Pay</button>
                    </Link>
                  </td>
                  <td>
                    <button className="btn btn-xs"
                    onClick={() => handleClassDelete(classItem._id)}
                    >
                      <AiFillDelete size={20} color="red"></AiFillDelete>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MySelectedClasses;
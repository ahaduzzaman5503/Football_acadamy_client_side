import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";

const MySelectedClasses = () => {
  const myClasses = useLoaderData();   

  const handleClassDelete = id => {
    const proceed = confirm('Are you sure to want to delete?')
    if(proceed){
      fetch(`http://localhost:5000/selectclass/${id}`, {
        method: 'DELETE'
      })
      .then(res=> res.json())
      .then(data => {
        console.log(data);
        if(data.deletedCount > 0) {
          alert('Data Deleted Successfull wow')
          window.location.reload(true)
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
                <th>Description</th>
                <th>Student</th>
                <th>Payment</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {myClasses.map((classItem, index) => (
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
                      <div className="font-bold">{classItem.description}</div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <div className="font-bold">{classItem.studentCount}</div>
                    </div>
                  </td>
                  <td>
                    <Link to="/dashboard/payment">
                     <button className="btn btn-xs text-orange-400">Pay</button>
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

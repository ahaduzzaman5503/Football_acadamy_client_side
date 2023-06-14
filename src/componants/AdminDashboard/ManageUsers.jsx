import React from "react";
import { useLoaderData } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import swal from "sweetalert";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const ManageUsers = () => {
  const [axiosSucure] = useAxiosSecure();
  const {data: users = [], refetch} = useQuery(['users'], async() => {
    const res = await axiosSucure.get('/users')
    return res.data;
  })

  const handleMakeAdmin = user => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.modifiedCount){
        refetch();
        swal({
          title: "Good job!",
          text: `${user.name} is an admin now`,
          icon: "success",
        });
      }
    })
  }

  return (
    <div>
      <h1 className="flex justify-center font-bold text-4xl pt-5">
        Total User: {users.length}
      </h1>
      <div className="divider"></div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="text-sm text-gray-100 bg-slate-600 rounded-md">
                <th>Photo</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="bg-slate-800 shadow-2xl">
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={user.photo} alt="" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <div className="font-bold">{user.name}</div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <div className="font-bold">{user.email}</div>
                    </div>
                  </td>
                  <td>
                    {
                      user.role === 'admin' ? 'admin' : 
                    <div className="gap-2 inline">
                    <button className="btn btn-xs mb-1"
                     onClick={() => handleMakeAdmin(user)}
                    >Admin</button>
                    <button className="btn btn-xs">Instructor</button>
                    </div>
                    }
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

export default ManageUsers;

import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MySelectedClasses = () => {
  const myClasses = useLoaderData();
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
                          <img
                            src={classItem.image}
                            alt=""
                          />
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
                    <button className="btn btn-xs text-orange-400">Pay</button>
                  </td>
                  <td>
                    <button className="btn btn-xs text-success">Delete</button>
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

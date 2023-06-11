import React from "react";
import { useLoaderData } from "react-router-dom";

const MyClass = () => {
  const allClassData = useLoaderData();
  console.log(allClassData);

  return (
    <div>
      <h1 className="flex justify-center font-bold text-4xl py-10">
        My Classes
      </h1>
      <div>
        Data Count: {allClassData.length}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-sm text-gray-100 bg-slate-600 rounded-md">
                <th>S/N</th>
                <th>Class Photo</th>
                <th>Class Name</th>
                <th>Instructor Name</th>
                <th>Price</th>
                <th>Pending</th>
                <th>Approved</th>
                <th>Denied</th>
              </tr>
            </thead>
            <tbody>
              {allClassData.map((classItem, index) => (
                <tr key={index} className="bg-slate-800 shadow-2xl">
                  <td>
                      {index + 1}
                  </td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={classItem.photoUrl}
                            alt={`Avatar of ${classItem.className}`}
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <div className="font-bold">{classItem.ClassName}</div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <div className="font-bold">{classItem.InstractiorName}</div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <div className="font-bold">{classItem.price}</div>
                    </div>
                  </td>
                  <td>
                    <button className="btn btn-xs text-orange-400">pending</button>
                  </td>
                  <td>
                    <button className="btn btn-xs text-success">approved</button>
                  </td>
                  <td>
                    <button className="btn btn-xs text-red-400">denied</button>
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

export default MyClass;

import React from "react";
import { GrSelect } from "react-icons/gr";
import { useLoaderData } from "react-router-dom";

const Classes = () => {
  const classdata = useLoaderData();
  return (
    <div className="container mx-auto pt-20">
      <div>
        <h1 className="flex justify-center font-bold text-4xl py-10">
          Popular Classes
        </h1>
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {classdata.map((classItem, index) => (
              <div
                key={index}
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <img
                  className="rounded-t-lg"
                  src={classItem.image}
                  alt=""
                />
                <div className="p-5">
                  <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {classItem.title}
                  </h3>
                  <p className="mb-2 text-gray-700 dark:text-gray-300">
                    {classItem.description}
                  </p>
                  <p className="mb-2 text-gray-700 dark:text-gray-300">
                   Stuednt: {classItem.studentCount}
                  </p>
                  <button className="btn btn-primary">
                    Select Class
                    <GrSelect size={20} color="blue" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;

import React from "react";
import { useLoaderData } from "react-router-dom";

const ExtraSection = () => {
  const facilities = useLoaderData();

  return (
    <div className="mt-10">
        <h1 className="flex justify-center font-bold text-4xl py-10">Facilities Football Academy</h1>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4" >
      {facilities.map((facility, index) => (
        <div
          key={index}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
        >
          <img
            className="rounded-t-lg relative"
            src={facility.img}
            alt=""
          />
          <div className="flex justify-center items-center absolute mt-[-120px] ms-20 font-bold text-black text-xl">{facility.name}</div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ExtraSection;

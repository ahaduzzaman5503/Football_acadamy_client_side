import React, { useEffect, useState } from "react";

const ExtraSection = () => {
  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://football-acadamy-server.vercel.app/extrasection");
        const data = await response.json();
        setFacilities(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-10 mb-10">
      <h1 className="flex justify-center font-bold text-4xl py-10">
        Facilities Football Academy
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-3 group"
          >
            <div className="relative">
              <img
                className="rounded-t-lg w-full h-full object-cover"
                src={facility.img}
                alt=""
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 ease-in-out"></div>
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <h3 className="text-xl font-bold text-white">{facility.name}</h3>
              </div>
            </div>
            <div className="p-5">
              <p className="text-gray-700 dark:text-gray-300">
                {facility.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtraSection;

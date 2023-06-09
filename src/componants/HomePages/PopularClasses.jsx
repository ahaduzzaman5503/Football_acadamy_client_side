import React, { useEffect, useState } from "react";

const PopularClasses = () => {
  const [classesData, setClassesData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/footballclass");
        const data = await response.json();
        
        const sortedData = data.sort((a, b) => b.studentCount - a.studentCount);

        const topClasses = sortedData.slice(0, 6);
        setClassesData(topClasses);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <div>
      <h1 className="flex justify-center font-bold text-4xl py-10">
        Popular Classes
      </h1>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {showAll
            ? classesData.map((classItem, index) => (
                <div
                  key={index}
                  className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                  <img
                    className="rounded-t-lg object-cover"
                    src={classItem.image}
                    alt={classItem.name}
                  />
                  <div className="p-5">
                    <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {classItem.title}
                    </h3>
                    <p className="mb-2 text-gray-700 dark:text-gray-300">
                      {classItem.description}
                    </p>
                    <p className="mb-2 text-gray-700 dark:text-gray-300">
                      Students: {classItem.studentCount}
                    </p>
                    <a
                      href={classItem.link}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              ))
            : classesData.slice(0, 6).map((classItem, index) => (
                <div
                  key={index}
                  className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                  <img
                    className="rounded-t-lg"
                    src={classItem.image}
                    alt={classItem.name}
                  />
                  <div className="p-5">
                    <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {classItem.title}
                    </h3>
                    <p className="mb-2 text-gray-700 dark:text-gray-300">
                      {classItem.description}
                    </p>
                    <p className="mb-2 text-gray-700 dark:text-gray-300">
                      Students: {classItem.studentCount}
                    </p>
                    <a
                      href={classItem.link}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
        </div>
        {!showAll && (
          <div className="flex justify-center mt-4">
            <button
              className="px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleShowAll}
            >
              Show All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularClasses;

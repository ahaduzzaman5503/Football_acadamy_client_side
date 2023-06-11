import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AddClass = () => {
  const { users } = useContext(AuthContext);

  const handleAddClass = (event) => {
    event.preventDefault();

    const ClassName = event.target.className.value;
    const InstractiorName = users.displayName;
    const price = event.target.price.value;
    const AvailableSeats = event.target.availableSeats.value;
    const email = users.email;
    const photoUrl = event.target.classImage.value;

    const newClass = {
      ClassName,
      InstractiorName,
      AvailableSeats,
      price,
      email,
      photoUrl,
    };
    console.log(newClass);

    fetch("http://localhost:5000/addclassdata", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newClass),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged === true) {
          alert("Toy Car Added Successfully");
        }
      });
  };
  return (
    <div>
      <h1 className="flex justify-center font-bold text-4xl py-10">
        Add A Class
      </h1>
      <form onSubmit={handleAddClass}>
        {/* class name */}
        <div class="mb-6">
          <label
            for="className"
            class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
          >
            Class name
          </label>
          <input
            type="text"
            id="className"
            name="className"
            class="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
            placeholder="class Name"
          />
        </div>
        {/* class image */}
        <div class="mb-6">
          <label
            for="username-success"
            class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
          >
            Class Image
          </label>
          <input
            type="text"
            id="classImage"
            name="classImage"
            class="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
            placeholder="Class Image"
          />
        </div>
        {/* instractior name */}
        <div class="mb-6">
          <label
            for="instractiorName"
            class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
          >
            Instractor name
          </label>
          <input
            type="text"
            id="instractiorName"
            name="instractiorName"
            class="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
            placeholder={users.displayName}
            readOnly
          />
        </div>
        {/* instractor email */}
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Instractor email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder={users.email}
            readOnly
          />
        </div>
        {/* Available seats*/}
        <div class="mb-6">
          <label
            for="availableSeats"
            class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
          >
            Available seats
          </label>
          <input
            type="text"
            id="availableSeats"
            name="availableSeats"
            class="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
            placeholder="Available Seats"
          />
        </div>
        {/* Price */}
        <div class="mb-6">
          <label
            for="price"
            class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
          >
            Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            class="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
            placeholder="Price"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Class
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddClass;

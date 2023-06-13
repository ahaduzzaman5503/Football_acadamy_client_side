import React from "react";

const Slider = () => {
  return (
    <div className="carousel w-full pt-20">
      <div id="slide1" className="carousel-item relative w-full ">
        <img
          src="https://i.ibb.co/1qdNTGK/photo-1526232761682-d26e03ac148e-1920w-1.webp"
          className="w-full h-4/4"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute top-48 left-24 flex justify-center items-center">
          <div className="text-center text-white p-20">
            <h1 className="text-3xl font-bold">Practice Time</h1>
            <p>
              The Honorable Teacher Gide him student about football playing
              systam. They Listen with deep Mind.{" "}
            </p>
          </div>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/mhNChQP/photo-1551958219-acbc608c6377-1920w.webp"
          className="w-full h-4/4"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute top-48 left-24 flex justify-center items-center">
          <div className="text-center text-black p-14">
            <h1 className="text-3xl font-bold">Student Football</h1>
            <p>
              The Honorable Teacher Gide him student about football playing
              systam. They Listen with deep Mind.{" "}
            </p>
          </div>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/JcDMNYB/download.jpg"
          className="w-full h-4/4"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute top-48 left-24 flex justify-center items-center">
          <div className="text-center text-black p-14">
            <h1 className="text-3xl font-bold">Practice Time</h1>
            <p>
              The Honorable Teacher Gide him student about football playing
              systam. They Listen with deep Mind.{" "}
            </p>
          </div>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/sVkbkZN/images.jpg"
          className="w-full h-4/4"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute top-48 left-24 flex justify-center items-center">
          <div className="text-center text-green-400 p-14">
            <h1 className="text-3xl font-bold">Students with Teacher</h1>
            <p>
              The Honorable Teacher Gide him student about football playing
              systam. They Listen with deep Mind.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;

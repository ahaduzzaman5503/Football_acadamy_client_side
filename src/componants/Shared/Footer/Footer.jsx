import React from "react";
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content container mx-auto">
        <div>
          <div className="flex flex-col items-center justify-center rounded-xl bg-slate-800 p-3 ">
            <img
              className="w-20 h-auto"
              src="https://i.ibb.co/bNDZbBH/football-academy.png"
            />
            <h1 className="btn btn-ghost normal-case text-xl">
              Football Acadamy
            </h1>
          </div>
        </div>
        <div className="rounded-xl bg-slate-800 p-3">
          <ul className="p-4 font-bold">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/instractors">Instructors </Link>
            </li>
            <li>
              <Link to="/classes">Classes</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
        <div className="rounded-xl bg-slate-800 p-3">
          <ul>
            <li>
              <span className="footer-title">contact information</span>
            </li>
            <li>
              <a className="link link-hover">Name: Ahaduzzaman</a>
            </li>
            <li>
              <a href="tel:+4733378901">Phone: 01734545503</a>
            </li>
            <li>
              {" "}
              <a href="mailto:ahaduzzaman45503@gmail.com">
                Email: ahaduzzaman45503@gmail.com
              </a>
            </li>
            <li>
              <a className="link link-hover">Address: Habigang, Sylhet.</a>
            </li>
          </ul>
        </div>
        <div className="rounded-xl bg-slate-800 p-3">
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content container mx-auto mb-3">
        <div>
          <p>Copyright © 2023 - All right reserved by Football Acadamy Ltd</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

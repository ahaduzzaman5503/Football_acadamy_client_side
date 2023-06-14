import React from "react";
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (


    <footer className="footer p-10 bg-base-200 text-base-content container mx-auto">
      <div>
        <div className=" ">
          <img
            className="w-20 h-auto"
            src="https://i.ibb.co/bNDZbBH/football-academy.png"
          />
          <h1 className="btn btn-ghost normal-case text-xl">
            Football Acadamy
          </h1>
        </div>
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>Instructors</li>
          <li>Classes</li>
          <li>Blogs</li>
          <li>About</li>
        </ul>
      </div>
      <div>
      <ul>
            <li><span className="footer-title">contact information</span></li>
            <li><a className="link link-hover">Name: Ahaduzzaman</a></li>
            <li><a href="tel:+4733378901">Phone: 01734545503</a></li>
            <li> <a href="mailto:ahaduzzaman45503@gmail.com">Email: ahaduzzaman45503@gmail.com</a></li>
            <li><a className="link link-hover">Address: Habigang, Sylhet.</a></li>
          </ul>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
    
  );
};

export default Footer;

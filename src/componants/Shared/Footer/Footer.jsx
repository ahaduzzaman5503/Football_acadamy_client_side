import React from "react";
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container mx-auto bg-slate-700 p-10">
      <div className="flex justify-around ">
        <div className="flex flex-col">
          <img
            className="w-20 h-auto"
            src="https://i.ibb.co/bNDZbBH/football-academy.png"
          />
          <h1>Football Acadamy</h1>
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
            <li>Comming</li>
            <li>Comming</li>
            <li>Comming</li>
            <li>Comming</li>
            <li>Comming</li>
          </ul>
        </div>

        <div>
          <div>
            <span className="footer-title">Newsletter</span>
            <div className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered w-full pr-16"
                />
                <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <span className="footer-title">Social Media</span>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.facebook.com/ahaduzzaman5503" target="-blank">
              <FaFacebookF size={30}></FaFacebookF>
            </a>
            <a href="https://github.com/ahaduzzaman5503" target="-blank">
              <FaGithub size={30}></FaGithub>
            </a>
            <a
              href="https://www.linkedin.com/in/ahaduzzaman-5503/"
              target="-blank"
            >
              <FaLinkedin size={30}></FaLinkedin>
            </a>
            <a href="https://twitter.com/ahaduzzaman5503" target="-blank">
              <FaTwitter size={30}></FaTwitter>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-10 text-xl font-bold">
        <h1>Copyright All Right Researve Football Acadamy Inc</h1>
      </div>
    </div>
  );
};

export default Footer;

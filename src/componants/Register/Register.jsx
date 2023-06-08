import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.init";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const Registration = () => {
  const { users, createUser } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [seccess, setSuccess] = useState("");
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/login";

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

    /*===================Google Login========================*/
    const handleGoogleSignIn = () => {
      signInWithPopup(auth, provider)
        .then((result) => {
          const googleUser = result.user;
          console.log(googleUser);
        })
        .catch((error) => {
          console.log("error", error.message);
        });
    };

  /*=================Email Password Login===================*/
  const handleName = (event) => {
    console.log(event.target.value);
  };
  const handleEmailChange = (event) => {
    console.log(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    console.log(event.target.value);
  };
  const handleConfirmPassword = (event) => {
    console.log(event.target.value);
  };
  const PhotoUrlHandle = (event) => {
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmpasswords.value;
    const photo = event.target.photo.value;
    console.log(name, email, password, confirmPassword, photo);

    createUser(email, password)
      .then((result) => {
        const emailPassUser = result.user;
        console.log(emailPassUser);
        setUser(emailPassUser);
        setError("");
        event.target.reset();
        setSuccess("User has Created Successfully");
        navigate(from);
      })
      .catch((error) => {
        setError(error.message);
        setSuccess("");
      });
  };

  return (
    <div className="container mx-auto pt-20">
      <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="text-center text-2xl font-bold mt-3">
            Please Sign Up
          </div>
          <form onSubmit={handleSubmit} className="card-body">
            {/* ==================Name Field======================= */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-xl">Name</span>
              </label>
              <input
                onChange={handleName}
                placeholder="name"
                className="input input-bordered"
                id="name"
                required
              />
            </div>

            {/*==================Email Field===================== */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-xl">Email</span>
              </label>
              <input
                onChange={handleEmailChange}
                type=""
                placeholder="email"
                className="input input-bordered"
                id="email"
                required
              />
            </div>

            {/* ==================PassWord Field=================== */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-xl">Password</span>
              </label>
              <input
                onBlur={handlePasswordBlur}
                type="password"
                placeholder="at least 6 characters,one capital and one special character"
                className="input input-bordered"
                id="password"
                pattern="(?=.*[A-Z])(?=.*[!@#$%^&*()_+=\[{\]};:<>|./?,-])(?=.{6,})"
                title="Password must be at least 6 characters long, contain at least one capital letter, and one special character."
                required
              />
            </div>

            {/*================Confirm PassWord Field================ */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-xl">
                  Confirm Password
                </span>
              </label>
              <input
                onBlur={handleConfirmPassword}
                type="password"
                placeholder="confirm password"
                className="input input-bordered"
                id="confirmpasswords"
                required
              />
            </div>

            {/* ==============Photo Field=================== */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-xl">Photo Url</span>
              </label>
              <input
                onChange={PhotoUrlHandle}
                type="file"
                placeholder="Photo Url"
                className="input input-bordered"
                name="photo"
                id="photo"
                required
              />
            </div>
            <div className="form-control mt-2">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>

          <p className="text-red-500 text-center mb-3">{error}</p>
          <p className="text-green-400 text-center mb-3">{seccess}</p>

          <div className="form-control px-8">
            <button className="btn btn-success" onClick={handleGoogleSignIn}>
              <FcGoogle size={30}></FcGoogle> Continue With Google
            </button>
          </div>

          <div className="flex items-center gap-2 text-center mx-10 mt-3">
            <h1 className="text-green-100 ms-10">Already an User?</h1>
            <Link
              to={"/login"}
              className="bg-blue-400 font-bold text-black rounded-lg p-2"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;

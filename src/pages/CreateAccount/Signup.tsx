import React from "react";
import registerPhoto from "../../assets/I Love Reading Coloring Page.png";
import auth from "../../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading] =
    useSignInWithGoogle(auth);
  const navigate = useNavigate();

  const handleUserRegistration = (e) => {
    // code to register user
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUserWithEmailAndPassword(email, password);
  };

  if (loading || googleLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (user || googleUser) {
    navigate("/");
  }

  // console.log(gUser);
  console.log(user);
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src={registerPhoto} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleUserRegistration} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Register"
              />
            </div>
            <p className="text-center">---------- or ----------</p>
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-accent"
            >
              SIGN IN WITH GOOGLE
            </button>
          </form>
          <p className="text-center mb-5">
            Already have a account?
            <Link className="underline text-blue-500" to="/login">
              just login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

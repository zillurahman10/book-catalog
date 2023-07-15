import React from "react";
import registerPhoto from "../../assets/I Love Reading Coloring Page.png";
import auth from "../../../firebase.init";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const navigate = useNavigate();

  const handleUserLogin = (e) => {
    // code to register user
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(email, password);
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
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src={registerPhoto} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleUserLogin} className="card-body">
            {googleError || error ? (
              <p className="text-red-600 text-center font-bold">
                Email or password is incorrect
              </p>
            ) : null}
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
              <input className="btn btn-primary" type="submit" value="Login" />
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
            Don't have a account ?
            <Link className="underline text-blue-500" to="/signup">
              Create a account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

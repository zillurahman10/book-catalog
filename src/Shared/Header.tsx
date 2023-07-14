import React from "react";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/allbooks">All Books</Link>
      </li>
      <li>
        <a>Item 1</a>
      </li>
    </>
  );
  return (
    <div className="ml-12 mr-12">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>

        <div className="navbar-end">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{menuItems}</ul>
          </div>
          {user ? (
            <button onClick={() => signOut()} className="btn btn-neutral">
              LogOut
            </button>
          ) : (
            <Link className="btn btn-neutral" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import userImage from "../../assets/images/user.png";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navLinks = (
    <>
      <li>
        <NavLink className="md:text-lg" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="md:text-lg" to="/availableFoods">
          Available Foods
        </NavLink>
      </li>
      <li>
        <NavLink className="md:text-lg" to="/addFood">
          Add Food
        </NavLink>
      </li>
      <li>
        <NavLink className="md:text-lg" to="/manageFood">
          Manage My Foods
        </NavLink>
      </li>
      <li>
        <NavLink className="md:text-lg" to="/foodRequest">
          My Food Request
        </NavLink>
      </li>
    </>
  );

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.dir(error));
  };

  return (
    <div className="navbar bg-base-100 mt-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>

        <div>
          <Link to="/" className="flex items-center gap-4">
            <img className="w-[45px]" src={logo} alt="website-logo" />
            <p className="text-4xl font-bold">
              <Link to="/">
                <span className="text-cyan-500">F</span>ood
                <span className="text-purple-500">B</span>uzz
              </Link>
            </p>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex ml-16">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn md:btn-md text-white mr-2 btn-sm md:text-lg bg-gradient-to-r from-sky-500 to-purple-500  hover:text-white font-medium"
          >
            Sign Out
          </button>
        ) : (
          <button className="btn mr-2 text-white md:btn-md btn-sm md:text-lg font-medium bg-gradient-to-r from-sky-500 to-purple-500">
            <Link to="/signIn">Sign In</Link>
          </button>
        )}

        {user ? (
          <label
            tabIndex={0}
            data-tip={user?.displayName}
            className="btn btn-ghost btn-circle avatar  tooltip"
          >
            <div className="md:w-12 w-8 rounded-full md:mt-0 mt-2 md:ml-0 ml-2">
              <img alt="user-image" src={user?.photoURL} />
            </div>
          </label>
        ) : (
          <label
            tabIndex={0}
            data-tip="No User"
            className="btn btn-ghost btn-circle avatar md:mr-2 tooltip"
          >
            <div className="md:w-12 w-8  rounded-full">
              <img alt="user-image" src={userImage} />
            </div>
          </label>
        )}
      </div>
    </div>
  );
};

export default Navbar;

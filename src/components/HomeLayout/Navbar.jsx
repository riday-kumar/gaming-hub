import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../authContext/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, setUser, userSignOut } = use(AuthContext);
  const navigate = useNavigate();
  // console.log(user);

  const handleLogOut = () => {
    userSignOut()
      .then(() => {
        setUser(null);
        navigate("/");
        toast.success("Log Out Successfully");
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink className="text-[18px] md:text-[20px]" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="text-[18px] md:text-[20px]" to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink className="text-[18px] md:text-[20px]" to="/our-game">
          Our Game
        </NavLink>
      </li>
      <li>
        <NavLink className="text-[18px] md:text-[20px]">Tournament</NavLink>
      </li>
      <li>
        <NavLink className="text-[18px] md:text-[20px]">Contact Us</NavLink>
      </li>
      {user ? (
        ""
      ) : (
        <>
          <li>
            <NavLink className="text-[18px] md:text-[20px]" to="/auth/login">
              Sign in
            </NavLink>
          </li>
          <li>
            <NavLink className="text-[18px] md:text-[20px]" to="/auth/register">
              Register
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <nav
      style={{
        boxShadow: "rgba(26, 15, 63, 0.71) 0px 12px 29px 0px",
      }}
      className="bg-linear-to-b from-[#cf15f8] to-[#5f16a9] text-white "
    >
      <div className="navbar shadow-sm w-5/6 mx-auto">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className=" menu menu-sm dropdown-content bg-accent rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
              {user ? (
                <button
                  onClick={handleLogOut}
                  className=" btn btn-neutral text-primary"
                >
                  Sign Out
                </button>
              ) : (
                ""
              )}
            </ul>
          </div>
          <img
            src="https://i.ibb.co.com/pj7K5wvN/hks-removebg-preview.png"
            className="w-28 h-22"
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-3">
          <Link className="tooltip" data-tip="My Profile" to="/my-profile">
            <img
              className={`border-2 border-white w-9 h-9 rounded-full bg-white ${
                user ? "animate-pulse" : "animate-none"
              }`}
              src={
                user
                  ? user.photoURL
                  : "https://img.icons8.com/?size=100&id=98957&format=png&color=000000"
              }
              alt=""
            />
            {/* <img src={user.photoURL} alt="" /> */}
          </Link>
          {user ? (
            <button
              onClick={handleLogOut}
              className="max-md:hidden btn btn-neutral text-primary"
            >
              Sign Out
            </button>
          ) : (
            <Link
              to="/auth/login"
              className="max-md:hidden btn btn-neutral text-primary"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

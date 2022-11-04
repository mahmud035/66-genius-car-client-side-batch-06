import React from 'react';
import logo from '../../../assets/logo.svg';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const menuItems = (
    <>
      <li className="font-semibold">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to="/">About</NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to="/">Services</NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to="/">Blog</NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to="/">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar h-20 pt-12 pb-12 bg-base-100 ">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>{menuItems}</li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img src={logo} className="w-20" alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <li>{menuItems}</li>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/">
          <button className="btn btn-outline btn-warning">Appointment</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
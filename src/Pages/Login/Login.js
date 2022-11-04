import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/images/login/login.svg';

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="hero w-full py-20">
      <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="w-3/4">
          <img src={image} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center">Login </h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
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
                required
              />
              <label className="label">
                <Link to="/" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-outline btn-primary"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <p className="text-center pb-4">
            New to Genius Car?
            <Link to="/signup" className="text-orange-600 font-bold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

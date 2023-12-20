import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignIn = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log('hook data---',data);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">img</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-2xl font-semibold text-center">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email")}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password")}
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value='Sign In' />
            </div>
          </form>
          <p className="text-center mb-6">Create new Account ? <Link to='/signUp' className="text-orange-500 font-semibold">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

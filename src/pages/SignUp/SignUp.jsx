import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import signInImg from "../../assets/images/signUp.png";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const SignUp = () => {
  const { register, handleSubmit, formState: { errors },reset } = useForm();
  const { createUser, userProfileUpdate, googleSignIn,logOut } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User created successfully",
          showConfirmButton: false,
          timer: 1500,
        });

        userProfileUpdate(data.name, data.photoURL)
          .then(() => {
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Profile updated successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(location?.state ? location.state : "/");
            logOut();
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.dir(error));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const user = res.user;
        console.log(user);

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Sign In Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Helmet>
        <title>FoodBuzz | Sign Up</title>
      </Helmet>
      <div className="hero my-16">
        <div className="hero-content flex-col lg:flex-row-reverse gap-20">
          <div className="text-center lg:text-left ">
            <img className="" src={signInImg} alt="signUp image" />
          </div>
          <div className="card shrink-0 w-full max-w-md shadow-2xl p-6">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <h1 className="text-2xl font-semibold text-center text-purple-500">
                Sign Up now!
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  {...register("name")}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="photo URL"
                  className="input input-bordered"
                  {...register("photoURL")}
                  required
                />
              </div>
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
                  {...register("password", {
                    required: true,
                    maxLength: 10,
                    minLength: 6,
                    pattern:
                      /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                  })}
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-600">
                    Password field is required
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600">
                    Password must be at least 6 characters
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-600">
                    Password less than 10 characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600">
                    At least one uppercase , one lowercase , special character and one digit
                  </span>
                )}
              </div>
              <div className="form-control mt-3">
                <input
                  className="btn bg-gradient-to-r from-sky-500 to-purple-500 w-full"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <div className="divider">OR</div>
            <div className="text-center mb-4">
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-outline w-full"
              >
                <FcGoogle className="text-xl"></FcGoogle>
                Sign In with Google
              </button>
            </div>
            <p className="text-center">
              Already have an account ?{" "}
              <Link to="/signIn" className="text-cyan-600 font-semibold">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

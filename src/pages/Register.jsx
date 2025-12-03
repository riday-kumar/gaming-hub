import React, { useContext, useState } from "react";
import PageHeading from "../components/PageHeading";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../authContext/AuthContext";
import { updateProfile } from "firebase/auth";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { toast } from "react-toastify";

const Register = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const { signUpWithEmailPassword, user, setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleShow = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  const handleRegistration = (e) => {
    e.preventDefault();

    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const password = e.target.password.value;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordPattern.test(password)) {
      setError(
        "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
      );
      return;
    }
    if (!emailPattern.test(email)) {
      setError(
        "Please enter a valid email address (example: user@example.com)."
      );
      return;
    }

    setError("");

    signUpWithEmailPassword(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        updateProfile(user, {
          displayName,
          photoURL,
        })
          .then(() => {
            setUser({ ...user, displayName, photoURL });
            navigate("/our-game");
            toast.success("User Created Successfully");
          })
          .catch((err) => {});
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
      });

    e.target.reset();
  };
  return (
    <div>
      <title>HKS | Register</title>
      <div>
        <PageHeading heading={"Register Now"}></PageHeading>
        {/* form */}
        <div className="w-5/6 mx-auto flex justify-center items-center h-screen">
          <div className="card bg-neutral py-5 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              {/* form */}
              <form onSubmit={handleRegistration}>
                <p className="text-red-600 font-semibold mb-2 text-[18px]">
                  {error}
                </p>
                <fieldset className="fieldset text-[18px] font-medium">
                  {/* name */}
                  <label className="label text-white">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="input w-full"
                    placeholder="Your Name"
                  />
                  {/* photo url */}
                  <label className="label text-white">Photo URL</label>
                  <input
                    type="text"
                    name="photo"
                    required
                    className="input w-full"
                    placeholder="Photo URL"
                  />
                  {/* email */}
                  <label className="label text-white">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="input w-full"
                    placeholder="Email"
                  />
                  {/* password */}
                  <label className="label text-white">Password</label>
                  <div className="relative">
                    <input
                      type={show ? "text" : "password"}
                      name="password"
                      required
                      className="input w-full"
                      placeholder="Password"
                    />
                    <button
                      onClick={handleShow}
                      className="absolute right-8 top-3"
                    >
                      {show ? <FaEye /> : <FaEyeSlash />}
                    </button>
                  </div>

                  <button type="submit" className="btn btn-primary mt-4">
                    Register
                  </button>
                </fieldset>
              </form>
              <div>
                <p className="text-white text-center mt-3">
                  Already Have An Account ?{" "}
                  <Link to="/auth/login" className="text-primary font-bold">
                    Sign In
                  </Link>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

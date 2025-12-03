import React, { useContext, useRef, useState } from "react";
import PageHeading from "../components/PageHeading";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../authContext/AuthContext";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/Firebase.config";

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { user, userLogIn, googleSignIn, setGetEmail, setUser } =
    useContext(AuthContext);

  const emailRef = useRef(null);

  const handleEmailData = () => {
    setGetEmail(emailRef.current.value);
  };

  const location = useLocation();

  const handleSignIn = (e) => {
    e.preventDefault();

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

    userLogIn(email, password)
      .then((res) => {
        const user = res.user;
        // console.log(user);
        if (location.state) {
          navigate({ pathname: location.state });
        } else {
          navigate({ pathname: "/" });
        }
        toast.success("Logged In Successfully");
      })
      .catch((err) => {
        const errorCode = err.code;

        setError(errorCode);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const displayName = res.user.displayName;
        const photoURL = res.user.photoURL;

        updateProfile(res.user, {
          displayName,
          photoURL,
        })
          .then(() => {
            setUser(auth.currentUser);
            if (location.state) {
              navigate({ pathname: location.state });
            } else {
              navigate({ pathname: "/" });
            }
            toast.success("User Created Successfully");
          })
          .catch((err) => {});
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div>
      <title>HKS | Sign in</title>
      <PageHeading heading={"Sign In"}></PageHeading>
      {/* form */}
      <div className="w-5/6 mx-auto flex justify-center items-center h-screen">
        <div className="card bg-neutral py-5 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSignIn}>
              <p className="text-red-600 font-semibold mb-2 text-[18px]">
                {error}
              </p>
              <fieldset className="fieldset text-[18px] font-medium">
                <label className="label text-white">Email</label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  className="input w-full"
                  placeholder="Email"
                />
                <label className="label text-white">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input w-full"
                  placeholder="Password"
                />
                <div>
                  <Link
                    onClick={handleEmailData}
                    to="/auth/forget-password"
                    className="link link-hover text-white"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button type="submit" className="btn btn-primary mt-4">
                  Login
                </button>
              </fieldset>
            </form>
            <div className="flex justify-center items-center gap-2">
              <div className="h-px w-16 bg-primary"></div>
              <span>Or</span>
              <div className="h-px w-16 bg-primary"></div>
            </div>
            <div>
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-primary w-full"
              >
                <img
                  className="h-5 w-5"
                  src="https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000"
                  alt=""
                />{" "}
                Sign In With Google
              </button>
            </div>
            <div>
              <p className="text-white text-center mt-3">
                Don't Have Account ?{" "}
                <Link to="/auth/register" className="text-primary font-bold">
                  Sign Up
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

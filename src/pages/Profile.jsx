import React, { useContext } from "react";
import PageHeading from "../components/PageHeading";
import { AuthContext } from "../authContext/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/Firebase.config";
import { toast } from "react-toastify";
import Loading from "../components/Loading";
import { Link } from "react-router";

const Profile = () => {
  const { user, setUser, loading } = useContext(AuthContext);
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    updateProfile(auth.currentUser, { displayName, photoURL })
      .then(() => {
        setUser({ ...user, displayName, photoURL });
        toast.success("Profile Updated Successfully");
      })
      .catch((err) => {
        // console.log(err.message);
      });

    e.target.reset();
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <PageHeading heading={"My Profile"}></PageHeading>
      <div className="w-5/6 border-2 border-red-300  mx-auto mt-30 mb-20 flex lg:flex-col lg:gap-10 justify-between items-center ">
        <div className="bg-neutral text-white p-10 rounded-tr-2xl rounded-bl-2xl">
          <h1 className="text-[20px] font-bold">
            Name:{" "}
            <span className="text-secondary break-all md:break-normal">
              {user.displayName}
            </span>
          </h1>
        </div>
        <div className="bg-neutral text-white p-10 rounded-tr-2xl rounded-bl-2xl">
          <h1 className="text-[20px] font-bold">
            Email:{" "}
            <span className="text-secondary break-all md:break-normal">
              {user.email}
            </span>
          </h1>
        </div>
        <div className="bg-neutral text-center text-white p-10 rounded-tr-2xl rounded-bl-2xl">
          <Link
            className="text-[20px] text-white font-bold hover:text-primary "
            to="/auth/profile-update"
          >
            Update Profile ➡️
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;

import React, { useContext } from "react";
import PageHeading from "../components/PageHeading";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/Firebase.config";
import { AuthContext } from "../authContext/AuthContext";
import { useNavigate } from "react-router";

const UpdateProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    updateProfile(auth.currentUser, { displayName, photoURL })
      .then(() => {
        setUser({ ...user, displayName, photoURL });
        navigate("/");
        toast.success("Profile Updated Successfully");
      })
      .catch((err) => {
        // console.log(err.message);
      });

    e.target.reset();
  };

  return (
    <div>
      <PageHeading heading={"Update Profile"}></PageHeading>
      {/* form */}
      <div className="w-5/6 mx-auto flex justify-center items-center h-screen">
        <div className="card bg-neutral py-5 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-2xl font-bold text-center">Need Update ?</h1>
            <form onSubmit={handleUpdateProfile}>
              <fieldset className="fieldset text-[18px] font-medium">
                <label className="label text-white">Name</label>
                <input
                  type="text"
                  required
                  name="name"
                  className="input  w-full"
                  placeholder="Updated Name"
                />
                <label className="label text-white">Photo URL</label>
                <input
                  type="text"
                  required
                  name="photo"
                  className="input w-full"
                  placeholder="Updated Photo"
                />

                <button type="submit" className="btn btn-primary mt-4">
                  Update Profile
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;

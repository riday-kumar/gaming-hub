import React, { useContext } from "react";
import PageHeading from "../components/PageHeading";
import { AuthContext } from "../authContext/AuthContext";
import { useNavigate } from "react-router";

const ForgetPassword = () => {
  const { passwordReset, getEmail, setGetEmail } = useContext(AuthContext);
  // const {email, setEmail} = useState();
  const navigate = useNavigate();

  const handleEmail = (e) => {
    e.preventDefault();
    setGetEmail(e.target.value);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    passwordReset(email)
      .then(() => {
        // window.location.href = "https://mail.google.com/mail/u/0/#inbox";
        navigate({
          pathname: "/auth/login",
        });

        window.open("https://mail.google.com/mail/u/0/#inbox", "_blank");
      })
      .catch((error) => {
        // console.log(error.code);
      });
  };

  return (
    <div>
      <PageHeading heading={"Forget Password?"}></PageHeading>
      {/* form */}
      <div className="w-5/6 mx-auto flex justify-center items-center h-screen">
        <div className="card bg-neutral py-5 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleResetPassword}>
              <fieldset className="fieldset text-[18px] font-medium">
                <label className="label text-white">Email</label>
                <input
                  onChange={handleEmail}
                  type="email"
                  required
                  name="email"
                  className="input"
                  placeholder="Email"
                  value={getEmail}
                />

                <button type="submit" className="btn btn-primary mt-4">
                  Update Password
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;

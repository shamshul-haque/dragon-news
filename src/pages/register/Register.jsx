import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Navbar from "../shared/navbar/Navbar";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    e.currentTarget.reset();
    console.log(name, photo, email, password);

    // create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mt-5">
      <Navbar />
      <div className="hero my-5">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-2xl md:text-3xl font-bold p-5 text-center">
            Register Your Account
          </h1>
          <hr className="mx-10 my-3" />
          <form onSubmit={handleRegister} className="mx-10">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="bg-base-200 outline-0 p-3 rounded-md text-sm"
                required
              />
            </div>
            <div className="form-control mt-2">
              <label className="label">
                <span className="label-text font-bold">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your photo url"
                className="bg-base-200 outline-0 p-3 rounded-md text-sm"
                required
              />
            </div>
            <div className="form-control mt-2">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="bg-base-200 outline-0 p-3 rounded-md text-sm"
                required
              />
            </div>
            <div className="form-control mt-2">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="bg-base-200 outline-0 p-3 rounded-md text-sm"
                required
              />
            </div>
            <div className="flex items-center gap-1 mt-5">
              <input type="checkbox" name="terms" id="terms" required />
              <p htmlFor="terms" className="text-sm">
                Accept{" "}
                <Link to="#" className="font-bold text-gray-500">
                  terms and conditions
                </Link>
              </p>
            </div>
            <div className="form-control pb-10  mt-5">
              <button className="bg-stone-800 p-2 rounded-md text-white font-semibold">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

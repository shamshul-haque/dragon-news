import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Navbar from "../shared/navbar/Navbar";

const Login = () => {
  const { logIn } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    e.currentTarget.reset();

    // login user
    logIn(email, password)
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
          <h1 className="text-3xl font-bold p-5 text-center">
            Login Your Account
          </h1>
          <hr className="mx-10 my-3" />
          <form onSubmit={handleLogin} className="mx-10">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email Address</span>
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
              <label className="label">
                <Link to="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="bg-stone-800 p-2 rounded-md text-white font-semibold">
                Login
              </button>
            </div>
          </form>
          <div className="text-center mt-5 mb-10">
            <p className="text-sm">
              Don't Have An Account?{" "}
              <Link to="/register" className="text-red-500">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

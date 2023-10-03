import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSidebar = () => {
  return (
    <div>
      <div className="p-5 space-y-3 mb-5">
        <h2 className="text-xl font-bold">Login With</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle />
          Login With Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub />
          Login With Github
        </button>
      </div>
      <div className="p-5 mb-5">
        <h2 className="text-xl font-bold mb-2">Find Us On</h2>
        <Link
          to="/https://www.facebook.com/"
          className="p-4 flex gap-2 items-center border rounded-t-lg"
        >
          <FaFacebook />
          Facebook
        </Link>
        <Link
          to="/https://twitter.com/"
          className="p-4 flex gap-2 items-center border"
        >
          <FaTwitter />
          Twitter
        </Link>
        <Link
          to="/https://www.instagram.com/"
          className="p-4 flex gap-2 items-center border rounded-b-lg"
        >
          <FaInstagram />
          Instagram
        </Link>
      </div>
      <div className="p-5 space-y-3 mb-5 bg-slate-100 m-5">
        <h2 className="text-xl font-bold">Q Zone</h2>
        <img src={qZone1} alt="qZone1" />
        <img src={qZone2} alt="qZone2" />
        <img src={qZone3} alt="qZone3" />
      </div>
    </div>
  );
};

export default RightSidebar;

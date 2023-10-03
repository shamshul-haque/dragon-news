import moment from "moment";
import logo from "../../../assets/logo.png";

const Header = () => {
  return (
    <div className="text-center space-y-2 my-5">
      <img src={logo} alt="logo" className="mx-auto" />
      <p className="text-slate-500">Journalism Without Fear or Favour</p>
      <p className="">{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;

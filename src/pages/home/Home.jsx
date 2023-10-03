import Header from "../shared/header/Header";
import LeftSidebar from "../shared/left_sidebar/LeftSidebar";
import Navbar from "../shared/navbar/Navbar";
import RightSidebar from "../shared/right_sidebar/RightSidebar";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="border border-red-400">
          <LeftSidebar />
        </div>
        <div className="md:col-span-2 border border-red-400">home</div>
        <div className="border border-red-400">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Home;

import { useParams } from "react-router-dom";
import Header from "../shared/header/Header";
import Navbar from "../shared/navbar/Navbar";
import RightSidebar from "../shared/right_sidebar/RightSidebar";

const NewsDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <Header />
      <Navbar />
      <div className="grid md:grid-cols-4 gap-5">
        <div className="md:col-span-3">{id}</div>
        <div>
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;

import { useLoaderData } from "react-router-dom";
import Header from "../shared/header/Header";
import LeftSidebar from "../shared/left_sidebar/LeftSidebar";
import Navbar from "../shared/navbar/Navbar";
import RightSidebar from "../shared/right_sidebar/RightSidebar";
import LatestNews from "./LatestNews";
import NewsCard from "./NewsCard";

const Home = () => {
  const newsData = useLoaderData();

  return (
    <div>
      <Header />
      <LatestNews />
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="border border-red-400">
          <LeftSidebar />
        </div>
        <div className="md:col-span-2 border border-red-400">
          {newsData.map((news) => (
            <NewsCard key={news._id} news={news} />
          ))}
        </div>
        <div className="border border-red-400">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Home;

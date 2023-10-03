import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex bg-slate-100 p-3">
      <button className="bg-red-500 px-4 py-2">Latest</button>
      <Marquee pauseOnHover={true} speed={100}>
        <Link to="/" className="mr-10">
          Match Highlights: Germany vs Spain...
        </Link>
        <Link to="/" className="mr-10">
          Match Highlights: Argentina vs Brazil...
        </Link>
        <Link to="/" className="mr-10">
          Match Highlights: Italy vs France...
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;

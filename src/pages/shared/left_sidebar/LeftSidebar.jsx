import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      const res = await fetch("/categories.json");
      const data = await res.json();
      setCategories(data);
    };
    loadCategories();
  }, []);

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold">All Categories</h2>
      {categories.map((category) => (
        <Link
          to={`/category/${category.id}`}
          key={category.id}
          className="block ml-5"
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftSidebar;

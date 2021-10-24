import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [city, setCity] = useState([]);

  useEffect(() => {
    const getCity = async () => {
      const res = await axios.get("/api/categories");
      setCity(res.data);
    };
    getCity();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">JOIN US</span>
        <img
          src="https://source.unsplash.com/random?city"
          alt=""
          width="236"
        />
        <p>
          Welcome! do you love to travel, Please share us you story?
        </p>
      </div>
      <div className="sidebarItem">
        
        <ul className="sidebarList">
          {city.map((c) => (
            <Link to={`/?city=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        
        
      </div>
    </div>
  );
}

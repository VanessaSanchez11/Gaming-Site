import "./../styles/sidebar.css";

import { FaHome, FaTrophy, FaCalendarAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="#home" className="icon-link" alt="Home">
            <FaHome className="sidebar-icon" />
          </a>
        </li>
        <li>
          <a href="#trophy" className="icon-link">
            <FaTrophy className="sidebar-icon" />
          </a>
        </li>
        <li>
          <a href="#message" className="icon-link">
            <FaMessage className="sidebar-icon" />
          </a>
        </li>
        <li>
          <a href="#calendar" className="icon-link">
            <FaCalendarAlt className="sidebar-icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

import React from "react";
import { Link } from "react-router-dom";

const NavComponent = () => {
  return (
    <nav className="my-12 h-3">
      <ul className="flex justify-center gap-3 text-white">
        <li>
          <Link to="/home">
            <h3>Home</h3>
          </Link>
        </li>
        <li>
          <Link to="/drivers">
            <h3>Drivers</h3>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavComponent;

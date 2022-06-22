import React from "react";
import { Link } from "react-router-dom";
import { MdAddCircleOutline } from "react-icons/md";
const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="inner-content">
            <div className="brand">
              <Link to="/">Movie Mania</Link>
            </div>

            <ul className="nav-links">
              <li>
                <Link to="/">Watch List</Link>
              </li>
              <li>
                <Link to="/watched">Watched</Link>
              </li>
              <li>
                <Link to="/addMovie" className="btn">
                  <span className="icons">
                    <MdAddCircleOutline />
                  </span>
                  Add Movies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

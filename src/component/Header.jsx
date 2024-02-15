import React from "react";
import { Link, NavLink } from "react-router-dom";
import Styles from "../component/Header.module.css";
import { IoIosAdd } from "react-icons/io";

function Header() {
  return (
    <>
      <div className={Styles.header}>
        <h2>LogoName</h2>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink> About </NavLink>
          </li>
          <li>
            <NavLink>Services </NavLink>
          </li>
          <li>
            <NavLink>Blog</NavLink>
          </li>
          <li>
            <NavLink>Contact</NavLink>
          </li>

          <Link to="/create-post" className={Styles.btn}>
            {" "}
            <IoIosAdd size={20} />
            New Post
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Header;

import React, {useEffect, useRef} from "react";
import "./header.scss";
import {Link, useLocation} from "react-router-dom";
import logo from "../../assets/logo/Logo.png";
import headerNav from "../../Config/MenuConfig";

const Header = () => {
  const {pathName} = useLocation();
  const headRef = useRef(null);
  const active = headerNav.findIndex((e) => e.path === pathName);

  useEffect(() => {
    const ShrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headRef.current.classList.add("shrink");
      } else {
        headRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", ShrinkHeader);
    return () => {
      window.removeEventListener("scroll", ShrinkHeader);
    };
  }, []);

  return (
    <div ref={headRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <img src={logo} alt="" />
          <Link to="/">H-Movies</Link>
        </div>
        <ul className="header__nav">
          {headerNav.map((item, index) => (
            <li key={index} className={`${index === active ? "active" : ""}`}>
              <Link to={item.path}>{item.display}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;

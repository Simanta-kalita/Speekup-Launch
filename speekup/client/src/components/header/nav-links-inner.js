import React from "react";
import { Link } from "gatsby";
import { Link as ScrollLink } from "react-scroll";
const NavLinksInner = () => {
  const handleDropdownStatus = (e) => {
    let clickedItem = e.currentTarget.parentNode;
    clickedItem.querySelector(".dropdown-list").classList.toggle("show");
  };
  return (
    <ul className="main-nav__navigation-box one-page-scroll-menu">
      <li>
        <Link to="/">
          Home
        </Link>
      </li>
      <li>
        <Link to="/#features">
          Features
        </Link>
      </li>
      {/* <li>
        <Link to="/#pricing">
          Pricing
        </Link>
      </li> */}
      <li>
        <Link to="/#testimonials">
          Testimonials
        </Link>
      </li>
      {/* <li>
        <Link to="/#screens">
          Screens
        </Link>
      </li> */}
      {/* <li className="dropdown">
        <Link to="/#blog">
          News
        </Link>
        <button className="dropdown-btn" onClick={handleDropdownStatus}>
          <i className="fa fa-angle-right"></i>
        </button>
        <ul className="dropdown-list">
          <li>
            <Link to="/blog">
              News
            </Link>
          </li>
          <li>
            <Link to="/blog-details">
              News Details
            </Link>
          </li>
        </ul>
      </li> */}
    </ul>
  );
};

export default NavLinksInner;

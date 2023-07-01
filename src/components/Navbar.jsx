import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import nav_icon from "../IMG/navigation_icon.png";
import mail_icon from "../IMG/mail_icon.png";
import jk_logo from "../IMG/JK_LOGO.png";
import "../CSS/Navbar.css";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import PropTypes from "prop-types";
import { useNav } from "../context/navContext";
export default function Navbar() {
  const [nav, setNav] = useNav();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClosedrop = () => {
    setNav("about");
    setAnchorEl(null);
  };
  const [hamburger, setHamburger] = useState("ham-hide");
  const toggleham = () => {
    hamburger === "ham-hide" ? setHamburger("") : setHamburger("ham-hide");
  };
  return (
    <>
      <header className="rm-mb bg-white  w-screen ">
        <div className="  ">
          {/* lg+ */}
          <nav className="relative flex w-full flex-row items-center justify-between h-16 bg-white rounded-t-mg lg:shadow-lg lg:h-15 lg:px-8 lg:py-6 border-b-4">
            <div className="flex-shrink-0">
              <Link
                to="http://maps.google.com/?q=1200 J K Industries Vibratory Motors Manufacturer & Exporter in India, Plot No. 162, Road No. 4/A, Kathwada GIDC, Ahmedabad, Gujarat 382430"
                title=""
                className="flex"
              >
                <img
                  className="w-auto h-8 lg:h-7 "
                  src={nav_icon}
                  height={20}
                  width={20}
                  alt=""
                />
              </Link>
            </div>
            <div>
              <Link
                to="http://maps.google.com/?q=1200 J K Industries Vibratory Motors Manufacturer & Exporter in India, Plot No. 162, Road No. 4/A, Kathwada GIDC, Ahmedabad, Gujarat 382430"
                className="text-base font-medium text-black transition-all duration-200 hover:text-orange-600 focus:text-blue-600"
              >
                <p>
                  Plot No. 162, Road No. 4/A, Kathwada GIDC, Ahmedabad - 382430
                  Gujarat, India
                </p>
              </Link>
            </div>
            <div>
              <div className="flex flex-row border-r-2 border-black border-r-black-500 pr-[40px] pl-[200px]">
                <div className="icon">
                  <Link
                    to="mailto:sales@jkvibratorymotor.com"
                    title=""
                    className="flex"
                  >
                    <img
                      className="w-auto h-8 lg:h-7 pr-2"
                      src={mail_icon}
                      height={20}
                      width={20}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="add p-0">
                  <p>
                    <Link
                      to="mailto:sales@jkvibratorymotor.com"
                      className="text-base font-medium text-black transition-all duration-200 hover:text-orange-600 focus:text-blue-600"
                    >
                      sales@jkvibratorymotor.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-row  ">
                <div className="icon">
                  <Link
                    to="mailto:sales@jkvibratorymotor.com"
                    title=""
                    className="flex"
                  >
                    <img
                      className="w-auto h-8 lg:h-7 pr-2"
                      src={mail_icon}
                      height={20}
                      width={20}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="add p-0">
                  <p>
                    <Link
                      to="mailto:sales@jkvibratorymotor.com"
                      className="text-base font-medium text-black transition-all duration-200 hover:text-orange-600 focus:text-blue-600"
                    >
                      jkvibratorymotor@gmail.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <header className="z-50 sticky top-0 bg-white  w-screen positon-fixed">
        <div className=" ">
          {/* lg+ */}
          <nav className="relative flex  items-center justify-between h-16 bg-white lg:rounded-md lg:shadow-lg lg:h-24 lg:px-8 lg:py-6">
            <div className="flex-shrink-0">
              <Link to="/" title="" className="flex">
                <img
                  className="w-auto h-8 lg:h-20 pr-10"
                  src={jk_logo}
                  height={20}
                  width={20}
                  alt=""
                />
              </Link>
            </div>
            <div className="hidden ml-10 m-auto pl-60 lg:flex lg:items-center lg:space-x-10">
              <Link
                to="/"
                title=""
                className={`text-base ${
                  nav === "home" ? "text-orange-600" : ""
                }  font-medium  transition-all duration-200 focus:text-orange-600 hover:text-orange-600 `}
                onClick={() => {
                  setNav("home");
                }}
              >
                Home
              </Link>
              <Link
                onClick={() => {
                  setNav("about");
                }}
              >
                <button
                  id="fade-button"
                  aria-controls={open ? "fade-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onMouseEnter={handleClick}
                  className={`text-center ${
                    nav === "about" ? "text-orange-600" : ""
                  } inline-flex items-center text-base font-medium text-black transition-all duration-200 hover:text-orange-600 focus:text-orange-600 `}
                  type="button"
                >
                  About-Us{" "}
                </button>
              </Link>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEl}
                open={open}
                TransitionComponent={Fade}
              >
                <div onMouseLeave={handleClose}>
                  <MenuItem
                    className="hover:text-orange-600"
                    onClick={handleClosedrop}
                  >
                    <Link to="/management">Management</Link>
                  </MenuItem>
                  <MenuItem
                    className="hover:text-orange-600"
                    onClick={handleClosedrop}
                  >
                    <Link to="/export">Export</Link>
                  </MenuItem>
                  <MenuItem
                    className="hover:text-orange-600"
                    onClick={handleClosedrop}
                  >
                    <Link to="/R&D">Research & Developement</Link>
                  </MenuItem>
                </div>
              </Menu>
              <Link
                to="/products"
                title=""
                className={`text-base ${
                  nav === "products" ? "text-orange-600" : ""
                } font-medium text-black transition-all duration-200 hover:text-orange-600 focus:text-orange-600`}
                onClick={() => {
                  setNav("products");
                }}
              >
                Products{" "}
              </Link>
              <Link
                to="/client"
                title=""
                className={`text-base ${
                  nav === "clients" ? "text-orange-600" : ""
                } font-medium text-black transition-all duration-200 hover:text-orange-600 focus:text-orange-600`}
                onClick={() => {
                  setNav("clients");
                }}
              >
                Clients{" "}
              </Link>
              <Link
                to="/certificate"
                title=""
                className={`text-base ${
                  nav === "certification" ? "text-orange-600" : ""
                } font-medium text-black transition-all duration-200 hover:text-orange-600 focus:text-orange-600`}
                onClick={() => {
                  setNav("certification");
                }}
              >
                Certification
              </Link>
              <Link
                to="/contact"
                title=""
                className={`text-base ${
                  nav === "contact" ? "text-orange-600" : ""
                }  font-medium text-black transition-all duration-200 hover:text-orange-600 `}
                onClick={() => {
                  setNav("contact");
                }}
              >
                Contact-Us
              </Link>
            </div>
          </nav>
        </div>
        {/* xs to lg */}
        <header className="header">
          <nav className="navbar">
            <input type="checkbox" id="nav" className="hidden" />
            <label htmlFor="nav" className="nav-toggle" onClick={toggleham}>
              <span />
              <span />
              <span />
            </label>
            <div className={`wrapper ${hamburger}`}>
              <ul className="menu">
                <li className="menu-item">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to="/">About Us</NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to="/">Products</NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to="/">Clients</NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to="/">Certification</NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to="/">Contact-Us</NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </header>
      {/* <div> */}

      {/* </div> */}
    </>
  );
}

Navbar.propTypes = {
  classes: PropTypes.string.isRequired,
};

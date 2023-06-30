import React from "react";
import { Link } from "react-router-dom";
import nav_icon from "../IMG/navigation_icon.png";
import mail_icon from "../IMG/mail_icon.png";
import jk_logo from "../IMG/JK_LOGO.png";
import '../CSS/Navbar.css'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <>
      <header className="bg-white  w-screen ">
        <div className="  ">
          {/* lg+ */}
          <nav className="relative flex w-full flex-row items-center justify-between h-16 bg-white rounded-t-mg lg:shadow-lg lg:h-15 lg:px-8 lg:py-6 border-b-4">
            <div className="flex-shrink-0">
              <Link to="http://maps.google.com/?q=1200 J K Industries Vibratory Motors Manufacturer & Exporter in India, Plot No. 162, Road No. 4/A, Kathwada GIDC, Ahmedabad, Gujarat 382430" title="" className="flex">
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
                  <Link to="mailto:sales@jkvibratorymotor.com" title="" className="flex">
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
                  <Link to="mailto:sales@jkvibratorymotor.com" title="" className="flex">
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
            <button
              type="button"
              className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              {/* <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg> */}
            </button>
            <div className="hidden ml-10 m-auto pl-60 lg:flex lg:items-center lg:space-x-10">
              <Link
                to="/"
                title=""
                className={`text-base text-[${props.Home}]  font-medium  transition-all duration-200 focus:text-orange-600 hover:text-orange-600 `}
              >
                Home{" "}
              </Link>
              <button
                id="dropdownDelayButton"
                data-dropdown-toggle="dropdownDelay"
                data-dropdown-delay={500}
                data-dropdown-trigger="hover"
                className="text-center inline-flex items-center text-base font-medium text-black transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                type="button"
              >
                About-Us{" "}
              </button>
              {/* Dropdown menu */}
              <div
                id="dropdownDelay"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDelayButton"
                >
                  <li>
                    <Link
                      to="#"
                      className="text-base font-medium text-black transition-all duration-200 hover:text-orange-600 focus:text-orange-600 block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-base font-medium text-black transition-all duration-200 hover:text-orange-600 focus:text-orange-600 block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Export
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className=" text-base font-medium text-black transition-all duration-200 hover:text-orange-600 focus:text-orange-600 block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Network
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/R&D"
                      className={`text-base text-[${props.RDev}]  font-medium text-black transition-all duration-200 hover:text-orange-600 focus:text-orange-600 block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}
                    >
                      Research &amp; Depvelopment
                    </Link>
                  </li>
                </ul>
              </div>
              <Link
                to="#"
                title=""
                className="text-base font-medium text-black transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
              >
                Products{" "}
              </Link>
              <Link
                to="#"
                title=""
                className="text-base font-medium text-black transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
              >
                Clients{" "}
              </Link>
              <Link
                to="/Certificate"
                title=""
                className={`text-base text-[${props.certificate}] font-medium text-black transition-all duration-200 hover:text-orange-600 focus:text-orange-600`}
              >
                Certification
              </Link>
              <Link
                to="/Contact_us"
                title=""
                className={`text-base text-[${props.contact}]  font-medium text-black transition-all duration-200 hover:text-orange-600 `}
              >
                Contact-Us
              </Link>
            </div>
          </nav>
          {/* xs to lg */}
          <nav className="flex flex-col py-4 space-y-2 lg:hidden">
            <Link
              to="#"
              title=""
              className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
            >
              {" "}
              Home
            </Link>
            <Link
              to="#"
              title=""
              className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
            >
              Solutions{" "}
            </Link>
            <Link
              to="#"
              title=""
              className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
            >
              Resources{" "}
            </Link>
            <Link
              to="#"
              title=""
              className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
            >
              Pricing{" "}
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}


Navbar.propTypes = {
  classes: PropTypes.string.isRequired
}
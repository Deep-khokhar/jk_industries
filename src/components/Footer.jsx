import React from "react";
import { Link } from "react-router-dom";
import nav_icon from "../IMG/navigation_icon.png";
import mail_icon from "../IMG/mail_icon.png";
import jk_logo from "../IMG/JK_LOGO.png";
import what_icon from "../IMG/Whatsapp_icon.png";

export default function Footer() {
  return (
    <>
      <section
        className="py-5 bg-gray-50 sm:pt-16 lg:pt-16 drop-shadow-lg w-screen"
        style={{ boxShadow: "0 -10px 20px -5px rgba(115,115,115,0.75)" }}
      >
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-8xl ">
          <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
            <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
              <Link href="#" title="" className="flex">
                <img
                  className="w-auto h-[50px] lg:h-18 pr-10"
                  src={jk_logo}
                  height={15}
                  width={15}
                  alt=""
                />
              </Link>
              <p className="text-base leading-relaxed text-gray-600 mt-7">
                JK Industries have more than 15 years of experience with the
                industrial use of vibrators enable us to advice our customers
                about the beneficial use of vibrators and vibration
                technologies.Vibrators are drive elements for all types of
                vibratory equipment. We have a modern quality evaluating
                division, where our products are examined on varied parameters
                to ensure perfection.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Company
              </p>
              <ul className="mt-6 space-y-4">
                <li>
                  <Link 
                    to="/"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                  >
                    Home{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                  >
                    About-Us{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                  >
                    Products{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                  >
                    Clients{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/certificate"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                  >
                    Certification{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                  >
                    Contact-Us{" "}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                About-Us
              </p>
              <ul className="mt-6 space-y-4">
                <li>
                  <Link
                    to="/management"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                  >
                    Management
                  </Link>
                </li>
                <li>
                  <Link
                    to="/export"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                  >
                    Export{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                  >
                    Network
                  </Link>
                </li>
                <li>
                  <Link
                    to="/R&D"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                  >
                    Research &amp; Depvelopment
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Contact-Us
              </p>
              <div className="flex flex-row mt-6">
                <div className="icon">
                  <Link href="#" title="" className="flex">
                    <img
                      className="w-[60px] h-[60px] lg:h-7 pr-2"
                      src={nav_icon}
                      height={20}
                      width={20}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="add p-0">
                  <Link
                    to="http://maps.google.com/?q=1200 J K Industries Vibratory Motors Manufacturer & Exporter in India, Plot No. 162, Road No. 4/A, Kathwada GIDC, Ahmedabad, Gujarat 382430"
                    className=" flex text-base text-black transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                  >
                    <p>
                      Plot No. 162, Road No. 4/A, Kathwada GIDC, Ahmedabad -
                      382430 Gujarat, India
                    </p>
                  </Link>
                </div>
              </div>
              <div className="flex flex-row pt-5">
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
                      className="flex text-base text-black transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                    >
                      sales@jkvibratorymotor.com
                    </Link>
                  </p>
                </div>
              </div>
              <div className="flex flex-row pt-5">
                <div className="icon">
                  <Link
                    to="mailto:jkvibratorymotor@gmail.com"
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
                      to="mailto:jkvibratorymotor@gmail.com"
                      className="flex text-base text-black transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                    >
                      jkvibratorymotor@gmail.com
                    </Link>
                  </p>
                </div>
              </div>
              <div className="flex flex-row pt-5">
                <div className="icon">
                  <Link
                    to="https://api.whatsapp.com/send?phone=9327053441"
                    title=""
                    className="flex"
                  >
                    <img
                      className="w-auto h-8 lg:h-7 pr-2"
                      src={what_icon}
                      height={20}
                      width={20}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="add p-0">
                  <p>
                    <Link
                      to="https://api.whatsapp.com/send?phone=9327053441"
                      className="flex text-base text-black transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                    >
                      +91-9327053441
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-7 mb-8 border-gray-200" />
        <p className="text-sm text-center text-gray-600">
          Vibratory Motor Manufacturer in India. © 2023 JK Industries. All
          Rights Reserved.
        </p>
      </section>
    </>
  );
}

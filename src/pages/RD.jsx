import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RD2 from '../IMG/R&D1.jpg'
import RD1 from '../IMG/R&D1.jpg'

export default function RD() {
  return (
    <>
      <Navbar RDev = "#FFA500"/>
      <div className="grid lg:grid-cols-6 gap-1 w-screen relative">
        <div className="lg:col-span-4 m-auto ">
          <div className="rr text-6xl ml-[60px]">
            <h1>Research &amp; Devlopment</h1>
          </div>
          <div className="m-[60px] ">
            <p className="mr-[200px] text-justify">
              {" "}
              J K Industries is stepping ahead in the market with its high focus
              towards quality. Our R&amp;D department has always played crucial
              role in delivering A quality products to the customers. The
              surveys and researches we conduct help in adding new features in
              the existing range of Vibration Motor, Three Phase Vibratory
              Motors, Vibration Motor Drive, Vibratory Equipment, Electric
              Unbalance Vibrator Motors, Industrial Vibratory Motors, etc.
            </p>
            <p className="mr-[200px] text-justify">
              Our R &amp; D experts always keep themselves abreast of
              technological advancements and also strive to update product-line
              as well as manufacturing techniques, accordingly. We have a modern
              quality evaluating division, where our products are examined on
              varied parameters to ensure perfection. Owing to such high focus
              towards making &amp; delivering qualitative products, we have got
              ISO 9001: 2008 certification.
            </p>
          </div>
        </div>
        <div
          className="img ml-[870px] mt-[290px] absolute"
          style={{ marginBottom: 400 }}
        >
          <img
            className=""
            src={RD2}
            alt=""
            style={{
              height: 400,
              width: 290,
              borderRadius: 20,
              marginBottom: 400,
            }}
          />
        </div>
        {/* <div>dvds</div> */}
        <div className="lg:col-span-2">
          <img src={RD1} alt="" style={{ height: 800, width: 550 }} />
        </div>
      </div>

      <Footer/>
    </>
  );
}

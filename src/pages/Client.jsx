import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import application from '../IMG/Application.jpg'
import '../CSS/ExportPage.css'

export default function Client() {
  return (
    <>
      <Navbar />

      <div className="main-sec relative w-screen">
        <div
          className="container m-8 ml-[100px] absolute bg-white-500 grid lg:grid-cols-2 gap-1"
          style={{ background: "white", color: "black", width: "85vw" }}
        >
          <div className="part-1" style={{ height: "0px" }}>
            <div className="text-5xl mt-[100px] ml-[200px] text-black-900">
              <h1>Application</h1>
            </div>
            <div className="mt-[60px] text-3xl ml-[60px] text-orange-600">
              <h1>Vibration Motor</h1>
            </div>
            <div className="text-justify ml-[60px] mr-[60px] m-4">
              <p>
                The vibration motors are available in 2800, 1440, 960 and 750
                RPM. The special features includes sturdy frame with stiffing
                ribs, Body Fabricated with high grtade ductile iron, Extra large
                dia. Of Shaft to resist bending under high centrifugal force,
                Fitted with heavy duty cylindrical roller bearing, specially
                varnished winding with terminal box to withstand tough operating
                conditions, Specially designed electrial parameters for cool
                operation condition.
              </p>
            </div>
            <div className="mt-[60px] text-3xl ml-[60px] text-orange-600">
              <h1>Unbalanced Motor</h1>
            </div>
            <div className="text-justify ml-[60px] mr-[60px] m-4">
              <p>
                Unbalanced motor with special tough design is used as drive for
                the vibrating malchines. The applications are feeding,
                screening, discharging etc. Vibration motors are available from
                0.25 HP to 10 HP in foot mounted design or flange mounted type.
                Vibration motor are widely used in process plants, Glass, Food,
                Metal, Coal power plant, Chemical, Ceramic, Iron and steel,
                Foundries, Packaging industries etc.
              </p>
            </div>
          </div>
          <div className="part-2" style={{ height: "638px" }}>
            <img src={application} style={{height:"797px", width:"653px"}} alt="" />
          </div>
        </div>

        
      </div>
     

      <div className="bg-gray-900" style={{ height: "400px" }} />

      <div className="export-countries " style={{margin:"500px", background:"#f5f5f5",width:"700px",}}>
      <h2 className='text-2xl font-bold'>Our Clients From Various Industries</h2>
      <div className="grid grid-cols-3 gap-4">
        <div>
      <ul>
        <li>Glass</li>
        <li>Ceramic</li>
        <li>Chemical</li>
        <li>Metal</li>
      </ul>
      </div>
      <div>
      <ul>
        <li>Food</li>
        <li>Foundries</li>
        <li>Iron and Steel</li>
      </ul>
      </div>
      <div>
      <ul>
        <li>Packaging Industries</li>
        <li>Process Plants</li>
        <li>Coal Power Plant</li>
      </ul>
      </div>
      </div>
    </div>
      
      {/* <div
        className="color1"
        style={{ height: "750px", background: "#f5f5f5" }}
      /> */}

      <Footer />
    </>
  );
}

import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import export from '../IMG/export.jpg'
import ExportMain from '../IMG/ExportMain.jpg'
import ExportBack from '../IMG/ExportBack.jpg'
import '../CSS/ExportPage.css'



export default function Export() {

    const textStyle = {
        textShadow: '0 1px 0 #504f4f, 0 2px 0 #555353, 0 3px 0 #010101, 0 4px 0 #070707, 0 5px 0 #0f0d0d, 0 6px 0 #0e0d0d, 0 7px 0 #000000, 0 8px 0 #000000, 0 9px 0 #0c0c0c, 0 10px 0 #0f0e0e, 0 11px 0 #000000, 0 12px 0 #0a0a0a, 0 20px 30px rgb(2, 2, 2)',
      };
  return (
    <>
      <Navbar/>

<div>
  <div className="grid lg:grid-cols-6 gap-1 w-screen relative">
    <div className="img absolute">
      <img className src={ExportBack} alt="" style={{height: '70vh', width: '100vw', opacity: '0.9'}} />
    </div>
    <div className="relative text-white lg:col-span-6 set-property" style={textStyle}>
      <div className="set-property text-6xl font-bold ml-[100px] mt-[58px]">
        <h1>Exports</h1>
      </div>
      <div className="font-semibold ml-[105px] mt-[30px]">
        <h5>Global success, delivered worldwide</h5>
      </div>
    </div>
    {/* <div>dvds</div> */}
    <div className="lg:col-span-2" style={{height: '350px'}}>
      {/* <img src="IMG/R&D1.jpg" alt="" style="height: 800px; width: 550px" > */}
      {/* <img src="IMG/R&D1.jpg" alt="" style="height: 800px; width: 550px" > */}
    </div>
  </div>

  <div className="export-countries">
      <h2 className='text-2xl font-bold'>Our Brand's Export Countries</h2>
      <ul>
        <li>Europe</li>
        <li>Africa</li>
        <li>Russia</li>
        <li>Asia</li>
      </ul>
    </div>

  <div>
    <div className="grid grid-cols-8">
    <div className="col-span-3 m-auto m-4 mt-[50px]">
        <img className="rounded-lg" src={ExportMain} alt="" />
      </div>
      <div className=" col-span-5 m-auto p-7 text-justify">
        <h3  className="font-bold text-4xl m-1 ">Our Clients Specification</h3><br />
        <p>
        <p className="m-1 ">We have clients across the country and globe. Our fair business deals and professional attitude has helped us to satisfy clients with varied needs from all over the world. We successfully meet the deadlines set by our clients and deliver them on time. We strive to build a long lasting relationship with our clients. We have association with some of the big names in the industry and our objective is to further expand our business horizon by venturing into the key international markets.</p> <br />
        <p className="m-1 ">Our services is Electric Vibratory Motor, vibratory screen motor, vibrating table motor,vibrator motor, vibratory motor manufacturers, vibration motor, bowl vibro motor, vibration motor manufacturers, center flange vibratory motor, vibratory motor supplier.</p> 
        </p >
      </div>
      
    </div>
  </div>
</div>

<Footer/>
    </>
  )
}

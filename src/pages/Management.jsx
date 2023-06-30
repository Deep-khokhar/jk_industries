import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackGroung from '../IMG/BackGround.jpg'
import manage from '../IMG/manage.jpg'


export default function Management() {
    const textStyle = {
        textShadow: '0 1px 0 #504f4f, 0 2px 0 #555353, 0 3px 0 #010101, 0 4px 0 #070707, 0 5px 0 #0f0d0d, 0 6px 0 #0e0d0d, 0 7px 0 #000000, 0 8px 0 #000000, 0 9px 0 #0c0c0c, 0 10px 0 #0f0e0e, 0 11px 0 #000000, 0 12px 0 #0a0a0a, 0 20px 30px rgb(2, 2, 2)',
      };
  return (
    <>
      <Navbar/>

      <div>
        <div className="grid lg:grid-cols-6 gap-1 w-screen relative">
          <div className="img absolute">
            <img className src={BackGroung} alt="" style={{height: '70vh', width: '100vw', opacity: '0.9'}} />
          </div>
          <div className="relative text-white lg:col-span-6 set-property" style={textStyle}>
            <div className="set-property text-6xl font-bold ml-[800px] mt-[70px]">
              <h1>Management</h1>
            </div>
            <div className="font-semibold ml-[800px] mt-[40px]">
              <h5>Build Brand Awareness, Build Trust And Generate Leads</h5>
            </div>
          </div>
          {/* <div>dvds</div> */}
          <div className="lg:col-span-2" style={{height: '350px'}}>
            {/* <img src="IMG/R&D1.jpg" alt="" style="height: 800px; width: 550px" > */}
            {/* <img src="IMG/R&D1.jpg" alt="" style="height: 800px; width: 550px" > */}
          </div>
        </div>
        <div>
          <div className="grid grid-cols-8">
            <div className="col-span-5 m-auto p-7 text-justify">
              <p>
              </p><p className="m-1 "> Our company is guided by intelligent management staff for meeting
                the requirements of the respectable customers. The higher
                authorities of our company is highly knowledgeable &amp; experienced
                about vibrators and many other related products, which help them in
                serving remarkable gamut to the customers. Our management time to
                time guides and motivates all the appointed personnel so that they
                can give their best and make company climb up to the ladders of
                success.</p> <br />
              <p className="m-1 "> These are in particular conveyor thoughts, screens &amp;
                Vibrating table for all types of bulk materials. Vibrators are also
                used in construction industry as internal application are mainly
                conveying, compacting, emptying, cleaning testing and feeding of all
                kind of products.</p> <br />
              <p className="m-1 ">Vibrators are used in almost all industrial areas
                like chemical applications, food industry Pharmaceutical industry,
                electronics, foundries construction industry animal feed industry
                and in the packaging industry.</p> <br />
              <p className="m-1 "> our services is Electric Vibratory
                Motor, vibratory screen motor, vibrating table motor,vibrator motor,
                vibratory motor manufacturers, vibration motor, bowl vibro motor,
                vibration motor manufacturers, center flange vibratory motor,
                vibratory motor supplier.</p>
              <p />
            </div>
            <div className="col-span-3 m-auto">
              <img className="rounded-lg" src={manage} alt="" />
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  )
}

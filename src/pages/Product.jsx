import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Table from '../components/Table'
import Table2 from '../components/Table2'
// import PhotoGalary from '../components/PhotoGalary'

export default function Product() {

  
  
  return (
    <>
      <Navbar product = "#FFA500"/>
      
  <div className="container bg-[#181c24] text-white">
    <div className="grid grid-cols-3 gap-4" id="general">
      <div className="col-span-2 mt-20 ml-20 mr-20 ">
        <div className="mt-5">
          <b className="text-3xl ">General</b>
          <br />
          <p className="text-justify mt-6 text-ml">
            Unbalance motors are a synchronous AC Motors with pairs of
            centrifugal weight fitted to the ends of the motor shafts. The size
            of the unbalance and with it the amplitude of the oscillation by the
            working unit can be adjusted by shifting the centrifugal weights
            when the motor is at a stanstill. The unbalance motors are also
            available in a special version for mains voltages up to 440V and for
            a mains frequncy ranging from 50 Hz to 60 Hz. we are work on
            unbalanced motor last since year.
          </p>
        </div>
      </div>
      <div className="navigation">
        <div className="flex flex-col  mt-5">
          <div className="box  mt-20   ">
            <div className="text-xl m-1 hello">
              <div className="text-center m-2">
                {/* <button
                  className="btn btn-classy w-[20vw]"
                  role="button"
                  title=""
                >
                  <Link to="#general" className="btn btn-classy w-[20vw]"> General</Link>
                </button>
              </div>
              <div className="text-center m-2">
                <button
                  className="btn btn-classy w-[20vw]"
                  role="button"
                  title=""
                >
                  <Link href="#Technical-Data"> Technical-Data</Link>
                </button> */}
              </div>
              <div className="text-center m-2">
                <Link
                  className="btn btn-classy w-[20vw]"
                  role="button"
                  title=""
                >
                  <Link href=""> General</Link>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-3 gap-4" id="Technical-Data">
      <div className="col-span-2 mt-20 mr-20 ml-20 ">
        <div className="mt-5">
          <b className="text-3xl">Technica-Data</b>
          <br />
          <Table/>
          <p className="text-justify mt-6"></p>
          <div className="flex flex-row">
            <div>
              <svg
                fill="none"
                className="w-6"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </div>
            <div className="text-ml mb-2">
              Centrifugal force range of the type series : 0-12000 Kgs/Meter
            </div>
          </div>
          <div className="flex flex-row">
            <div>
              <svg
                fill="none"
                className="w-6"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </div>
            <div className="text-ml mb-2">
              Operating Voltages : Standard version 380/440 V, 50/60 Hz, others
              on request.
            </div>
          </div>
          <div className="flex flex-row">
            <div>
              <svg
                fill="none"
                className="w-6"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </div>
            <div className="text-ml mb-2">
              Ambient temperature : 25째 C to 80째 C, different temperature
              ranges on request.
            </div>
          </div>
          <div className="flex flex-row">
            <div>
              <svg
                fill="none"
                className="w-6"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </div>
            <div className="text-ml mb-2">Insulation Class : F</div>
          </div>
          <div className="flex flex-row">
            <div>
              <svg
                fill="none"
                className="w-6"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </div>
            <div className="text-ml mb-2">
              Operation : Continuous Service at the maximum indicated
              centrifugal force and Electric Power rating.
            </div>
          </div>
          <div className="flex flex-row">
            <div>
              <svg
                fill="none"
                className="w-6"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </div>
            <div className="text-ml mb-2">
              Fixing : The Electric vibration can be fixed in all positions with
              no limitations.
            </div>
          </div>
          <div className="flex flex-row">
            <div>
              <svg
                fill="none"
                className="w-6"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </div>
            <div className="text-ml mb-2">
              Terminal Box : Sized to make the electrical connections easier.
            </div>
          </div>
          <div className="flex flex-row">
            <div>
              <svg
                fill="none"
                className="w-6"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </div>
            <div className="text-ml mb-2">
              Bearings : The lower and upper bearings have been designed to
              support the relative load.
            </div>
          </div>
          <div className="flex flex-row">
            <div>
              <svg
                fill="none"
                className="w-6"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </div>
            <div className="text-ml mb-2">
              Drive Shaft : Oversized, made of treated steel and able to
              withstand high stress.
            </div>
          </div>
        </div>
        <Table2/>
      </div>
    </div>


     
  </div>
  
  {/* <PhotoGalary/> */}


    </>
  )
}

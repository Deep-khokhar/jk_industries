import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

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
                <button
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
                </button>
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
      </div>
      <div></div>
    </div>
  </div>
  {/* product carousal */}
  <div className="container ml-40  mt-20 m-auto px-4 md:px-12 ">
    <div className="flex flex-wrap   -mx-1 lg:-mx-4">
      {/* Column */}
      <div
        className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 "
        style={{ width: "25vw" }}
      >
        {/* Article */}
        <article className="overflow-hidden rounded-lg shadow-lg">
          <Link href="#">
            <img
              alt="Placeholder"
              className="block h-auto w-full"
              src="/IMG/MOTOR1.jpg"
            />
          </Link>
          <header className="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 className="text-lg">
              <Link className="no-underline hover:underline text-black" href="#">
                Article Title
              </Link>
            </h1>
            <p className="text-grey-darker text-sm">11/1/19</p>
          </header>
          <footer className="flex items-center justify-between leading-none p-2 md:p-4">
            <Link
              className="flex items-center no-underline hover:underline text-black"
              href="#"
            >
              <img
                alt="Placeholder"
                className="block rounded-full"
                src="https://picsum.photos/32/32/?random"
              />
              <p className="ml-2 text-sm">Author Name</p>
            </Link>
            <Link
              className="no-underline text-grey-darker hover:text-red-dark"
              href="#"
            >
              <span className="hidden">Like</span>
              <i className="fa fa-heart" />
            </Link>
          </footer>
        </article>
        {/* END Article */}
      </div>
      {/* END Column */}
      {/* Column */}
      <div
        className=" my-1 px-1 md:w-1/2 lg:my-4 lg:px-4 "
        style={{ width: "25vw" }}
      >
        {/* Article */}
        <article className="overflow-hidden rounded-lg shadow-lg">
          <Link href="#">
            <img
              alt="Placeholder"
              className="block h-auto w-full"
              src="/IMG/JK_MOTOR_PHOTO1.png"
            />
          </Link>
          <header className="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 className="text-lg">
              <Link className="no-underline hover:underline text-black" href="#">
                Article Title
              </Link>
            </h1>
            <p className="text-grey-darker text-sm">11/1/19</p>
          </header>
        </article>
        {/* END Article */}
      </div>
      {/* END Column */}
      {/* Column */}
      <div
        className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 "
        style={{ width: "25vw" }}
      >
        {/* Article */}
        <article className="overflow-hidden rounded-lg shadow-lg">
          <Link href="#">
            <img
              alt="Placeholder"
              className="block h-auto w-full"
              src="/IMG/JK_MOTOR_PHOTO2.png"
            />
          </Link>
          <header className="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 className="text-lg">
              <Link className="no-underline hover:underline text-black" href="#">
                Article Title
              </Link>
            </h1>
            <p className="text-grey-darker text-sm">11/1/19</p>
          </header>
        </article>
        {/* END Article */}
      </div>
      {/* END Column */}
      {/* Column */}
      <div
        className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 "
        style={{ width: "25vw" }}
      >
        {/* Article */}
        <article className="overflow-hidden rounded-lg shadow-lg">
          <Link href="#">
            <img
              alt="Placeholder"
              className="block h-auto w-full"
              src="/IMG/JK_MOTOR_PHOTO_3.png"
            />
          </Link>
          <header className="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 className="text-lg">
              <Link className="no-underline hover:underline text-black" href="#">
                Article Title
              </Link>
            </h1>
            <p className="text-grey-darker text-sm">11/1/19</p>
          </header>
        </article>
        {/* END Article */}
      </div>
      {/* END Column */}
      {/* Column */}
      <div
        className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 "
        style={{ width: "25vw" }}
      >
        {/* Article */}
        <article className="overflow-hidden rounded-lg shadow-lg">
          <Link href="#">
            <img
              alt="Placeholder"
              className="block h-auto w-full"
              src="https://picsum.photos/600/400/?random"
            />
          </Link>
          <header className="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 className="text-lg">
              <Link className="no-underline hover:underline text-black" href="#">
                Article Title
              </Link>
            </h1>
            <p className="text-grey-darker text-sm">11/1/19</p>
          </header>
        </article>
        {/* END Article */}
      </div>
      {/* END Column */}
      {/* Column */}
      <div
        className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 "
        style={{ width: "25vw" }}
      >
        {/* Article */}
        <article className="overflow-hidden rounded-lg shadow-lg">
          <Link href="#">
            <img
              alt="Placeholder"
              className="block h-auto w-full"
              src="https://picsum.photos/600/400/?motor"
            />
          </Link>
          <header className="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 className="text-lg">
              <Link className="no-underline hover:underline text-black" href="#">
                Article Title
              </Link>
            </h1>
            <p className="text-grey-darker text-sm">11/1/19</p>
          </header>
        </article>
        {/* END Article */}
      </div>
      {/* END Column */}
    </div>
  </div>


    </>
  )
}

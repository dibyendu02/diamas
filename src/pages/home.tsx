import { useEffect, useState } from "react";
import video from "../assets/video.mp4";
import one from "../assets/home/home1.png";

import line1 from "../assets/home/line_3.png";
import line4 from "../assets/home/line_4.png";

import legacy from "../assets/home/legacy.png";
import diamond from "../assets/home/diamond.png";
import diamond_rotate from "../assets/home/diamond_rotate.png";
import diamondIcon from "../assets/home/diamond_icon.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import Scrollbar from "../components/scrollbar";
import CollectionSwiper from "../components/swiper";
import NavbarOnScroll from "../components/headerOnScroll";

const home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showButtons, setShowButtons] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);

      // Show buttons if scrolled more than half the screen
      setShowButtons(currentPosition > window.innerHeight);

      setShowNavbar(currentPosition > window.innerHeight / 4);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div className="w-full ">
      {showNavbar && <NavbarOnScroll />}

      <div className="video-container w-full h-[850px] lg:h-[850px]">
        <video
          autoPlay
          muted
          loop
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>

      {showButtons && <Scrollbar />}

      <div className="container px-0 lg:pe-0 py-0 lg:mt-16  flex lg:gap-20 justify-center flex-wrap -z-0 lg:relative ">
        <img
          src={diamond_rotate}
          alt="diamond"
          className="absolute -top-28 left-40 blur-sm w-2/3 hidden lg:block "
        />
        <div
          style={{ zIndex: 2 }}
          className="h-full px-5 lg:px-0 p-4 lg:w-[40%]   "
        >
          <div className=" lg:py-16 relative">
            {/* <div className="absolute my-16 inset-0 bg-opacity-40  bg-blue-950 z-10"></div> */}
            <img
              src={one}
              alt=""
              className=" w-full z-1 brightness-105 hue-rotate-10 rounded-3xl"
            />
          </div>
        </div>

        <div className="h-full lg:ps-0 lg:p-0 p-4 z-30">
          <div className="lg:ps-0 px-4 lg:pt-16 lg:pb-16 flex flex-col gap-5 ">
            <h1 className="font-[Bulter] font-normal text-3xl sm:tracking-[20px] lg:tracking-[16px] lg:leading-[1.2] lg:text-7xl mb-3 text-white text-center lg:text-start z-10 lg:relative">
              About
              <br />
              Diamas
            </h1>

            <img
              src={diamondIcon}
              alt="icon"
              className="lg:w-20 w-10 mx-auto lg:mx-0"
            />

            <p className="text-white  text-justify text-lg leading-tight tracking-wider mt-5 lg:w-96 sm:w-full ">
              Diamonds are a statement unto themselves. At Diamas, Aditya Dhawan
              transforms his passion for diamonds into contemporary and
              luxurious works of art – each one, as unique as you.
            </p>
            <a
              href="/about"
              className=" text-white w-28 mt-3 text-sm inline-flex items-center justify-center space-x-1 rounded-3xl border-blue-300 border p-1 px-2 hover:bg-slate-500 hover:cursor-pointer"
            >
              <h6 className="text-sm text-blue-300 font-sans">Know More</h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3 text-blue-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>
        <img
          src={line1}
          alt="lines"
          className="absolute w-[50%] -bottom-[42%] left-0 z-0 hidden lg:block"
        />
      </div>

      <div className="relative lg:mt-60 flex flex-col gap-10 mx-5  ">
        <h1 className="text-white bacalisties text-center text-[50px] lg:text-[100px]  lg:font-normal lg:absolute z-10 -top-20 left-[38%]">
          Adornments
        </h1>

        <CollectionSwiper />

        <img
          src={diamond_rotate}
          alt="diamond"
          className="absolute opacity-60 blur-sm bottom-0 left-[10%] hidden lg:block "
        />
        <img
          src={diamond}
          alt="diamond"
          className="absolute opacity-60 blur-xs bottom-0 right-[10%] hidden lg:block "
        />
      </div>

      <div
        className="hidden lg:flex gap-10 justify-center items-center  
        my-10  w-full 
        p-4 text-white"
      >
        <div className="w-[40%] h-[1px] bg-white " />
        <img
          src={diamondIcon}
          alt="icon"
          className="lg:w-20 w-10 mx-auto lg:mx-0"
        />
        <div className="w-[40%] h-[1px] bg-white " />
      </div>

      <div className="container relative w-full  ml-auto  lg:pb-24 flex flex-wrap justify-end lg:pr-[10%] p-5 items-center self-center">
        <img
          src={diamond_rotate}
          alt="diamond"
          className="absolute bottom-20 left-72 blur-sm w-1/2 hidden lg:block "
        />
        <div className="h-full p-4 lg:absolute top-[8%]  lg:left-40 z-20 lg:w-[40%]">
          <div className=" lg:pt-16 pb-16 relative">
            <h1
              className="font-[Bulter] font-normal text-3xl lg:text-7xl mb-3 text-white text-center lg:text-start"
              style={{
                letterSpacing: 5,
                lineHeight: 1.4,
              }}
            >
              Legacy
            </h1>
            <img
              src={diamondIcon}
              alt="icon"
              className="lg:w-20 w-10 mx-auto lg:mx-0 mb-8"
            />
            <p className="text-white text-justify text-lg leading-tight tracking-wider mb-3 lg:w-[72%]  sm:w-full ">
              Drawing from a legacy in jewellery craftsmanship, Diamas excels by
              blending time-honoured techniques with the highest quality
              diamonds.
              <br />
              Our artisans ensure that each design radiates brilliance, meant to
              inspire for generations.
            </p>
            <a
              href="/legacy"
              className="text-white mt-3 text-sm inline-flex items-center space-x-1 rounded-3xl border-blue-300 border p-1 px-2 hover:bg-slate-500 hover:cursor-pointer"
            >
              <h6 className="text-sm text-blue-300 font-sans">Know More</h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3 text-blue-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="z-10 w-full mt-5  flex justify-end">
          <img
            style={{ zIndex: 2 }}
            src={legacy}
            alt=""
            className="object-contain h-full lg:w-[60%] lg:h-[120%] rounded-3xl "
          />
        </div>

        <img
          src={line4}
          alt="lines"
          className="absolute  -bottom-[20%] right-0 z-0 hidden lg:block"
        />
      </div>

      <div className="relative lg:px-1 py-5 lg:py-24 mx-auto flex flex-wrap justify-center items-center self-center">
        <img
          src={diamond_rotate}
          alt="diamond"
          className="absolute bottom-12 left-36 blur-sm w-1/3 hidden lg:block "
        />
        <div className="mapdiv h-full p-4 lg:w-[30%] lg:top-[16%] w-full  static lg:left-[30%]  lg:absolute lg:transform lg:-translate-x-1/2 z-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.6419987499503!2d77.10195357503396!3d28.6404898837201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d032645f91d23%3A0xb02e3c9fecb16042!2sKasturi%20Jewellers%20Tilak%20Nagar!5e0!3m2!1sen!2sin!4v1708813695083!5m2!1sen!2sin"
            style={{ borderRadius: 10 }}
            allowFullScreen={true}
            aria-hidden="false"
            tabIndex={0}
            className="w-full h-[67%]"
          ></iframe>
        </div>

        <div className="h-full lg:p-[1rem] mx-2  lg:relative border border-white rounded-3xl lg:ms-[19rem] lg:w-[50%] z-0 relative">
          <div className="w-full px-5 py-5 flex-col space-y-5 lg:ml-[30%]">
            <p className="lg:text-[60px] lg:tracking-[5px] lg:leading-[1.4] font-[Kalnia] text-2xl mb-3 text-white">
              OUR <br />
              STORES
            </p>

            <p className="text-white lg:w-[60%] lg:tracking-[5px] lg:text-[20px]">
              WALK IN OR SCHEDULE
              <br />
              AN APPOINTMENT
            </p>

            <p className="text-white text-[16px] lg:w-[28%]">
              Kasturi Jewellers Tilak Nagar, First Floor, 5B-16, Tilak Nagar,
              Delhi, 110018
            </p>

            <a
              href="./contact"
              className="text-white mt-3 text-sm inline-flex items-center space-x-1 rounded-3xl border-blue-300 border p-1 px-2 hover:bg-slate-500 hover:cursor-pointer"
            >
              <h6 className="text-sm text-blue-300 font-[Kalnia] ">
                Know More
              </h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3 text-blue-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
          <img
            src={diamond}
            alt="diamond"
            className="absolute bottom-5 right-10 w-40 hidden lg:block "
          />
        </div>
      </div>
    </div>
  );
};

export default home;

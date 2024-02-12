

import { useEffect, useState } from "react";
import video from "../assets/video.mp4";
import one from "../assets/home/1.png";
import two from "../assets/home/2.png";
import slider1 from "../assets/home/slider1.png";


import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";


const home = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [showButtons, setShowButtons] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const currentPosition = window.scrollY;
        setScrollPosition(currentPosition);

        // Show buttons if scrolled more than half the screen
        setShowButtons(currentPosition > window.innerHeight / 2);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollPosition]);



    const scrollToBottom = () => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth", // Optional, smooth scrolling animation
        });
      };
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
    return (
        <div className="w-full">

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

          {showButtons && <div
            // className="hidden lg:flex mt-16 gap-10 justify-center items-center lg:mx-0 sticky bottom-0"
            className="hidden lg:flex gap-10 justify-center items-center  
             fixed bottom-0 z-50  w-full
            p-4 text-white"
          >
            <div className="w-[40%] h-[1px] bg-white " />
            <div className="h-16 w-10 rounded-full border border-white flex flex-col gap-2 items-center justify-between py-2 text-white ">
              <button onClick={scrollToTop}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                  />
                </svg>
              </button>
    
              <button onClick={scrollToBottom}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            </div>
            <div className="w-[40%] h-[1px] bg-white " />
          </div>}
    
    
          <div className="container px-0 lg:pe-0 py-0  flex flex-wrap -z-0 lg:relative">
            <div style={{ zIndex: 2 }} className="h-full px-0 p-4 lg:w-1/2">
              <div className=" py-16 relative">
                <div className="absolute my-16 inset-0 bg-opacity-40  bg-blue-950 z-10"></div>
                <img
                  src={one}
                  alt=""
                  className="w-full z-0 brightness-105 hue-rotate-10"
                />
              </div>
            </div>
    
            <div className="h-full lg:ps-0 lg:p-0 p-4 lg:w-1/2 ">
              <div className="lg:ps-0 px-0 lg:pt-16 lg:pb-16 ">
                <h1 className="font-[Kalnia] text-3xl sm:tracking-[20px] lg:tracking-[40px] lg:leading-[1.4] lg:text-7xl mb-3 text-white text-center lg:text-start lg:-ms-5 z-10 lg:relative">
                  ABOUT
                  <br />
                  DIAMAS
                </h1>
                <p className="mb-3 text-white lg:text-xl lg:w-96 ms-16">
                  Diamonds are a statement unto themselves. At Diamas, Aditya Dhawan
                  transforms his passion for diamonds into contemporary and
                  luxurious works of art – each one, as unique as you.
                </p>
                <a className="ms-16 text-white mt-3 text-sm inline-flex items-center space-x-1 rounded-lg border-blue-300 border p-1 px-2 hover:bg-slate-500 hover:cursor-pointer">
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
            <div
              className="invisible lg:visible"
              style={{ zIndex: 1, width: "100%" }}
            >
              <div
                style={{
                  transform: "rotate(-12deg)",
                  height: 5,
                  width: "50%",
                  backgroundColor: "#fff",
                  marginLeft: -50,
                  marginTop: -50,
                }}
              />
              <div
                style={{
                  transform: "rotate(-50deg)",
                  height: 5,
                  width: "40%",
                  backgroundColor: "#fff",
                  marginLeft: -170,
                  marginTop: -30,
                }}
              />
              <div
                style={{
                  transform: "rotate(-32deg)",
                  height: 5,
                  width: "58%",
                  backgroundColor: "#fff",
                  marginLeft: -70,
                  marginTop: -30,
                }}
              />
            </div>
          </div>
    
          <h1 className="text-white bacalisties text-center text-[50px] lg:text-[120px] lg:font-normal">
            Adornments
          </h1>
    
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Navigation]}
            className="mySwiper sm:w-[200px] sm:h-[200px]"
            navigation={true}
            loop
          >
            <SwiperSlide>
              <img src={slider1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider1} alt="" />
            </SwiperSlide>
          </Swiper>
    
          <div
            className="invisible lg:visible"
            style={{
              zIndex: 0,
              width: "70%",
              position: "absolute",
              right: 0,
              display: "flex",
              marginTop: 200,
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                transform: "rotate(-12deg)",
                height: 5,
                width: "50%",
                backgroundColor: "#fff",
                marginRight: -5,
                marginTop: -30,
                position: "absolute",
              }}
            />
            <div
              style={{
                transform: "rotate(-45deg)",
                height: 5,
                width: "40%",
                backgroundColor: "#fff",
                marginRight: -60,
                marginTop: -30,
              }}
            />
            <div
              style={{
                transform: "rotate(-32deg)",
                height: 5,
                width: "59%",
                backgroundColor: "#fff",
                marginRight: -45,
                marginTop: -30,
                position: "absolute",
              }}
            />
          </div>
    
          <div className="container px-5 lg:py-24 mx-auto flex flex-wrap justify-center items-center self-center mt-20">
            <div className="h-full p-4 lg:w-1/2">
              <div className="px-8 lg:pt-16 pb-16 relative">
                <h1
                  className="text-3xl lg:text-7xl mb-3 text-white sm:text-center lg:text-start"
                  style={{
                    letterSpacing: 5,
                    lineHeight: 1.4,
                    fontFamily: "Kalnia",
                  }}
                >
                  LEGACY
                </h1>
                <p className="mb-3 text-white lg:text-xl">
                  Diamonds are a statement unto themselves. At Diamas, Aditya Dhawan
                  transforms his passion for diamonds into contemporary and
                  luxurious works of art – each one, as unique as you.
                </p>
                <a className="text-white mt-3 text-sm inline-flex items-center space-x-1 rounded-lg border-blue-300 border p-1 px-2 hover:bg-slate-500 hover:cursor-pointer">
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
              style={{ zIndex: 2 }}
              src={two}
              alt=""
              className="object-contain h-full lg:w-96 lg:h-[440.67px]"
            />
          </div>
    
          <div className="relative lg:px-1 lg:py-24 mx-auto flex flex-wrap justify-center items-center self-center">
            <div className="mapdiv h-full p-4 lg:w-[45%] lg:top-[16%] w-full  static left-[27%]  lg:absolute lg:transform -translate-x-1/2 z-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.02705431727!2d77.068682370812!3d28.628951246325638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04c2d11feb9f%3A0x5b42213df8236053!2sa%2C%20A-157%2C%20Guru%20Virjanand%20Marg%2C%20near%20Police%20Station%2C%20A-Block%2C%20Vikaspuri%2C%20Delhi%2C%20110018!5e0!3m2!1sen!2sin!4v1706261050023!5m2!1sen!2sin"
                style={{ borderRadius: 10 }}
                allowFullScreen={true}
                aria-hidden="false"
                tabIndex={0}
                className="w-full h-[67%]"
              />
            </div>
    
            <div className="h-full lg:p-[1rem] mx-2  lg:relative border border-white lg:ms-[19rem] lg:w-[60%] z-0 relative">
              <div className="w-full px-16 py-20 flex-col space-y-5 lg:ml-[35%]">
                <p className="lg:text-[60px] lg:tracking-[5px] lg:leading-[1.4] font-[Kalnia] text-2xl mb-3 text-white">
                  OUR STORES
                </p>
    
                <p className="text-white lg:w-[60%] lg:tracking-[5px] lg:text-[20px] font-['Butler']">
                  WALK IN OR SCHEDULE AN APPOINTMENT
                </p>
    
                <p className="text-white text-[16px] font-['Butler'] lg:w-[40%]">
                  A-157, Guru Virjanand Marg, Near Police Station, A-Block,
                  Vikaspuri, Delhi, 110018
                </p>
    
                <a className="text-white mt-3 text-sm inline-flex items-center space-x-1 rounded-lg border-blue-300 border p-1 px-2 hover:bg-slate-500 hover:cursor-pointer">
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
            </div>
          </div>
        </div>
      );
}

export default home;
import { useEffect, useState } from "react";
import one from "../assets/collection/1.png";
// import two from "../assets/collection/2.png";
// import three from "../assets/collection/3.png";
// import four from "../assets/collection/4.png";
import five from "../assets/collection/5.png";
import six from "../assets/collection/6.png";
import seven from "../assets/collection/7.png";
import eight from "../assets/collection/8.png";
import Scrollbar from "../components/scrollbar";

import neclace1 from "../assets/collection/Necklace1.png"
import neclace2 from "../assets/collection/Necklace2.png"
import neclace3 from "../assets/collection/Necklace3.png"
import neclace4 from "../assets/collection/Necklace4.png"
import neclace5 from "../assets/collection/Necklace5.png"

import group from "../assets/collection/Group.png"


function collection() {
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
    <div className="flex flex-col justify-center items-center ">
      <div
        style={{
          backgroundImage: `url(${one})`,
        }}
        className="bg-[image:var(--image-url)] bg-cover 
         bg-center w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover 
         justify-center items-center flex  gayscale relative z-10
         "
      >
        <h1
          className="text-3xl lg:text-7xl my-3 font-[Bolter] font-bold text-white text-center lg:text-start lg:-ms-14 z-10 uppercase"
          style={{
            letterSpacing: 5,
            lineHeight: 1.4,
          }}
        >
          Collections
        </h1>

        {!showButtons && (
          <div
            className="hidden lg:flex gap-10 justify-center items-center  
       w-full absolute -bottom-12
      p-4 text-white"
          >
            <div className="w-[40%] h-[1px] bg-white " />
            <div className="h-16 w-10 rounded-full border-2 border-white flex flex-col gap-2 items-center justify-between py-2 text-white ">
              <button onClick={scrollToTop}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={4}
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
                  strokeWidth={4}
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
          </div>
        )}

        
      </div>

      <div className="flex w-full justify-between">
        {showButtons && <Scrollbar />}
      </div>
      
      
      <div className="relative">
        <div className="">
          <h1
            className="text-white bacalisties dancing-script text-center mt-36"
            style={{
              fontSize: "5rem",
            }}
          >
            Necklace
          </h1>

          <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-row lg:flex-wrap sm:w-full lg:w-full justify-center items-center  mt-10 lg:mt-10 mx-5  gap-10 lg:absolute z-10 ">
            <div className="h-full p-4 md:w-[40%] lg:w-[28%] bg-black">
              <img src={neclace1} className="w-full" alt="" />
            </div>
            <div className="h-full p-4 md:w-[40%] lg:w-[28%] bg-black">
              <img src={neclace2} className="w-full" alt="" />
            </div>
            <div className="h-full p-4 md:w-[40%] lg:w-[28%] bg-black">
              <img src={neclace3} className="w-full" alt="" />
            </div>
            <div className="h-full p-4 md:w-[40%] lg:w-[28%] bg-black">
              <img src={neclace4} className="w-full" alt="" />
            </div>
            <div className="h-full p-4 md:w-[40%] lg:w-[28%] bg-black">
              <img src={neclace5} className="w-full" alt="" />
            </div>
            <div className="h-full p-4 md:w-[40%] lg:w-[28%] bg-black">
              <img src={neclace5} className="w-full" alt="" />
            </div>
          </div>

          <p className="mb-3 text-white font-light  text-center my-12 lg:mx-24 lg:text-2xl mx-[30px] lg:mt-[180vh]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
            diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
            diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </p>
        </div>
        
        <div className="flex flex-col mt-10 lg:mt-16 lg:mx-20 gap-5">
          <h1
            className="text-white bacalisties text-center lg:absolute z-10 lg:-mt-10 self-center sm:mb-5"
            style={{
              fontSize: "5rem",
            }}
          >
            Rings
          </h1>
          <div className="flex flex-col lg:flex-row sm:w-full lg:w-auto justify-center items-center">
            <div className="h-full p-5 lg:w-1/2">
              <img src={five} className="lg:w-[65%] lg:ml-20 " alt="" />
            </div>
            <div className="h-full p-4 ">
            <p className="text-white pt-5 lg:ml-10  text-justify text-lg leading-tight tracking-wider mt-5 lg:w-80 sm:w-full ">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat.Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>
            </div>
          </div>
        </div>

        <img
          src={group}
          alt="lines"
          className="absolute w-[60%] -top-36 left-0 z-0 hidden lg:block"
        />
      </div>


      

      <div className="flex flex-col mt-10 lg:mt-40 lg:mx-20 gap-5">
        <h1
          className="text-white bacalisties text-center lg:absolute z-10 lg:-mt-14 self-center sm:mb-5"
          style={{
            fontSize: "5rem",
          }}
        >
          Earrings
        </h1>
        <div className="flex flex-col lg:flex-row sm:w-full lg:w-auto justify-center items-center">
          <div className="h-full p-4 lg:w-1/2 ">
            <p className="text-white  text-justify text-lg leading-tight tracking-wider mt-16 lg:w-80 sm:w-full ">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat.Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>
          </div>
          <div className="h-full p-4 lg:w-1/2 ">
            <img src={six} className="w-full" alt="" />
          </div>
        </div>
      </div>


      <div className="flex flex-col mt-10 lg:mt-40 lg:mx-20 gap-5">
        <h1
          className="text-white bacalisties text-center lg:absolute z-10 lg:-mt-20 self-center sm:mb-5"
          style={{
            fontSize: "5rem",
          }}
        >
          Pendants
        </h1>
        <div className="flex flex-col lg:flex-row sm:w-full lg:w-auto justify-center items-center">
          <div className="h-full p-4 lg:w-1/2 ">
            <img src={seven} className="w-full" alt="" />
          </div>
          <div className="h-full p-4 lg:w-1/2 ">
            <p className="text-white lg:ml-32  text-justify text-lg leading-tight tracking-wider mt-16 lg:w-80 sm:w-full ">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat.Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>
          </div>
          
        </div>
      </div>

      

      <div className="flex flex-col mt-10 lg:mt-40  ">
        <h1
          className="text-white bacalisties text-center lg:absolute z-10 lg:-mt-20 self-center sm:mb-5"
          style={{
            fontSize: "5rem",
          }}
        >
          Bracelets & Bangles
        </h1>

        <div className="flex flex-col lg:flex-row sm:w-full lg:w-auto justify-center items-center">
          <img src={eight} alt="" className="w-full lg:h-auto h-full" />
        </div>

        <p className="mb-20 text-white font-light lg:text-xl text-center my-16 lg:mx-24 mx-[30px]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
          diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
          erat volutpat.Lorem ipsum dolor sit amet, consectetuer adipiscing
          elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
          aliquam erat volutpat.
        </p>
      </div>
    </div>
  );
}

export default collection;

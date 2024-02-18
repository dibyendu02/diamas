import { useEffect, useState } from "react";
import one from "../assets/media/1.png";
import two from "../assets/media/2.png";
import three from "../assets/media/3.png";
import four from "../assets/media/4.png";

import gal1 from "../assets/media/gallery/1.png";
import gal2 from "../assets/media/gallery/2.png";
import gal3 from "../assets/media/gallery/3.png";
import gal4 from "../assets/media/gallery/4.png";

import blog1 from "../assets/media/blogs/1.png";
import blog2 from "../assets/media/blogs/2.png";
import blog3 from "../assets/media/blogs/3.png";
import blog4 from "../assets/media/blogs/4.png";
import Scrollbar from "../components/scrollbar";

function Media() {
  const [active, setActive] = useState("Press");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showButtons, setShowButtons] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);

      // Show buttons if scrolled more than half the screen
      setShowButtons(currentPosition > window.innerHeight);
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
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center w-full mb-20">
        <div className="w-full h-[300px] lg:h-[700px] flex items-center justify-center relative">
          <div className="absolute h-full inset-0 bg-opacity-20 bg-blue-950 z-10"></div>
          <img src={one} className="z-0 object-cover h-full" alt="" />
          <h1
            className="absolute text-3xl lg:text-7xl my-3 font-[Bulter] font-bold text-white text-center lg:text-start z-10 uppercase"
            style={{
              letterSpacing: 5,
              lineHeight: 1.4,
            }}
          >
            MEDIA
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
      </div>

      <div className="flex w-full justify-between">
        {showButtons && <Scrollbar />}
      </div>

      <div className="flex mt-0 items-center w-full flex-row gap-4 lg:gap-0 lg:mt-8">
        <div className="w-96 h-[1px] bg-white"></div>
        <div
          className="text-white lg:text-2xl lg:ms-28 cursor-pointer"
          style={{
            textDecorationLine: active === "Events" ? "underline" : "none",
            textDecorationThickness: 2,
            textUnderlineOffset: 5,
          }}
          onClick={() => setActive("Events")}
        >
          Events
        </div>
        <div
          className="text-white lg:text-2xl lg:mx-28 cursor-pointer"
          style={{
            textDecorationLine: active === "Press" ? "underline" : "none",
            textDecorationThickness: 2,
            textUnderlineOffset: 5,
          }}
          onClick={() => setActive("Press")}
        >
          Press
        </div>
        <div className="w-full h-[1px] bg-white"></div>
      </div>

      <h1 className="mt-8 text-white font-[Bulter] font-semibold w-full ms-20 lg:text-3xl">
        Top Trending News
      </h1>

      <h3 className="text-gray-500 font-[Bulter] w-full ms-20 mt-4">
        The most popular news you should know to keep up with the latest news
      </h3>

      <div className="flex flex-col items-center justify-center w-full font-[Bulter] lg:flex-row mt-8 gap-8 p-8">
        <div className="flex flex-col lg:w-1/3 gap-3">
          <img src={two} alt="" />
          <h3 className="text-white">17 February 2022</h3>
          <h3 className="text-white lg:text-2xl">
            Apple Officially Announces The Release Schedule...
          </h3>
          <h3 className="text-gray-500">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque...
          </h3>
        </div>

        <div className="flex flex-col lg:w-1/3 gap-3">
          <img src={three} alt="" />
          <h3 className="text-white">26 February 2022</h3>
          <h3 className="text-white lg:text-2xl">
            The Annual Festival That Is Held Is Very Lively...
          </h3>
          <h3 className="text-gray-500">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit accusantium...
          </h3>
        </div>

        <div className="flex flex-col lg:w-1/3 gap-3">
          <img src={four} alt="" />
          <h3 className="text-white">20 February 2022</h3>
          <h3 className="text-white lg:text-2xl">
            Reduced Efficiency In The Process Of Shipping...
          </h3>
          <h3 className="text-gray-500">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was...
          </h3>
        </div>
      </div>

      <h1
        className="text-3xl lg:text-7xl mt-3 font-[Bulter] font-bold text-white text-center lg:text-start z-10 uppercase"
        style={{
          letterSpacing: 5,
          lineHeight: 1.4,
        }}
      >
        GALLERY
      </h1>

      <div className="flex flex-col items-center justify-center w-full lg:flex-row mt-8 gap-8 pb-16 px-16">
        <div className="flex flex-col lg:w-2/3 w-full gap-8">
          <div className="flex flex-col gap-8 lg:gap-4 lg:flex-row w-full justify-between">
            <img src={gal1} className="w-full" alt="" />
            <img src={gal2} className="w-full" alt="" />
          </div>
          <img src={gal3} alt="" />
        </div>
        <div className="flex flex-col lg:w-1/3 w-full">
          <img src={gal4} alt="" />
        </div>
      </div>

      <a className="text-white text-sm inline-flex items-center space-x-1 rounded-lg border-blue-300 border p-1 px-2 hover:bg-slate-500 hover:cursor-pointer">
        <h6 className="text-sm text-blue-300 font-sans">See More</h6>
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

      <h1
        className="text-3xl lg:text-7xl my-3 font-[Bulter] font-bold text-white text-center lg:text-start z-10 uppercase"
        style={{
          letterSpacing: 5,
          lineHeight: 1.4,
        }}
      >
        BLOGS
      </h1>

      <div className="flex flex-col lg:flex-row w-full p-8 gap-3">
        <div className="flex flex-col lg:w-1/2 w-full gap-3">
          <div className="block lg:flex w-full items-center gap-3">
            <h3 className="text-white mx-auto h-full  text-justify text-lg leading-tight tracking-wider my-10 sm:w-full ">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat.Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </h3>
            <img src={blog1} alt="" />
          </div>
          <img src={blog3} alt="" />
        </div>

        <div className="block lg:flex flex-col lg:w-1/2 w-full gap-3">
          <img src={blog2} alt="" />
          <div className="block lg:flex w-full items-center gap-3">
            <h3 className="text-white mx-auto h-full  text-justify text-lg leading-tight tracking-wider my-10 sm:w-full ">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat.Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </h3>
            <img src={blog4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Media;

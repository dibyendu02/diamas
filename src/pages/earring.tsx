import { useEffect, useState } from "react";
import Scrollbar from "../components/scrollbar";

// import earrings from "../assets/collection/earrings.png";
import earring1 from "../assets/collection/earrings/Earings1.jpg";
import earring2 from "../assets/collection/earrings/Earings2.jpg";
import earring3 from "../assets/collection/earrings/Earings3.jpg";
import earring4 from "../assets/collection/earrings/Earings4.jpg";
import earring5 from "../assets/collection/earrings/Earings5.jpg";
import earring6 from "../assets/collection/earrings/Earings6.jpg";

import lines1 from "../assets/collection/lines1.png";
import lines2 from "../assets/collection/lines2.png";
import NavbarOnScroll from "../components/headerOnScroll";

function Earring() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showButtons, setShowButtons] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);

      // Show buttons if scrolled more than half the screen
      setShowButtons(currentPosition > window.innerHeight / 2);

      setShowNavbar(currentPosition > window.innerHeight / 4);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  //scroll to top on load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      {showNavbar && <NavbarOnScroll />}
      <div className="flex flex-col justify-center items-center ">
        

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
              Earring
            </h1>

            <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-row lg:flex-wrap sm:w-full lg:w-full justify-center items-center  mt-10 lg:mt-10 mx-5  gap-10 lg:absolute z-10 ">
              <div className="h-full md:w-[40%] lg:w-[28%] bg-black">
                <img src={earring1} className="w-full" alt="" />
              </div>
              <div className="h-full md:w-[40%] lg:w-[28%] bg-black">
                <img src={earring2} className="w-full" alt="" />
              </div>
              <div className="h-full md:w-[40%] lg:w-[28%] bg-black">
                <img src={earring3} className="w-full" alt="" />
              </div>
              <div className="h-full md:w-[40%] lg:w-[28%] bg-black">
                <img src={earring4} className="w-full" alt="" />
              </div>
              <div className="h-full md:w-[40%] lg:w-[28%] bg-black">
                <img src={earring5} className="w-full" alt="" />
              </div>
              <div className="h-full md:w-[40%] lg:w-[28%] bg-black">
                <img src={earring6} className="w-full" alt="" />
              </div>
            </div>

            <p className="mb-3 text-white font-light  text-justify my-12 lg:mx-24 lg:text-2xl mx-[30px] lg:mt-[60%] ">
              Diamas necklaces embrace the extraordinary in the ordinary.
              Delicate drops become bold when layered, while sculptural
              centrepieces command attention. Our pieces accentuate and amplify,
              designed to empower confidence, flair and fearless femininity.
            </p>
          </div>

          

          <img
            src={lines1}
            alt="lines"
            className="absolute w-[60%] -top-36 left-0 z-0 hidden lg:block"
          />
          <img
            src={lines2}
            alt="lines"
            className="absolute w-[80%] -bottom-[60%] right-0 z-0 hidden lg:block"
          />
        </div>

        
      </div>
    </>
  );
}

export default Earring;

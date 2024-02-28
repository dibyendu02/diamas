import { useEffect, useState } from "react";
import main from "../assets/legacy/1.png";
import two from "../assets/legacy/2.png";
import Scrollbar from "../components/scrollbar";
import NavbarOnScroll from "../components/headerOnScroll";

function legacy() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showButtons, setShowButtons] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);

      // Show buttons if scrolled more than half the screen
      setShowButtons(currentPosition > window.innerHeight * 0.7);

      setShowNavbar(currentPosition > window.innerHeight / 4);
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

  //scroll to top on load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },[])
  return (
    <>
    {showNavbar && <NavbarOnScroll />}
    <div className="flex flex-col justify-center items-center ">
      
      <div className="relative">
        <img src={main} alt="main" className="w-full object-cover" />

        {!showButtons && (
          <div
            // className="hidden lg:flex mt-16 gap-10 justify-center items-center lg:mx-0 sticky bottom-0"
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

        {showButtons && <Scrollbar />}
      </div>

      <div className="my-28 flex flex-col items-center justify-center">
        <h1
          className="text-2xl md:text-4xl lg:text-7xl my-3 text-white text-center font-[Butler] font-normal lg:text-start lg:-ms-14 z-10"
          style={{
            letterSpacing: 5,
            lineHeight: 1.4,
          }}
        >
          HOUSE OF KASTURI
        </h1>

        <h3 className="text-white text-center lg:text-start lg:-ms-14 z-10 text-xl lg:text-3xl font-medium mb-5">
          The House of Kasturi is the soul of Diamas
        </h3>

        <h3 className="text-white mx-auto pt-5  text-justify font-normal text-xl leading-tight lg:w-[75%] tracking-wider mt-5 p-10 sm:w-full ">
          A place where tradition echoes in every jewel, radiating a richness
          that withstands time's test. Aditya's origins in diamond artistry are
          rooted here, under his father Surinder Kumar's visionary guidance.
          With timeless expertise, Surinder helps Aditya craft pieces elegant in
          style and abundant in personality. Diamas draws inspiration from the
          present yet aims for the future - destined to breathe new life into
          enduring legacies.
        </h3>
      </div>

      <img src={two} alt="two" className="w-full object-cover" />

      <div className="my-28 flex flex-col items-center justify-center">
        <h1
          className="text-2xl md:text-4xl lg:text-7xl my-3 font-[Bolter] text-white text-center lg:text-start lg:-ms-14 z-10"
          style={{
            letterSpacing: 5,
            lineHeight: 1.4,
          }}
        >
          SURINDER KUMAR
        </h1>

        <h3 className="text-white mx-auto pt-5  text-justify font-normal text-xl leading-tight lg:w-[75%] tracking-wider mt-5 p-10 sm:w-full ">
          Surinder Kumar, the visionary voice behind Diamas, imprints the spirit
          of craftsmanship across generations. Just as his father passed the
          passion for jewellery on to Surinder, Surinder guides his son Aditya.
          He inspires Aditya with his eye for perfection and multifaceted
          leadership. Through respect for heritage and a duty to innovation,
          Surinder steers Diamas towards a timeless legacy. In every cut and
          setting, one may glimpse shadows of the man in the style, the
          attention to detail, the refusal to settle for less than the sublime.
          <br/>
          Surinder's passion becomes purpose, craft matures as art, and Diamas’
          creations sparkle with his influence radiating through each elegant
          facet as timeless as the diamonds themselves.
        </h3>
        
      </div>
    </div>
    </>
    
  );
}

export default legacy;

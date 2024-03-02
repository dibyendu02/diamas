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

import neclace1 from "../assets/collection/2.png";
import neclace2 from "../assets/collection/3.png";
import neclace3 from "../assets/collection/4.png";
// import neclace4 from "../assets/collection/Necklace4.png";
// import neclace5 from "../assets/collection/Necklace5.png";

import lines1 from "../assets/collection/lines1.png";
import lines2 from "../assets/collection/lines2.png";
import NavbarOnScroll from "../components/headerOnScroll";
// import lines3 from "../assets/collection/lines3.png";

function collection() {
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
              <div className="h-full md:w-[40%] lg:w-[28%] bg-black">
                <img src={neclace1} className="w-full" alt="" />
              </div>
              <div className="h-full md:w-[40%] lg:w-[28%] bg-black">
                <img src={neclace2} className="w-full" alt="" />
              </div>
              <div className="h-full md:w-[40%] lg:w-[28%] bg-black">
                <img src={neclace3} className="w-full" alt="" />
              </div>
              {/* <div className="h-full p-4 md:w-[40%] lg:w-[28%] bg-black">
                <img src={neclace4} className="w-full" alt="" />
              </div>
              <div className="h-full p-4 md:w-[40%] lg:w-[28%] bg-black">
                <img src={neclace5} className="w-full" alt="" />
              </div>
              <div className="h-full p-4 md:w-[40%] lg:w-[28%] bg-black">
                <img src={neclace5} className="w-full" alt="" />
              </div> */}
            </div>

            <p className="mb-3 text-white font-light  text-justify my-12 lg:mx-24 lg:text-2xl mx-[30px] lg:mt-[42%] ">
              Diamas necklaces embrace the extraordinary in the ordinary.
              Delicate drops become bold when layered, while sculptural
              centrepieces command attention. Our pieces accentuate and amplify,
              designed to empower confidence, flair and fearless femininity.
            </p>
          </div>

          <div className="flex flex-col mt-10 lg:mt-40 gap-5">
            <h1
              className="text-white bacalisties text-center lg:absolute z-10 lg:-mt-10 lg:mr-8 self-center sm:mb-5"
              style={{
                fontSize: "5rem",
              }}
            >
              Rings
            </h1>
            <div className="flex flex-col lg:flex-row sm:w-full lg:w-auto justify-center items-center">
              <div className="h-full p-5 lg:w-1/2 ">
                <img src={five} className="lg:w-[75%]  " alt="" />
              </div>
              <div className="h-full p-4 ">
                <p className="text-white pt-5  text-justify text-lg leading-tight tracking-wider mt-5 lg:w-80 sm:w-full ">
                  A symbol of commitment or a meaningful self-gift – Diamas
                  rings commemorate relationships and milestones close to the
                  heart. An heirloom passed down honouring family ties; an
                  anniversary band etching promises in gold; an exquisite gem
                  declaring self-love. Each ring tells a story as unique as
                  yours.
                </p>
              </div>
            </div>
          </div>

          <img
            src={lines1}
            alt="lines"
            className="absolute w-[60%] -top-36 left-0 z-0 hidden lg:block"
          />
          <img
            src={lines2}
            alt="lines"
            className="absolute w-[80%] -bottom-[24%] right-0 z-0 hidden lg:block"
          />
        </div>

        <div className="relative">
          <div className="flex flex-col mt-10 lg:mt-40  gap-5">
            <h1
              className="text-white bacalisties text-center lg:absolute z-10 lg:-mt-14 self-center sm:mb-5"
              style={{
                fontSize: "5rem",
              }}
            >
              Earrings
            </h1>
            

            <div className="flex flex-col relative lg:flex-row sm:w-full lg:w-auto justify-center items-center">
              <h1 className="absolute text-white bacalisties text-[2rem]  lg:text-7xl">
                Diamond Quality
              </h1>
              <div className="h-full p-4 lg:w-1/2 ">
                <p className="text-white  text-justify text-lg leading-tight tracking-wider mt-16 lg:w-80 sm:w-full ">
                  Diamas earrings redefine everyday luxury whether accenting an
                  occasion ensemble or adding intrigue to casual wear. Delicate
                  dazzlers one day and statement pieces the next – our versatile
                  designs celebrate the many facets of your ever-evolving
                  spirit.
                </p>
              </div>
              <div className="h-full p-4 lg:w-1/2 ">
                <img src={six} className="w-full" alt="" />
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-10 lg:mt-40 w-full gap-5">
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
                  Suspended on delicate chains, Diamas pendants preserve
                  precious memories. Exquisite motifs layer sentimental value
                  within elegant frames. An engraved initial pays tribute to a
                  loved one; an inspired emblem celebrates a meaningful journey.
                  Hold your most cherished moments forever - close to the heart.
                </p>
              </div>
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
            Stackable, movable artistry granting wrists a novelist’s touch -
            Diamas bracelets and bangles become the distinguishing signature of
            a woman and her story. Dainty chains one day and bold cuffs the next
            – these treasured keepsakes empower you to curate looks as unique as
            each new chapter.
          </p>
        </div>
      </div>
    </>
  );
}

export default collection;

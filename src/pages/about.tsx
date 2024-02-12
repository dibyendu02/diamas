import one from "../assets/about/1.png";
import two from "../assets/about/2.png";
import three from "../assets/about/3.png";
import four from "../assets/about/4.png";


function About() {
  return (
    <div
      style={{ backgroundImage: `url(${one})` }}
      className=" bg-contain flex flex-col justify-center items-center bg-[image:var(--image-url)] lg:bg-cover   bg-no-repeat w-full p-8  "
    >
      <div className="mt-[95%]  lg:mt-[30%] text-center">
        <h1 className="text-center text-[40px]  sm:m-auto  lg:text-6xl lg:ml-[400px] lg:w-[400px] font-[Butler] text-white leading-10 tracking-widest border border-white p-8 py-2">
          ADITYA <br /> DHAWAN
        </h1>
        <h3 className="text-white m-auto  text-justify mt-5 lg:w-96 lg:ml-[400px] sm:w-full ">
          In the heart of Diamas beats the vision of Aditya Dhawan; where
          diamonds are not just stones but enduring symbols of beauty. Growing
          up amidst the artistry of Kasturi showrooms, Aditya brings fresh
          perspectives to jewellery, weaving nature's inspirations into every
          design. Every creation reflects not just craftsmanship but a
          deep-rooted passion for the eternal allure of diamonds.
        </h3>
      </div>

      <div className="flex flex-col justify-center items-center w-[80%] bg-opacity-125 bg-[#071152] lg:mt-96 rounded-lg border border-transparent p-8">
        <h1 className="lg:text-6xl font-[Butler] text-white lg:p-8 py-2">
          DIAMAS
        </h1>

        <div className="flex w-40 mb-5">
          <div className="h-1 bg-blue-600 w-1/3"></div>
          <div className="h-1 bg-white w-1/3"></div>
          <div className="h-1 bg-blue-600 w-1/3"></div>
        </div>

        <div className=" lg:flex w-full justify-between items-center gap-16 tracking-widest sm:block ">
          <img src={two} alt="" />
          <div className="flex flex-col gap-5 justify-center">
            <h3 className="text-white lg:text-2xl">
              Every piece of jewellery should tell a story and our quality
              diamonds tell ours. We utilise 45 years of industry experience to
              make bespoke pieces with the purest diamonds. Meant to honour the
              uniqueness of one who wears it, Diamas isn't just a brand; it's an
              art form, where designs are born from passion and crafted to
              perfection.
            </h3>
            <div className="h-1 w-20 bg-white rounded" />
          </div>
        </div>

        <div
          className="flex w-full justify-between items-center mt-8 bg-[image:var(--image-url)] bg-cover bg-no-repeat lg:p-8 sm:p-4"
          style={{ backgroundImage: `url(${three})` }}
        >
          <div className="bg-[#384173] flex flex-col w-full pt-10 lg:w-1/3 sm:w-2/3 ">
            <h1 className=" text-white text-[30px] bacalisties relative z-10 sm:text-base md:text-base lg:ml-8 lg:text-7xl">
              Craftsmanship
            </h1>

            <h3 className="lg:text-sm text-white p-8 pt-0   sm:p-4 ">
              Beyond technical mastery, our artisans employ generations of
              experience, honing jewellery excellence. Guided by Aditya Dhawan’s
              pioneering vision, each piece is sculpted with precision to
              capture the elegance and essence of the individual wearing it.
              Meticulous eyes hand-pick high-quality diamonds and align each gem
              with attention to detail, upholding their natural radiance and
              timeless beauty – symbolic of moments that live beyond legacies.
            </h3>
          </div>
        </div>

        <div className="pl-28 mt-20 mb-5">
          <h1
            className="text-white bacalisties text-center text-[2rem] lg:-mb-12 lg:ms-96 lg:text-7xl mt-8"
          >
            Diamond Quality
          </h1>
        </div>

        <div className="lg:flex w-full justify-between items-center mt-8">
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-opacity-25 bg-blue-950 z-10"></div>
            <img src={four} className="w-full z-0" alt="" />
          </div>
          <div className="w-full lg:w-1/2 space-y-5 lg:ms-16 ">
            {/* <div>
              <h1 className="text-white bacalisties text-center text-[2rem]  lg:ms-96 lg:text-7xl mt-8">
                Diamond Quality
              </h1>
            </div> */}
            
            <h3 className="text-white">
              At Diamas, we hold a simple yet profound philosophy: the value of
              a diamond is not just appreciated; it inherently grows.
            </h3>
            <h3 className="text-white">
              Our commitment to this principle is reflected in our exclusive
              selection of high-quality diamonds, sourced individually from
              international sources and meeting standards set by the
              International Gemological Institute (IGI), a global authority in
              diamond and jewellery certification since 1975.
            </h3>
            <h3 className="text-white">
              Building on the foundation of his father's applied knowledge and
              his own IGI certification, Aditya envisions a unique mission,
              aspiring to introduce exceptional diamonds to India, crafting
              exquisite high-end jewellery for those who appreciate diamonds
              from the heart.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

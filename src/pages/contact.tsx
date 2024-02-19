import { Link } from "react-router-dom";
import one from "../assets/contact/1.png";
import two from "../assets/contact/2.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Contact() {
  //const [open, setOpen] = React.useState(1);

  //const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const accordions = [
    {
      key: 1,
      title: "Where can I watch?",
      data: `Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis.`,
      isOpen: true,
    },
    {
      key: 2,
      title: "Mauris id nibh eu fermentum mattis purus?",
      data: ``,
      isOpen: false,
    },
    {
      key: 3,
      title: "Eros imperdiet rhoncus?",
      data: ``,
      isOpen: false,
    },
    {
      key: 4,
      title: "Fames imperdiet quam fermentum?",
      data: ``,
      isOpen: false,
    },
    {
      key: 5,
      title: "Varius vitae, convallis amet lacus sit aliquet nibh?",
      data: ``,
      isOpen: false,
    },
    {
      key: 6,
      title: "Tortor nisl pellentesque sit quis orci dolor?",
      data: ``,
      isOpen: false,
    },
    {
      key: 7,
      title:
        "Vestibulum mauris mauris elementum proin amet auctor ipsum nibh sollicitudin?",
      data: ``,
      isOpen: false,
    },
  ];

  return (
    <div className="flex flex-col justify-center w-full items-center bg-[#090D29]">
      <div className="w-full relative">
        <div className="absolute mt-20 inset-0 opacity-10 bg-[#090D29] z-10" />
        <img
          src={one}
          className="absolute mt-20 w-full grayscale z-5 "
          alt=""
        />
        <img src={one} className="mt-20 w-full grayscale " alt="" />
        {/* <div className="absolute mt-20 inset-0 opacity-100 bg-[#090D29] z-0"/> */}
      </div>

      <h1
        className="text-3xl my-8 text-center font-bold lg:text-7xl mb-3 text-white sm:text-center lg:text-start"
        style={{
          letterSpacing: 5,
          lineHeight: 1.4,
          fontFamily: "Butler",
        }}
      >
        CONTACT US
      </h1>

      <div className="w-full flex flex-col lg:flex-row gap-10 justify-center items-center mt-8 relative">

        
        
        <div className="w-full lg:w-1/3 flex flex-col  justify-center items-center space-y-5 relative ">
        <div className="h-[140%] -right-[5%] top-0 w-[1px] bg-white absolute hidden lg:block" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          <h3 className="text-white text-xl">Visit US</h3>
          <p className="mb-3 text-white text-justify tracking-wider my-12 mx-[30px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
            aliquam erat volutpat.Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
            dolore magna aliquam erat volutpat.
          </p>
        </div>

        <div className="w-full lg:w-1/3 flex flex-col justify-center items-center space-y-5 relative ">
          <div className="h-[140%] -right-[5%] top-0 w-[2px] bg-white absolute hidden lg:block" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>

          <h3 className="text-white text-xl">Call US</h3>
          <p className="mb-3 text-white text-justify my-12 mx-[30px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
            aliquam erat volutpat.Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
            dolore magna aliquam erat volutpat.
          </p>
        </div>

        <div className="w-full lg:w-1/3 flex flex-col justify-center items-center space-y-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>

          <h3 className="text-white text-xl">Contact US</h3>
          <p className="mb-3 text-white text-justify my-12 mx-[30px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
            aliquam erat volutpat.Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
            dolore magna aliquam erat volutpat.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-row justify-center items-center gap-10 space-x-5 my-20">
        <Link to={""}>
          {" "}
          <i className="fa-brands fa-facebook-f text-white text-2xl"></i>
        </Link>

        <Link to={""}>
          <i className="fa-brands fa-linkedin text-white text-2xl"></i>
        </Link>

        <Link to={""}>
          <i className="fa-brands fa-twitter text-white text-2xl"></i>
        </Link>

        <Link to={""}>
          <i className="fa-brands fa-instagram text-white text-2xl"></i>
        </Link>
      </div>

      <div className="h-full p-4 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.02705431727!2d77.068682370812!3d28.628951246325638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04c2d11feb9f%3A0x5b42213df8236053!2sa%2C%20A-157%2C%20Guru%20Virjanand%20Marg%2C%20near%20Police%20Station%2C%20A-Block%2C%20Vikaspuri%2C%20Delhi%2C%20110018!5e0!3m2!1sen!2sin!4v1706261050023!5m2!1sen!2sin"
          style={{ borderRadius: 10 }}
          allowFullScreen={true}
          aria-hidden="false"
          tabIndex={0}
          className="w-full h-[400px]"
        />
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center mt-8">
        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row justify-center items-center mt-8">
          <img src={two} alt="" />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col px-10   mt-8">
          <h3 className="text-white font-bold text-2xl mb-8">
            Frequently Asked Questions
          </h3>
          <div className="w-full h-[2px] bg-white mb-2" />
          <div className="flex flex-col lg:mr-16 lg:gap-8 gap-4  w-full">
            {accordions.map(({ data, isOpen, key, title }) => (
              <Accordion
                defaultExpanded={isOpen}
                className="bg-black border-b-2 border-white "
                disableGutters
                key={key}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  key={key}
                  color="black"
                  className="text-sm"
                  sx={{
                    backgroundColor: "#090D29",
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "600",
                    display: "flex",
                    alignItems: "flex-start"
                  }}
                >
                  {title}
                </AccordionSummary>
                <AccordionDetails className="bg-[#090D29] text-white text-sm">
                  {data}
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between my-16">
        <h3 className="text-white text-2xl font-semibold">DISCLAIMERS</h3>

        <p className="text-white font-light text-[16px] lg:mx-32 mx-[30px] mt-8 text-justify">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
          diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
          erat volutpat.Lorem ipsum dolor sit amet, consectetuer adipiscing
          elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
          aliquam erat volutpat.Lorem ipsum dolor sit amet, consectetuer
          adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
          dolore magna aliquam erat volutpat.
        </p>
      </div>
    </div>
  );
}

export default Contact;

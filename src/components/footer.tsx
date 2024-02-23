import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const LINKS = [
  {
    title: "Support",
    items: [
      { label: "Help Center", link: "" },
      { label: "Terms of Service", link: "" },
      { label: "Legal", link: "" },
      { label: "Privacy Policy", link: "" },
      
    ],
  },
  {
    title: "Company",
    items: [
      {
        label: "About us",
        link: "about",
      },
      { label: "Blog", link: "" },
      { label: "Contact Us", link: "contact" },
      { label: "Testimonials", link: "" },
    ],
  },
];

const FooterWithSocialLinks = () => {
  return (
    <div className="flex flex-wrap w-full py-10 lg:px-20 xl:px-40 mx-auto border-t-2 border-white">
      <div className="flex flex-1 lg:block flex-col justify-center items-center w-full">
        <img src={logo} width={160} height={160} alt="Flowbite Logo" />
        <div className="flex gap-5">
          <Link to="https://www.facebook.com/profile.php?id=61554517292760">
            <i className="fa-brands fa-facebook-f text-white text-lg"></i>
          </Link>

          <Link to={""}>
            <i className="fa-brands fa-linkedin text-white text-lg"></i>
          </Link>

          <Link to={""}>
            <i className="fa-brands fa-twitter text-white text-lg"></i>
          </Link>

          <Link to="https://www.instagram.com/diamasbyadityadhawan/">
            <i className="fa-brands fa-instagram text-white text-lg"></i>
          </Link>
        </div>
        
        <h3 className="text-white mb-3 mt-5 text-sm">
          Copyright © 2020 Landify UI Kit.
        </h3>
        <h3 className="text-white mb-5 text-sm">All rights reserved</h3>
      </div>

      <div className="flex gap-10 flex-wrap  justify-center mx-auto lg:mx-0">
        <div className=" flex my-8 lg:grid lg:grid-cols-2 items-center justify-center lg:justify-between gap-16">
          {LINKS.map(({ title, items }) => (
            <ul key={title} className="lg:flex-col">
              <h1 className="mb-3 text-white font-bold text-lg">{title}</h1>
              {items.map(({ label, link }) => (
                <Link to={link}>
                  <li key={label}>
                    <p className="py-1.5 font-normal transition-colors text-white hover:text-blue-gray-900">
                      {label}
                    </p>
                  </li>
                </Link>
              ))}
            </ul>
          ))}
        </div>

        <div className="mt-[8%]">
          <h1 className="mb-3 text-white font-bold text-lg">Stay up to date</h1>

          <div className="w-72">
            <div className="w-3/3 flex justify-end items-center relative">
              <input
                placeholder="Enter your email"
                type="email"
                className="border bg-gray-500 border-gray-400 rounded-lg text-white p-2 w-full"
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="absolute mr-2 w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterWithSocialLinks;

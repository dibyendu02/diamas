export default function Scrollbar() {
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
    <div>
      <div
        className="hidden lg:flex gap-10 justify-center items-center  
         fixed bottom-0 z-50  w-full
        p-4 text-white"
      >
        {/* <div className="w-[40%] h-[1px] bg-white " /> */}
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
        {/* <div className="w-[40%] h-[1px] bg-white " /> */}
      </div>
    </div>
  );
}

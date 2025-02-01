import React from "react";

const Content_1 = () => {
  return (
    <section className="about_section layout_padding">
      <div className="container mx-auto px-6 lg:px-20 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          
          {/* Image Section */}
          <div className="w-full lg:w-1/2 px-4 lg:px-0 flex justify-center lg:justify-end">
            <div className="img_container">
              <div className="img-box">
                <img
                  src="/Images/Home/business-8676529_1920.jpg"
                  alt="About"
                  className="w-full lg:w-[950px] h-auto lg:h-[390px] object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 px-4 lg:px-0 mt-6 lg:mt-0">
            <div className="detail-box bg-white p-6 md:p-8 shadow-lg relative lg:-ml-12">
              <div className="heading_container">
                <h2 className="font-bold text-3xl md:text-5xl text-center lg:text-left">
                  Who Are We?
                </h2>
              </div>
              <p className="mt-4 text-lg md:text-2xl text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.
              </p>
              <div className="btn-box mt-6 flex justify-center lg:justify-start">
                <a
                  href="#"
                  className="inline-block py-2 px-6 md:px-8 bg-yellow-400 text-white border border-transparent uppercase text-sm md:text-base font-semibold hover:bg-transparent hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Content_1;
 
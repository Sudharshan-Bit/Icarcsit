import React from 'react';

const Contactme = () => {
  return (
    <div className="sub_page">
      {/* Contact Section */}
      <section className="contact_section relative  py-16">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/Images/Background/contactus.jpg')"}} />
        <div className="relative z-10 text-white">
          <div className="container mx-auto text-center mb-8">
            <h2 className="text-3xl sm:text-5xl text-black font-bold">Get In Touch</h2>
            
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-lg px-4 sm:px-0">
              <form action="#">
                <div className="space-y-7">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-3 border text-black bg-white border-gray-300 rounded"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border text-black bg-white border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full p-3 border text-black bg-white border-gray-300 rounded"
                  />
                  <textarea
                    placeholder="Message"
                    className="w-full p-3 border text-black bg-white border-gray-300 rounded h-32"
                  />
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="bg-yellow-500 text-black py-2 px-8 rounded hover:bg-yellow-600 transition"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactme;

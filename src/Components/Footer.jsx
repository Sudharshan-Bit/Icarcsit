import React from 'react';

const Footer = () => {
  return (
    <>
      {/* Info Section */}
      <section className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {/* Logo Section */}
            <div className="col-span-1">
              <div className="info_logo">
                <a className="navbar-brand text-2xl font-bold text-white" href="index.html">
                  <span>Topic</span>
                </a>
                <p className="text-sm text-gray-400 mt-2">
                International Conference on Advanced Research in Computer Science and Information Technology (ICARCSIT)
                </p>
              </div>
            </div>

            {/* Useful Links */}
            <div className="col-span-1">
              <div className="info_links">
                <h5 className="text-lg font-semibold mb-4">Useful Links</h5>
                <ul className="space-y-2">
                  <li><a href="" className="text-gray-400 hover:text-white">1</a></li>
                  <li><a href="" className="text-gray-400 hover:text-white">2</a></li>
                  <li><a href="" className="text-gray-400 hover:text-white">3</a></li>
                  <li><a href="" className="text-gray-400 hover:text-white">4</a></li>
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-span-1">
              <div className="info_info">
                <h5 className="text-lg font-semibold mb-4">Contact Us</h5>
              </div>
              <div className="info_contact space-y-3">
                <a href="" className="text-gray-400 hover:text-white flex items-center">
                  <i className="fa fa-map-marker text-lg mr-2"></i>
                  <span>AAA,</span>
                </a>
                <a href="" className="text-gray-400 hover:text-white flex items-center">
                  <i className="fa fa-phone text-lg mr-2"></i>
                  <span>Call : 1234567890</span>
                </a>
                <a href="" className="text-gray-400 hover:text-white flex items-center">
                  <i className="fa fa-envelope text-lg mr-2"></i>
                  <span>gmail.com</span>
                </a>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="col-span-1">
              <div className="info_form">
                <h5 className="text-lg font-semibold mb-4">Newsletter</h5>
                <form action="#" className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-2 text-black rounded border-none"
                  />
                  <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300">
                    Subscribe
                  </button>
                </form>
                <div className="social_box flex space-x-4 mt-5">
                  <a href="" className="text-gray-400 hover:text-white">
                    <i className="fa fa-facebook text-xl"></i>
                  </a>
                  <a href="" className="text-gray-400 hover:text-white">
                    <i className="fa fa-twitter text-xl"></i>
                  </a>
                  <a href="" className="text-gray-400 hover:text-white">
                    <i className="fa fa-youtube text-xl"></i>
                  </a>
                  <a href="" className="text-gray-400 hover:text-white">
                    <i className="fa fa-instagram text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Info Section */}

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; <span id="currentYear"></span> All Rights Reserved. Design by
            <a href="" className="text-white hover:underline"> Jack</a>
          </p>
        </div>
      </footer>
      {/* End Footer Section */}
    </>
  );
}

export default Footer;

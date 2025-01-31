import React from 'react';

export default function Content_1() {
  return (
    <div className="mx-auto p-8 max-w-7xl" style={{ fontFamily: "Poppins, sans-serif" }}>
      {/* Title Section */}
      {/* <div className="flex  items-center ">
        <h1 className="text-7xl font-bold text-center underline"style={{ fontFamily: "Poppins, sans-serif" }}>About</h1>
      </div> */}

      {/* Two-Column Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
        <h1 className="text-7xl font-bold underline mb-4">About</h1>
          <p className="text-lg leading-relaxed mb-4">
            International Conference on Advanced Research in Computer Science and Information Technology (ICARCSIT) will be held at Pondicherry, India, on 28th Jan 2025. ICARCSIT is hosted by ASAR-India.
            The ICARCSIT conference offers a track of quality R&D updates from key experts and provides an opportunity to bring in new techniques and horizons that will contribute to advanced research in science, engineering, and technology.
            All submitted papers will undergo peer review, and accepted papers will be published in the conference proceedings. Both academia and industries are invited to present their research on state-of-the-art developments.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="\Images\Cover_img\chairs-2181994_1920.jpg"
            alt="Conference"
            className="rounded-xl shadow-lg max-w-full"
          />
        </div>
      </div>
    </div>
  );
}


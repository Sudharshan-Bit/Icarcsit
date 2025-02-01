import React from 'react';

export default function Papers() {
  const topics = [
    "Communication and Networking",
    "Database Systems, Data Warehousing, and Data Mining",
    "Information Assurance",
    "Web Services and Technologies",
    "Software Engineering",
    "Multimedia Processing",
    "Mobile and Cloud Computing",
    "Human-Centred Computing",
    "Distributed and Parallel Computing",
    "Programming Languages",
    "Artificial Intelligence and Machine Learning",
    "E–Systems and Computer Systems",
    "Analog and Mixed-Signal IC Design and Testing",
    "RF IC Design and Testing",
    "Digital IC Design and Testing",
    "Technology CAD",
    "Ge Microelectronics",
    "Integrated circuits manufacturing and Reliability",
    "Electronic Devices, Compound Semiconductors, Si-Ge Heterostructures",
    "MEMS and Microsystems",
    "Solar Cells and Photonics",
    "Wireless Communication and Sensor Networks",
    "Optical Communication",
    "Satellite Communication",
    "MIMO, OFDM and Smart Antennas",
    "Image and Video Processing",
    "Pattern Recognition and Image Understanding",
    "Biomedical Signal Processing",
    "Biomedical Instrumentation and Sensors",
    "Multimedia Coding and Communication",
    "Speech and Audio Signal Processing",
    "Adaptive Signal Processing",
    "Embedded Systems",
    "Computer Networks",
    "Network Coding and Information Theory"
  ];

  return (
    <div className="max-w-full flex justify-center bg-gradient-to-r from-white to-yellow-100 px-4"style={{background: "",backgroundImage: "", fontFamily: "Poppins, sans-serif" }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-screen-xl ">
        {/* Call for papers - spans 2 rows, 1 column */}
        <div className="row-span-3 col-span-1 p-8 gap-4 flex flex-col justify-center">
          <h1 className="text-6xl font-bold underline">
            Call for <span className='text-red-800'>papers</span>
          </h1>
        </div>

        {/* Description - spans 1 row, 2 columns */}
        <div className="col-span-2 row-span-1 gap-4 p-7">
          <p className="text-lg text-justify">
            <span className="text-red-800 font-bold ">"ICARCSIT"</span> is the premier forum for the presentation of new advances and research results in the fields of Advanced Research in Computer Science and Information Technology. The conference will bring together leading academic scientists, researchers, and scholars in the domain of interest from around the world. Topics of interest for submission include, but are not limited to:
          </p>
        </div>

        {/* Third Section - Nested 2 columns inside it */}
        <div className="col-span-2 row-span-2 gap-4 p-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* First Sub-column */}
            <ul className="p-4">
              {topics.slice(0, Math.ceil(topics.length / 2)).map((topic, index) => (
                <li key={index} className="text-lg list-disc ml-4">
                  {topic}
                </li>
              ))}
            </ul>

            {/* Second Sub-column */}
            <ul className="p-4">
              {topics.slice(Math.ceil(topics.length / 2)).map((topic, index) => (
                <li key={index} className="text-lg list-disc ml-4">
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

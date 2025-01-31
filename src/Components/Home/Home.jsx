import React from 'react';
import Content_1 from '../Content/Content_1';
import Papers from '../Content/Paper/Papers';

export default function Home() {
  return (
    <div>
        <div
            className="relative w-full h-screen bg-cover bg-center -z-1"
            style={{
                backgroundImage: "url('/Images/Home/business-8676529_1920.jpg')",
                
            }}
            >
              <div className="absolute inset-0 bg-black opacity-60"></div>
            {/* Title in the Center */}
            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-4xl md:text-7xl text-center font-bold text-white p-5"style={{ fontFamily: "Poppins, sans-serif" }}>
                International Conference on Advanced Research in Computer Science and Information Technology (ICARCSIT)
                </h1>
            </div>
        </div>
        <Content_1/>
        <Papers/>
    </div>
  );
}

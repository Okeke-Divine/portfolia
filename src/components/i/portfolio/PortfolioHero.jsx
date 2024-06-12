import React from "react";

const PortfolioHero = () => {
  return (
    <>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-5 md:py-10 px-10 md:px-36 place-content-center min-h-[60vh]">
          <div>
            <h1 className="max-w-[500px] text-5xl">
              Hey, I'm John
            </h1>
            <p className="app-text-light-2 py-5 max-w-[400px]">
              Full Stack Web Developer @ Figma
            </p>
            <p className="app-text-light-2 py-5 max-w-[400px]">
              Hi, i'm Jason a freelancer web designer from Nigeria. I help
              brands turn their ideas into high quality products
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default PortfolioHero;

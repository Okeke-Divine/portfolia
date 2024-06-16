"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const images = [
//   "iPad-Air-4-localhost (1).png",
  "Samsung-Galaxy-S20-localhost.png",
//   "Macbook-Air-localhost.png",
//   "Macbook-Air-localhost (1).png",
  "iPhone-13-PRO-localhost.png",
//   "iPad-Air-4-localhost.png",
];

const SitePreviewCarousel = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Looping the slides
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Autoplay
    autoplaySpeed: 2000, // Autoplay speed
    pauseOnHover: true,
  };

  return (
    <>
      <div className="bg-green-400 min-h-[100vh] flex justify-center items-center">
        <div>
          <div className="slider-container w-[300px] h-fit">
            <div className="h-fit">
              <Slider {...settings} className="flex justify-center items-center">
                {images.map((image, index) => (
                  <div key={index} className="h-fit">
                    <img src={"/images/" + image} alt="Mockup Image" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SitePreviewCarousel;

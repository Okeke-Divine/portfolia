"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const images = [
  "iPad-Air-4-localhost (1).png",
  "Samsung-Galaxy-S20-localhost.png",
  "Macbook-Air-localhost.png",
  "Macbook-Air-localhost (1).png",
  "iPhone-13-PRO-localhost.png",
  "iPad-Air-4-localhost.png",
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
      <div>
      {/* <div className="fixed top-0 left-0 w-full h-[100vh] bg-red-300"> */}
        <div className="slider-container">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img src={"/images/" + image} alt="Mockup Image" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default SitePreviewCarousel;

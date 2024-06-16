import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SitePreviewCarousel = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Looping the slides
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Autoplay
    autoplaySpeed: 2000, // Autoplay speed
  };

  return (
    <>
      <div>
        <Slider {...settings}>
          <div>
            <img src="/images/Samsung-Galaxy-S20-localhost.png" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default SitePreviewCarousel;

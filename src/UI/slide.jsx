// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import pic1 from "../assets/porch__before.png";
// import pic2 from "../assets/porch__after.png";
// import pic3 from "../assets/Patio__furniture--before.png";
// import pic4 from "../assets/patio__furniture--after.png";
// import pic5 from "../assets/roof__before.png";
// import pic6 from "../assets/roof__after.png";
// import pic7 from "../assets/Moldy__Patio--furniture.png";
// import pic8 from "../assets/moldy__furniture--after.png";
// import pic9 from "../assets/walkway.png";
// import pic10 from "../assets/walkway__clean.png";

// function Slide() {
//   const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10];

//   const settings = {
//     arrows: true,
//     dots: false,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     pauseOnHover: true,
//   };

//   return (
//     <div className="services__slides--about">
//       <Slider {...settings}>
//         {images.map((image, index) => (
//           <div key={index}>
//             <img
//               className="about__image"
//               src={image}
//               alt={`Slide ${index + 1}`}
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// export default Slide;

import React from "react";
import pic1 from "../assets/porch__before.png";
import pic2 from "../assets/porch__after.png";
import pic3 from "../assets/Patio__furniture--before.png";
import pic4 from "../assets/patio__furniture--after.png";
import pic5 from "../assets/roof__before.png";
import pic6 from "../assets/roof__after.png";
import pic7 from "../assets/Moldy__Patio--furniture.png";
import pic8 from "../assets/moldy__furniture--after.png";
import pic9 from "../assets/walkway.png";
import pic10 from "../assets/walkway__clean.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Slide() {
  const options = {
    margin: 40,
    items: 4,
    center: true,
    nav: true,
    dots: false,
    loop: true,
    stagePadding: 20,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  };
  return (
    <div className="services__slides--about">
      <OwlCarousel className="owl-theme" {...options}>
        <img className="about__image" src={pic1} alt="" />

        <img className="about__image" src={pic2} alt="" />

        <img className="about__image" src={pic3} alt="" />

        <img className="about__image" src={pic4} alt="" />

        <img className="about__image" src={pic5} alt="" />

        <img className="about__image" src={pic6} alt="" />

        <img className="about__image" src={pic7} alt="" />

        <img className="about__image" src={pic8} alt="" />

        <img className="about__image" src={pic9} alt="" />

        <img className="about__image" src={pic10} alt="" />
      </OwlCarousel>
    </div>
  );
}

export default Slide;

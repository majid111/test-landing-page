import img1 from '../../assets/img1.webp';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

// import required modules
import { Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <div className='w-full border-2 border-black'>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        // direction={"verticle"}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={600}
        parallax={true}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {/* <div
          slot="container-start"
          className="parallax-bg"
          //   style={{
          //     "background-image":
          //       "url(https://swiperjs.com/demos/images/nature-1.jpg)",
          // className=" bg-[url('./assets/bg.svg')]"
          //   }}
          data-swiper-parallax="-23%"
        ></div> */}
        <SwiperSlide>
          <div className=" bg-[url('./assets/bg.svg')]">
          {/* <img className='relative '  src={img1} alt="" /> */}
          {/* <div className="bg-white absolute -left-10 top-8 p-2">
              <h1 className="text-[#603eff] text-3xl ">Slide 1</h1>
              <p className="text-[#0b236d] text-sm ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, consectetur!</p>
            </div> */}
            <div className="bg-gradient-to-b from-transparent to-gray-600 -mt-16 z-10">
            <h1 className="text-lg">Slide 1</h1>
            <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, consectetur!</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-yellow-200">
            <div className="title" data-swiper-parallax="-300">
              Slide 2
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              Subtitle
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit..
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;

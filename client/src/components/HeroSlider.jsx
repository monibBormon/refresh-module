import React from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <IoIosArrowForward className='text-[50px] text-purple-400' />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <IoIosArrowBack className='text-[50px] text-purple-400' />
    </div>
  );
}

const HeroSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section className='py-[120px]'>
      <div className='container mx-auto'>
        <Slider {...settings}>
          <div>
            <div className='grid grid-cols-12 gap-[50px]'>
              <div className='col-span-6'>
                <div className='flex items-center h-full'>
                  <h2 className='font-bold text-[80px] text-purple-600'>
                    Shared workspace concept illustration
                  </h2>
                </div>
              </div>
              <div className='col-span-6'>
                <img src='/img/slider_1.png' alt='' />
              </div>
            </div>
          </div>
          <div>
            <div className='grid grid-cols-12 gap-[50px]'>
              <div className='col-span-6'>
                <div className='flex items-center h-full'>
                  <h2 className='font-bold text-[80px] text-purple-600'>
                    Group of people on business training
                  </h2>
                </div>
              </div>
              <div className='col-span-6'>
                <img src='/img/slider_2.png' alt='' />
              </div>
            </div>
          </div>
          <div>
            <div className='grid grid-cols-12 gap-[50px]'>
              <div className='col-span-6'>
                <div className='flex items-center h-full'>
                  <h2 className='font-bold text-[80px] text-purple-600'>
                    People working at computers in the office
                  </h2>
                </div>
              </div>
              <div className='col-span-6'>
                <img src='/img/slider_3.png' alt='' />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default HeroSlider;

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import slider1 from '../../../assets/slider-images/slide1.png'
import slider2 from '../../../assets/slider-images/slide2.png'
import slider3 from '../../../assets/slider-images/slide3.png'
import slider4 from '../../../assets/slider-images/slide4.png'

const SlideShow = () => {
    return (
        <div className="my-container">
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                autoplay={true}
                loop={true}
                centeredSlides={true}
                slidesPerView={4}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper my-12"
            >
                <SwiperSlide>
                    <img className='w-64' src={slider1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-64' src={slider2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-64' src={slider3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-64' src={slider4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-64' src={slider1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-64' src={slider2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-64' src={slider3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-64' src={slider4} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SlideShow;
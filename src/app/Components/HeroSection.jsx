"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';


const HeroSection = () => {
 

    return (
        <div className='my-10'>
            <Swiper className='w-[90%] md:w-[90%] lg:w-[90%]  mx-auto'
                modules={[Navigation, Autoplay]}
                navigation={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                loop={true}
            >
                <SwiperSlide>
                    <Image src={'/al-kalam-banner-01.jpeg'} alt='Slider 01' width={1920} height={600} className="w-full h-50 md:h-85 lg:h-105 rounded-2xl" />
                </SwiperSlide>

                <SwiperSlide>
                    <Image src={'/al-kalam-banner-02.jpeg'} alt='Slider 02' width={1920} height={600} className="w-full h-50 md:h-85 lg:h-105 rounded-2xl" />
                </SwiperSlide>

                <SwiperSlide>
                    <Image src={'/al-kalam-banner-03.jpeg'} alt='Slider 03' width={1920} height={600} className="w-full h-50 md:h-85 lg:h-105 rounded-2xl" />
                </SwiperSlide>

                <SwiperSlide>
                    <Image src={'/al-kalam-banner-04.jpeg'} alt='Slider 03' width={1920} height={600} className="w-full h-50 md:h-85 lg:h-105 rounded-2xl" />
                </SwiperSlide>

                <SwiperSlide>
                    <Image src={'/al-kalam-banner-05.jpeg'} alt='Slider 03' width={1920} height={600} className="w-full h-50 md:h-85 lg:h-105 rounded-2xl " />
                </SwiperSlide>

                <SwiperSlide>
                    <Image src={'/al-kalam-banner-06.jpeg'} alt='Slider 03' width={1920} height={600} className="w-full h-50 md:h-85 lg:h-105 rounded-2xl " />
                </SwiperSlide>

                <SwiperSlide>
                    <Image src={'/al-kalam-banner-07.jpeg'} alt='Slider 03' width={1920} height={600} className="w-full h-50 md:h-85 lg:h-105 rounded-2xl " />
                </SwiperSlide>

                <SwiperSlide>
                    <Image src={'/al-kalam-banner-08.jpeg'} alt='Slider 03' width={1920} height={600} className="w-full h-50 md:h-85 lg:h-105 rounded-2xl " />
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default HeroSection;
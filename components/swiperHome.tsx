"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

import '@/styles/globals.css';

// import required modules
import { EffectCreative, Autoplay } from 'swiper/modules';

export default function SwiperHome() {
    return (
        <>
            <Swiper
                grabCursor={false}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: ['-20%', 0, -1],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[EffectCreative, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>Imagen de produto 1</SwiperSlide>
                <SwiperSlide>Imagen de produto 2</SwiperSlide>
                <SwiperSlide>Imagen de produto 3</SwiperSlide>
                <SwiperSlide>Imagen de produto 4</SwiperSlide>
                <SwiperSlide>Imagen de produto 5</SwiperSlide>
                <SwiperSlide>Imagen de produto 6</SwiperSlide>
                <SwiperSlide>Imagen de produto 7</SwiperSlide>
                <SwiperSlide>Imagen de produto 8</SwiperSlide>
                <SwiperSlide>Imagen de produto 9</SwiperSlide>
            </Swiper>
        </>
    );
}
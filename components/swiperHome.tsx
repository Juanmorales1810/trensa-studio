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
import Image from 'next/image';

export default function SwiperHome() {
    const Images = [
        { id: 1, src: '/home/swiperHome/swiper1.webp' },
        { id: 2, src: '/home/swiperHome/swiper2.webp' },
        { id: 3, src: '/home/swiperHome/swiper3.webp' },
        { id: 4, src: '/home/swiperHome/swiper4.webp' },
        { id: 5, src: '/home/swiperHome/swiper5.webp' },
    ]
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

                {Images.map((image) => (
                    <SwiperSlide key={image.id}>
                        <Image src={image.src} alt={`Imagen ${image.id}`} width={1920} height={1080} />
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    );
}
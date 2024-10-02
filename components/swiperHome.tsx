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
        { id: 1, webp: '/home/swiperHome/swiper-1.webp', small: '/home/swiperHome/swiper-small-1.webp' },
        { id: 2, webp: '/home/swiperHome/swiper-2.webp', small: '/home/swiperHome/swiper-small-2.webp' },
        { id: 3, webp: '/home/swiperHome/swiper-3.webp', small: '/home/swiperHome/swiper-small-3.webp' },
        { id: 4, webp: '/home/swiperHome/swiper-4.webp', small: '/home/swiperHome/swiper-small-4.webp' },
        { id: 5, webp: '/home/swiperHome/swiper-5.webp', small: '/home/swiperHome/swiper-small-5.webp' },
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
                className="home-swiper"
            >

                {Images.map((image) => (
                    <SwiperSlide key={image.id} className="otro-swiper-slide">
                        <picture>
                            <source srcSet={image.webp} type="image/webp" media="(width >= 800px)" />
                            <source srcSet={image.small} type="image/jpeg" media="(width <= 800px)" />
                            <Image className='object-cover w-full h-full' src={image.webp} alt={`Imagen ${image.id}`} width={1920} height={1080} priority={true} />
                        </picture>
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    );
}
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
        { id: 1, src: '/home/bento/bento6.jpg' },
        { id: 2, src: '/home/bento/bento2.jpg' },
        { id: 3, src: '/home/bento/bento3.jpg' },
        { id: 4, src: '/home/bento/bento4.jpg' },
        { id: 5, src: '/home/bento/bento7.jpg' },
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
                        <Image className='object-cover w-full h-full' src={image.src} alt={`Imagen ${image.id}`} width={1920} height={1080} priority={true} />
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    );
}
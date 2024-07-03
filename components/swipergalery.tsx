import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import '@/styles/swiperGalery.css';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Image } from '@nextui-org/image';

interface SwiperGaleryProps {
    images: string[];
    initialSlide: number | null;
}

export default function SwiperGalery(props: SwiperGaleryProps) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Swiper
                style={{
                    //@ts-ignore
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
                initialSlide={props.initialSlide ?? 0}
            >
                {props.images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className='w-auto h-auto'>
                            <Image src={image} alt='Imágenes de la galería' classNames={{
                                img: 'h-auto object-contain',
                            }} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                //@ts-ignore
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper1"
            >
                {props.images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt='Imágenes de la galería' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
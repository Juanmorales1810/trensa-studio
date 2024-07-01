"use client";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import React, { useRef } from "react";
interface VideoCardProps {
    srcimg: string;
    srcvid: string;
    title: string;
    subtitle: string;
    href?: string;
}

export default function Videocard({
    srcimg,
    srcvid,
    subtitle,
    title,
    href,
}: VideoCardProps) {

    const videoRef1 = useRef<HTMLVideoElement | null>(null);
    const videoRef2 = useRef<HTMLVideoElement | null>(null);

    // Función para manejar el evento cuando el mouse entra en el componente
    const handleMouseEnter = () => {
        if (videoRef1.current) {
            videoRef1.current.play();
        }
        if (videoRef2.current) {
            videoRef2.current.play();
        }
    };

    const handleMouseLeave = () => {
        setTimeout(() => {
            if (videoRef1.current) {
                videoRef1.current.pause();
                // videoRef1.current.currentTime = 0;
            }
            if (videoRef2.current) {
                videoRef2.current.pause();
                // videoRef2.current.currentTime = 0;
            }
        }, 500); // Retraso de 500 milisegundos (medio segundo)
    };
    return (
        <div
            className="relative w-48 h-80 md:w-72 md:h-96 p-4 group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* <Image
                src={srcimg}
                width={240}
                height={320}
                priority={true}
                alt={title}
                className={`absolute brightness-[0.3] right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 rounded-xl object-cover w-full h-full z-20 opacity-100 transition-opacity duration-500 group-hover:opacity-0`}
            /> */}
            <div className="absolute flex flex-col justify-around items-center h-full w-full py-4 px-2 text-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none z-20">
                <h2
                    className={
                        ` text-3xl font-bold text-[#7CA4DC] select-none`
                    }
                >
                    {title}
                </h2>
                <p
                    className={`text-md font-bold select-none text-white`}
                >
                    {subtitle}
                </p>
                <Button as={Link} href={href} className="bg-[#7CA4DC] w-28 text-black font-semibold">
                    Ver más
                </Button>
            </div>
            <video
                controls={false}
                ref={videoRef1}
                className="absolute brightness-[0.3] max-w-none max-h-none w-[calc(100%-2px)] h-[calc(100%-2px)] right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 z-10 rounded-xl object-cover"
                muted={true}
                preload="auto"
                loop={true}
                poster={srcimg}
                src={srcvid}
            />

            <video
                controls={false}
                ref={videoRef2}
                className={`absolute brightness-[0.7] hidden md:block saturate-150 max-w-none max-h-none w-[calc(100%-2px)] h-[calc(100%-2px)] right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 rounded-2xl z-0 object-cover scale-50 blur-md group-hover:scale-105 transition-transform ease-out duration-500`}
                muted={true}
                preload="auto"
                loop={true}
                poster={srcimg}
                src={srcvid}
            />
        </div>
    );
}
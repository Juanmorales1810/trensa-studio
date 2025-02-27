"use client";

import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { Image } from "@nextui-org/image";

interface ScrollAnimationProps {
    control: any;
    startOffset: number;
    endOffset: number;
}

const useScrollAnimation = ({ control, startOffset, endOffset, }: ScrollAnimationProps) => {
    useEffect(() => {
        const scrollHandler = () => {
            const scrollY = window.scrollY;
            const start = startOffset;
            const end = endOffset;

            if (scrollY >= start && scrollY <= end) {
                control.start("onscreen");
            } else {
                control.start("offscreen");
            }
        };

        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, [control, startOffset, endOffset]);
};

const variants: Variants = {
    initial: {
        x: "50%",
        transition: {
            duration: 0.3,
            type: "spring",
        },
    },
    left: {
        x: "100%",
        transition: {
            duration: 0.3,
            type: "spring",
        },
    },
    right: {
        x: 0,
        transition: {
            duration: 0.3,
            type: "spring",
        },
    },
};

const variant: Variants = {
    initial: {
        opacity: 0,
        scale: 0,
        transition: {
            duration: 0.3,
            type: "spring",
        },
    },
    offscreen: {
        opacity: 0,
        scale: 0,
        transition: {
            duration: 0.3,
            type: "spring",
        },
    },
    onscreen: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            duration: 0.3,
        },
    },
};

export default function AboutScroll() {
    const [windowHeight, setWindowHeight] = useState<number>(typeof window !== 'undefined' ? window.innerHeight : 0);

    useEffect(() => {
        const handleResize = () => {
            setWindowHeight(window.innerHeight);
        };

        // Escuchar el evento de cambio de tamaño
        window.addEventListener('resize', handleResize);

        // Limpiar el evento cuando el componente se desmonte
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const control1 = useAnimation();
    const control2 = useAnimation();
    const control3 = useAnimation();
    const control4 = useAnimation();
    const control5 = useAnimation();

    // Usa los hooks fuera de condicionales
    useScrollAnimation({ control: control2, startOffset: 2500 + windowHeight, endOffset: 2500 + windowHeight * 2 });
    useScrollAnimation({ control: control3, startOffset: 2501 + windowHeight * 2, endOffset: 2500 + windowHeight * 3 });
    useScrollAnimation({ control: control4, startOffset: 2501 + windowHeight * 3, endOffset: 2500 + windowHeight * 4 });
    useScrollAnimation({ control: control5, startOffset: 2501 + windowHeight * 4, endOffset: (2500 - (windowHeight / 5)) + windowHeight * 5 });


    useEffect(() => {
        const scrollHandler = () => {
            const scrollY = window.scrollY;

            if (scrollY <= 2500 + windowHeight * 2) {
                control1.start("right");
            }
            if (scrollY > 2501 + windowHeight * 2) {
                control1.start("left");
            }
            if (scrollY > 2501 + windowHeight * 3) {
                control1.start("right");
            }
            if (scrollY > 2501 + windowHeight * 4) {
                control1.start("left");
            }
        };

        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, [control1, windowHeight]);

    return (
        <section className="w-full max-w-6xl">
            <motion.div
                className="sticky lg:flex justify-center items-center top-[50%] w-1/2 h-full z-20 hidden"
                variants={variants}
                initial="right"
                animate={control1}
            >
                <motion.div
                    variants={variant}
                    initial="right"
                    animate={control2}
                    className="absolute top-[calc(50%-144px)] left-[calc(50%-210px)] flex flex-col justify-center items-center h-72 w-[420px]"
                >
                    <figure>
                        <Image
                            isBlurred
                            width={420}
                            alt="Novios intercambiando votos en ceremonia de boda en Santiago de Chile"
                            src="about/aboutScroll-1.webp"
                        />
                    </figure>
                </motion.div>
                <motion.div
                    variants={variant}
                    initial="offscreen"
                    animate={control3}
                    className="absolute top-[calc(50%-144px)] left-[calc(50%-210px)] flex flex-col justify-center items-center h-72 w-[420px]"
                >
                    <figure>
                        <Image
                            isBlurred
                            width={420}
                            alt="Novios caminando hacia el altar en una boda al aire libre en La Serena"
                            src="about/aboutScroll-2.webp"
                        />
                    </figure>
                </motion.div>
                <motion.div
                    variants={variant}
                    initial="offscreen"
                    animate={control4}
                    className="absolute top-[calc(50%-144px)] left-[calc(50%-210px)] flex flex-col justify-center items-center h-72 w-[420px]"
                >
                    <figure>
                        <Image
                            isBlurred
                            width={420}
                            alt="Sesión de fotos de matrimonio en la playa de La Serena al atardecer"
                            src="about/aboutScroll-3.webp"
                        />
                    </figure>
                </motion.div>
                <motion.div
                    variants={variant}
                    initial="offscreen"
                    animate={control5}
                    className="absolute top-[calc(50%-144px)] left-[calc(50%-210px)] flex flex-col justify-center items-center h-72 w-[420px]"
                >
                    <figure>
                        <Image
                            isBlurred
                            width={420}
                            alt="Fotógrafo de bodas en La Serena capturando el primer baile de los novios"
                            src="about/aboutScroll-4.webp"
                        />
                    </figure>
                </motion.div>
            </motion.div>

            <div className="relative flex flex-col justify-center items-center w-full h-full md:min-h-[calc(100vh-116px)] lg:flex-row px-2 py-4">
                <div className="flex justify-center items-center md:w-1/2">
                    <figure className="lg:hidden">
                        <Image
                            isBlurred
                            width={420}
                            alt="Novios intercambiando votos en ceremonia de boda en Santiago de Chile"
                            src="about/aboutScroll-1.webp"
                        />
                    </figure>

                    <Image
                        isBlurred
                        width={512}
                        alt="NextUI hero Image"
                        src="about/back1.svg"
                        className="hidden lg:block"
                    />
                </div>
                <div className="flex flex-col justify-center items-start text-center lg:text-left py-4 lg:w-1/2">
                    <h3
                        className=
                        "p-2 text-4xl md:text-6xl font-bold bg-gradient-to-br from-cyan-500 via-cyan-600 to-cyan-400 bg-clip-text text-transparent dark:drop-shadow-[0_0px_8px_rgba(0,100,125,0.75)]"
                    >
                        Consulta Personalizada
                    </h3>
                    <p
                        className=
                        "mt-4 text-xl font-normal lg:text-2xl text-zinc-900 dark:text-white"

                    >
                        Sabemos que cada boda es única. Ofrecemos una consulta inicial para conocer tu visión y
                        tus preferencias. Diseñamos un servicio completamente adaptado a lo que deseas.
                    </p>
                </div>
            </div>
            <div className="relative flex flex-col-reverse justify-center items-center w-full h-full md:min-h-[calc(100vh-116px)] z-10 lg:flex-row px-2 py-4">
                <div className="flex flex-col justify-center items-center text-center lg:text-right py-4 lg:w-1/2">
                    <h3
                        className=
                        "p-2 text-4xl md:text-6xl font-bold bg-gradient-to-br from-cyan-500 via-cyan-600 to-cyan-400 bg-clip-text text-transparent dark:drop-shadow-[0_0px_8px_rgba(0,100,125,0.75)]"
                    >
                        Estilo, Edición y Postproducción
                    </h3>
                    <p
                        className=
                        "mt-4 text-xl font-normal lg:text-2xl text-zinc-900 dark:text-white"
                    >
                        Elige entre diferentes estilos de fotografía y video. Nuestro equipo se encargará de la
                        edición y postproducción para que cada imagen y video refleje la belleza de tu día.
                        Incluimos drones para una perspectiva aérea.
                    </p>
                </div>
                <div className="flex justify-center items-center lg:w-1/2">
                    <figure className="lg:hidden">
                        <Image
                            isBlurred
                            width={420}
                            alt="Novios caminando hacia el altar en una boda al aire libre en La Serena"
                            src="about/aboutScroll-2.webp"
                        />
                    </figure>
                    <Image
                        isBlurred
                        width={512}
                        alt="NextUI hero Image"
                        src="about/back2.svg"
                        className="hidden lg:block"
                    />
                </div>
            </div>
            <div className="relative flex flex-col justify-center items-center w-full h-full md:min-h-[calc(100vh-116px)] lg:flex-row px-2 py-4">
                <div className="flex justify-center items-center lg:w-1/2">
                    <figure className="lg:hidden">
                        <Image
                            isBlurred
                            width={420}
                            alt="Sesión de fotos de matrimonio en la playa de La Serena al atardecer"
                            src="about/aboutScroll-3.webp"
                        />
                    </figure>
                    <Image
                        isBlurred
                        width={512}
                        alt="NextUI hero Image"
                        src="about/back3.svg"
                        className="hidden lg:block"
                    />
                </div>
                <div className="flex flex-col justify-center items-start text-center lg:text-left py-4 lg:w-1/2">
                    <h3
                        className=
                        "p-2 text-4xl md:text-6xl font-bold bg-gradient-to-br from-cyan-500 via-cyan-600 to-cyan-400 bg-clip-text text-transparent dark:drop-shadow-[0_0px_8px_rgba(0,100,125,0.75)]"
                    >
                        Entrega Digital en Google Drive
                    </h3>
                    <p
                        className=
                        "mt-4 text-xl font-normal lg:text-2xl text-zinc-900 dark:text-white"
                    >
                        Ofrecemos acceso exclusivo a todos tus recuerdos en una nube digital (Google Drive),
                        donde siempre podrás descargar y compartir tus fotos y videos de alta calidad.
                    </p>
                </div>
            </div>
            <div className="relative flex flex-col-reverse justify-center items-center w-full h-full md:min-h-[calc(100vh-116px)] z-10 lg:flex-row px-2 py-4">
                <div className="flex flex-col justify-center items-center text-center lg:text-right py-4 lg:w-1/2">
                    <h3
                        className=
                        "p-2 text-4xl md:text-6xl font-bold bg-gradient-to-br from-cyan-500 via-cyan-600 to-cyan-400 bg-clip-text text-transparent dark:drop-shadow-[0_0px_8px_rgba(0,100,125,0.75)]"
                    >
                        Paquetes Personalizados y Precios
                    </h3>
                    <p
                        className=
                        "mt-4 text-xl font-normal lg:text-2xl text-zinc-900 dark:text-white"
                    >
                        Contamos con diferentes paquetes que se ajustan a tu presupuesto. Puedes personalizar el
                        paquete que más te guste o combinar nuestros servicios de fotografía y video para obtener
                        la mejor experiencia.
                    </p>
                </div>
                <div className="flex justify-center items-center lg:w-1/2">
                    <figure className="lg:hidden">
                        <Image
                            isBlurred
                            width={420}
                            alt="Fotógrafo de bodas en La Serena capturando el primer baile de los novios"
                            src="about/aboutScroll-4.webp"
                        />
                    </figure>
                    <Image
                        isBlurred
                        width={512}
                        alt="NextUI hero Image"
                        src="about/back4.svg"
                        className="hidden lg:block"
                    />
                </div>
            </div>
        </section>
    );
}
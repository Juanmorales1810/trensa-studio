"use client";

import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect } from "react";
import { Image } from "@nextui-org/image";

interface ScrollAnimationProps {
    control: any;
    start: number;
    end: number;
}

const useScrollAnimation = ({ control, start, end }: ScrollAnimationProps) => {
    useEffect(() => {
        const scrollHandler = () => {
            const scrollY = window.scrollY;

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
    }, [control, start, end]);
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
    const control1 = useAnimation();
    const control2 = useAnimation();
    const control3 = useAnimation();
    const control4 = useAnimation();
    const control5 = useAnimation();

    useScrollAnimation({ control: control2, start: 3000, end: 3650 });
    useScrollAnimation({ control: control3, start: 3651, end: 4450 });
    useScrollAnimation({ control: control4, start: 4451, end: 5451 });
    useScrollAnimation({ control: control5, start: 5451, end: 6100 });
    useEffect(() => {
        const scrollHandler = () => {
            const scrollY = window.scrollY;
            console.log(scrollY);


            if (scrollY <= 3650) {
                control1.start("right");
            }
            if (scrollY > 3651) {
                control1.start("left");
            }
            if (scrollY > 4451) {
                control1.start("right");
            }
            if (scrollY > 5451) {
                control1.start("left");
            }
        };

        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, [control1]);

    return (
        <section className="w-full max-w-6xl">
            <motion.div
                className="sticky lg:flex justify-center items-center top-[450px] w-1/2 h-full z-20 hidden"
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
                            alt="NextUI hero Image"
                            src="about/reunion.jpg"
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
                            alt="NextUI hero Image"
                            src="about/realidad.jpg"
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
                            alt="NextUI hero Image"
                            src="about/edicion.jpg"
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
                            alt="NextUI hero Image"
                            src="about/edicion.jpg"
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
                            alt="NextUI hero Image"
                            src="about/reunion.jpg"
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
                        Exploramos su visión para capturar cada detalle de su boda. Ofrecemos estilos únicos y personalizados. ¡Descargue nuestra guía para saber más!
                    </p>
                </div>
            </div>
            <div className="relative flex flex-col-reverse justify-center items-center w-full h-full md:min-h-[calc(100vh-116px)] z-10 lg:flex-row px-2 py-4">
                <div className="flex flex-col justify-center items-center text-center lg:text-right py-4 lg:w-1/2">
                    <h3
                        className=
                        "p-2 text-4xl md:text-6xl font-bold bg-gradient-to-br from-cyan-500 via-cyan-600 to-cyan-400 bg-clip-text text-transparent dark:drop-shadow-[0_0px_8px_rgba(0,100,125,0.75)]"
                    >
                        Cobertura Completa
                    </h3>
                    <p
                        className=
                        "mt-4 text-xl font-normal lg:text-2xl text-zinc-900 dark:text-white"
                    >
                        Desde los preparativos hasta la recepción, documentamos cada momento con equipos de alta calidad, incluyendo drones. Obtenga un vistazo completo a nuestros servicios en nuestra guía descargable.
                    </p>
                </div>
                <div className="flex justify-center items-center lg:w-1/2">
                    <figure className="lg:hidden">
                        <Image
                            isBlurred
                            width={420}
                            alt="NextUI hero Image"
                            src="about/realidad.jpg"
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
                            alt="NextUI hero Image"
                            src="about/edicion.jpg"
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
                        Estilo, Edición y Postproducción
                    </h3>
                    <p
                        className=
                        "mt-4 text-xl font-normal lg:text-2xl text-zinc-900 dark:text-white"
                    >
                        Elija entre varios estilos fotográficos y disfrute de una edición detallada. Incluimos videos, tomas con drone y una postproducción que garantiza álbumes y videos hermosos. ¡Descargue la guía para descubrir nuestras opciones!
                    </p>
                </div>
            </div>
            <div className="relative flex flex-col-reverse justify-center items-center w-full h-full md:min-h-[calc(100vh-116px)] z-10 lg:flex-row px-2 py-4">
                <div className="flex flex-col justify-center items-center text-center lg:text-right py-4 lg:w-1/2">
                    <h3
                        className=
                        "p-2 text-4xl md:text-6xl font-bold bg-gradient-to-br from-cyan-500 via-cyan-600 to-cyan-400 bg-clip-text text-transparent dark:drop-shadow-[0_0px_8px_rgba(0,100,125,0.75)]"
                    >
                        Entrega y Presupuesto
                    </h3>
                    <p
                        className=
                        "mt-4 text-xl font-normal lg:text-2xl text-zinc-900 dark:text-white"
                    >
                        Acceso digital exclusivo a sus recuerdos en Google Drive. Ofrecemos paquetes personalizados que se ajustan a su presupuesto. Descargue nuestra guía para conocer todos los detalles y precios.
                    </p>
                </div>
                <div className="flex justify-center items-center lg:w-1/2">
                    <figure className="lg:hidden">
                        <Image
                            isBlurred
                            width={420}
                            alt="NextUI hero Image"
                            src="about/realidad.jpg"
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
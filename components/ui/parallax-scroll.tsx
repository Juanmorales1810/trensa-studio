"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export const ParallaxScroll = ({
    images,
    className,
}: {
    images: string[];
    className?: string;
}) => {
    const gridRef = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        container: gridRef, // remove this if your container is not fixed height
        offset: ["start start", "end start"], // remove this if your container is not fixed height
    });

    const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const translateThird = useTransform(scrollYProgress, [0, 1], [0, -100]);

    const third = Math.ceil(images.length / 3);

    const firstPart = images.slice(0, third);
    const secondPart = images.slice(third, 2 * third);
    const thirdPart = images.slice(2 * third);

    return (
        <div
            className={cn("h-[calc(100vh-128px)] items-start overflow-y-auto w-full no-scrollbar", className)}
            ref={gridRef}
        >
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start  max-w-5xl mx-auto md:gap-10 md:py-10 px-10"
                ref={gridRef}
            >
                <div className="grid gap-10">
                    {firstPart.map((el, idx) => (
                        <motion.div
                            className="relative bg-zinc-950 rounded-lg overflow-hidden shadow-lg group"
                            style={{ y: translateFirst }} // Apply the translateY motion value here
                            key={"grid-1" + idx}
                        >
                            <div className="absolute flex flex-col justify-end items-start px-4 py-2 h-80 w-full z-30">
                                <div className="flex w-full justify-between">
                                    <div className="text-left text-zinc-50">
                                        <h2>titulo</h2>
                                        <p>breve descripción</p>
                                        <p>fecha</p>
                                    </div>
                                    <div className="items-end pt-9">
                                        <Button as={Link} href="#" variant="shadow" color="primary" size="sm">Ver más</Button>
                                    </div>
                                </div>
                            </div>
                            <Image
                                src={el}
                                className="h-80 w-full object-cover object-left-top gap-10 !m-0 !p-0 [mask-image:radial-gradient(ellipse_140%_95%_at_100%_-10%,#000_10%,transparent_110%)] z-20 group-hover:scale-105 transition-transform duration-300 ease-in-out"
                                height="400"
                                width="400"
                                alt="thumbnail"
                            />
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-10">
                    {secondPart.map((el, idx) => (
                        <motion.div
                            className="relative bg-zinc-950 rounded-lg overflow-hidden shadow-lg group"
                            style={{ y: translateSecond }} // Apply the translateY motion value here
                            key={"grid-1" + idx}
                        >
                            <div className="absolute flex flex-col justify-end items-start px-4 py-2 h-80 w-full z-30">
                                <div className="flex w-full justify-between">
                                    <div className="text-left text-zinc-50">
                                        <h2>titulo</h2>
                                        <p>breve descripción</p>
                                        <p>fecha</p>
                                    </div>
                                    <div className="items-end pt-9">
                                        <Button as={Link} href="#" variant="shadow" color="primary" size="sm">Ver más</Button>
                                    </div>
                                </div>
                            </div>
                            <Image
                                src={el}
                                className="h-80 w-full object-cover object-left-top gap-10 !m-0 !p-0 [mask-image:radial-gradient(ellipse_140%_95%_at_100%_-10%,#000_10%,transparent_110%)] z-20 group-hover:scale-105 transition-transform duration-300 ease-in-out"
                                height="400"
                                width="400"
                                alt="thumbnail"
                            />
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-10">
                    {thirdPart.map((el, idx) => (
                        <motion.div
                            className="relative bg-zinc-950 rounded-lg overflow-hidden shadow-lg group"
                            style={{ y: translateThird }} // Apply the translateY motion value here
                            key={"grid-1" + idx}
                        >
                            <div className="absolute flex flex-col justify-end items-start px-4 py-2 h-80 w-full z-30">
                                <div className="flex w-full justify-between">
                                    <div className="text-left text-zinc-50">
                                        <h2>titulo</h2>
                                        <p>breve descripción</p>
                                        <p>fecha</p>
                                    </div>
                                    <div className="items-end pt-9">
                                        <Button as={Link} href="#" variant="shadow" color="primary" size="sm">Ver más</Button>
                                    </div>
                                </div>
                            </div>
                            <Image
                                src={el}
                                className="h-80 w-full object-cover object-left-top gap-10 !m-0 !p-0 [mask-image:radial-gradient(ellipse_140%_95%_at_100%_-10%,#000_10%,transparent_110%)] z-20 group-hover:scale-105 transition-transform duration-300 ease-in-out"
                                height="400"
                                width="400"
                                alt="thumbnail"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
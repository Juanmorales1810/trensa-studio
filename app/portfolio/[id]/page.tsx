"use client";

import { Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from "@nextui-org/modal";
import { portfolioDB } from "@/config/portfolio";
import { Image } from "@nextui-org/image";
import SwiperGalery from "@/components/swipergalery";
import { useState, useEffect, useRef } from "react";

interface params {
    params: {
        id: string;
    }
}

export default function App(params: params) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [visibleImages, setVisibleImages] = useState<number>(5); // Número de imágenes iniciales visibles
    const id = params.params.id;
    const lastImageRef = useRef<HTMLDivElement | null>(null); // Referencia para la última imagen


    const foundBlog = portfolioDB.find((blog) => blog.slug === id);
    if (!foundBlog) {
        return (
            <section className="flex flex-col justify-center items-center w-full">
                <h2 className="text-9xl font-bold bg-gradient-to-br from-amber-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent">
                    ERROR 404
                </h2>
                <h2 className="pt-8 text-3xl font-bold text-center text-black dark:text-white">
                    Entrada de blog no encontrada.
                </h2>
            </section>
        );
    }

    const { title, location, date, slug, coverImage, porfolioImages, description } = foundBlog;

    // Observador para cargar más imágenes
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const lastImage = entries[0];
                if (lastImage.isIntersecting) {
                    setVisibleImages((prev) => prev + 5); // Cargar 5 imágenes más
                    observer.disconnect(); // Detener la observación temporalmente
                }
            },
            { threshold: 1 } // Activa cuando la imagen es completamente visible
        );

        if (lastImageRef.current) {
            observer.observe(lastImageRef.current);
        }

        return () => {
            if (lastImageRef.current) observer.disconnect();
        };
    }, [visibleImages]);

    const openGallery = (index: number) => {
        setSelectedIndex(index);
        onOpen();
    };

    return (
        <section className="relative flex flex-col justify-center items-center w-full px-2 py-10">
            <Image
                src={`https://res.cloudinary.com/dli8ejcjv/image/upload/v1719876222/${slug}/${coverImage}.webp`}
                isBlurred
                alt={title}
                width={1066}
                height={768}
            />
            <div className="relative bottom-16 bg-slate-50 py-6 px-4 rounded-xl z-10 md:px-20">
                <h1 className="text-4xl font-bold text-center text-black pb-4">{title}</h1>
                <p className="text-center text-lg font-semibold text-gray-700 pb-2">{location}</p>
                <p className="text-center text-gray-700">{date}</p>
            </div>
            <div className="flex flex-row flex-wrap justify-center items-center w-full max-w-7xl gap-4">
                {porfolioImages.slice(0, visibleImages).map((image, index) => (
                    <Image
                        key={index}
                        className="w-full max-w-sm h-64"
                        src={`https://res.cloudinary.com/dli8ejcjv/image/upload/v1719876222/${slug}/${image}.webp`}
                        loading="lazy" // Lazy loading de la imagen
                        isBlurred
                        isZoomed
                        alt={title}
                        onClick={() => openGallery(index)}
                    />
                ))}
                <div ref={lastImageRef} /> {/* Div de referencia para el último elemento */}
            </div>
            <Modal size="full" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Galería de Imágenes</ModalHeader>
                            <ModalBody>
                                <SwiperGalery
                                    images={porfolioImages.map(
                                        (image) =>
                                            `https://res.cloudinary.com/dli8ejcjv/image/upload/v1719876222/${slug}/${image}.webp`
                                    )}
                                    initialSlide={selectedIndex}
                                />
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </section>
    );
}
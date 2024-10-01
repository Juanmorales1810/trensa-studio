"use client";

import { Accordion, AccordionItem } from "@nextui-org/accordion";

export default function Acordeon() {
    return (
        <Accordion variant="splitted">
            <AccordionItem key="1" aria-label="Accordion 1" title="¿Cómo personalizamos los servicios para nuestra boda?">
                Comenzamos con una consulta personalizada donde exploramos tu visión. Nuestro objetivo
                es crear un servicio completamente a medida para que cada foto y video refleje tu esencia.
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="¿Qué incluye la cobertura completa?">
                La cobertura completa incluye desde los preparativos hasta la fiesta, capturando todos los
                momentos importantes. Usamos equipos profesionales y drones para garantizar imágenes
                únicas y de alta calidad.
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="¿Cómo es el proceso de postproducción y entrega?">
                Después de la boda, seleccionamos y editamos las mejores fotos y videos, asegurando un
                acabado profesional. Te entregamos todos los archivos en una nube digital (Google Drive)
                para fácil acceso.
            </AccordionItem>
            <AccordionItem key="4" aria-label="Accordion 4" title="¿Cuáles son los precios y paquetes?">
                Ofrecemos paquetes flexibles que se ajustan a cada necesidad y presupuesto. Desde
                fotografía hasta video con drone, contamos con opciones para cada tipo de boda. ¡Consulta
                nuestro catálogo para más información!
            </AccordionItem>
        </Accordion>
    )
}

"use client";

import { Accordion, AccordionItem } from "@nextui-org/accordion";

export default function Acordeon() {
    return (
        <Accordion variant="splitted">
            <AccordionItem key="1" aria-label="Accordion 1" title="¿Cuántos packs de fotografía y video de matrimonio ofrecen?">
                Ofrecemos 4 packs diferentes que se ajustan a las necesidades de cada pareja, desde cobertura básica hasta cobertura completa con drones y book físico.
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="¿Cuánto dura la cobertura de la boda?">
                La cobertura completa dura aproximadamente 7 horas, cubriendo desde los preparativos hasta la recepción.
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="¿Qué incluye la edición de las fotos y videos?">
                Todas las fotos son editadas profesionalmente en Lightroom y Photoshop, asegurando resultados de alta calidad. Los videos también incluyen postproducción detallada.
            </AccordionItem>
            <AccordionItem key="4" aria-label="Accordion 4" title="¿Usan equipos profesionales durante el evento?">
                Sí, trabajamos con sistemas de flash profesionales, cámaras de alta gama y drones para asegurar la mejor calidad en cada toma.
            </AccordionItem>
            <AccordionItem key="5" aria-label="Accordion 5" title="¿Entregan las fotos y videos en formato digital?">
                Sí, entregamos todos los archivos en alta resolución a través de una carpeta en la nube para fácil acceso y descarga.
            </AccordionItem>
            <AccordionItem key="6" aria-label="Accordion 6" title="¿Ofrecen álbumes impresos?">
                Sí, además de la entrega digital, ofrecemos la opción de crear un book físico personalizado con las mejores fotos del evento.
            </AccordionItem>
            <AccordionItem key="7" aria-label="Accordion 7" title="¿El video incluye tomas aéreas?">
                Dependiendo del pack elegido, incluimos tomas aéreas con drones para capturar momentos únicos desde perspectivas impresionantes.
            </AccordionItem>
            <AccordionItem key="8" aria-label="Accordion 8" title="¿Cuántas fotos entregan por boda?">
                La cantidad de fotos depende del pack elegido, pero generalmente entregamos entre 300 y 500 fotos editadas en alta resolución.
            </AccordionItem>
            <AccordionItem key="9" aria-label="Accordion 9" title="¿Realizan sesiones de fotos previas o posteriores al matrimonio?">
                Sí, puedes agregar una sesión de fotos previa (preboda) o posterior (postboda) para capturar momentos adicionales en lugares especiales.
            </AccordionItem>
            <AccordionItem key="10" aria-label="Accordion 10" title="¿Cómo puedo reservar el servicio?">
                Puedes contactarnos directamente para agendar una consulta y elegir el pack que mejor se adapte a tus necesidades. Una vez elegido, firmamos un contrato para confirmar la reserva.
            </AccordionItem>
        </Accordion>
    )
}

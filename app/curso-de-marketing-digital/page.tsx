"use client";

import { Accordion, AccordionItem } from '@nextui-org/accordion'
import { Button } from '@nextui-org/button'
import { Image } from '@nextui-org/image';
import Link from 'next/link'

export default function Page() {
    return (
        <section className='flex flex-col justify-center items-center w-full max-w-5xl mt-16 mx-auto px-2 py-8'>
            <h1 className='text-3xl font-medium mb-4'>
                ¿Estás luchando para conseguir más clientes?
            </h1>
            <p className='text-pretty indent-4 text-xl text-zinc-800 mb-8'>
                Si eres un proveedor de servicios de bodas y confías únicamente en las recomendaciones boca a boca, estás dejando de lado una oportunidad enorme para hacer crecer tu negocio. Las redes sociales y el marketing digital son herramientas poderosas, pero muchos proveedores de servicios matrimoniales no saben cómo aprovecharlas. Esto deja a muchos con poca visibilidad y luchando contra la competencia feroz.
            </p>
            <h2 className='text-2xl font-medium mb-4'>
                ¿Te identificas con alguno de estos problemas?
            </h2>
            <ul className='list-disc list-inside flex flex-col justify-center items-center gap-2 text-xl mb-6'>
                <li>
                    Tu Instagram o Facebook no atraen nuevos clientes.
                </li>
                <li>
                    Dependes únicamente de las recomendaciones, y cuando estas no llegan, los contratos tampoco.
                </li>
                <li>
                    No tienes tiempo ni recursos para dedicarte al marketing digital, y además no sabes por dónde empezar.
                </li>
            </ul>
            <h3 className='text-3xl font-semibold mb-2'>
                ¿Estás listo para llevar tu negocio de bodas al siguiente nivel?
            </h3>
            <p className='text-4xl font-bold text-cyan-600 mb-8'>
                ¡Inscríbete hoy mismo!
            </p>
            <h3 className='text-4xl font-bold mb-4'>
                ¡Bienvenidos!
            </h3>
            <p className='text-pretty indent-4 text-xl text-zinc-900 mb-4 tracking-wide font-medium'>
                ¿Estás cansado de no tener la visibilidad que mereces en el competitivo mundo de los matrimonios? ¿Sientes que tus habilidades y servicios no llegan a las parejas que realmente los necesitan? No estás solo. Muchos proveedores de servicios para bodas se enfrentan a estos mismos desafíos. Es frustrante invertir tiempo y esfuerzo en tu negocio sin ver los resultados que deseas.
            </p>
            <p className='text-pretty indent-4 text-xl text-zinc-900 mb-4 tracking-wide font-medium'>
                Soy Felipe, director de Trenza Comunicaciones, y estoy aquí para ayudarte a cambiar esa realidad. He trabajado durante años en el sector de marketing digital y he visto cómo muchos proveedores talentosos se quedan en la sombra por no saber cómo destacar en el mundo online. Pero hoy, tengo la solución que has estado buscando.
            </p>
            <div className='flex justify-between gap-4'>
                <div className='w-2/3'>
                    <p className='text-pretty indent-4 text-xl text-zinc-900 mb-4 tracking-wide font-medium'>
                        Imagina poder multiplicar tus reservas, atraer más novios y, sobre todo, ver cómo tu negocio de bodas florece gracias a estrategias efectivas de marketing digital. ¿Te gustaría aprender a utilizar las redes sociales y otras plataformas online para hacer crecer tu marca de manera significativa?
                    </p>
                    <p className='text-pretty indent-4 text-xl text-zinc-900 mb-4 tracking-wide font-medium'>
                        En este curso, te guiaré a través de un proceso sencillo y efectivo que transformará tu enfoque de negocio. Aprenderás cómo optimizar tu presencia en línea, cómo atraer la atención de las parejas que están buscando exactamente lo que tú ofreces y cómo establecer una conexión auténtica que te diferencie de la competencia.
                    </p>
                    <p className='text-pretty indent-4 text-xl text-zinc-900 mb-4 tracking-wide font-medium'>
                        ¿Te preguntas si esto realmente funcionará para ti? La respuesta es sí. Este curso está diseñado específicamente para proveedores de servicios de bodas como tú: fotógrafos, diseñadores de vestidos, organizadores de eventos y mucho más. Te proporcionaré herramientas y estrategias prácticas que podrás implementar de inmediato.
                    </p>
                </div>
                <div className='flex justify-center items-center w-1/3'>
                    <Image src="/home/service/service-1.webp" alt="Fotógrafo de bodas en Santiago capturando el beso de los novios." className="object-cover object-top w-full" />
                </div>
            </div>
            <p className='text-pretty indent-4 text-xl text-zinc-900 mb-4 tracking-wide font-medium'>
                Además, tendrás acceso a una comunidad de profesionales apasionados como tú, donde podrás compartir experiencias, hacer preguntas y recibir apoyo. La colaboración es clave en este sector, y estoy aquí para asegurarme de que nunca te sientas solo en este camino.
            </p>
            <p className='text-pretty indent-4 text-xl text-zinc-900 mb-4 tracking-wide font-medium'>
                Así que, ¿estás listo para llevar tu negocio de bodas al siguiente nivel? ¿Listo para atraer a más novios y ver cómo tus esfuerzos se traducen en éxito tangible? No dejes que la falta de visibilidad siga frenando tu crecimiento. Únete a nosotros y empieza a transformar tu negocio hoy mismo.
            </p>
            <p className='text-pretty indent-4 text-xl text-zinc-900 mb-10 tracking-wide font-medium'>
                Recuerda, el éxito no es solo un destino, es un viaje. Y estoy aquí para acompañarte en cada paso del camino. ¡Hagamos que tu marca brille y atraiga la atención que merece! Inscríbete ahora y comencemos juntos este emocionante viaje hacia el éxito.
            </p>
            <Button
                as={Link}
                href="https://wa.me/+56923748433?text=Hola!%20Me%20gustaria%20hacer%20una%20reserva.%20Tenes%20alguna%20reservacion%20disponible?%20Muchas%20gracias!😊"
                className="bg-[#25d366] text-zinc-50 font-bold mb-10"
                endContent={
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
                        <path d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z" fill="#FFFFFF" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z" fill="#FFFFFF" />
                    </svg>
                }>
                Contactanos!
            </Button>
            <Accordion variant="splitted">
                <AccordionItem key="1" aria-label="Accordion 1" title="Módulo 1: Introducción al Marketing Digital para Proveedores de Servicios de Matrimonios">
                    <ul className='list-disc list-inside flex flex-col justify-center items-start gap-4 pb-4 text-xl'>
                        <li>
                            <strong>Objetivo:</strong> Romper los mitos sobre la ineficacia del marketing digital. Explicar cómo pueden mejorar su visibilidad en redes sociales y Google.
                        </li>
                        <li>
                            <strong>Contenido:</strong> Desmitificar la idea de que solo el boca a boca funciona. Introducir herramientas clave como Google My Business y SEO básico para que puedan posicionarse mejor.
                        </li>
                    </ul>
                </AccordionItem>
                <AccordionItem key="2" aria-label="Accordion 2" title="Módulo 2: Optimización de Perfiles y Estrategias en Redes Sociales">
                    <ul className='list-disc list-inside flex flex-col justify-center items-start gap-4 pb-4 text-xl'>
                        <li>
                            <strong>Objetivo:</strong> Ayudarles a mejorar la visibilidad de su marca en Instagram y Facebook.
                        </li>
                        <li>
                            <strong>Contenido:</strong> Crear contenido emocional y estético alineado con las tendencias de bodas. Mostrar cómo aprovechar los comentarios y recomendaciones para fortalecer la presencia en plataformas clave.
                        </li>
                    </ul>
                </AccordionItem>
                <AccordionItem key="3" aria-label="Accordion 3" title="Módulo 3: ADS en Facebook para Proveedores de Matrimonios">
                    <ul className='list-disc list-inside flex flex-col justify-center items-start gap-4 pb-4 text-xl'>
                        <li>
                            <strong>Objetivo:</strong> Enseñarles cómo atraer más clientes mediante campañas publicitarias pagadas.
                        </li>
                        <li>
                            <strong>Contenido:</strong> Explicar cómo configurar una campaña efectiva de Facebook ADS para aumentar las conversiones. Mostrar ejemplos reales adaptados a servicios como fotografía, tortas, y centros de eventos.
                        </li>
                    </ul>
                </AccordionItem>
                <AccordionItem key="4" aria-label="Accordion 4" title="Módulo 4: Estrategias para Diferenciarse de la Competencia">
                    <ul className='list-disc list-inside flex flex-col justify-center items-start gap-4 pb-4 text-xl'>
                        <li>
                            <strong>Objetivo:</strong> Ofrecer tácticas para destacar en un mercado competitivo.
                        </li>
                        <li>
                            <strong>Contenido:</strong> Crear un portafolio único que resalte lo que les hace especiales. Utilizar casos de éxito para generar confianza con los clientes potenciales.
                        </li>
                    </ul>
                </AccordionItem>
                <AccordionItem key="5" aria-label="Accordion 5" title="Módulo 5: Post-venta y Ficha de Google">
                    <ul className='list-disc list-inside flex flex-col justify-center items-start gap-4 pb-4 text-xl'>
                        <li>
                            <strong>Objetivo:</strong> Enseñarles a gestionar relaciones después del evento para obtener recomendaciones y referidos.
                        </li>
                        <li>
                            <strong>Contenido:</strong> Incluir estrategias para obtener reseñas en Google y mantener contacto con los clientes para futuros eventos.
                        </li>
                    </ul>
                </AccordionItem>
                <AccordionItem key="6" aria-label="Accordion 6" title="Extras del curso">
                    <ul className='list-disc list-inside flex flex-col justify-center items-start gap-4 pb-4 text-xl'>
                        <li>
                            <strong>Estrategias avanzadas para usar TikTok:</strong> Para aquellos interesados en tendencias virales.
                        </li>
                        <li>
                            <strong>Utilización de plataformas como <a href="http://MATRIS.CL" target='_blank'>MATRIS.CL</a> Y CHAT GPT :</strong> Revalorizar plataformas que aún tienen potencial o explicar cómo aprovechar mejor sus características.
                        </li>
                    </ul>
                </AccordionItem>
            </Accordion>
        </section>
    )
}

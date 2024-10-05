import { siteConfig } from "@/config/site";
import { Metadata, Viewport } from "next";
import { Image } from "@nextui-org/image"

export const viewport: Viewport = {
    themeColor: [
        { color: "#7CA4DC", media: "(prefers-color-scheme: light)" },
        { color: "#7CA4DC", media: "(prefers-color-scheme: dark)" },
    ],
}

export const metadata: Metadata = {
    metadataBase: new URL('https://www.trenzaestudiofotografia.cl/servicios/fotografia-bodas-en-la-serena-y-santiago'),
    title: {
        default: "Fotografía de Bodas en La Serena y Santiago - Capturamos Cada Momento",
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,

    keywords: [
        "Fotógrafo de matrimonios en La Serena",
        "Video de bodas profesional en Santiago",
        "Fotografía de bodas La Serena",
        "Videógrafo de matrimonios Santiago",
        "Tomas con drone para bodas en Chile",
        "Fotos de boda profesionales en La Serena",
        "Fotógrafo de matrimonios en Santiago",
        "Cobertura de matrimonios La Serena",
        "Sesión de fotos de boda en La Serena",
        "Video con drone para bodas en Santiago",
        "Fotos de novios en La Serena",
        "Video de ceremonia de bodas en Santiago",
        "Fotografía profesional de boda en La Serena",
        "Fotógrafo para bodas en Santiago",
        "Cobertura completa de matrimonios en La Serena",
        "Tomas aéreas para bodas en Santiago",
        "Fotógrafo de bodas en La Serena y Santiago",
        "Fotografías artísticas para matrimonios en Chile",
        "Servicio de video de boda con drone La Serena",
        "Videos de matrimonios con drone en Santiago",
        "Sesión preboda en La Serena",
        "Fotografías de bodas en La Serena y Santiago",
        "Edición de fotos para bodas en Lightroom y Photoshop",
        "Video profesional para matrimonios en Chile",
        "Álbum de fotos de boda en La Serena",
        "Fotografía documental de bodas en Santiago",
        "Tomas aéreas con drone para bodas La Serena",
        "Servicio de fotografía y video de boda Chile",
        "Fotógrafo para matrimonios en La Serena",
        "Cobertura fotográfica completa de bodas Santiago",
        "Book de fotos de bodas en La Serena",
        "Fotos profesionales de matrimonios en Santiago",
        "Fotografía de matrimonios con drone Chile",
        "Fotógrafo de bodas en La Serena y Cuarta Región",
        "Videos HD para bodas en Santiago",
        "Sesión de fotos postboda en La Serena",
        "Fotógrafo de novios en La Serena",
        "Cobertura de boda con drones en Santiago",
        "Álbum de fotos de matrimonio en Santiago",
        "Servicio completo de fotografía y video para bodas Chile",
        "Curso para proveedores de matrimonios en Chile",
        "Marketing digital para emprendedores de bodas en La Serena",
        "Curso de fotografía para proveedores de bodas en Chile",
        "Estrategias de marketing para proveedores de matrimonios",
        "Curso de marketing para fotógrafos de matrimonios en Santiago",
        "Formación para emprendedores del sector nupcial en Chile",
        "Curso de video para proveedores de bodas en La Serena",
        "Marketing para proveedores de servicios de bodas en Santiago",
        "Curso de fotografía y video de matrimonios en Chile",
        "Estrategias de marketing para negocios de bodas en La Serena"
    ],
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/favicon.ico",
    },
    creator: "Juan Morales",
    formatDetection: {
        email: true,
        address: true,
        telephone: true,
    },
    openGraph: {
        title: siteConfig.name,
        description: siteConfig.description,
        url: 'https://www.trenzaestudiofotografia.cl/servicios/fotografia-bodas-en-la-serena-y-santiago',
        siteName: siteConfig.name,
        images: [
            {
                url: 'https://www.trenzaestudiofotografia.cl/metadata.jpg',
                width: 1200,
                height: 630,
            },

        ],
        locale: 'es_CL',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: siteConfig.name,
        description: siteConfig.description,
        images: ['https://www.trenzaestudiofotografia.cl/metadata.jpg'],
    },
};

export default function Page() {
    return (
        <section className="mt-20 w-full max-w-5xl mx-auto">
            <div className="flex justify-center items-center flex-col bg-gray-50 rounded-xl my-8 px-4 py-6">
                <h1 className="text-3xl text-center font-bold mb-4">
                    Fotógrafo de Bodas en La Serena y Santiago - Momentos que Durarán para
                    Siempre
                </h1>
                <h2 className="text-xl text-zinc-500 text-center max-w-3xl">
                    Inmortalizamos tu boda en La Serena y Santiago con fotografías de estilo
                    documental, artístico o clásico que capturan cada emoción de tu gran día.
                </h2>
            </div>
            <div className="flex flex-col-reverse justify-around items-center gap-4 px-8 md:flex-row">
                <div className="md:w-1/2">
                    <p className="text-pretty text-xl ">
                        La fotografía de bodas es uno de los servicios más importantes para preservar los
                        momentos más hermosos de tu boda. Nuestro equipo de fotógrafos en La Serena y
                        Santiago está dedicado a crear imágenes que cuenten la historia de tu día especial con un
                        enfoque personalizado. Desde el primer encuentro hasta la entrega final, trabajamos para
                        adaptarnos a tu visión y hacer que cada fotografía refleje la belleza y emoción de tu boda.
                    </p>
                </div>
                <div className="md:w-1/2 p-12">
                    <Image
                        src="/home/contact.webp"
                        alt="Novios en sesión fotográfica de boda con fondo montañoso en la playa de La Serena."
                        className="object-cover object-top rotate-6"
                    />
                </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-4 mt-16 md:flex-row">
                <article className="bg-[#7CA4DC] rounded-2xl flex flex-col justify-around items-center px-4 py-6 h-80 w-96">
                    <h4 className="text-xl font-semibold text-zinc-50 text-center">
                        Registro completo de la boda:
                    </h4>
                    <p className="text-center text-lg text-zinc-50">
                        Documentamos cada fase de tu boda, desde los
                        preparativos hasta la celebración final. Nos aseguramos de capturar cada mirada,
                        cada sonrisa y cada lágrima de felicidad.
                    </p>
                </article>
                <article className="bg-[#7CA4DC] rounded-2xl flex flex-col justify-around items-center px-4 py-6 h-80 w-96">
                    <h4 className="text-xl font-semibold text-zinc-50 text-center">
                        Sesión de fotos con novios e invitados:
                    </h4>
                    <p className="text-center text-lg text-zinc-50">
                        Además del registro del evento, ofrecemos
                        sesiones fotográficas con los novios y sus seres queridos para capturar retratos
                        inolvidables.
                    </p>
                </article>
                <article className="bg-[#7CA4DC] rounded-2xl flex flex-col justify-around items-center px-4 py-6 h-80 w-96">
                    <h4 className="text-xl font-semibold text-zinc-50 text-center">
                        Fotografía de preparativos y ceremonia:
                    </h4>
                    <p className="text-center text-lg text-zinc-50">
                        No solo registramos la ceremonia, sino
                        también los momentos íntimos previos, como los preparativos de la novia y el novio.
                        Estas imágenes suelen ser las más emotivas.
                    </p>
                </article>
            </div>

        </section>
    )
}

import { siteConfig } from "@/config/site";
import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
    themeColor: [
        { color: "#7CA4DC", media: "(prefers-color-scheme: light)" },
        { color: "#7CA4DC", media: "(prefers-color-scheme: dark)" },
    ],
}

export const metadata: Metadata = {
    metadataBase: new URL('https://www.trenzaestudiofotografia.cl'),
    title: {
        default: "Curso de Marketing Digital para Proveedores de Bodas | Trenza Estudio Fotografía",
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
        title: "Curso de Marketing Digital para Proveedores de Bodas | Trenza Estudio Fotografía",
        description: siteConfig.description,
        url: 'https://www.trenzaestudiofotografia.cl/',
        siteName: siteConfig.name,
        images: [
            {
                url: 'https://www.trenzaestudiofotografia.cl/metadata-curso.jpg',
                width: 1200,
                height: 630,
            },

        ],
        locale: 'es_CL',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Curso de Marketing Digital para Proveedores de Bodas | Trenza Estudio Fotografía",
        description: siteConfig.description,
        images: ['https://www.trenzaestudiofotografia.cl/metadata-curso.jpg'],
    },
};

export default function CursoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="flex flex-col items-center justify-center w-full gap-4">
            <div className="text-center w-full justify-center">
                {children}
            </div>
        </section>
    );
}
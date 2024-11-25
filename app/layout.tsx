import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import clsx from "clsx";
import Footer from "@/components/footer";
import { GoogleAnalytics } from '@next/third-parties/google'

export const viewport: Viewport = {
	themeColor: [
		{ color: "#7CA4DC", media: "(prefers-color-scheme: light)" },
		{ color: "#7CA4DC", media: "(prefers-color-scheme: dark)" },
	],
}

export const metadata: Metadata = {
	metadataBase: new URL('https://www.trenzaestudiofotografia.cl'),
	title: {
		default: siteConfig.name,
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
		url: 'https://www.trenzaestudiofotografia.cl/',
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

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen font-sans antialiased bg-slate-100 dark:bg-zinc-950 transition-colors",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
					<div className="relative flex flex-col">
						<div className="absolute h-full w-full bg-[radial-gradient(#bbbbbb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#1b1b1b_1px,transparent_1px)] z-0"></div>
						<Navbar />
						<main className="flex-grow z-10">
							{children}
						</main>
						<Footer />
					</div>
				</Providers>
			</body>
			<GoogleAnalytics gaId="G-2R3T93JW6H" />
		</html>
	);
}

import type { Metadata, ResolvingMetadata } from 'next'
import { portfolioDB } from "@/config/portfolio";
import { siteConfig } from '@/config/site';

type Props = {
    params: { id: string }
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const id = params.id

    // fetch data
    const foundPorfolio = portfolioDB.find((blog) => blog.slug === id);

    return {
        title: foundPorfolio?.title,
        description: foundPorfolio?.location,
        openGraph: {
            title: foundPorfolio?.title,
            description: foundPorfolio?.location,
            url: 'https://www.trenzaestudiofotografia.cl/',
            siteName: siteConfig.name,
            images: [
                {
                    url: `https://res.cloudinary.com/dli8ejcjv/image/upload/v1719876222/${foundPorfolio?.slug}/${foundPorfolio?.coverImage}.webp`,
                    width: 1200,
                    height: 630,
                },

            ],
            locale: 'es_CL',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: foundPorfolio?.title,
            description: foundPorfolio?.location,
            images: [`https://res.cloudinary.com/dli8ejcjv/image/upload/v1719876222/${foundPorfolio?.slug}/${foundPorfolio?.coverImage}.webp`],
        },
    }
}

export default function PortfolioIdLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8">
            <div className="text-center justify-center">
                {children}
            </div>
        </section>
    );
}
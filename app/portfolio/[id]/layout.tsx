import type { Metadata, ResolvingMetadata } from 'next'
import { portfolioDB } from "@/config/portfolio";

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
            images: foundPorfolio?.coverImage,
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
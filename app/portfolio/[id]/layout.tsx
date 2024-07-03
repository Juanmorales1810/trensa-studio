import type { Metadata, ResolvingMetadata } from 'next'
import { portfolioDB } from "@/config/portfolio";

interface params {
    params: {
        id: string;
    }
}
type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const id = params.id

    // fetch data
    const foundPorfolio = portfolioDB.find((blog) => blog.slug === id);

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []

    return {
        title: foundPorfolio?.title,
        description: foundPorfolio?.location,
        openGraph: {
            images: foundPorfolio?.coverImage,
        },
    }
}

export default function PortfolioIdLayout({
    params,
    children,
}: {
    params: params;
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
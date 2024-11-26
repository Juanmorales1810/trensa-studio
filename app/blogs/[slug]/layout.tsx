import { TrenzaMatrimoniosBlogsModel } from '@/models/trenza';
import type { Metadata, ResolvingMetadata } from 'next'
import { connectMongoDB } from '@/lib/mongodb';
import { IBlogSchema } from '@/models/blogs';
import { siteConfig } from '@/config/site';
import { cache } from 'react';

type Props = {
    params: { slug: string }
}

const getItem = cache(async function loadBlog(slug: string) {
    await connectMongoDB();
    const blog = await TrenzaMatrimoniosBlogsModel.findOne({ slug });
    if (!blog) {
        throw new Error('Blog not found');
    }
    const obj = blog.toObject();
    obj._id = obj._id.toString(); // Convierte _id a una cadena
    return obj; // Usa .toObject() para convertir cada producto a un objeto JavaScript simple
})

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {

    // fetch data
    const blog: IBlogSchema = await getItem(params.slug);

    return {
        title: blog?.title,
        description: blog?.description,
        openGraph: {
            title: blog?.title,
            description: blog?.description,
            url: 'https://www.trenzaestudiofotografia.cl/',
            siteName: siteConfig.name,
            images: [
                {
                    url: blog?.imageCover,
                    width: 1200,
                    height: 630,
                },

            ],
            locale: 'es_CL',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: blog?.title,
            description: blog?.description,
            images: [blog?.imageCover],
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
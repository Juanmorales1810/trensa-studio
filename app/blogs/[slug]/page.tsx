import { TrenzaMatrimoniosBlogsModel } from '@/models/trenza';
import RenderJSON from '@/components/blogJson';
import { connectMongoDB } from '@/lib/mongodb';
import { IBlogSchema } from '@/models/blogs';
import { Image } from '@nextui-org/image';
import { cache } from 'react';

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

interface Params {
    slug: string;
}

export default async function Page({ params }: { params: Params }) {

    const blog: IBlogSchema = await getItem(params.slug);

    // Asegúrate de que el contenido JSON esté correctamente formateado
    const jsonContent: any = JSON.parse((blog.content as unknown as string).replace(/\\r\\n/g, ''));

    console.log(jsonContent);

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <Image
                className='aspect-video object-cover mb-8'
                src={blog.imageCover}
                alt={blog.title}
                width={1920}
                height={1080}
                isBlurred />
            <RenderJSON jsonContent={jsonContent} />
        </div>
    );
};
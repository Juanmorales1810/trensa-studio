import Link from "next/link";

interface CardBlogProps {
    title: string;
    description: string;
    image: string;
    date: Date;
    slug: string;
}

export default function CardBlog(props: CardBlogProps) {
    const { title, description, image, date, slug } = props;
    return (
        <article className="relative flex bg-white transition hover:shadow-xl rounded-lg overflow-hidden z-20">
            <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                <time
                    dateTime="2022-10-10"
                    className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                >
                    <span>{date.getFullYear()}</span>
                    <span className="w-px flex-1 bg-gray-900/10"></span>
                    <span>{date.toLocaleDateString('es-ES', { month: 'short' })}&nbsp;{date.getDay()}</span>
                </time>
            </div>

            <div className="hidden sm:block sm:basis-56">
                <img
                    alt={title}
                    src={image}
                    className="aspect-square h-full w-full object-cover"
                />
            </div>

            <div className="flex flex-1 flex-col justify-between">
                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                    <a href="#">
                        <h3 className="font-bold uppercase text-gray-900">
                            {title}
                        </h3>
                    </a>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                        {description}
                    </p>
                </div>

                <div className="sm:flex sm:items-end sm:justify-end">
                    <Link
                        href={`/blogs/${slug}`}
                        className="block bg-blue-300 px-5 py-3 text-center text-xs font-bold uppercase rounded-tl-lg text-gray-900 transition hover:bg-blue-400"
                    >
                        Ver más
                    </Link>
                </div>
            </div>
        </article>
    )
}

import Image from "next/image"

export default function Bento() {
    const contenido = [
        {
            title: "Fotografía",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nunc nec ex luctus elementum. Nunc nec ex luctus elementum.",
            image: "/home/bento/bento1.jpg"
        },
        {
            title: "Diseño",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nunc nec ex luctus elementum. Nunc nec ex luctus elementum.",
            image: "/home/bento/bento2.jpg"
        },
        {
            title: "Desarrollo Web",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nunc nec ex luctus elementum. Nunc nec ex luctus elementum.",
            image: "/home/bento/bento3.jpg"
        },
        {
            title: "Marketing Digital",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nunc nec ex luctus elementum. Nunc nec ex luctus elementum.",
            image: "/home/bento/bento4.jpg"
        },
        {
            title: "Social Media",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nunc nec ex luctus elementum. Nunc nec ex luctus elementum.",
            image: "/home/bento/bento5.jpg"
        },
        {
            title: "SEO",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nunc nec ex luctus elementum. Nunc nec ex luctus elementum.",
            image: "/home/bento/bento6.jpg"
        },
        {
            title: "Publicidad",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nunc nec ex luctus elementum. Nunc nec ex luctus elementum.",
            image: "/home/bento/bento7.jpg"
        }
    ]
    return (
        <div className="grid auto-rows-[140px] grid-cols-3 gap-1 w-full pb-4 md:auto-rows-[192px] md:gap-4">
            {contenido.map((cont, i) => (
                <div
                    key={i}
                    className={`row-span-1 group rounded-xl border-2 border-slate-100 dark:border-slate-400/10 bg-neutral-900 overflow-hidden hover:shadow-xl transition-shadow ${i === 0 || i === 4 ? "row-span-2" : ""
                        }`}
                >
                    <Image src={cont.image} alt={cont.title} width={800} height={400} className="rounded-none object-cover h-full md:opacity-25 md:saturate-0 md:group-hover:opacity-100 md:group-hover:saturate-100 md:transition-opacity" />
                </div>
            ))}
        </div>
    )
}
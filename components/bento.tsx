import Image from "next/image"

export default function Bento() {
    const contenido = [
        {
            title: "Fotografía",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nunc nec ex luctus elementum. Nunc nec ex luctus elementum.",
            image: "/home/bento/bento0.jpg"
        },
        {
            title: "Diseño",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nunc nec ex luctus elementum. Nunc nec ex luctus elementum.",
            image: "/home/bento/bento1.jpg"
        },
        {
            title: "Desarrollo Web",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nunc nec ex luctus elementum. Nunc nec ex luctus elementum.",
            image: "/home/bento/bento2.jpg"
        },
        {
            title: "Marketing Digital",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nunc nec ex luctus elementum. Nunc nec ex luctus elementum.",
            image: "/home/bento/bento3.jpg"
        },
        {
            title: "Social Media",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nunc nec ex luctus elementum. Nunc nec ex luctus elementum.",
            image: "/home/bento/bento4.jpg"
        },
        {
            title: "SEO",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nunc nec ex luctus elementum. Nunc nec ex luctus elementum.",
            image: "/home/bento/bento5.jpg"
        },
        {
            title: "Publicidad",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nunc nec ex luctus elementum. Nunc nec ex luctus elementum.",
            image: "/home/bento/bento6.jpg"
        }
    ]
    return (
        <div className="grid auto-rows-[192px] grid-cols-3 gap-4 w-full pb-4">
            {contenido.map((cont, i) => (
                <div
                    key={i}
                    className={`row-span-1 group rounded-xl border-2 border-slate-100 dark:border-slate-400/10 bg-neutral-900 overflow-hidden hover:shadow-xl transition-shadow ${i === 3 || i === 6 ? "col-span-2" : ""
                        }`}
                >
                    <Image src={cont.image} alt={cont.title} width={800} height={400} className="rounded-none opacity-25 saturate-0 group-hover:opacity-100 group-hover:saturate-100 transition-opacity" />
                </div>
            ))}
        </div>
    )
}
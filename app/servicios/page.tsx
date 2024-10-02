import Videocard from "@/components/videocard";

export default function Service() {
    return (
        <section className="flex flex-wrap justify-center items-center gap-2 py-10 mt-16 h-auto md:gap-8">
            <Videocard
                srcimg="/service/Comp 1 (0-00-00-10).jpg"
                srcvid="/service/card1.mp4"
                title="Fotografía de Matrimonios"
                subtitle="Detalles sobre los servicios de fotografía, incluyendo sesiones preboda y de compromiso."
                href="/service/fotografia"
            />
            <Videocard
                srcimg="/service/Comp 1 (0-00-00-10).jpg"
                srcvid="/service/card1.mp4"
                title="Video de Matrimonios"
                subtitle="Información sobre la producción de videos de bodas, desde la ceremonia hasta la recepción."
                href="/service/video"
            />
            <Videocard
                srcimg="/service/Comp 1 (0-00-00-10).jpg"
                srcvid="/service/card1.mp4"
                title="Cobertura Completa de Bodas"
                subtitle="Paquetes de servicios que incluyen fotografía y video."
                href="/service/cobertura"
            />
        </section>
    )
}
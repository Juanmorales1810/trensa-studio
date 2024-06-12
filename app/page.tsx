import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import CallToAction from "@/components/callToAction";
import AboutScroll from "@/components/aboutScroll";
import SwiperHome from "@/components/swiperHome";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import Bento from "@/components/bento";


export default function Home() {
	const items = [
		{
			quote: "La vida es lo que pasa mientras estás ocupado haciendo otros planes.",
			name: "John Lennon",
			title: "Músico",
			image: "/home/sonrisa.jpg"
		},
		{
			quote: "La única forma de hacer un gran trabajo es amar lo que haces.",
			name: "Steve Jobs",
			title: "Empresario",
			image: "/home/sonrisa.jpg"
		},
		{
			quote: "El éxito es aprender a ir de fracaso en fracaso sin perder el entusiasmo.",
			name: "Winston Churchill",
			title: "Político",
			image: "/home/sonrisa.jpg"
		},
		{
			quote: "La imaginación es más importante que el conocimiento.",
			name: "Albert Einstein",
			title: "Científico",
			image: "/home/sonrisa.jpg"
		},
		{
			quote: "La felicidad es cuando lo que piensas, lo que dices y lo que haces están en armonía.",
			name: "Mahatma Gandhi",
			title: "Líder",
			image: "/home/sonrisa.jpg"
		}
	];
	return (
		<section className="flex flex-col w-full items-center gap-10 overflow-hidden md:overflow-visible">
			<section className="relative h-auto min-h-screen w-full">
				<SwiperHome />
				<div className="flex flex-col justify-center items-center z-30 absolute bottom-10 left-[4%] md:left-[15%] md:top-1/2">
					<Image src="/logo/TRENZA LOGO PNG.png" alt="Logo" width={400} className="pl-4 mb-4 rounded-none" />
					<h2 className="text-4xl font-bold text-center mb-1">Bienvenidos a Trenza</h2>
					<h1 className="text-lg text-center text-default-500">
						Fotografía y video profesional para bodas
					</h1>
				</div>
			</section>
			<section className="flex flex-col justify-center items-center w-full max-w-5xl h-auto z-10">
				<h2 className="text-2xl font-semibold pb-4">Un poco de nosotros</h2>
				<Bento />
				<Button as={Link} href="/portfolio" className="bg-red-600">Ver más</Button>
			</section>
			<section className="flex flex-col justify-center items-center z-10 w-full overflow-hidden">
				<h2 className="text-2xl font-semibold">Testimonios</h2>
				<InfiniteMovingCards items={items} speed="slow" />
			</section>
			<section className="flex flex-col justify-center items-center z-10 w-full">
				<CallToAction />
			</section>
			<section className="flex flex-col justify-center items-center z-10 w-full">
				<AboutScroll />
			</section>


		</section>
	);
}

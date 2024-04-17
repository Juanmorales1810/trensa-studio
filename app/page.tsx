import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/icons";
import SwiperHome from "@/components/swiperHome";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";


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
		<section className="flex flex-col w-full items-center gap-10">
			<section className="relative h-auto min-h-[calc(100vh-64px)] w-full">
				<SwiperHome />
				<div className="absolute left-[15%] top-1/2 flex flex-col justify-center items-center z-50">
					<Image src="/logo/trenzaLogo.png" width={400} className="pl-4 mb-4 rounded-none" />
					<h1 className="text-4xl font-bold text-center mb-1">Welcome to Trenza</h1>
					<p className="text-lg text-center text-default-500">
						Next.js template with NextUI
					</p>
				</div>
			</section>
			<section className="flex flex-col justify-center items-center w-full max-w-5xl h-auto z-10">
				<h2 className="text-2xl font-semibold pb-4">Un poco de nosotros</h2>
				<div className="grid auto-rows-[192px] grid-cols-3 gap-4 w-full pb-4">
					{[...Array(7)].map((_, i) => (
						<div
							key={i}
							className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 ${i === 3 || i === 6 ? "col-span-2" : ""
								}`}
						></div>
					))}
				</div>
				<Button>Ver más</Button>
			</section>
			<section className="flex flex-col justify-center items-center z-10 w-full">
				<h2 className="text-2xl font-semibold">Testimonios</h2>
				<InfiniteMovingCards items={items} speed="slow" />
			</section>
		</section>
	);
}

import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { portfolioDB } from "@/config/portfolio";

export default function AboutPage() {
	return (
		<div>
			<h1 className="h-16 text-3xl font-semibold">Nuestro portafolio</h1>
			<ParallaxScroll images={portfolioDB} />
		</div>
	);
}

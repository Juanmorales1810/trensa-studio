import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import CallToAction from "@/components/callToAction";
import AboutScroll from "@/components/aboutScroll";
import SwiperHome from "@/components/swiperHome";
import Videocard from "@/components/videocard";
import Acordeon from "@/components/acordeon";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import Bento from "@/components/bento";
import Form from "@/components/form";


export default function Home() {
	const items = [
		{
			quote: "Excelente empresa muy atentos en todo momento a todas nuestras dudas, respecto a las fotos están hermosas captaron cada momento especial de nuestra ceremonia, cada una de ellas me transporta al día de nuestra boda. Muchas gracias por plasmar cada recuerdo de ese día tan especial.",
			name: "Lejos los mejores !!!!!",
			title: "Karla A. , se casó el 12/11/2022",
			image: "/testimonios/Karla A.png"
		},
		{
			quote: "El servicio estuvo increíble, estuvo siempre para nosotros, nos ayudó porque con los nervios uno se pierde un poco, estuvo en cada momento captando lo mejor, y nos acogió cada idea con súper buena disposición! Además de que las fotos estaban hermosas todo salió hermoso!",
			name: "Agradecidos",
			title: "Give M. , se casó el 06/01/2024",
			image: "/testimonios/Give M.png"
		},
		{
			quote: "Quiero dejar mi experiencia con trenza, más bien con Ignacio, comenzar por destacar su disposición, ya sabrán que es heavy organizar un matrimonio, más aún cuando quieres que todo sea un detalle, en trenza encontramos disposición, profesionalidad, calidad pero por sobre todo calidez son mágico creando momentos únicos, en poquito tiempo y con un presupuesto propuesto, lograron perfectamente captar lo que necesitábamos sin lugar a dudas un servicio totalmente recomendable.",
			name: "Secos!",
			title: "Cony , se casó el 04/02/2023",
			image: "/testimonios/Cony.png"
		},
		{
			quote: "Trabajamos con el estudio Trenza durante nuestro matrimonio en Valle del Elqui. Quiero destacar que todo el servicio fue de acuerdo a nuestro acuerdo, siempre se mostraron flexibles a cualquier requerimiento nuestro. El resultado de las fotos, videos y albunes fueron de todo nuestro gusto, incluso superando nuestras expectativas. Sin dudas recomiendo a estudio trenza y agradezco su profesionalismo",
			name: "Profesionalidad, comunicación y Calidad",
			title: "Yazid R. , se casó el 19/11/2022",
			image: "/testimonios/Yazid R.png"
		},
		{
			quote: "Felipe y su equipo son unas bellas personas, me encanto su trabajo. Lo recomiendo al 100% con ellos van a lo seguro.",
			name: "Me encanto!",
			title: "Dayanna A. , se casó el 18/11/2022",
			image: "/testimonios/Dayanna A.png"
		},
		{
			quote: "Felipe, nuestro fotógrafo, nos entregó todo la tranquilidad y confianza en nuestro gran día. Estuvo ahí presente, corriendo de un lado a otro para poder grabar los mejores momentos de nuestro gran día. Nos diste mucha confianza en la sesión de fotos.",
			name: "Tranquilidad máxima",
			title: "Jonathan O. , se casó el 07/01/2022",
			image: "/testimonios/Jonathan O.png"
		},
		{
			quote: "La verdad que agradecer enormemente el profesionalismo y serenidad que nos transmitieron en un momento tan especial como lo fue nuestro matrimonio, ya que gracias a ustedes disfrutamos de forma muy tranquila y muy agradable nuestro gran día.",
			name: "Agradecimientos",
			title: "Alvaro C. , se casó el 17/11/2021",
			image: "/testimonios/Alvaro C.png"
		}
	];
	return (
		<section className="flex flex-col w-full items-center overflow-hidden md:overflow-visible">
			<section className="relative h-auto min-h-screen w-full">
				<div className="h-auto w-full [mask-image:radial-gradient(ellipse_80%_100%_at_100%_-10%,#000_90%,transparent_110%)]">
					<SwiperHome />
				</div>
				<div className="flex flex-col justify-center items-center z-30 absolute bottom-10 left-[0%] md:left-[15%] md:top-1/2">
					<Image src="/logo/Logo sin Nada.png" alt="Logo" width={400} height={124} className="pl-4 mb-4 rounded-none" />
					<h1 className="text-3xl font-bold text-center mb-1 w-full max-w-2xl">Fotografía y Video Profesional para Bodas y Matrimonios en La Serena y Santiago</h1>
					<p className="text-lg text-center text-zinc-700 w-full max-w-2xl">
						Capturamos cada momento especial de tu boda, desde los preparativos hasta la
						celebración, con un enfoque único y emotivo. ¡Consulta nuestros servicios y personaliza tu
						experiencia!
					</p>
					<Button size="sm" as={Link} href="/portfolio" className="bg-[#7CA4DC] mt-4 font-semibold text-black">Contactanos</Button>
				</div>
			</section>
			<section id="services" data-section="services" className="flex flex-col justify-center items-center z-10 w-full pt-16">
				<h2 className="text-2xl font-semibold">Servicios Principales Fotografía Matrimonios</h2>
				<p className="text-lg text-center text-zinc-700 w-full max-w-2xl">
					Preservamos los momentos más bellos de tu día especial. Ofrecemos sesiones fotográficas
					en un estilo que se ajusta a tu visión: documental, clásico o artístico.
				</p>
				<section className="flex flex-wrap max-w-5xl w-full justify-center items-center gap-2 py-10 h-auto md:justify-between md:gap-8">
					<Videocard
						srcimg="/service/Comp 1 (0-00-00-10).jpg"
						srcvid="/service/card1.mp4"
						title="Registro completo de la boda"
						subtitle=""
						href="/services"
					/>
					<Videocard
						srcimg="/service/Comp 1 (0-00-00-10).jpg"
						srcvid="/service/card1.mp4"
						title="Sesión de fotos con novios e invitados"
						subtitle=""
						href="/services"
					/>
					<Videocard
						srcimg="/service/Comp 1 (0-00-00-10).jpg"
						srcvid="/service/card1.mp4"
						title="Fotografía de preparativos y ceremonia"
						subtitle=""
						href="/services"
					/>
				</section>
			</section>
			<section id="portfolio" data-section="portfolio" className="flex flex-col justify-center items-center w-full max-w-5xl h-auto px-2 z-10 pt-16">
				<h2 className="text-2xl font-semibold pb-4">Un poco de nosotros</h2>
				<Bento />
				<Button as={Link} href="/portfolio" className="bg-[#7CA4DC] text-black">Ver más</Button>
			</section>
			<section id="testimonials" data-section="testimonials" className="flex flex-col justify-center items-center z-10 w-full overflow-hidden pt-16">
				<h2 className="text-2xl font-semibold">Testimonios</h2>
				<InfiniteMovingCards items={items} speed="slow" />
			</section>
			<section className="flex flex-col justify-center items-center z-10 w-full">
				<CallToAction />
			</section>
			<section className="flex flex-col justify-center items-center z-10 w-full">
				<h2 className="text-2xl font-semibold">Detalles de Nuestros Servicios</h2>
				<AboutScroll />
			</section>
			<section id="contact" data-section="contact" className="flex flex-col justify-center items-center z-10 w-full pt-16">
				<h2 className="text-2xl font-semibold">Contactanos</h2>
				<section className="flex flex-col-reverse max-w-5xl w-full justify-center items-center gap-8 py-10 h-auto md:items-start md:flex-row md:justify-between md:gap-8">
					<div className="flex flex-col items-center md:w-1/2 px-2">
						<p className="text-xl text-center text-pretty md:text-left">
							Si llegaste hasta acá es porque estás interesado(a) en nuestros servicios de fotografía de matrimonios, nosotros felices de escucharte.
							<br />
							<br />
							Si deseas cotizar fotógrafo de matrimonios, déjanos tus datos y te enviaremos una cotización en un máximo de 24 horas
						</p>
						<br />
						<Image src="/home/sonrisa.jpg" alt="Contacto" width={400} height={400} className="rounded-xl hidden md:block" />
					</div>
					<Form />
				</section>
			</section>
			<section className="flex flex-col justify-center items-center z-10 w-full max-w-3xl">
				<h2 className="text-2xl font-semibold my-10">Preguntas frecuentes</h2>
				<Acordeon />
			</section>
			<section className="grid items-center justify-center grid-cols-1 px-4 py-24 text-center lg:grid-cols-3">
				<div className="col-auto lg:col-start-2">
					<p className="mb-2 text-2xl font-semibold text-primary">Descarga nuestra guía completa de servicios</p>
					<h2 className="mb-6 font-serif text-3xl font-normal tracking-tight md:leading-tight md:text-4xl md:mb-6">y conoce todos los detalles sobre cómo
						podemos capturar tu boda de una manera única y especial.</h2>
					<Button size="sm" as={Link} href="/Curso Marketing Bodas.pdf" target="_blank" className="bg-[#7CA4DC] mt-4 font-semibold text-black">Descargar curso</Button>
				</div>
			</section>
		</section>
	);
}

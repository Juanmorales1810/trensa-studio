import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import CallToAction from "@/components/callToAction";
import AboutScroll from "@/components/aboutScroll";
import SwiperHome from "@/components/swiperHome";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import Bento from "@/components/bento";
import Videocard from "@/components/videocard";
import { Input, Textarea } from "@nextui-org/input";
import { DatePicker } from "@nextui-org/date-picker";
import { Checkbox } from "@nextui-org/checkbox";


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
				<SwiperHome />
				<div className="flex flex-col justify-center items-center z-30 absolute bottom-10 left-[0%] md:left-[15%] md:top-1/2">
					<Image src="/logo/Logo sin Nada.png" alt="Logo" width={400} height={124} className="pl-4 mb-4 rounded-none" />
					<h2 className="text-3xl font-bold text-center mb-1">Bienvenidos a Trenza Estudio Matrimonios</h2>
					<h1 className="text-lg text-center text-zinc-700">
						Capturando Momentos Únicos en La Serena y Santiago
					</h1>
					<Button size="sm" as={Link} href="/portfolio" className="bg-[#7CA4DC] mt-4 font-semibold text-black">Contactanos</Button>
				</div>
			</section>
			<section id="services" data-section="services" className="flex flex-col justify-center items-center z-10 w-full pt-16">
				<h2 className="text-2xl font-semibold">Nuestros Servicios</h2>
				<section className="flex flex-wrap max-w-5xl w-full justify-center items-center gap-2 py-10 h-auto md:justify-between md:gap-8">
					<Videocard
						srcimg="/service/Comp 1 (0-00-00-10).jpg"
						srcvid="/service/card1.mp4"
						title="Fotografía de Matrimonios"
						subtitle="Detalles sobre los servicios de fotografía, incluyendo sesiones preboda y de compromiso."
						href="/services"
					/>
					<Videocard
						srcimg="/service/Comp 1 (0-00-00-10).jpg"
						srcvid="/service/card1.mp4"
						title="Video de Matrimonios"
						subtitle="Información sobre la producción de videos de bodas, desde la ceremonia hasta la recepción."
						href="/services"
					/>
					<Videocard
						srcimg="/service/Comp 1 (0-00-00-10).jpg"
						srcvid="/service/card1.mp4"
						title="Cobertura Completa de Bodas"
						subtitle="Paquetes de servicios que incluyen fotografía y video."
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
					<form className="flex flex-col gap-2 md:w-1/2">
						<Input color="primary" label="Nombre completo" />
						<Input color="primary" label="Teléfono" />
						<Input color="primary" label="Mail" />
						<DatePicker color="primary" label="Fecha del evento" />
						<Textarea color="primary" label="Tienes alguna consulta?" />
						<p className="text-lg font-bold">¿Cómo prefieres que nos contactemos?</p>
						<Checkbox color="primary">
							Teléfono
						</Checkbox>
						<Checkbox color="primary">
							WhatsApp
						</Checkbox>
						<Button type="submit" className="bg-[#7CA4DC] text-black font-semibold">Enviar</Button>
					</form>
				</section>
			</section>


		</section>
	);
}

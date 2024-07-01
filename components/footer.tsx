import { Image } from "@nextui-org/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="z-10">
            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="flex justify-center text-teal-600">
                    <Image src="/logo/Logo sin Nada.png" alt="Logo" width={300} className="rounded-none" />
                </div>

                <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
                    Trenza Estudio Matrimonios ofrece servicios de fotografía y video de bodas en La Serena y Santiago. Capturamos los momentos más especiales de tu boda con profesionalismo y creatividad.
                </p>

                <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                    <li>
                        <Link className="text-gray-700 transition hover:text-gray-700/75" href="/#services"> Servicios </Link>
                    </li>

                    <li>
                        <Link className="text-gray-700 transition hover:text-gray-700/75" href="#"> Portafolio </Link>
                    </li>

                    <li>
                        <Link className="text-gray-700 transition hover:text-gray-700/75" href="#"> Testimonio </Link>
                    </li>

                    <li>
                        <Link className="text-gray-700 transition hover:text-gray-700/75" href="#"> Blogs </Link>
                    </li>

                    <li>
                        <Link className="text-gray-700 transition hover:text-gray-700/75" href="#"> Contacto </Link>
                    </li>

                </ul>

                <ul className="mt-12 flex justify-center gap-6 md:gap-8">
                    <li>
                        <Link
                            href="https://www.facebook.com/trenzaestudiomatrimonios"
                            rel="noreferrer"
                            target="_blank"
                            className="text-gray-700 transition hover:text-gray-700/75"
                        >
                            <span className="sr-only">Facebook</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    fillRule="evenodd"
                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="https://www.instagram.com/trenzaestudiofotos/"
                            rel="noreferrer"
                            target="_blank"
                            className="text-gray-700 transition hover:text-gray-700/75"
                        >
                            <span className="sr-only">Instagram</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    fillRule="evenodd"
                                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="https://wa.me/+56923748433?text=Hola!%20Quisiera%20hablar%20con%20un%20representante."
                            rel="noreferrer"
                            target="_blank"
                            className="text-gray-700 transition hover:text-gray-700/75"
                        >
                            <span className="sr-only">WhatsApp</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z" />
                            </svg>
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="https://www.google.com/search?q=Trenza+Fotograf%C3%ADas+Matrimonios&stick=H4sIAAAAAAAA_-NgU1I1qDAxMUhKTTMyTjE2T7Y0trC0MqgwtUxJTE1NMTE0TU5JNko0XMQqH1KUmleVqOCWX5KfXpSYdnhtYrGCb2JJUWZufl5mfjEAdfxBmksAAAA&hl=es&mat=Cfr3-vZQSq86ElcBezTaAbpJUv8Y2_ZdqvKRp99_OSR-rquOhdfsDWyk-saj1SKpuvJdpnRn_ia3eTDv6JXfIxLk98cRdGQZdi9tnMJSmg9EDguw_3bVUImxhpEfroyXzzU&authuser=0"
                            rel="noreferrer"
                            target="_blank"
                            className="text-gray-700 transition hover:text-gray-700/75"
                        >
                            <span className="sr-only">Google Maps</span>
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 192 192" aria-hidden="true">
                                <path strokeWidth="17" d="M96 22a51.88 51.88 0 0 0-36.77 15.303A52.368 52.368 0 0 0 44 74.246c0 16.596 4.296 28.669 20.811 48.898a163.733 163.733 0 0 1 20.053 28.38C90.852 163.721 90.146 172 96 172c5.854 0 5.148-8.279 11.136-20.476a163.723 163.723 0 0 1 20.053-28.38C143.704 102.915 148 90.841 148 74.246a52.37 52.37 0 0 0-15.23-36.943A51.88 51.88 0 0 0 96 22Z" />
                                <circle cx="96" cy="74" r="20" strokeWidth="17" />
                            </svg>
                        </Link>
                    </li>
                </ul>
                <div className="mt-12 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Trenza Estudio Matrimonios. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}
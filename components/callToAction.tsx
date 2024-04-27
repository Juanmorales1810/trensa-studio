import { Button } from "@nextui-org/button";

export default function CallToAction() {
    return (
        <section className="w-full">
            <div className="w-full px-4 py-20 mx-auto text-left md:text-center md:w-3/4 lg:w-2/4">
                <p className="mb-2 text-base font-semibold text-red-600">LLamado a la acción</p>
                <h2 className="mb-6 text-3xl font-extrabold tracking-tight md:text-4xl md:mb-6 md:leading-tight">Algún texto para llamar la atención al cliente y haga click.</h2>
                <div className="mb-0 space-x-0 md:space-x-2">
                    <Button
                        color="danger"
                        variant="shadow"
                        endContent={
                            <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        }>
                        Empieza ahora
                    </Button>
                    <Button
                        endContent={
                            <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    fillRule="evenodd"
                                    d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        }>
                        Has click aquí
                    </Button>
                </div>
            </div>
        </section>

    )
}
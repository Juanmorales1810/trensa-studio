import { DatePicker } from "@nextui-org/date-picker";
import { Input, Textarea } from "@nextui-org/input";
import { Checkbox } from "@nextui-org/checkbox";
import { Button } from "@nextui-org/button";

export default function Form() {
    return (
        <form className="flex flex-col gap-2 w-full md:w-1/2 px-2">
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
    )
}

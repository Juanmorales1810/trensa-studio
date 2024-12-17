"use client"

import { getLocalTimeZone, today } from '@internationalized/date';
import { zodResolver } from '@hookform/resolvers/zod';
import { DatePicker } from "@nextui-org/date-picker";
import { Input, Textarea } from "@nextui-org/input";
import { useLoading } from "@/hooks/useLoading";
import { Checkbox } from "@nextui-org/checkbox";
import { Button } from "@nextui-org/button";
import { useFetch } from "@/hooks/useFetch";
import { useForm } from 'react-hook-form';
import { useCallback } from 'react';
import * as z from 'zod';

type Inputs = {
    fullname: string;
    phone: number;
    email: string;
    date: string;
    message: string;
    checkphone: boolean;
    checkwhatsapp: boolean;
};
const schema = z.object({
    fullname: z
        .string()
        .min(3, { message: 'El nombre debe tener al menos 3 caracteres' })
        .max(50, { message: 'El nombre debe tener menos de 50 caracteres' }),
    phone: z.string()
        .min(9, { message: 'El teléfono debe tener al menos 9 caracteres' })
        .max(14, { message: 'El teléfono debe tener menos de 14 caracteres' }),
    email: z.string().email(),
    date: z.string(),
    message: z.string()
        .min(10, { message: 'El mensaje debe tener al menos 10 caracteres' })
        .max(500, { message: 'El mensaje debe tener menos de 500 caracteres' }),
    checkphone: z.boolean().optional(),
    checkwhatsapp: z.boolean().optional(),
});


export default function Form() {
    const { finishLoading, isLoading, startLoading } = useLoading()
    const Fetch = useFetch()
    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<Inputs>({
        resolver: zodResolver(schema)
    });

    const setDateValue = useCallback(
        (value: any) => {
            const isoString = value
                .toDate(getLocalTimeZone())
                .toISOString()
                .split('T')[0];
            setValue('date', isoString);
        },
        [setValue]
    );

    const onSubmit = handleSubmit(async (data) => {

        startLoading()
        await Fetch({
            endpoint: 'send',
            formData: data,
            method: 'POST'
        })
        finishLoading()
    })

    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-2 w-full md:w-1/2 px-2">
            <Input
                type='text'
                id="fullname"
                color="primary"
                label="Nombre completo"
                {...register("fullname")}
                isInvalid={!!errors.fullname}
                errorMessage={errors.fullname?.message}
            />
            <Input
                type='number'
                id="phone"
                color="primary"
                label="Teléfono"
                {...register("phone")}
                isInvalid={!!errors.phone}
                errorMessage={errors.phone?.message}
            />
            <Input
                type='email'
                id="email"
                color="primary"
                label="Mail"
                {...register("email")}
                isInvalid={!!errors.email}
                errorMessage={errors.email?.message}
            />
            <DatePicker
                id="date"
                color="primary"
                label="Fecha del evento"
                showMonthAndYearPickers={true}
                onChange={setDateValue}
                isInvalid={!!errors.date}
                errorMessage={errors.date?.message}
                minValue={today(getLocalTimeZone())}
            />
            <Textarea
                type='text'
                id="message"
                color="primary"
                label="Tienes alguna consulta?"
                {...register("message")}
                isInvalid={!!errors.message}
                errorMessage={errors.message?.message}
            />
            <p className="text-lg font-bold">
                ¿Cómo prefieres que nos contactemos?
            </p>
            <Checkbox
                id="checkphone"
                color="primary"
                {...register("checkphone")}
            >
                Teléfono
            </Checkbox>
            <Checkbox
                id="checkwhatsapp"
                color="primary"
                {...register("checkwhatsapp")}
            >
                WhatsApp
            </Checkbox>
            <Button
                className="bg-[#7CA4DC] text-black font-semibold"
                type="submit"
                isLoading={isLoading}
            >
                Enviar
            </Button>
        </form>
    )
}


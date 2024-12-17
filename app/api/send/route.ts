import { EmailTemplate } from "@/components/email-template";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const body = await req.json();

        // Validar que esten todos los campos enviados
        if (
            !body?.fullname ||
            !body?.phone ||
            !body?.email ||
            !body?.date ||
            !body?.message
        ) {
            return NextResponse.json(
                {
                    message: "Todos los campos son requeridos",
                },
                {
                    status: 400,
                }
            );
        }

        const { data, error } = await resend.emails.send({
            from: "TrenzaMatrimonios <onboarding@resend.dev>",
            to: ["trenzaestudio@gmail.com"],
            subject: "Consulta de Trenza Matrimonios",
            react: EmailTemplate({
                fullname: body.fullname,
                phone: body.phone,
                email: body.email,
                date: body.date,
                message: body.message,
                checkphone: body.checkphone,
                checkwhatsapp: body.checkwhatsapp,
            }),
        });
        if (error) {
            return NextResponse.json(
                {
                    message: "Error al enviar el correo",
                },
                {
                    status: 500,
                }
            );
        }
        return NextResponse.json(
            {
                message: "Correo enviado exitosamente",
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        return NextResponse.json(
            {
                message: "Error al enviar el correo",
            },
            {
                status: 500,
            }
        );
    }
}

import * as React from 'react';

interface EmailTemplateProps {
    fullname: string;
    phone: string;
    email: string;
    date: string;
    message: string;
    checkphone?: boolean;
    checkwhatsapp?: boolean;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    fullname, phone, email, date, message, checkphone, checkwhatsapp
}) => (
    <div style={
        {
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f9f9f9',
            padding: '20px',
            color: '#000',
            borderRadius: '5px',
            border: '1px solid #ddd',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            maxWidth: '600px',
            margin: '0 auto',
        }
    }>
        <h1>Hola Felipe tenes esta consulta en la Pagina Web de Trenza Matrimonios!</h1>
        <div
            style={
                {
                    padding: '20px',
                    width: '100%',
                    margin: '20px 0',
                }
            }
        >
            <h3>Nombre: {fullname}</h3>
            <h3>Telefono: {phone}</h3>
            <h3>Email: {email}</h3>
            <h3>Fecha del evento: {date}</h3>
            <h3>Mensaje: {message}</h3>
            <div
                style={
                    {
                        display: 'flex',
                        width: '100%',
                    }
                }
            >
                {checkphone &&
                    <a
                        href={`tel:${phone}`}
                        style={
                            {
                                display: 'block',
                                color: '#fff',
                                backgroundColor: '#007bff',
                                padding: '10px',
                                borderRadius: '5px',
                                textAlign: 'center',
                                textDecoration: 'none',
                                margin: '0 15px',
                                width: '30%',
                            }
                        }
                    >
                        Teléfono
                    </a>
                }
                {checkwhatsapp &&
                    <a
                        href={`https://wa.me/+54${phone}`}
                        style={
                            {
                                display: 'block',
                                color: '#fff',
                                backgroundColor: '#25d366',
                                padding: '10px',
                                borderRadius: '5px',
                                textAlign: 'center',
                                textDecoration: 'none',
                                margin: '0 15px',
                                width: '30%',
                            }
                        }
                    >
                        WhatsApp
                    </a>
                }
            </div>
        </div>
    </div>
);
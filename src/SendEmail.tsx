import React, { useState } from 'react';
import { BASE_URL } from "./App";

type FormData = {
    email: string;
    fullName: string;
    phone: string;
    message: string;
};

const SendEmail: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        phone: '',
        fullName: '',
        message: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        fetch(`${BASE_URL}/api/send-email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (response.ok) {
                    console.log('Comentario enviado con éxito', response.json());
                } else {
                    console.error('Error al enviar el comentario');
                }
            })
            .catch((error) => {
                console.error('Error en la petición:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit} className='form'>
            <div>
                <label htmlFor="fullName">Nombre:</label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="phone">Telefono:</label>
                <input
                    type="number"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="email">E-mail:</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="message">Comentario:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default SendEmail;
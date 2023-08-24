import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
import { BASE_URL } from "./App";


const schema = yup.object({
    email: yup.string().email().required(),
    phone: yup.string().min(9).max(15).required(),
    fullName: yup.string().min(3).max(20).required(),
    message: yup.string().min(3).max(20).required()
}).required();
type FormData = yup.InferType<typeof schema>;


const SendEmail: React.FC = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    });



    const handleFetch = (data: FormData) => {
        

        fetch(`${BASE_URL}/api/send-email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
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
        <form onSubmit={handleSubmit(handleFetch)} className='form'>
            <div>
                <label htmlFor="fullName">Nombre:</label>
                <input
                    type="text"
                    id="fullName"
                    
                    {...register("fullName")}
                />
            </div>
            <div>
                <label htmlFor="phone">Telefono:</label>
                <input
                    
                    type="number"
                    id="phone"
                    
                    {...register("phone")}
                />
            </div>
            <div>
                <label htmlFor="email">E-mail:</label>
                <input
                    type="text"
                    id="email"
                    {...register("email")}
                />
            </div>
            <div>
                <label htmlFor="message">Comentario:</label>
                <textarea
                    id="message"
                    {...register("message")}

                />
                <p>{errors.message?.message}</p>
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default SendEmail;
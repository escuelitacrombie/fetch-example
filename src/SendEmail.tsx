import { useEffect, useState } from "react";
import { BASE_URL } from "./App";

type SendEmail = {
    fullName: string,
    email: string,
    phone: number,
    message: string,
};

const SendEmail = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [j, setj] = useState({})

  const send = () =>{
    setj(
        {
            "fullName": fullName,
            "email": email,
            "phone": phone,
            "message": message,
        }
    )

    fetch(`${BASE_URL}/api/send-email`, {
        method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(j)
    })
  }


  return (
    <div>
        <input onChange={(e) => setFullName(e.target.value)} type="text" placeholder="name" name="fullName"/>
        <input onChange={(e) => setEmail(e.target.value)} type="email"  placeholder="email" name="email"/>
        <input onChange={(e) => setPhone(e.target.value)} type="phone" placeholder="number" name="phone"/>
        <input onChange={(e) => setMessage(e.target.value)} type="text" placeholder="message" name="message"/>
        <button onClick={()=> send()}>enviar</button>
    </div>
  );
};

export default SendEmail
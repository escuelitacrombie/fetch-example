import { useState } from "react";
import { BASE_URL } from "./App";

const SendMail = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");

  const send = () => {
    fetch(`${BASE_URL}/api/send-email`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, surname, email }),
    });
  };

  return (
    <div>
      <h4>send mail</h4>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="name"
      />
      <input
        onChange={(e) => setSurname(e.target.value)}
        type="text"
        placeholder="surname"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="email"
      />
      <button onClick={() => send()}>Send</button>
    </div>
  );
};

export default SendMail;

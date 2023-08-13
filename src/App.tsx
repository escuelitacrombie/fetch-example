import { useEffect, useState } from "react";

type Suscription = {
  title: string;
  price: number | "Free";
  benefits: string[];
  currency: "U$S" | "$ARG";
  type: "monthly" | "daily" | "weekly";
};

const BASE_URL = "https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com";

function App() {
  const [suscriptions, setSuscriptions] = useState<Suscription[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    setLoading(true);
    fetch(`${BASE_URL}/api/subscription`)
      .then((response) => {
        response.json().then((result) => {
          setSuscriptions(result);
        });
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {suscriptions.map((suscriptions) => (
        <div key={suscriptions.title}>
          <p>{suscriptions.title}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

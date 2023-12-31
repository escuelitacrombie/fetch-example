import { useEffect, useState } from "react";
import { BASE_URL } from "./App";

type Suscription = {
  title: string;
  price: number | "Free";
  benefits: string[];
  currency: "U$S" | "$ARG";
  type: "monthly" | "daily" | "weekly";
};

const Subscription = () => {
  const [subcriptions, setSubcriptions] = useState<Suscription[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    setLoading(true);
    fetch(`${BASE_URL}/api/subscription`)
      .then((response) => {
        response.json().then((result) => {
          setSubcriptions(result);
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
      {subcriptions.map((subscription) => (
        <div className="card" key={subscription.title}>
          <p>{subscription.title}</p>
          {subscription.benefits.map((benefit) => (
            <p key={`${subscription.title + benefit}`}>{benefit}</p>
          ))}
          <p>{subscription.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Subscription;

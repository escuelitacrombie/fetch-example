import { useEffect, useState } from "react";
import { BASE_URL } from "./App";
import './testi.css'

type Testimonial = {
    avatar: string,
    fullName: string,
    testimonial: string
};

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    setLoading(true);
    fetch(`${BASE_URL}/api/testimonial`)
      .then((response) => {
        response.json().then((result) => {
            setTestimonials(result);
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
      {testimonials.map(( t ) => (
        <div className="card" key={t.avatar}>
        <img src={t.avatar} alt="" />
          <p>{t.fullName}</p>
          <p>{t.testimonial}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonial
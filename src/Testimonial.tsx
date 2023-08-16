import { useEffect, useState } from "react";
import { BASE_URL } from "./App";

type Suscription = {
  avatar: string;
  fullName: string;
  testimonial: string;
};

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState<Suscription[]>([]);
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
      <h4>Testimonials</h4>
      {testimonials.map((testimonial) => (
        <div className="card" key={testimonial.fullName}>
          <img style={{ width: "100px" }} src={testimonial.avatar} alt="" />
          <p>{testimonial.fullName}</p>
          <p>{testimonial.testimonial}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonial;

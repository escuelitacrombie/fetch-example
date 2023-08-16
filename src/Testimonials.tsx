import { useEffect, useState } from "react";
import { BASE_URL } from "./App";

type Testimonial = {
    avatar: string;
    fullName: string;
    testimonial: string;
};

const Testimonials = () => {
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
            {testimonials.map((testimonial) => (
                <div className="card" key={testimonial.fullName}>
                    <div className="info-user">
                        <img src={testimonial.avatar} className="img-testimonial" />
                        <h3>{testimonial.fullName}</h3>
                    </div>

                    <p>{testimonial.testimonial}</p>
                </div>
            ))}
        </div>
    );
};

export default Testimonials;

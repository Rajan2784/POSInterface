import React, { useState } from "react";
import ServicesList from "../components/ServicesList";
import { useNavigate } from "react-router";
import { FaShoppingCart } from "react-icons/fa";
import { GrYoga } from "react-icons/gr";
import { RiPsychotherapyFill } from "react-icons/ri";
import { GiHeartWings } from "react-icons/gi";
import { useSelector } from "react-redux";

const Home = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      name: "Yoga Class",
      description:
        "Experience the transformative power of yoga with our expert instructors. Our classes cater to all levels, from beginners to experienced practitioners. Improve flexibility, strength, and mental clarity while cultivating a sense of calm and well-being.",
      price: 2000,
      icon: <GrYoga />,
      image:
        "https://media.istockphoto.com/id/1483989758/photo/diverse-yoga-class-participants-doing-a-side-plank-on-their-yoga-mats-in-a-beautiful-yoga.webp?a=1&b=1&s=612x612&w=0&k=20&c=kEvewO27lhmnW47sP3Z-P58VvM9OutXD0l6Z9iqo680=",
    },
    {
      id: 2,
      name: "Therapy Session",
      description:
        "Our experienced therapists provide a safe and supportive space for you to explore personal challenges, address mental health concerns, and cultivate emotional well-being. We offer individual and couples therapy to help you achieve your goals and live a more fulfilling life.",
      price: 2500,
      icon: <RiPsychotherapyFill />,
      image:
        "https://media.istockphoto.com/id/1472972348/photo/young-adult-male-gestures-while-speaking-with-his-mental-health-therapist.webp?a=1&b=1&s=612x612&w=0&k=20&c=WBN44G6bpqhgO4j8u-doOYwCBJzkIrMeBMMFBo7C1sg=",
    },
    {
      id: 3,
      name: "Art Workshop",
      description:
        "Unleash your creativity with our art workshops! Our experienced instructors will guide you through a variety of projects, from painting to sculpture. No prior experience is required - just bring your enthusiasm and an open mind.",
      price: 3000,
      icon: <GiHeartWings />,
      image:
        "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0fGVufDB8fDB8fHww",
    },
  ]);
  const navigate = useNavigate();
  const { cartItems } = useSelector((store) => store.cart);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Our Services</h1>
        <button
          className="relative px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
          onClick={() => navigate("/cart")}
        >
          <FaShoppingCart className="relative" />
          {cartItems.length > 0 && (
            <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </button>
      </div>
      <ServicesList services={services} />
    </div>
  );
};

export default Home;

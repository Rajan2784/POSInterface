import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../reduxStore/slices/cartSlice";
import { Bounce, toast, ToastContainer } from "react-toastify";

const ServicesList = ({ services }) => {
  const dispatch = useDispatch();
  const HandleaddToCart = (service) => {
    // sending the cart object to the redux store using the dispatch function
    dispatch(
      addToCart(
        addToCart({
          id: service.id,
          title: service.name,
          price: service.price,
        })
      )
    );
    toast.success("Added to cart", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <>
      {/* // Toast container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

      <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {services.map((service) => (
          <li
            key={service.id}
            className="p-4 mx-auto border rounded-lg shadow hover:shadow-lg lg:grid lg:grid-cols-6 gap-2 place-items-center"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-60 object-cover rounded-lg lg:col-span-3"
            />

            <div className="lg:col-span-3 flex flex-col justify-between">
              <h2 className="text-lg font-semibold flex items-center gap-1">
                {" "}
                <span className="inline-block">{service.icon}</span>{" "}
                {service.name}
              </h2>
              <p className="mt-2 mb-3">{service.description}</p>
              <div className="flex mt4 justify-between items-center">
                <p className="text-gray-900 font-semibold">
                  Price: ₹{service.price}
                </p>
                <button
                  className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  onClick={() => HandleaddToCart(service)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ServicesList;

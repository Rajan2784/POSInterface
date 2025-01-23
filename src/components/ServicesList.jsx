import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../reduxStore/slices/cartSlice";
import { Bounce, toast, ToastContainer } from "react-toastify";

const ServicesList = ({ services }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const HandleaddToCart = (service) => {
    dispatch(
      addToCart({
        id: service.id,
        title: service.name,
        price: service.price,
      })
    );
    toast.success("Added to cart", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <>
      {/* Toast container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {services.map((service) => {
          const isInCart = cartItems.some((item) => item?.id === service?.id);

          return (
            <li
              key={service.id}
              className="p-4 mx-auto border rounded-lg shadow hover:shadow-lg lg:grid lg:grid-cols-6 gap-4 place-items-center"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-60 object-cover rounded-lg lg:col-span-3"
              />

              <div className="lg:col-span-3 flex flex-col justify-between">
                <h2 className="text-lg font-semibold flex items-center gap-1">
                  <span className="inline-block">{service.icon}</span>
                  {service.name}
                </h2>
                <p className="mt-2 mb-3">{service.description}</p>
                <div className="flex mt-4 justify-between items-center">
                  <p className="text-gray-900 font-semibold">
                    Price: ₹{service.price}
                  </p>
                  {isInCart ? (
                    <button
                      className="mt-2 px-4 py-2 bg-gray-400 text-white rounded cursor-not-allowed"
                      disabled
                    >
                      Added to Cart
                    </button>
                  ) : (
                    <button
                      className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                      onClick={() => HandleaddToCart(service)}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ServicesList;

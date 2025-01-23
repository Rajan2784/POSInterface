import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../reduxStore/slices/cartSlice";
import { Bounce, toast, ToastContainer } from "react-toastify";

const ServicesList = ({ services }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const handleAddToCart = (service) => {
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

  // Filter services based on search query and selected filter
  const filteredServices = services.filter((service) => {
    const matchesSearchQuery = service.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" || service.category === selectedFilter;

    return matchesSearchQuery && matchesFilter;
  });

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

      {/* Search and Filter Section */}
      <div className="mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search for services..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Filter Dropdown */}
        <select
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
          className="w-full md:w-1/4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Categories</option>
          <option value="fitness">Fitness</option>
          <option value="therapy">Therapy</option>
          <option value="workshop">Workshops</option>
        </select>
      </div>

      {/* Services List */}
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {filteredServices.map((service) => {
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
                      onClick={() => handleAddToCart(service)}
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

      {/* No Results Message */}
      {filteredServices.length === 0 && (
        <p className="text-center text-gray-500 mt-4">
          No services match your criteria.
        </p>
      )}
    </>
  );
};

export default ServicesList;

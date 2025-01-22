import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addCustomer } from '../reduxStore/slices/customerSlice';

const CheckoutPage = () => {
  const [customer, setCustomer] = useState({ name: '', email: '', phone: '' });
    const navigate = useNavigate();

const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
    dispatch(addCustomer({ ...customer, [name]: value }));
  };

  const handleCheckout = () => {
    console.log('Customer Details:', customer);
    navigate("/payment");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Customer Details</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border p-2 w-full mb-2"
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-2 w-full mb-2"
          onChange={handleInputChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          className="border p-2 w-full mb-4"
          onChange={handleInputChange}
        />
      </div>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        onClick={handleCheckout}
      >
        Complete Checkout
      </button>
    </div>
  );
};

export default CheckoutPage;

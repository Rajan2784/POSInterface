import React, { useState } from "react";
import {
  FaGooglePay,
  FaPaypal,
  FaCreditCard,
  FaApplePay,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addAmountPaid } from "../reduxStore/slices/cartSlice";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { analysis } from "../reduxStore/slices/analysisSlice";

const PaymentPage = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const [amountPaid, setAmountPaid] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);
  const handlePayment = () => {
    if (
      amountPaid.trim() === "" ||
      isNaN(amountPaid) ||
      Number(amountPaid) <= 0
    ) {
      toast.error("Please enter a valid amount.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }
    if (paymentMethod === "") {
      toast.error("Please select a payment method.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    const due = totalAmount - amountPaid;
    const soldServices = cartItems.length;
    const amountReceived = Number(amountPaid);
    
    dispatch(addAmountPaid({ amountPaid, paymentMethod }));
    dispatch(analysis({ totalAmount, amountReceived, due, soldServices }));
    toast.success("Payment Success", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    navigate("/receipt");
  };
  console.log(paymentMethod);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {/* // Toast container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
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
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Payment Gateway
        </h1>

        {/* Amount Section */}
        <div className="mb-8">
          <label className="block text-gray-600 font-semibold mb-2">
            Amount to be Paid: ₹{totalAmount}
          </label>
          <input
            type="text"
            placeholder="Enter amount (₹)"
            value={amountPaid}
            onChange={(e) => setAmountPaid(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div>

        {/* Payment Methods Section */}
        <p className="text-gray-600 text-center mb-4">
          Select a payment method:
        </p>
        <div className="space-y-4">
          {/* Google Pay */}
          <label className="flex items-center justify-between px-4 py-3 border border-gray-300 rounded-lg shadow-sm cursor-pointer hover:shadow-md">
            <span className="flex items-center gap-2 text-gray-700">
              <FaGooglePay className="text-2xl text-blue-600" />
              Google Pay
            </span>
            <input
              type="radio"
              name="payment"
              value={"GooglePay"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="form-radio text-indigo-600 focus:ring-indigo-500"
            />
          </label>

          {/* PayPal */}
          <label className="flex items-center justify-between px-4 py-3 border border-gray-300 rounded-lg shadow-sm cursor-pointer hover:shadow-md">
            <span className="flex items-center gap-2 text-gray-700">
              <FaPaypal className="text-2xl text-blue-500" />
              PayPal
            </span>
            <input
              type="radio"
              name="payment"
              value={"Paypal"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="form-radio text-indigo-600 focus:ring-indigo-500"
            />
          </label>

          {/* Credit Card */}
          <label className="flex items-center justify-between px-4 py-3 border border-gray-300 rounded-lg shadow-sm cursor-pointer hover:shadow-md">
            <span className="flex items-center gap-2 text-gray-700">
              <FaCreditCard className="text-2xl text-green-600" />
              Credit Card
            </span>
            <input
              type="radio"
              name="payment"
              value={"CreditCard"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="form-radio text-indigo-600 focus:ring-indigo-500"
            />
          </label>

          {/* Apple Pay */}
          <label className="flex items-center justify-between px-4 py-3 border border-gray-300 rounded-lg shadow-sm cursor-pointer hover:shadow-md">
            <span className="flex items-center gap-2 text-gray-700">
              <FaApplePay className="text-2xl text-black" />
              Apple Pay
            </span>
            <input
              type="radio"
              value={"ApplePay"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              name="payment"
              className="form-radio text-indigo-600 focus:ring-indigo-500"
            />
          </label>
        </div>

        {/* Proceed Button */}
        <button
          onClick={handlePayment}
          className="mt-6 w-full py-3 bg-indigo-600 text-white text-lg font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 transition-all"
        >
          Pay
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;

import React from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../reduxStore/slices/cartSlice";
import { clearCustomerDetails } from "../reduxStore/slices/customerSlice";
import { useNavigate } from "react-router";

const Receipt = () => {
  const { customer } = useSelector((state) => state.customer);
  const { cartItems, payment } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const due = total - payment.amountPaid;

  // Function to print the receipt
  const handlePrint = () => {
    window.print();
  };

  const handleNavigate = () => {
    dispatch(clearCart())
    dispatch(clearCustomerDetails())
    navigate("/")
  };

  return (
    <div className="receipt-container md:px-20 md:py-10 print-this border-2 sm:w-[80%] border-gray-300 rounded-md">
      <div className="receipt-header">
        <h1 className="text-center text-2xl font-semibold">Service Receipt</h1>
      </div>
      <div className="receipt-details">
        <h2 className="section-title border-b-2 text-xl font-semibold">
          Customer Details
        </h2>
        <p>
          <strong>Name:</strong> {customer.name}
        </p>
        <p>
          <strong>Email:</strong> {customer.email}
        </p>
        <p>
          <strong>Phone:</strong> {customer.phone}
        </p>
      </div>
      <div className="receipt-details">
        <h2 className="section-title">Purchased Services</h2>
        <table className="receipt-items table-auto border-collapse w-full text-center">
          <thead className="border border-gray-400">
            <tr>
              <th className="border border-gray-400">Service</th>
              <th className="border border-gray-400">Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>₹{item.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="section-title">Payment Details</h2>
      <table className="receipt-items table-auto border-collapse w-full text-center">
        <tbody>
          <tr>
            <td>Total Amount</td>
            <td>₹{total}</td>
          </tr>
          <tr>
            <td>Amount Paid</td>
            <td>₹{payment.amountPaid}</td>
          </tr>
          <tr>
            <td>Due Amount</td>
            <td>₹{due}</td>
          </tr>
          <tr>
            <td>Mode of Payment</td>
            <td>{payment.paymentMethod}</td>
          </tr>
        </tbody>
      </table>
      <h2 className=" text-center">Thank you for using our services!</h2>
      <p className="text-center">Please visit again!</p>

      <p className="mt-4">This is a computer generated receipt.</p>
      <p>No signature required.</p>
      <p>Powered by: ServiceX</p>
      <p>Generated At: {new Date().toUTCString()}</p>

      <button
        onClick={handlePrint}
        className="mt-4 px-4 py-2 bg-orange-500 text-white rounded"
      >
        Print Receipt
      </button>

      <p
        className="home-page px-2 py-3 border border-orange-600 w-fit mt-4 rounded-md cursor-pointer hover:bg-orange-600 hover:text-white duration-300"
        onClick={handleNavigate}
      >
        <span className="inline-block mr-1">
          <IoArrowBackCircleOutline />
        </span>
        Go to homepage
      </p>
    </div>
  );
};

export default Receipt;

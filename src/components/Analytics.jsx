import React from "react";
import { useSelector } from "react-redux";

const Analytics = () => {
  const { totalRevenue, totalServicesSold, totalRevenueGot, dueAmount } =
    useSelector((state) => state.analysis);

  return (
    <div className="p-4 border rounded-lg bg-gray-100 md:w-[80%] w-[90%]">
      <h2 className="section-title">Analysis Details</h2>
      <table className="table-auto border-collapse w-full text-center">
        <tbody>
          <tr>
            <td className="border p-2 text-left">Total Revenue</td>
            <td className="border p-2 text-left">₹{totalRevenue}</td>
          </tr>
          <tr>
            <td className="border p-2 text-left">Total Amount Received</td>
            <td className="border p-2 text-left">₹{totalRevenueGot}</td>
          </tr>
          <tr>
            <td className="border p-2 text-left">Due Amount</td>
            <td className="border p-2 text-left">₹{dueAmount}</td>
          </tr>
          <tr>
            <td className="border p-2 text-left">Number of sales</td>
            <td className="border p-2 text-left">{totalServicesSold}</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
};

export default Analytics;

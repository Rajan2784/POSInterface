import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../reduxStore/slices/cartSlice";

const Cart = ({items}) => {
  
    const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
      dispatch(removeFromCart(itemId));
      console.log(`item removed with ID: ${itemId}`);
  };

  return (
    <div>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table className="table-auto w-full border-collapse border border-gray-300 mt-4 text-center">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2">
                Service Title
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Price
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  {item.title}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  ₹{item.price}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    className="text-red-500 duration-200 border-red-500 border px-2 py-1 rounded hover:bg-red-500 hover:text-white"  
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Cart;

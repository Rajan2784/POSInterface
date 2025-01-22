import { useNavigate } from "react-router";
import Cart from "../components/Cart";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <Cart items={cartItems} />

      {/* Verifying whether the cart is empty or not based on that proceed button will work */}
      {cartItems.length > 0 && (
        <button
          onClick={() => navigate("/checkout")}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mt-5"
        >
          Proceed to Checkout
        </button>
      )}
      <p
        onClick={() => navigate("/")}
        className="px-2 py-3 mt-4 border-2 rounded-md w-fit cursor-pointer hover:bg-gray-500 duration-200 hover:text-white"
      >
        <span className="inline-block mr-2">
          <IoArrowBackCircleOutline />
        </span>
        Go back to home page
      </p>
    </div>
  );
};

export default CartPage;

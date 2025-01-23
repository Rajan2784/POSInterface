import React, { useState } from "react";
import Analytics from "../components/Analytics";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";

const Admin = () => {
  const tempAdmin = { id: "Admin", password: "admin@123" };
  const [loggedIn, setLoggedIn] = useState(false);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (tempAdmin.id === id && tempAdmin.password === password) {
      setLoggedIn(true);
    } else {
      toast.error("Please enter a valid credentials.", {
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
    }
  };

  return (
    <div className="w-full h-full">
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
      {loggedIn ? (
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-2xl text-center mt-5 mb-3">Admin Panel</h1>
          <Analytics />
          <button
            className="mt-6 w-24 py-3 border-red-500 border text-red-500 hover:text-white text-lg font-semibold rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-indigo-300 transition-all"
            onClick={() => navigate("/")}
          >
            Log out
          </button>
        </div>
      ) : (
        <div className="flex justify-center items-center w-svw h-svh bg-gradient-to-tr from-gray-400 to-gray-700">
          <form className="flex flex-col border border-gray-200 px-4 py-3 bg-white rounded-md shadow-md">
            <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
              Log in to access the admin page
            </h1>
            <input
              type="text"
              placeholder="Enter your id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 mt-3"
            />
            <button
              onClick={(e) => handleLogin(e)}
              className="mt-6 w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 transition-all"
            >
              Log in
            </button>

            <p>For testing purpose</p>
            <p>Admin id : Admin</p>
            <p>Admin password : admin@123</p>
          </form>
        </div>
      )}
    </div>
  );
};

export default Admin;

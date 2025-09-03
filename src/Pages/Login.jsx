import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if user exists in localStorage
    const storedUser = localStorage.getItem("registeredUser");

    if (!storedUser) {
      toast.error("Please create an account first!");
      return;
    }

    const parsedUser = JSON.parse(storedUser);

    // Validate credentials
    if (parsedUser.email === email && parsedUser.password === password) {
      localStorage.setItem("loggedInUser", JSON.stringify({ email }));
      navigate("/book-now"); // ✅ go back to Book Now page
    } else {
      toast.error("Please create an account first!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f9f7f4] to-[#f1ece5] flex items-center justify-center p-4">
      {/* background glow */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[#D4AF37] mix-blend-multiply filter blur-3xl animate-pulse"></div>
      </div>

      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        {/* header */}
        <div className="bg-[#1C1C1C] p-6 text-center">
          <h2 className="text-2xl font-light text-[#D4AF37] tracking-wide">
            AKOYA PREMIUM LAUNDRY
          </h2>
          <div className="mt-2 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          <p className="mt-2 text-gray-300 text-sm">Sign in to your account</p>
        </div>

        {/* form */}
        <div className="p-8">
          <form onSubmit={handleLogin}>
            {/* email */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full pl-3 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37]"
              />
            </div>

            {/* password */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full pl-3 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-lg text-white font-medium bg-gradient-to-r from-[#D4AF37] to-[#F1C232] hover:scale-105 transition-all"
            >
              Sign in
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link
              to="/sign-up"
              className="font-medium text-[#D4AF37] hover:text-yellow-600 border-b hover:border-[#D4AF37]"
            >
              Create your account
            </Link>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;

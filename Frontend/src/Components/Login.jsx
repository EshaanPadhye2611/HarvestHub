import React, { useState } from 'react';
import { GiFarmer } from "react-icons/gi";
import { FaTruck } from "react-icons/fa";
import { FaHotel } from "react-icons/fa6";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoLogInSharp } from "react-icons/io5";

const Login = () => {
  const [producerState, setProducerState] = useState("login");
  const [distributorState, setDistributorState] = useState("login");
  const [retailerState, setRetailerState] = useState("login");
  const [consumerState, setConsumerState] = useState("login");

  const toggleFormState = (role) => {
    if (role === "producer") {
      setProducerState(producerState === "login" ? "signup" : "login");
    } else if (role === "distributor") {
      setDistributorState(distributorState === "login" ? "signup" : "login");
    } else if (role === "retailer") {
      setRetailerState(retailerState === "login" ? "signup" : "login");
    } else if (role === "consumer") {
      setConsumerState(consumerState === "login" ? "signup" : "login");
    }
  };

  return (
    <div className="flex justify-center items-center w-full bg-green-100 animate-fadeIn">
      <div className="w-full p-6 bg-green-100 rounded-lg shadow-lg ">
        {/* Title and Description */}
        <h1 className="text-5xl font-bold text-center mb-4 text-green-900 flex items-center justify-center">
          <FaMapMarkerAlt className="text-5xl mr-2 text-green-600" />
          Access your dashboard
        </h1>
        <p className="text-2xl text-center mb-8 text-green-600 font-bold my-6">Select your role and access specialized features</p>

        {/* Login and Sign Up Forms */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {/* Producer Form */}
          <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-green-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <GiFarmer className="text-4xl mb-4 text-green-600" />
            <h2 className="text-xl font-semibold mb-4 text-green-800">Producer</h2>
            <div className="w-full mb-4">
              <label htmlFor="producer-email" className="block text-sm font-medium text-black mb-2">Email</label>
              <input
                type="email"
                id="producer-email"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Enter your email"
              />
            </div>
            {producerState === "signup" && (
              <div className="w-full mb-4">
                <label htmlFor="producer-username" className="block text-sm font-medium text-black mb-2">Username</label>
                <input
                  type="text"
                  id="producer-username"
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter your username"
                />
              </div>
            )}
            <div className="w-full mb-4">
              <label htmlFor="producer-password" className="block text-sm font-medium text-black mb-2">Password</label>
              <input
                type="password"
                id="producer-password"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Enter your password"
              />
            </div>
            <button 
              className="w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-500"
              onClick={() => toggleFormState("producer")}
            >
              <FaLock className="mr-2 inline" />
              {producerState === "login" ? "Login" : "Sign Up"}
            </button>
            <p 
              className="text-sm text-black mt-4 cursor-pointer"
              onClick={() => toggleFormState("producer")}
            >
              {producerState === "login" ? "Not having an account? Click here to register" : "Already have an account? Click here to login"}
            </p>
          </div>

          {/* Distributor Form */}
          <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-green-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <FaTruck className="text-4xl mb-4 text-green-600" />
            <h2 className="text-xl font-semibold mb-4 text-green-800">Distributor</h2>
            <div className="w-full mb-4">
              <label htmlFor="distributor-email" className="block text-sm font-medium text-black mb-2">Email</label>
              <input
                type="email"
                id="distributor-email"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Enter your email"
              />
            </div>
            {distributorState === "signup" && (
              <div className="w-full mb-4">
                <label htmlFor="distributor-username" className="block text-sm font-medium text-black mb-2">Username</label>
                <input
                  type="text"
                  id="distributor-username"
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter your username"
                />
              </div>
            )}
            <div className="w-full mb-4">
              <label htmlFor="distributor-password" className="block text-sm font-medium text-black mb-2">Password</label>
              <input
                type="password"
                id="distributor-password"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Enter your password"
              />
            </div>
            <button 
              className="w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-500"
              onClick={() => toggleFormState("distributor")}
            >
              <FaLock className="mr-2 inline" />
              {distributorState === "login" ? "Login" : "Sign Up"}
            </button>
            <p 
              className="text-sm text-black mt-4 cursor-pointer"
              onClick={() => toggleFormState("distributor")}
            >
              {distributorState === "login" ? "Not having an account? Click here to register" : "Already have an account? Click here to login"}
            </p>
          </div>

          {/* Retailer Form */}
          <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-green-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <FaHotel className="text-4xl mb-4 text-green-600" />
            <h2 className="text-xl font-semibold mb-4 text-green-800">Retailer</h2>
            <div className="w-full mb-4">
              <label htmlFor="retailer-email" className="block text-sm font-medium text-black mb-2">Email</label>
              <input
                type="email"
                id="retailer-email"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Enter your email"
              />
            </div>
            {retailerState === "signup" && (
              <div className="w-full mb-4">
                <label htmlFor="retailer-username" className="block text-sm font-medium text-black mb-2">Username</label>
                <input
                  type="text"
                  id="retailer-username"
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter your username"
                />
              </div>
            )}
            <div className="w-full mb-4">
              <label htmlFor="retailer-password" className="block text-sm font-medium text-black mb-2">Password</label>
              <input
                type="password"
                id="retailer-password"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Enter your password"
              />
            </div>
            <button 
              className="w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-500"
              onClick={() => toggleFormState("retailer")}
            >
              <FaLock className="mr-2 inline" />
              {retailerState === "login" ? "Login" : "Sign Up"}
            </button>
            <p 
              className="text-sm text-black mt-4 cursor-pointer"
              onClick={() => toggleFormState("retailer")}
            >
              {retailerState === "login" ? "Not having an account? Click here to register" : "Already have an account? Click here to login"}
            </p>
          </div>

          {/* Consumer Form */}
          <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-green-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <FaPersonCircleCheck className="text-4xl mb-4 text-green-600" />
            <h2 className="text-xl font-semibold mb-4 text-green-800">Consumer</h2>
            <div className="w-full mb-4">
              <label htmlFor="consumer-email" className="block text-sm font-medium text-black mb-2">Email</label>
              <input
                type="email"
                id="consumer-email"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Enter your email"
              />
            </div>
            {consumerState === "signup" && (
              <div className="w-full mb-4">
                <label htmlFor="consumer-username" className="block text-sm font-medium text-black mb-2">Username</label>
                <input
                  type="text"
                  id="consumer-username"
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter your username"
                />
              </div>
            )}
            <div className="w-full mb-4">
              <label htmlFor="consumer-password" className="block text-sm font-medium text-black mb-2">Password</label>
              <input
                type="password"
                id="consumer-password"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Enter your password"
              />
            </div>
            <button 
              className="w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-500"
              onClick={() => toggleFormState("consumer")}
            >
              <FaLock className="mr-2 inline" />
              {consumerState === "login" ? "Login" : "Sign Up"}
            </button>
            <p 
              className="text-sm text-black mt-4 cursor-pointer"
              onClick={() => toggleFormState("consumer")}
            >
              {consumerState === "login" ? "Not having an account? Click here to register" : "Already have an account? Click here to login"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

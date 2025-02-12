import React from "react";

const Edit = () => {
  return (
    <div>
      <div className="min-h-screen bg-blue-100 p-4">
        <div className="text-center text-3xl block ">
          <h1 className="">Update</h1>
        </div>
        <div className="grid grid-cols-2 mt-5 p-4">
          <div className="flex justify-center items-center">
            <form className="bg-white p-6 rounded-lg shadow-md w-96">
              <label className="block mb-2 text-gray-700">Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
              />

              <label className="block mt-4 mb-2 text-gray-700">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
              />

              <label className="block mt-4 mb-2 text-gray-700">Message</label>
              <input
                type="number"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your age"
              />

              <button
                type="submit"
                className="mt-4 w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;

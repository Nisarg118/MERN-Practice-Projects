import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState({
    name: "",
    email: "",
    age: "",
  });
  const getAllData = async () => {
    const res = await axios.get("http://localhost:8000/api/v1/users");
    console.log(res);
    setUsers(res.data);
  };

  useEffect(() => {
    getAllData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    fetch("http://localhost:8000/api/v1/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: input,
    })
      .then((response) => response.json())
      .then((data) => console.log("Success:", data))
      .catch((error) => console.error("Error:", error));
  };

  console.log(input);
  return (
    <div>
      <div className="min-h-screen bg-blue-100 p-4">
        <div className="text-center text-3xl block ">
          <h1 className="">MERN CRUD App</h1>
        </div>
        <div className="grid grid-cols-2 mt-5 p-4">
          <div className="flex justify-center items-center">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-lg shadow-md w-96"
            >
              <label className="block mb-2 text-gray-700">Name</label>
              <input
                name="name"
                value={input.name}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: [e.target.value] })
                }
                type="text"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
              />

              <label className="block mt-4 mb-2 text-gray-700">Email</label>
              <input
                name="email"
                value={input.email}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: [e.target.value] })
                }
                type="email"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
              />

              <label className="block mt-4 mb-2 text-gray-700">Age</label>
              <input
                name="age"
                value={input.age}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: [e.target.value] })
                }
                type="number"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your age"
              />

              <button
                type="submit"
                className="mt-4 w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="">
            <table className="min-w-full border border-gray-300 bg-white  shadow-md rounded-lg">
              <thead>
                <tr className=" text-gray-700">
                  <th className="px-4 py-2 border">Name</th>
                  <th className="px-4 py-2  border">Email</th>
                  <th className="px-4 py-2 border">Age</th>
                  <th className="px-4 py-2 border">Edit</th>
                  <th className="px-4 py-2 border">Delete</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map((user) => (
                    <tr key={user._id}>
                      <td className="px-4 py-2 border ">{user.name}</td>
                      <td className="px-4 py-2 border">{user.email}</td>
                      <td className="px-4 py-2 border">{user.age}</td>
                      <td className="px-4 py-2 border">
                        <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg">
                          Edit
                        </button>
                      </td>
                      <td className="px-4 py-2 border">
                        <button className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600 ">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

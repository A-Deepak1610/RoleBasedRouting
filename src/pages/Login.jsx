import React, { useEffect, useState } from "react";
import UserDetails from '../store/Store'
import { useNavigate } from "react-router-dom";
export default function Login() {
  const {user,login}=UserDetails();
  const [username, setUsername] = React.useState("");
  const [invaild,setInvalid]=useState("")
  const navigate = useNavigate();
  useEffect(()=>{alert("Email:anyemail\nUserid=student or admin or faculty")},[]);
  function handlesumbit(event){
    event.preventDefault()
    login(username)
    if (username.toLowerCase().includes("student")) {
      navigate("/RoleBasedRouting/student");
    } else if (username.toLowerCase().includes("faculty")) {
      navigate("/RoleBasedRouting/faculty");
    } else if (username.toLowerCase().includes("admin")) {
      navigate("/RoleBasedRouting/admin");
    } else {
      setInvalid("Invalid userid")
    }
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-80">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">
          Login
        </h2>

        <form className="flex flex-col" onSubmit={handlesumbit}>
          <label className="text-gray-600 text-sm mb-1" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3"
            type="email"
            id="email"
            placeholder="Enter email"
            required
          />

          <label className="text-gray-600 text-sm mb-1" htmlFor="username">
            Userid
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3"
            type="text"
            id="username"
            placeholder="Enter userid"
            onChange={(e)=>{setUsername(e.target.value)}}
            required
          />
          <p className="text-[red] text-center">{invaild}</p>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200 mt-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

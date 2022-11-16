import React, { useState } from "react";
import login from "../assets/login1.jpg";
import { toast } from "react-toastify";

const Registers = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dateofBirth: "",
    course: "",
    userId: "",
  });

  function handleOnChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !state.firstName ||
      !state.lastName ||
      !state.course ||
      !state.dateofBirth ||
      !state.userId ||
      !state.email
    ) {
      return toast.error("all fields are required");
    }
    console.log("values:", state);
    toast.success("details captured successfully");
    return setState({
      ...state,
      firstName: "",
      lastName: "",
      email: "",
      dateofBirth: "",
      course: "",
      userId: "",
    });
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen w-full">
      <div className="hidden md:block">
        <img
          className="h-screen w-full object-cover"
          src={login}
          alt="login_image"
        />
      </div>
      <div className="bg-orange-300 flex flex-col justify-center text-white">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="max-w-2xl mx-auto w-full bg-orange-400 p-14 px-8 rounded-lg"
        >
          <h2 className="text-4xl  font-bold text-center p-4">SIGNUP</h2>
          <div className="flex flex-col py-2">
            <label>First Name</label>
            <input
              className="rounded-lg text-black bg-orange-200  mt-2 p-2 focus:border-blue-300 focus:outline-none focus:bg-orange-500 "
              type="text"
              name="firstName"
              value={state.firstName}
              onChange={(e) => handleOnChange(e)}
            />
            <label>Last Name</label>
            <input
              className="rounded-lg text-black bg-orange-200  mt-2 p-2 focus:border-blue-300 focus:outline-none focus:bg-orange-500 "
              type="text"
              name="lastName"
              value={state.lastName}
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          <div className="flex flex-col py-2">
            <label>Email</label>
            <input
              className="rounded-lg text-black bg-orange-200  mt-2 p-2 focus:border-blue-300 focus:outline-none focus:bg-orange-500"
              type="text"
              name="email"
              value={state.email}
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          <div className="flex flex-col py-2">
            <label>ID</label>
            <input
              className="rounded-lg text-black bg-orange-200  mt-2 p-2 focus:border-blue-300 focus:outline-none focus:bg-orange-500 "
              type="number"
              name="userId"
              value={state.userId}
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          <div className="flex flex-col py-2">
            <label>Date of Birth</label>
            <input
              className="rounded-lg bg-orange-200  mt-2 p-2 focus:border-blue-300 focus:outline-none focus:bg-orange-500  text-black"
              type="date"
              name="dateofBirth"
              value={state.dateofBirth}
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          <div className="flex flex-col py-2">
            <label>Course</label>
            <input
              className="rounded-lg bg-orange-200 text-black  mt-2 p-2 focus:border-blue-300 focus:outline-none focus:bg-orange-500 "
              type="text"
              name="course"
              value={state.course}
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-white text-orange-500 text-lg font-semibold w-[300px] p-4 mt-6 rounded-full"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registers;

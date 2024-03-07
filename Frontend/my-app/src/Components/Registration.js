import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
function Registration() {
  const location = useLocation();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    image: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const submitimage = async () => {
    console.log("Hello");
    const data = new FormData();
    data.append("file", input.image);
    data.append("upload_preset", "oe4ydhpr");
    data.append("cloud_name", "dkrfns5c9");

    fetch(`https://api.cloudinary.com/v1_1/dkrfns5c9/image/upload`, {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.secure_url);
        setInput((prevInput) => ({ ...prevInput, image: res.secure_url }));
      })
      .catch((err) => console.log(err));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        (input && input.email.length === 0) ||
        input.password.length === 0 ||
        input.username.length === 0
      ) {
        alert("Enter the password and email");
        return;
      }

      await submitimage(); // Wait for image upload to complete

      const { data } = await axios.post(
        "http://localhost:8001/api/v1/users/register",
        {
          email: input.email,
          password: input.password,
          username: input.username,
          image: input.image,
        }
      );

      if (data.success === true) {
        alert("Registration Successful");
        console.log(data.image);
        console.log("Data is ", data);
        navigate("/login", { state: { myimage: data.user.image } });
      } else {
        alert(data.message); // Display the error message from the server
      }
    } catch (err) {
      if (err.response) {
        const status = err.response.status;
        const message = err.response.data.message;

        if (status === 401) {
          // Unauthorized - Invalid credentials
          alert(message || "Invalid username or password");
        } else if (status === 500) {
          // Internal Server Error
          alert("Server error. Please try again later.");
        } else {
          // Other status codes
          alert(`Error: ${status} - ${message}`);
        }
      } else if (err.request) {
        // The request was made but no response was received
        console.error("No response from server");
        alert("No response from server");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error:", err.message);
        alert("Error:", err.message);
      }
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"></div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Upload an Image
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) =>
                    setInput({ ...input, image: e.target.files[0] })
                  }
                  id="image"
                  name="image"
                  type="file"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  value={input.username}
                  onChange={(e) => handleChange(e)}
                  id="username"
                  name="username"
                  type="username"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  value={input.email}
                  onChange={(e) => handleChange(e)}
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  value={input.password}
                  onChange={(e) => handleChange(e)}
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
               
                className="mt-6 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={(e) => handleSubmit(e)}
              >
                Sign Up
              </button>
            </div>

            <NavLink to={"/login"}>
              <button className="mt-10  text-center text-sm text-gray-500">
                Already a member ? Login{" "}
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;

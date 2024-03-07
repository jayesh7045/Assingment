import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/store";
import toast from "react-hot-toast";

function Navbar({image}) {
  const isLogin = useSelector((state) => state.isLogin) || localStorage.getItem("userId");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState();
  console.log(image)
  const handleLogout = () => {
    
    try {
      dispatch(authActions.logout());
      toast.success("Logout Successfully");
      navigate("/login");
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-blue-500">
      <header className="text-black body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <NavLink to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">Blog App</span>
          </NavLink>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-5">
            {isLogin ? (
              <>
                {image && <img src={image} className="object-contain w-[6rem] rounded-3xl"  alt="" />}
                <NavLink to="/myblog">
                  <span className="mr-5 hover:text-gray-900 font-semibold text-xl">
                    My Blogs
                  </span>
                </NavLink>
                <NavLink to="/createblog">
                  <span className="mr-5 hover:text-gray-900 font-semibold text-xl">
                    Create Blog
                  </span>
                </NavLink>
                <button onClick={handleLogout} className="mr-5 hover:text-gray-900 font-semibold text-xl">
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login">
                  <span className="mr-5 hover:text-gray-900 font-semibold text-xl">
                    Login
                  </span>
                </NavLink>
                <NavLink to="/signup">
                  <span className="mr-5 hover:text-gray-900 font-semibold text-xl">
                    Sign up
                  </span>
                </NavLink>
              </>
            )}
          </nav>
          <NavLink to="/">
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Explore All
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </NavLink>
        </div>
      </header>
    </div>
  );
}

export default Navbar;

import React from "react";
import styles from "../assets/Styles/registration.css"
import { Link } from "react-router-dom";
function TempRegistration() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-scree">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Hello Again !</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Explore More by connecting with us
            </span>
          </div>
          <form className="py-1">
            <div className="profile flex justify-center py-4">
              <img src="" alt="avatar" />
            </div>
            <div className="textbox flex flex-col items-center gap-6">
              <input type="text " placeholder="Username" />
              <button type="submit">Let's Go</button>
            </div>
            <div className="text-center py-4">
                <span className="text-gray-500">Not a member <Link className="text-red-500" path="/temp">Register Now</Link></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TempRegistration;

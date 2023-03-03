import React from "react";
import { useRouteError } from "react-router-dom";
import bg from "../Images/back.jpg";

function NotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex justify-center items-center w-screen h-screen "
    >
      <div className="text-center">
        <img src={bg} alt="123" className="w-full h-full" />
        <h1 className="text-3xl m-2 font-semibold">Oops!</h1>
        <p className=" m-2">Sorry, the page your seraching is not exist.</p>
        <p className="text-gray-600 italic">
          {error.statusText || error.message}
        </p>
      </div>
    </div>
  );
}

export default NotFound;

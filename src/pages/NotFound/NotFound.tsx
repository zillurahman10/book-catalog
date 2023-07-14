import React from "react";
import notFound from "../../assets/notFound.gif";

const NotFound = () => {
  return (
    <div>
      <img className="flex justify-center" src={notFound} alt="" />
    </div>
  );
};

export default NotFound;

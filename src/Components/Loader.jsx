import React from "react";
import "./Loader.css";

const Loader = () => {
    return (
        <div className="flex items-center flex-col space-y-2 mt-4">
            <div className="custom-loader"></div>
            <p className="text-3xl  px-2 text-bgDark font-bold">Loading.....</p>
        </div>
    );
};

export default Loader;

import React from "react";

function Button({ children }) {
  return (
    <div>
      <button className="border md:py-3 py-2 md:px-8 px-4 font-semibold cursor-pointer rounded-sm">
        {children}
      </button>
    </div>
  );
}

export default Button;

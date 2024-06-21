import React from "react";

function Button({ children }) {
  return (
    <div>
      <button className="border py-2 px-6 font-semibold mx-12">
        {children}
      </button>
    </div>
  );
}

export default Button;

import React from "react";

export default function Button({ children, className = "", onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className={`w-fit px-6 py-4 text-center text-canvas bg-primary rounded-full cursor-pointer hover:bg-primary-focus ${className}`}
      >
        {children}
      </button>
    </>
  );
}

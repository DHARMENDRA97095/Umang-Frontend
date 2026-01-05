import React from "react";
import Button from "./Button";

const Form = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted 🚀");
    onClose();
  };

  return (
    
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6" >

        {/* Close */}
        <Button
          onClick={() => onClose()}
          className="absolute right-4 top-4 h-9 w-9 rounded-full bg-gray-200 hover:bg-black hover:text-black"
        >
          ✕
        </Button>

        <h1 className="text-2xl font-bold text-center mb-4">Get in Touch</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input className="w-full border p-2 rounded" placeholder="Name" />
          <input className="w-full border p-2 rounded" placeholder="Email" />
          <input className="w-full border p-2 rounded" placeholder="Mobile" />

          <Button className="w-full bg-black text-white hover:bg-black hover:text-black py-2 rounded">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Form;

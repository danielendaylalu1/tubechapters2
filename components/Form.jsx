import React from "react";

const Form = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[600px] min-w-[500px] flex gap-x-4">
        <input
          type="text"
          placeholder="https://www.youtube.com/watch?v="
          className="w-full bg-[#121316]/50 py-4 px-8 border border-white/30 rounded-full outline-none"
        />
        <button
          type="button"
          className="btn py-3 px-8 rounded-full outline-none"
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default Form;
